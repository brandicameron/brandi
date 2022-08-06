import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export function useDeleteCategory() {
  const deleteCategory = async (categoryID) => {
    try {
      await deleteDoc(doc(db, 'Resources', categoryID));
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteCategory };
}
