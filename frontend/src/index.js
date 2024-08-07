import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Notes from './Components/notes'

axios.defaults.baseURL = 'http://localhost:5000/data/'





const App = () => {
  return(
    <div>
      <h1> Hello World !!</h1>
      <Notes />
    </div>
  )
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);

