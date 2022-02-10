import logo from './logo.svg';
import './App.css';


// class Person {
//   constructor(name) {
//     this.name = name;
//     this.hobby = []
//   }
//   sayHello = () => {
//     console.log('Hi my name is ', this.name, ' and i am', this.race)
//   }
//   race = 'Humane'
//   name;
// }

function App() {
  let text="imgay"
  // function retard(person) {
  //   console.log(person)
  // }
  // function retard2() {
  //   console.log({name:"deine mom", age:69})
  // }
  // console.log(text)
  // text=[{name:"lars", age:124}, {name:"deine mom", age:69}]
  // console.log(text.length) 
  // // for(let i=0; i<=100; i++) {
  // //   // retard(i)
  // // }
  // const retard3=() =>{console.log("cum arrow function")}
  // retard3()

  const person1 = new Person('thorben')
  const person2 = new Person('Tim')

  person1.sayHello()
  person2.sayHello();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
