import React, { Component } from 'react'

class Ingredient extends Component {
	render() {
        const { name, color } = this.props.ingredient
		return (
            <p 
                style={{backgroundColor: color}}
                onClick={this.props.clickFunc}
                id={this.props.itemKey}
            >
                {name}
            </p>
        )
	}
}

export default Ingredient