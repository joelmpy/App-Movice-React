import './App.css';
import Navbar from './components/Navbar';
import Routeur from './routes/Routeur';
import { createContext, useState } from 'react';


export const MovieContext = createContext()

function App() {
// creer un contexte 
const [movieContent, setmovieContent] = useState([])
// usestate vide qu'on modifiera a chaque fois 

  const arrayContext = {
    movieContent, setmovieContent
  }
  return (
    <MovieContext.Provider value={arrayContext}>
    <div>
      <Navbar/>
      <Routeur/>
    </div>
    </MovieContext.Provider>
  );
}

export default App;
