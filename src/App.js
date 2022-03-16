import logo from './logo.svg';
import './App.css';


const number = 5555;
const doctor = {name:'Dr Asif', job:'Doctor'}
const doctor2 = {name:'Dr Dina', job:'Doctor'}

const singerStyle = {
  color:'purple',
  backgroundColor:'lightblue'
}
function App() {
  return (
    <div className="App">
    <Person name="Shakib" partner="Nishat"></Person>
    <Person name="BappaRaj" partner='seja'></Person>
    <Person name='kuber' partner='kopila'></Person>
    <Person></Person>
    <h4>New Component : YEYYYY</h4>
    <p id='newcomponent'>This is new component</p>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
    </div>
  );
}
function Person (props){
  // console.log(props);
  return (
    <div className='person'>
        <h1>{props.name}</h1>
        <p>Partner: {props.partner}</p>
  </div>
  )
}

function Friend (){
  return (
    <div className='container'>
      <h1>Name: Sajid</h1>
      <p>Job: Web Devloper</p>
    </div>
  )
}

export default App;
