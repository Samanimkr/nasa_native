const initialState = {
    planet: 'Earth'
};

const myReducer = (state = initialState, action) => {
    if (action.type === "CHANGE_PLANET"){
        let newPlanet = action.planetName;
        return {
            ...state,
            planet: newPlanet
        }
    }
    return state;
};

export default myReducer;