import React from 'react'
// import ReactDOM from 'react-dom' : Elimina el import y el archivo data.js. A partir de ahora ya no lo utilizaremos.
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App />
)