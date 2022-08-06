import { db } from '../firebase/config';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export function useAddLink() {
  const addLink = async (category, data) => {
    const categoryRef = doc(db, 'Resources', `${category}`);
    await updateDoc(categoryRef, {
      links: arrayUnion(data),
    });
  };
  return { addLink };
}
