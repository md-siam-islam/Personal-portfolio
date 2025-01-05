import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import HOme from './Home/HOme.jsx';
import Visadesk from './WorldvisaDesk/Visadesk.jsx';
import Book from './Booklibery/Book.jsx';
import Vocabulary from './Navbar/VocabularySection/Vocabulary.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<HOme></HOme>
      },
      {
        path:'/visa',
        element:<Visadesk></Visadesk>
      },
      {
        path:'/book',
        element:<Book></Book>
      },
      {
        path:'/vocabulary',
        element:<Vocabulary></Vocabulary>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className='bg-slate-900'>
    <div className='font-font1'>

  <RouterProvider router={router} />
    </div>
    </div>
    
  </StrictMode>,
)
