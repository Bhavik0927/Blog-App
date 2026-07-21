import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/UserSlice';
import blogReducer from './blog/BlogSlice';
import followerReducer from './social/FollowerSlice';
import saveblogsReducer from './blog/SaveBlogs';
import ProfileReducer from './profile/ProfileSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,

}


const rootReducer = combineReducers({
    user: userReducer,
    blog: blogReducer,
    saveblogs: saveblogsReducer,
    follower: followerReducer,
    Profile: ProfileReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);




export default store;