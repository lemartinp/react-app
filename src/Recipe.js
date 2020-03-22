import React from "react";
import style from "./recipe.module.css"
import {Link} from "react-router-dom";

const Recipe = ({title, calories, image, ingredients}) => {
  return(
      <div className={style.recipe}>
          <Link to={{
              pathname: `/shop/${title}`,
              state: {
                  image: image
              }
          }}>
              <h1>{title}</h1>
          </Link>
          <ol>
              {ingredients.map((ingredient, index) => (
                  <li key={`${index}${ingredient.weight}`}>{ingredient.text}</li>
              ))}
          </ol>
          <p> <b>Calories:</b> {calories}</p>
          <img className={style.image} src={image} alt="Nothing lol"/>
      </div>
  )
};

export default Recipe;
