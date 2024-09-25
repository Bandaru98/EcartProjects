import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routing from './Routing/Routing';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routing/>
      <Footer/>
      <ToastContainer  
      position="top-center"
      autoClose={1000}
      />
    </div>
  );
}

export default App;
