import ExampleAction from "./example.action";

export interface ExampleState {
  data: string;
  isBusy: boolean;
}

export type ExampleActionType = ReturnType<typeof ExampleAction[keyof typeof ExampleAction]>;
