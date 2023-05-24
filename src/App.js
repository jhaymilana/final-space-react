import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Info from './components/Info';
import Form from './components/Form';
import Footer from './components/Footer';
import Error404 from './components/Error404';

function App() {
  return (
    <>
    <Header />
    <main>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Catalog />}/>
          <Route exact path='info/:characterID' element={<Info />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
