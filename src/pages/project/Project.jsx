import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ProjectSummary from './ProjectSummary';
import ProjectComments from './ProjectComments';

// styles
import './Project.css';

export default function Project() {
  const { id } = useParams();
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(db, 'projects', id);
    const unsub = onSnapshot(
      docRef,
      (doc) => {
        if (doc.data()) {
          setDocument({ ...doc.data(), id: doc.id });
          setError(null);
        } else setError('Document does not exist');
      },
      (error) => {
        console.log(error.message);
        setError('Could not get document data');
      }
    );
    return () => unsub();
  }, [id]);

  if (error) return <div className="error">{error}</div>;

  if (!document) return <div className="loading">Loading...</div>;

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
