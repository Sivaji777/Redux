const { createStore ,combineReducers} = require("redux")
const BUY_LAPTOP="BUY_LAPTOP"
const BUY_MOBILE="BUY_MOBILE"
const initialState={            //initial state
    numberOfLaptop:10,
    numberOfMobile:20
}

const updatingLaptop=()=>{     //action
    return {
        type:BUY_LAPTOP
        }
}

const updatingMobile=()=>{     //action
    return {
        type:BUY_MOBILE
        }
}

const reducerLaptop=(state=initialState, action)=>{       //reducer

    switch(action.type){
        case BUY_LAPTOP :
            return {numberOfLaptop:state.numberOfLaptop+1}
        default :
            return state
    }

}

const reducerMobile=(state=initialState, action)=>{       //reducer

    switch(action.type){
        case BUY_MOBILE :
            return {numberOfMobile:state.numberOfMobile+1}
        default :
            return state
    }

}



const rootReducer=combineReducers({reducerLaptop,reducerMobile})
const store=createStore(rootReducer)
store.subscribe(() =>{console.log(store.getState())})
store.dispatch(updatingLaptop())
store.dispatch(updatingMobile())


