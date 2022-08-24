import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosREducer from "./components/services/reducers/todosReducers";



const store = createStore(todosREducer, applyMiddleware(thunk))

export default store;