import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

export const useCollection = (c, _q, _ob) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_q).current;
  const ob = useRef(_ob).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) ref = query(ref, where(...q));
    if (ob) ref = orderBy(ref, where(...ob));

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];

        snapshot.docs.forEach((doc) =>
          results.push({ ...doc.data(), id: doc.id })
        );

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('Could not fetch collection data');
      }
    );

    return () => unsub();
  }, [c, q, ob]);

  return { documents, error };
};
