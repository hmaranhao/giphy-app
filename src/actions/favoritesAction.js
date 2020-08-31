export const addFavoriteAction = newFavorite => {
    return {
        type: 'ADD_FAVORITE',
        payload: newFavorite
    }
}

export const removeFavoriteAction = removeFavorite => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: removeFavorite
    }
}