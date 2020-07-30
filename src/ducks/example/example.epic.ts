import { combineEpics, ofType } from "redux-observable";
import { Observable, from, of } from "rxjs";
import { SuccessApiResponse, ErrorApiResponse, StateObservable, AnyAction } from "../shared/shared.model";
import { ExampleTypes } from "./example.action";
import { map, switchMap, catchError } from "rxjs/operators";

import { exampleService } from "./example.service";
import ExampleAction from "./example.action";

const fetchEpic = (action$: Observable<AnyAction>, state$: StateObservable) =>
  action$.pipe(
    ofType(ExampleTypes.fetch),
    map((x) => x as ReturnType<typeof ExampleAction.fetch>),
    switchMap(() =>
      from(exampleService.fetch()).pipe(
        map((x) => ExampleAction.fetchSuccess(x as SuccessApiResponse<string>)),
        catchError((error: ErrorApiResponse) => of(ExampleAction.fetchFail(error)))
      )
    )
  );

export const exampleEpics = combineEpics(fetchEpic);
