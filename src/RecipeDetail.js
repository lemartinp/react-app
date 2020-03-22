import React from 'react';
import './App.css';

const RecipeDetail = ({ match, location}) => {
    return(
        <div>
            <h1> Details for {match.params.id}</h1>
            <img src={location.state.image} alt="Idk"/>
        </div>
    );
};

export default RecipeDetail;
