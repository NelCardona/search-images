//componete se pueda observar
import React from 'react';
//ReacDOM permite que todo se pueda observar
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './src/iput.css';
//import './assets/main.css';
// import './src/tailwind.css';
//import './src/index.css';

//Aquí se importa <App/>
import App from './App';




//ReacDOM tiene dos parámetros--> Que es lo que imprime ReactDOM.render 
//y a Donde lo imprime --> document.getElementById('root')
//   imprime el compone te de App en el id del root--que esta en el HTML
ReactDOM.render(

  <React.StrictMode>
    
    <App />  
  </React.StrictMode>,
  
  document.getElementById('root')
);


