import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar';
import { ThemeContext, ThemeProvider } from './context/themeContext';
import './styles/app.css'

// document.querySelector('dark-mode').onClick = ()=>{
//   document.documentElement.classList.toggle('dark')
// }
// document.querySelector('dark-mode-mb').onClick = ()=>{
//   document.documentElement.classList.toggle('dark')
// }

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <body className="bg-white dark:bg-black"> */}

        {/* <div className="mt-20 bg-white dark:bg-black">
      ahad

      </div> */}

  
        <NavBar />

        <App />

      {/* </body> */}

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
