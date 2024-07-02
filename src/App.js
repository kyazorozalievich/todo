import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Product from './components/Product';

function App() {
  return (
    <div className="">
      <Header/>
     <Routes>
     <Route path='/' element={<ToDoList/>}/>
      <Route path={`/Product`} element={<Product/>}/>
     </Routes>
    </div>
  );
}

export default App;
