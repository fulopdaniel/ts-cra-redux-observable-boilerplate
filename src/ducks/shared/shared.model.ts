import { Action } from "redux";
import { ExampleState, ExampleActionType } from "../example/example.model";

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export interface ErrorApiResponse {
  response: {
    data: {
      errors: any[];
    };
  };
}

export interface SuccessApiResponse<T = any> {
  data: T;
}

export interface ApplicationState {
  example: ExampleState;
}

export interface StateObservable {
  value: ApplicationState;
}

export type AnyAction = ExampleActionType;
