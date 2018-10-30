const initialState = {
    planet: 'Earth'
};

const myReducer = (state = initialState, action) => {
    if (action.type === "CHANGE_PLANET"){
        return {
            ...state,
            planet: action.planetName
        }
    }
    return state;
};

export default myReducer;