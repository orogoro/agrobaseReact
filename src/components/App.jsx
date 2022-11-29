import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation, Loader } from './catalog';

const Home = lazy(() => import('../pages/homePage/HomePage'));
const Insects = lazy(() => import('../pages/insectsPage/InsectsPage'));
const Weeds = lazy(() => import('../pages/weedsPage/WeedsPage'));
const Diseases = lazy(() => import('../pages/diseasesPage/DiseasesPage'));
const Product = lazy(() => import('../pages/productPage/ProductPage'));
const Catalogs = lazy(() => import('../pages/catalogsPage/CatalogsPage'));
const InsectManual = lazy(() =>
  import('./catalog/insects/insectManual/InsectManual')
);
const WeedsManual = lazy(() =>
  import('./catalog/weeds/weedsManual/WeedsManual')
);
const DiseasesManual = lazy(() =>
  import('./catalog/diseases/diseasesManual/DiseasesManual')
);
const PesticidesManual = lazy(() =>
  import('./catalog/pesticides/pesticidesManual/PesticidesManual')
);

export const App = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="Catalogs" element={<Catalogs />} />
          <Route path="Insects/:idItem" element={<Insects />}>
            <Route path=":itemName" element={<InsectManual />} />
          </Route>
          <Route path="Weeds/:idItem" element={<Weeds />}>
            <Route path=":itemName" element={<WeedsManual />} />
          </Route>
          <Route path="Diseases/:idItem" element={<Diseases />}>
            <Route path=":itemName" element={<DiseasesManual />} />
          </Route>
          <Route path="Pesticides/:idItem" element={<Product />}>
            <Route path=":itemName" element={<PesticidesManual />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
