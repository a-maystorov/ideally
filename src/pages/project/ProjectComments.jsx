// hooks
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

// firebase
import { doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

// components
import Avatar from '../../components/Avatar';

// utils
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function ProjectComments({ project }) {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, 'projects', project.id);

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDoc(docRef, {
      comments: [...project.comments, commentToAdd],
    });

    setNewComment('');
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
