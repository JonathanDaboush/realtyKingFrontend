import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import { MainShell } from "./components/mainShell.js";
function App() {
  let [content,setContent]=useState(MainShell());
  return (
    
     <div>{content}</div>
  );
}

export default App;

