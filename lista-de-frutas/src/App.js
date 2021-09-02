import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const TotalPrice = () => {
    const sumPrices = fruits.reduce((acc, currentValue) => {
      return acc + currentValue.price;
    }, 0);

    return <h1>Total price: {sumPrices}</h1>;
  };

  function filterRedFruits() {
    setFruits(
      fruits.filter((fruit) => {
        return fruit.color === "red";
      })
    );
  }

  const fruitsMap = fruits.map((fruit) => {
    return <li className="li">{fruit.name}</li>;
  });

  return (
    <div className="App">
      <div className="App-header">
        <div className="container"> 
          <TotalPrice />
          <ul>{fruitsMap}</ul>
          <button onClick={filterRedFruits} className="button" >Show fruits red</button>
        </div>
      </div>
    </div>
  );
}

export default App;
