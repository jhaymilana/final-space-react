import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './components/Characters';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header title='Final Space'/>
    <main>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Characters />}/>
          <Route exact path="info/:characterID" element={<Info />} />
        </Routes>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
