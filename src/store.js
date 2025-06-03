import { configureStore, createSlice } from "@reduxjs/toolkit";
const productslice = createSlice({
    name:"products",
    initialState:{veg:[
        {name: 'tamoto',price:100.90},
        {name: 'potato',price:200.90},
        
        ],

        nonveg:[
            {name:'chicken',price:'800.00'},
            {name:'grilled chicken',price:'1000.00'},
            

        ]
    },
    reducer:{}
    

});
const cartslice=createSlice({
    name:"cart",
    initialState:{},
    reducers:{
        addtocart:(state,action)=>{
            const status=state.find((item)=>item.name===action.payload.name);
            if(status){
                item.quantity++;
            }else{
                state.push({...action.payload,quantity:1});
            }
        }
    }

});
export const {addtocart}=cartslice.actions;
//configure the store

const store = configureStore({
    reducer:{products:productslice.reducer,cart:cartslice.reducer},
})
export default store;