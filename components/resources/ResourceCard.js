import styles from '../../styles/resouces/ResourceCard.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDeleteLink } from '../../hooks/useDeleteLink';
import { useDeleteCategory } from '../../hooks/useDeleteCategory';
import { useUser } from '../../hooks/useUser';
import AddLinkForm from './AddLinkForm';

export default function ResourceCard({ section }) {
  const [openForm, setOpenForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const { deleteLink } = useDeleteLink();
  const { deleteCategory } = useDeleteCategory();
  const { loggedIn } = useUser();

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleShowDelete = () => {
    setShowDelete((prev) => !prev);
  };

  const handleLinkDelete = (e) => {
    const targetCategory = e.target.dataset.category;
    const link = { title: e.target.dataset.title, href: e.target.dataset.href };
    deleteLink(targetCategory, link);
  };

  const handleCategoryDelete = (e) => {
    const targetCategory = e.target.dataset.category;
    deleteCategory(targetCategory);
  };

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <h2>
          {showDelete && (
            <button
              data-category={section.id}
              className={styles.deleteButton}
              aria-label='Delete'
              onClick={handleCategoryDelete}
            ></button>
          )}
          {section.category}
        </h2>
        {loggedIn && (
          <button
            className={styles.editButton}
            aria-label='Edit'
            title='Edit'
            onClick={handleShowDelete}
          ></button>
        )}
      </header>
      <ul className={section.links && section.links.length > 6 ? `${styles.columns}` : ''}>
        {section.links &&
          section.links.map((link) => (
            <li key={uuidv4()}>
              {showDelete && (
                <button
                  data-category={section.id}
                  data-title={link.title}
                  data-href={link.href}
                  className={styles.deleteButton}
                  aria-label='Delete'
                  onClick={handleLinkDelete}
                ></button>
              )}
              <a target='_blank' rel='noreferrer noopener' href={link.href}>
                {link.title}
              </a>
            </li>
          ))}
      </ul>
      {loggedIn && (
        <button
          title='Add New Link'
          onClick={handleOpenForm}
          className={styles.addButton}
          aria-label='Add a new link.'
        >
          +
        </button>
      )}
      {openForm && <AddLinkForm openForm={openForm} setOpenForm={setOpenForm} section={section} />}
    </article>
  );
}
