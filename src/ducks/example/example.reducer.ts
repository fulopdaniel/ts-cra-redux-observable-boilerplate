import { ExampleState, ExampleActionType } from "./example.model";
import { ExampleTypes } from "./example.action";

const INITIAL_STATE: ExampleState = {
  data: "example",
  isBusy: false,
};

export const ExampleReducer = (state = INITIAL_STATE, action: ExampleActionType): ExampleState => {
  switch (action.type) {
    case ExampleTypes.fetch: {
      return { ...state, isBusy: true };
    }
    case ExampleTypes.fetchSuccess: {
      const data = action.payload;
      return { ...state, data: data.data, isBusy: false };
    }
    case ExampleTypes.fetchFail: {
      return { ...state, isBusy: false };
    }
    case ExampleTypes.clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default ExampleReducer;
