import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import EditPage from './pages/Edit';
function App() {
  return (
    <div className="flex-wrap">
      <h1 style={{fontFamily:'monospace',textAlign:"center"}}>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/edit' element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
