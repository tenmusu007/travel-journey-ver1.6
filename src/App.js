import React from 'react';
import {Header} from "./components/Header.js"
import Card  from './components/Card.js';
import { data } from './data.js';
// import cards
import './scss/App.scss';
export function App(){
  return (
    <div>
      <Header />
      <Card 
      atsu = {data}/>
    </div>
  );
}


export default App;
