
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header">

      
        
        <h1>
         Weather react app
        </h1>
      <Weather/>
      </header>
      <footer>
      This project was coded by Olena Berezina and is open-sourced on  {" "}  
         <a
          className="App-link"
          href="https://github.com/farfalina1908/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         GitHub 
        </a>
        {" "}  and hosted on  {" "}  
        <a
          className="App-link"
          href="https://enchanting-dango-f50e89.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
         Netlify 
        </a>
      </footer>
      </div>
    </div>
  );
}


