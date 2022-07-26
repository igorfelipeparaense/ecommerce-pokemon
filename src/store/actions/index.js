export const getPosts = (data) => {
    return { 
        type:'GET_POSTS',
        data
    }
}

export const addToCart = (data) => {
    return { 
        type:'ADD_TO_CART',
        data
    }
   
}

export const clearCart = (data) => {
    return { 
        type:'CLEAR_CART',
        data
    }
}

export const clearTotal = (data) => {
    return { 
        type:'CLEAR_TOTAL',
        data
    }
}

export const searchPokemon = (data) => {
    return { 
        type:'SEARCH_POKEMON',
        data
    }
}