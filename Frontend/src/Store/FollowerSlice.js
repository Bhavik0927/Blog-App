import { createSlice } from "@reduxjs/toolkit";

const Follower  = createSlice({
    name:'follower',
    initialState:{
        follower:[],
        following: []
    },
    reducers:{
        addFollower:(state,action) =>{
            state.follower = action.payload
        },

        addFollowing:(state,action) =>{
            state.following = action.payload;
        }
    }
});



export const {addFollower, addFollowing} = Follower.actions;
export default Follower.reducer;