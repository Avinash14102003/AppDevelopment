import './App.css';
import Login from './Component/forms/login';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Form from './Component/forms/register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='signup' element={<Form></Form>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
