import { db } from '../firebase/config';
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';

export const useDeleteLink = () => {
  const deleteLink = async (category, link) => {
    try {
      const categoryRef = doc(db, 'Resources', `${category}`);
      await updateDoc(categoryRef, {
        links: arrayRemove(link),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteLink };
};
