import Header from './components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
     
      <Header/>
      <main className='pt-16 bg-slate-100 h-[calc(100vh)] h-full'>
        
        <Outlet/>
        
      </main>
    </div>
   
   
  );
}

export default App;
