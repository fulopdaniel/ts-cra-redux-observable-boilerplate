import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./root.reducer";
import { rootEpic } from "./root.epic";

const logger = createLogger({
  collapsed: true,
});

const epicMiddleware = createEpicMiddleware();

const configureStore = (shouldUseLogger = true) => {
  const middleWares: any = [epicMiddleware];
  if (shouldUseLogger) {
    middleWares.push(logger);
  }
  const store = createStore(rootReducer, applyMiddleware(...middleWares));
  epicMiddleware.run(rootEpic as any);
  return store;
};
export default configureStore;
