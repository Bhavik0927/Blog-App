import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name:"Profile",
    initialState:{
        profile : null,
    },
    reducers:{
        addProfiles: (state, action) =>{
            state.profile = action.payload;
        }
    }
});


export const {addProfiles} = ProfileSlice.actions;
export default ProfileSlice.reducer;