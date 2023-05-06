import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Portifolio from './components/Portifolio';
import Sobre from './components/Sobre';
import Contatos from './components/Contatos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

const App = () => {
  return(
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/portifolio' element={<Portifolio />} />
            <Route path='/contatos' element={<Contatos />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
