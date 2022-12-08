import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { createFactory, useState } from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const updateList = (updatedList) => {
    setFilteredFoodList(updatedList);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleCalories = (e) => {
    setCalories(e.target.value);
  };
  const handleServings = (e) => {
    setServings(e.target.value);
  };
  const addNewFood = (newFood) => {
    let updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };
  const deleteFood = (foodId) => {
    console.log('1');
    const filteredForDelete = foodList.filter((foodToDel) => {
      return foodToDel.name !== foodId;
    });
    console.log('2');
    setFoodList(filteredForDelete);
    setFilteredFoodList(filteredForDelete);
  };
  return (
    <div className="App">
      <SearchBar foodList={foodList} updateList={updateList} />
      <br />
      <AddFoodForm
        name={name}
        handleName={handleName}
        image={image}
        handleImage={handleImage}
        calories={calories}
        handleCalories={handleCalories}
        servings={servings}
        handleServings={handleServings}
        addNewFood={addNewFood}
      />
      {filteredFoodList.map((food) => {
        return <FoodBox food={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
