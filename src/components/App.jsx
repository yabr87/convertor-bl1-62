import { Route, Routes } from 'react-router';
import { lazy } from 'react';
import { Suspense } from 'react';

const Home = lazy(() => import('components/Home'));
const CurrentCurrency = lazy(() => import('components/CurrentCurrency'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>LOADING......</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/currency" element={<CurrentCurrency />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
