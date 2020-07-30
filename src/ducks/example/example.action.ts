import { ErrorApiResponse, SuccessApiResponse } from "../shared/shared.model";

export const ExampleTypes = {
  fetch: "[Example] Fetch",
  fetchSuccess: "[Example] Fetch Success",
  fetchFail: "[Example] Fetch Fail",
  clear: "[Example] Clear",
} as const;

const ExampleAction = {
  fetch: () => ({
    type: ExampleTypes.fetch,
  }),
  fetchSuccess: (payload: SuccessApiResponse<string>) => ({
    type: ExampleTypes.fetchSuccess,
    payload,
  }),
  fetchFail: (payload: ErrorApiResponse) => ({
    type: ExampleTypes.fetchFail,
    payload,
  }),
  clear: () => ({
    type: ExampleTypes.clear,
  }),
};

export default ExampleAction;
