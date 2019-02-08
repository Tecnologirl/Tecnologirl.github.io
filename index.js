import React from 'react' //  crea componentes
import ReactDom from 'react-dom' // renderiza en el navegador

//  console.log('Hola mundo!')

const app = document.getElementsById('app')

const holaMundo = <h1>Hola mundo</h1>

//  ReactDom.render(que se va a renderizar, donde se va a renderizar);
ReactDom.render(holaMundo, app)
