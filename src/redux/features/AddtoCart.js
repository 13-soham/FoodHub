import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : "AddtoCart",
    initialState : {
        item : JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers : {
        addItem : (state, action)=>{
            let existingItem = state.item.find((elem)=> elem.id === action.payload.id); 

            if(existingItem){
                existingItem.qty += 1;
            }
            else{
                state.item.push({ ...action.payload, qty : 1});
            }

            localStorage.setItem("cart", JSON.stringify(state.item));
        },

        deleteItem : (state, action)=>{
            state.item = state.item.filter((elem)=>(
                elem.id != action.payload
            ));

            localStorage.setItem("cart", JSON.stringify(state.item));
        },

        addQty : (state, action)=>{
            const item = state.item.find((elem)=> elem.id == action.payload);
            if(item){
                item.qty += 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.item));
        },

        deleteQty : (state, action)=>{
            const item = state.item.find((elem)=> elem.id == action.payload);
            if(item && item.qty > 1){
                item.qty -= 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.item));
        }
    }
})

export const { addItem, deleteItem, addQty, deleteQty } = CartSlice.actions;
export default CartSlice.reducer;