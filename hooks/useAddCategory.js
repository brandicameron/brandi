import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export function useAddCategory() {
  const addCategory = async (category) => {
    const docRef = await addDoc(collection(db, 'Resources'), {
      category: category,
    });
    console.log('Document written with ID: ', docRef.id);
  };
  return { addCategory };
}
