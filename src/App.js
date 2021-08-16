
import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name} lord</h1>
    </header>
  );
}

function Main(props){
  return (
    <section>
      <p>I'm {props.adjective}.</p>
      <ul>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer (props) {
  return(
  <p>I'm really cool on this year: {props.year}</p>
  );
}

const dishes = [
  "macoroni",
  "donkey meat",
  "gross stuff"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));

dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header  name="Ben"/>
      <Main adjective="whatever" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
