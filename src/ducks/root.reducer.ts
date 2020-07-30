import { combineReducers } from "redux";
import ExampleReducer from "./example/example.reducer";

const rootReducer = combineReducers({
  example: ExampleReducer,
});

export default rootReducer;
