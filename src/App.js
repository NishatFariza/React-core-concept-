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
  const nayoks = ['Shakib', 'BappaDa', 'Kuber', 'Joshim', 'Shalman Shah', 'Riayaj', 'Razzak'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        nayoks.map(nayok => <person name= {nayok}></person>)
      }
    {/* <Person name={nayoks[0]} partner="Nishat"></Person>
    <Person name={nayoks[1]} partner='seja'></Person>
    <Person name={nayoks[2]} partner='kopila'></Person>
    <Person></Person> */}
    <h4>New Component : YEYYYY</h4>
    <p id='newcomponent'>This is new component</p>
    <Friend movies='Shingam' phone='0177777'></Friend>
    <Friend phone='0183333'></Friend>
    <Friend phone='0140000'></Friend>
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

function Friend (props){
  return (
    <div className='container'>
      <h1>Name: {props.movies}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
