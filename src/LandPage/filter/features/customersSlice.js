import {createSlice} from"@reduxjs/toolkit"


const initialState ={
    customers:[
        {id:1, name:"samir"},
        {id:2, name:"morad"},
        {id:3, name:"alaa"},
        {id:4, name:"john"},
    ],
    foods:[
       {id:1,name:"apple"},
       {id:2,name:"carot"},
       {id:3,name:"egg"},
       {id:4,name:"banana"},
    ],
    filteredFood:[],
    filtereduser:[],
    foodWarning:"",
    userWarning:""
}
const customerSlice  = createSlice({
    name: '"customer"',
    initialState,
    reducers:{
        addCustomers:(state,action)=>{
            let result= action.payload
            if(result){
               state. userWarning=""
                 if(action.payload.startsWith("a")){
                state.customers.push({id:Date.now(),name:"Not Valid"})
            }else{
                state.customers.push({id:Date.now(),name:action.payload})
            }
            }
           
        },
        addFood:(state,action)=>{
            let result= action.payload
            if(result)  {
                state. foodWarning=""
                state.foods.push({id:Date.now(),name:action.payload})
            }
       
        },


        filterFood:(state,action)=>{

       
        state.filterFood =state.foods.filter(f=>f.name!==action.payload)
       state.foodWarning= state.filterFood.length===state.foods.length?action.payload+" is not found":""
        state.foods=state.filterFood
 
        }, 
        filterUser:(state,action)=>{
            state.filtereduser=state.customers.filter(user=>user.name!==action.payload)
            state.userWarning= state.filtereduser.length===state.customers.length?action.payload+" is not found":"" 
            state.customers= state.filtereduser
        }

    }
})

export const {addFood, addCustomers,filterFood,filterUser}=customerSlice.actions
export default customerSlice.reducer