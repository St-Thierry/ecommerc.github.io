//Add Picks to Cart
export const addCart = (product) => {
	return(
		type : "ADDITEM",
		payload : product
	)
}

//Remove picks from cart
export const remCart = (product) => {
	return(
		type : "DELITEM",
		payload : product
	)
} 