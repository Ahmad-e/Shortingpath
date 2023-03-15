import './App.css';
import Header from  './header';
import Body from './body';
import {setTheme} from './state';
import Down from './down';

function App() {
  setTheme()
  return (
    <div className="App">
      
      <Header />
      <Body />
      <Down />
    </div>
  );
}

export default App;
