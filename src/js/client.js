import { createStore } from 'redux';

// DUBER POS
// create a browse component that loads in the ProductStore to get content
/*
 BrowseComponent
 - Object.assign({}, { category, searchQuery, products
 }) 

*/
/*
 ProductStore.json
 - categories [""]
 - products {}
*/
// browse for products with one component, then add to "cart component"
/*
OrderComponent
- products
-> category
-> cbd
-> thc
each product has category limit
- categories []
-> category
	limit
	sum
*/

// reducers for 
const reducer = function(state, action) { // function that alters state from previous state
	if(action.type.toLowerCase() === "str") {
		return Object.assign({}, state, { str: action.payload })			
	}			
	if(action.type === "INC") {		
		return Object.assign({}, state, { int: state.int + action.payload})
	}
	if(action.type === "DEC") {
		return Object.assign({}, state, { int: state.int - action.payload})
	}
	return state;
};

var initialState = { int: 1, str: "" };
const store = createStore(reducer, initialState); // store is like aggregate 

store.subscribe(()=> { // go down and uddate views?
	console.log("store changed", store.getState())
})

// UI events
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "INC", payload: 4})
store.dispatch({type: "str", payload: "hey"});

