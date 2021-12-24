import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className='bg p-0'>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
