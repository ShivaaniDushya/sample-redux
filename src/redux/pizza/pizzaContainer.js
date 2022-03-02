import { connect } from 'react-redux';
import React from 'react';
import {buyPizza} from './pizza/action';

function PizzaContainer(props) {
    return(
         <div>
             <h2>Number of pizzas - {props.numOfPizzas}</h2>
             <button onClick={props.buyPizza}>Buy Piza</button>
         </div>   
    );
}

const mapStateToProps = state => ({
    numOfPizzas: state.numOfPizzas
});

const mapDispatchToProps = dispatch => {
    return{
        buyPizza: () => dispatch(buyPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);