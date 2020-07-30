import { combineEpics } from "redux-observable";
import { exampleEpics } from "./example/example.epic";

export const rootEpic = combineEpics(exampleEpics);
