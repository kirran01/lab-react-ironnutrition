import React from 'react';
import { useState } from 'react';

const AddFoodForm = (props) => {
  return (
    <div>
      <form>
        <label>name</label>
        <br />
        <input value={props.name} onChange={props.handleName}></input>
        <br />
        <label>img</label>
        <br />
        <input value={props.image} onChange={props.handleImage}></input>
        <br />
        <label>calories</label>
        <br />
        <input value={props.calories} onChange={props.handleCalories}></input>
        <br />
        <label>servings</label>
        <br />
        <input value={props.servings} onChange={props.handleServings}></input>
        <br />
        <button
          type="submit"
          onClick={(e) => {
            console.log('added');
            e.preventDefault();
            props.addNewFood({
              name: props.name,
              calories: props.calories,
              image: props.image,
              servings: props.servings,
            });
          }}
        >
          create
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;
