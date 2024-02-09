import {createSlice} from "@reduxjs/toolkit"


const themeSlice = createSlice({
    name:"theme",
    initialState:{
        color:"orange",
        background:"black",
        fontSize:"14px",
        fontBold:"bold"
    },
    reducers:{
        changeColor:(state,action)=>{
            state.color = action.payload
        },
        changeBackground:(state,action)=>{
            state.background = action.payload
        },
        changSize:(state,action)=>{
         state.fontSize = action.payload
        },
        changBold:(state,action)=>{
            state.fontBold = action.payload
           }
    }
})
export const {changeColor,changeBackground,changSize,changBold}=themeSlice.actions
export default themeSlice.reducer