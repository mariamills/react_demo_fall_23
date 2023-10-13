import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorNotFound from './components/ErrorNotFound';
import Body from './components/Body';
import IndexRoute from './components/IndexRoute';
import About from './components/About';
import APOD from './components/APOD';
import Mars from './components/Mars';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      { index: true, element: <IndexRoute /> },
      {
        path: 'hooks',
        element: <Body />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'apod',
        element: <APOD />,
      },
      {
        path: 'mars',
        element: <Mars />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
