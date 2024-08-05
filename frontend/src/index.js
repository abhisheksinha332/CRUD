import React from 'react';
import { createRoot } from 'react-dom/client';


import Notes from './Components/notes'


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

