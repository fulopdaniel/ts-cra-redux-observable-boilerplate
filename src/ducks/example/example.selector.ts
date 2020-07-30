import { ApplicationState } from "../shared/shared.model";

const ExampleSelector = {
  getData: () => (state: ApplicationState): string => {
    return state.example.data;
  },
  isBusy: () => (state: ApplicationState): boolean => {
    return state.example.isBusy;
  },
};

export default ExampleSelector;
