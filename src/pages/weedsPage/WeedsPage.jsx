import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Weeds, Loader } from '../../components/catalog';

import styles from './WeedsPage.module.scss';

function WeedsPage() {
  const { itemName } = useParams();

  return (
    <main className={styles.main}>
      {!itemName && <Weeds />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default WeedsPage;
