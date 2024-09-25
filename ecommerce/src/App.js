import './App.css';
import Header from './Components/Header/Header';
import Routing from './Routing/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routing />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
