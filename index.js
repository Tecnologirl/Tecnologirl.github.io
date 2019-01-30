import React from 'react';
import ReactDom from'react-dom';

//console.log('Hola mundo!')

const app = document.getElementsById('app');

const holaMundo = <h1>Hola mundo<h1>;

//ReactDom.render(que se va a renderizar, donde se va a renderizar);
ReactDom.render(holaMundo,app);

