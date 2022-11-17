
const CartReducer  = (state, action)  => {
    
    let deep = _.cloneDeep(state.cart);

    switch (action.type) {
        case "addProduct":
            const findProduct = state.cart.find(item => item.id === action.product.id)// Sravnenie est' li tovar v korzine

            if(findProduct){
                findProduct.amount += +action.product.amount
                const products = state.cart.filter(item => item.id !== findProduct.id)
                return {cart: [
                    ...products,
                    findProduct
                ]}
            }

            return {
                cart: [...state.cart,
                     action.product],
            };
        
            case 'incrementProduct':

                return {
                    cart: deep.map(item => {
                        if (item.id === action.id) {
                            item.amount += 1;
                            return item;
                        }
                        return item;
                    })
                }
    
            case 'decrementProduct':

                return {
                    cart: deep.map(item => {
                        if (item.id === action.id) {
                            item.amount > 1 ? item.amount -= 1 : '';
                            return item;
                        }
                        return item;
                    })
                }
            

        case 'removeProduct':
            return{ cart: state.cart.filter(item => item.id !== action.id)}
            
        case 'clearCart':
            return{cart: []}


        default:
            return state.cart;
    }

    


}

export default CartReducer;