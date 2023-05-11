import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './components/Sobre';
import Contatos from './components/Contatos';
import Portifolio from './components/Portifolio';
import NotFound from './components/NotFound';
import PageLayout from './components/layouts/PageLayout';

const App = () => {
  return(
    <>
      <Header />
      <main>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='/Sobre' element={<Sobre/>}/>
              <Route path='/Contatos' element={<Contatos/>}/>
              <Route path='/Portifolio' element={<Portifolio/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
        
      </main>
    </>
  );
}

export default App;
