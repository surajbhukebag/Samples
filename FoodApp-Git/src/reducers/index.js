import {ADD_ITEM, REMOVE_ITEM} from "../actions/index";

// https://github.com/reactjs/react-redux/blob/d5bf492ee35ad1be8ffd5fa6be689cd74df3b41e/src/components/createConnect.js#L91
const initialState = {
        "amt" : 0
};


const items = (state = initialState, action) => {


    switch (action.type) {
        case ADD_ITEM :
              let s = state["amt"];
              let a = action.newItem.substring(0,action.newItem.lastIndexOf(','))

              s += Number(action.newItem.split(',')[1].substring(1));
              if(state.hasOwnProperty(a)) {
                let qty = Number(state[a].split(',')[2])+1;               
                action.newItem = a+","+qty;
              } else {
                
                action.newItem = a+","+1;
              }
              
           return {
               ...state,
               "amt": s,
               [a] : action.newItem
           };

        case REMOVE_ITEM :
              let sa = state["amt"];
              let aa = action.removeItem.substring(0,action.removeItem.lastIndexOf(','));
              let qty = Number(state[aa].split(',')[2]);  
               let q = sa-Number(action.removeItem.split(',')[1].substring(1));
              if(qty == 1) {
                  delete state[aa];
                       return { ...state,
                    "amt": q
                   };
              }
              else {
                    console.log("Sssssss : "+(qty));
                    action.removeItem = aa+","+(qty-1);
                    console.log("sss: "+action.removeItem);
                     return { ...state,
                    "amt": q,
                    [aa]: action.removeItem
                   };

              }
             
              
            
       
        default :
            return state;

    }
};

export default items;