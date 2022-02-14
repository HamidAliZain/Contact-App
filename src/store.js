import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  {ContactReducer }from "./redux/reducer/Post-reducer"

export const store = createStore(
    ContactReducer,
 
    composeWithDevTools(applyMiddleware(thunk))
)