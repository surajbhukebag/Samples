import {ADD_ITEM, REMOVE_ITEM} from "../actions/index";

// https://github.com/reactjs/react-redux/blob/d5bf492ee35ad1be8ffd5fa6be689cd74df3b41e/src/components/createConnect.js#L91
const initialState = {
        "amt" : 0
};


const items = (state = initialState, action) => {


    switch (action.type) {
        case ADD_ITEM :
              let s = state["amt"];
              if(!state.hasOwnProperty(action.newItem)) {
                  s += Number(action.newItem.split(',')[1].substring(1));
              }
              
           return {
               ...state,
               "amt": s,
               [action.newItem] : action.newItem
           };

        case REMOVE_ITEM :
              let q = state["amt"]-Number(action.removeItem.split(',')[1].substring(1));
              delete state[action.removeItem];
            
            return { ...state,
                    "amt": q
                   };
        default :
            return state;

    }
};

export default items;