import React, { lazy, Suspense } from "react";

const LazyAppBar = lazy(() => import("."));

const AppBar = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAppBar title={undefined} {...props} />
  </Suspense>
);

export default AppBar;
