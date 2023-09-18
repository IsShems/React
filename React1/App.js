import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



function App() {
  let [arr, setArr] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setArr(data))
  })
  let [name, setName] = useState('Taleh')

//   const handleClick = () => {
//     let i = info[info.length - 1] + 1;
//     let newArr = [...info, i];
//     setInfo(newArr);
//   }

  return (
    <div className="App">
      {arr.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <p>{name}</p>
      <Header name={name} setName={setName}/>
      <Main/>
      <Footer footerText='Footer'/>
    </div>
  );
}



export default App;


