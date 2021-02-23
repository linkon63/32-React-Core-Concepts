import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const programmingName = {
    name: 'React',
    profession : 'Build a Application'
  }
  const names = ['C++', 'JS', 'JSX', 'Angular', 'Typescript']
  const productsData = [
    {name: 'Abode PhotoShop', price: '$100'},
    {name: 'Adobe Illistator', price: '$300'},
    {name: 'abode reader', price: '$200'}
  ]
  
  const productName = productsData.map( product => product.name);
  console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        <ul>
          {names.map(name => <li>{name}</li>)}
          {productsData.map( productName => <li>{productName.name }</li>)}
        </ul>  
        {
          productsData.map(pd=> <Product product = {pd}> </Product>)
        }

      <Product product={productsData[0]}></Product>
      <Product product={productsData[1]}></Product>
      <Product product={productsData[2]}></Product>

        <Person name='Bootstrap' prof = 'Responsive Style'></Person> {/*Inline Default Value */}
        <Person name = {names[0]} prof = 'Programming'></Person> {/* Data pass to the props from array */}
        <Person name = {names[1]} prof = 'Web Development'></Person> {/* Data pass to the props from array */}
        <Person name = {programmingName.name} prof = {programmingName.profession}></Person> {/* Data pass to the props from Obj */}
        <Person name = {names[3]} prof = 'App Builder'></Person>{/**/}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => {setCount(count -1 )} }>Decrease</button>
      <button onClick={() => {setCount(count + 1)} }>Increase</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '4px solid white',
    background: 'yellow',
    color: 'green',
    margin: ' 5px',
    width: '400px'
}
  return (
    <div style={personStyle}>
      <h3>Name : {props.name} </h3>  
      <p style={{color:'red'}}>Profession : {props.prof}</p> {/* Inline Comment by JSX*/}
    </div>
  )
}

function Users() {
  const [ users, setUsers] = useState([]);
  useEffect( () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    background: 'red',
    color: 'white',
    width: '200px',
    height: '200px',
    margin: '5px',
    float: 'left'
  }
  const {name , price} = props.product;
  console.log(name, price);

  return(
    <div style = {productStyle}>
        <h4>{name}</h4>
        <h2>{price}</h2>
        <button>Buy Now</button>
    </div>
  )
}

export default App;
