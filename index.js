import React from "react";
import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";


const initialCounterState ={counter :0,showCounter :true}
const counterSlice=createSlice({
    name :"counter",
    initialCounterState,
    reducers:{
        increment(state){return  state.counter++   },
        decrement(state){state.counter--},
        toggle(state){state.showCounter=!state.showCounter},
        increase(state,action){state.counter=state.counter+action.payload},

    }
})

const initialAuthState ={
    isAuthenticated :false
}

const authSlice=createSlice({
    name :"authentication",
    initialState :initialAuthState,
    reducers:{
        login (state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false
        }
    }
})


const store =configureStore({reducer: {counter:counterSlice.reducer,auth :authSlice.reducer}
})


export const counterActions =counterSlice.actions
export const authActions =authSlice.actions
export default store