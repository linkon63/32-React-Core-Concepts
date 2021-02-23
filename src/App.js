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
  
  const productName = productsData.map( product => product.name)
  console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {names.map(name => <li>{name}</li>)}
          {productsData.map( productName => <li>{productName.name }</li>)}
        </ul>
      <Products product = {productsData[0]}></Products> {/*from array*/}

        <Person name='Bootstrap' prof = 'Responsive Style'></Person> {/*Inline Default Value */}
        <Person name = {names[0]} prof = 'Programming'></Person> {/* Data pass to the props from array */}
        <Person name = {names[1]} prof = 'Web Development'></Person> {/* Data pass to the props from array */}
        <Person name = {programmingName.name} prof = {programmingName.profession}></Person> {/* Data pass to the props from Obj */}
        <Person name = {names[3]} prof = 'App Builder'></Person>{/**/}
      </header>
    </div>
  );
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

function Products(props) {
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
