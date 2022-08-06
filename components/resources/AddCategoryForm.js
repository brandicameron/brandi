import styles from '../../styles/resouces/AddLinkForm.module.css';
import { useState, useEffect, useRef } from 'react';
import { useAddCategory } from '../../hooks/useAddCategory';

export default function AddCategoryForm({ openForm, setOpenForm }) {
  const [category, setCategory] = useState('');
  const focusInput = useRef();
  const { addCategory } = useAddCategory();

  useEffect(() => {
    if (openForm && focusInput.current) {
      focusInput.current.focus();
    }
  }, [openForm]);

  const handleOnChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCategory(category);
    setOpenForm(false);
  };

  const handleCloseButton = () => {
    setOpenForm(false);
    setCategory('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button
        className={styles.closeButton}
        type='button'
        aria-label='Close'
        onClick={handleCloseButton}
      >
        X
      </button>
      <label>
        New Category Name
        <input type='text' ref={focusInput} value={category || ''} onChange={handleOnChange} />
      </label>
      {
        <button className={styles.addButton} aria-label='Submit' type='submit'>
          Add
        </button>
      }
    </form>
  );
}
