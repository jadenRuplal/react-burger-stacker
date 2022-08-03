// import React, { Component } from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
        let allIngredients = props.ingredients.map((ing, idx) => (
            <li key={idx}>
                <Ingredient 
                    ingredient={ing}
                    clickFunc={props.add}
                    itemKey={idx}
                />
            </li>
        ))
		return (
            <>
            <section>
                <h3>Ingredients list</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
            </>
        )
	}


export default IngredientList