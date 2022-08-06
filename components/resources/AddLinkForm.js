import styles from '../../styles/resouces/AddLinkForm.module.css';
import { useState, useEffect, useRef } from 'react';
import { useAddLink } from '../../hooks/useAddLink';

export default function AddLinkForm({ openForm, section, setOpenForm }) {
  const [data, setData] = useState({});
  const focusInput = useRef();
  const { addLink } = useAddLink();

  useEffect(() => {
    if (openForm && focusInput.current) {
      focusInput.current.focus();
    }
  }, [openForm]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const targetCategory = e.target.dataset.category;
    addLink(targetCategory, data);
    setData({});
    setOpenForm(false);
  };

  const handleCloseButton = () => {
    setOpenForm(false);
    setData({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} data-category={section.id}>
      <button
        className={styles.closeButton}
        type='button'
        aria-label='Close'
        onClick={handleCloseButton}
      >
        X
      </button>
      <label>
        Title
        <input
          type='text'
          name='title'
          ref={focusInput}
          value={data.title || ''}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Url
        <input type='text' name='href' value={data.href || ''} onChange={handleOnChange} />
      </label>
      {
        <button className={styles.addButton} aria-label='Submit' type='submit'>
          Add link
        </button>
      }
    </form>
  );
}
