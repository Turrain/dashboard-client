// import simpleRestProvider from "ra-data-simple-rest";

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );

import jsonServerProvider from 'ra-data-json-server';
export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_SIMPLE_REST_URL
);