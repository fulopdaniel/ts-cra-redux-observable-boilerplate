import axios from "axios";
import { SuccessApiResponse, ErrorApiResponse } from "../shared/shared.model";
import { exampleConfig } from "./example.config";

export const exampleService = {
  fetch: (): Promise<SuccessApiResponse<string> | ErrorApiResponse> => {
    return axios.get(exampleConfig.endpoints.fetch());
  },
};
