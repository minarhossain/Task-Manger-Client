import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from '../stateSlice/settingsSlice'


export default configureStore({
    reducer: {
        settings: settingsReducer,

    }
})