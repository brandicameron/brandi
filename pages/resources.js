import styles from '../styles/resouces/Resources.module.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, onSnapshot, orderBy } from 'firebase/firestore';
import ResourceCard from '../components/resources/ResourceCard';
import AddCategoryForm from '../components/resources/AddCategoryForm';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '../hooks/useUser';

export default function Resources({ resources }) {
  const [data, setData] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const { loggedIn } = useUser();

  useEffect(() => {
    if (resources) {
      setData(resources);
    }
  }, []);

  useEffect(() => {
    // realtime listener
    const collRef = collection(db, 'Resources');
    const q = query(collRef, orderBy('category'));

    const unsub = onSnapshot(q, (snapshot) => {
      let tempData = [];
      snapshot.docs.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setData(tempData);
    });

    return () => unsub();
  }, []);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <h1 className={styles.heading}>Resources</h1>
      <section className={styles.container}>
        {data && data.map((section) => <ResourceCard key={uuidv4()} section={section} />)}
        {loggedIn && (
          <div className={styles.addCategory}>
            <button
              title='Add New Category'
              className={styles.addCategoryBtn}
              aria-label='Add a new category.'
              onClick={handleOpenForm}
            >
              +
            </button>
            {openForm && <AddCategoryForm openForm={openForm} setOpenForm={setOpenForm} />}
          </div>
        )}
      </section>
    </>
  );
}

export async function getStaticProps() {
  let resources = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'Resources'));
    querySnapshot.forEach((doc) => {
      resources.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      resources: JSON.parse(JSON.stringify(resources)),
    },
  };
}
