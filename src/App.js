import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import Button from './theme/Button';
import theme from './theme/theme';

function App() {


  const [isDark, setDark] = useState(true)
  const [style, setStyle] = useState(theme.dark)
  const hi = {"height":"100px", "width" : "100px"}
  
  const onClick = () => {
    console.log("Selected " + isDark)
    const sty = isDark ? theme.dark : theme.light;
    setDark(!isDark)
    setStyle(sty)
    console.log("Selected 2" + isDark)
  }

  return (
    <div className="App">
      <header>
         Dark Mode : <input type="radio" name="theme" onChange={onClick}/>
         Light Mode : <input type="radio" name="theme" onChange={onClick}/>
      </header>
        <Button name="Click Me" style={style}/>
    </div>
  );
}

export default App;
