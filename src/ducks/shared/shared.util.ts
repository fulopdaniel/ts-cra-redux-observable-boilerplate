import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

export const isNotNullOrUndefined = <T>(input: null | undefined | T): input is T => {
  return input != null;
};

export const skipEmpty = <T>() => {
  return (source$: Observable<null | undefined | T>) => {
    return source$.pipe(filter(isNotNullOrUndefined));
  };
};
