
import './App.css';
import SignUp from './components/SignUp';
import Login from './pages/Login';
import Main from './pages/Main';
import { useStateValue } from './StateProvider';


function App() {
  
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? <Login/> : (<Main/>)}
    </div>
  );
}

export default App;
