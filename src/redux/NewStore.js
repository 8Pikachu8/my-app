import { combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {DailyTasksReducer }from './DailyTasks-reducer'
import {UpdateProductReducer} from './UpdateProduc-reducer'

let reducers = combineReducers(
    {
        UpdateProductPage:    UpdateProductReducer,
        DailyTasksPage:     DailyTasksReducer,
    }
);

const store = configureStore({
    reducer: reducers, // Ваш редюсер или редюсеры
});

export default store