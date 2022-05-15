import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';

import { db, auth, storage } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) throw new Error('Could not complete signup');

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const imgRef = ref(storage, uploadPath);

      await uploadBytes(imgRef, thumbnail);

      const imgURL = await getDownloadURL(imgRef);

      await updateProfile(res.user, {
        displayName,
        photoURL: imgURL,
      });

      await setDoc(doc(db, 'users', res.user.uid), {
        online: true,
        displayName,
        photoURL: imgURL,
      });

      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
