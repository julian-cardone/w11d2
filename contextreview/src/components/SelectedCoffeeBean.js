import { CoffeeContext } from "../context/CoffeeContext";
import { useContext } from "react";


const SelectedCoffeeBean = () => {
  const {coffeeBean} = useContext(CoffeeContext); // to use context we need to use useContext()
  return (

  <div className="selected-coffee">
    <h2>{coffeeBean.name}</h2>
  </div>);
}

export default SelectedCoffeeBean;