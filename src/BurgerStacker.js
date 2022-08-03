import React, { useState } from "react";
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {
	// state = {
	const	ingredients = [
			{ name: 'Kaiser Bun', color: 'saddlebrown' },
			{ name: 'Sesame Bun', color: 'sandybrown' },
			{ name: 'Gluten Free Bun', color: 'peru' },
			{ name: 'Lettuce Wrap', color: 'olivedrab' },
			{ name: 'Beef Patty', color: '#3F250B' },
			{ name: 'Soy Patty', color: '#3F250B' },
			{ name: 'Black Bean Patty', color: '#3F250B' },
			{ name: 'Chicken Patty', color: 'burlywood' },
			{ name: 'Lettuce', color: 'lawngreen' },
			{ name: 'Tomato', color: 'tomato' },
			{ name: 'Bacon', color: 'maroon' },
			{ name: 'Onion', color: 'lightyellow' },
		]

    const [burgerIngredients, setburgerIngredients] = useState([])
	

	// add to the burger
	const addToStack = (e) => {
		const ingColor = e.target.style.backgroundColor
		const ingName = e.target.innerText
		setburgerIngredients(
            [{ name: ingName, color: ingColor },
				...burgerIngredients,
            ])
	}

	// remove from burger
    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)
        setburgerIngredients(currBurger)
    }

	// clear burger
   const clearBurger = () => {
        setburgerIngredients( [] )
    }


	
		return (
			<>
				<IngredientList
					ingredients={ingredients}
					add={addToStack}
				/>
				<BurgerPane ingredients={burgerIngredients} remove={removeFromStack} clear={clearBurger}/>
			</>
		)
	}


export default BurgerStacker