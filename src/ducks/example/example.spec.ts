import configureStore from "../store";
import ExampleAction from "./example.action";
import ExampleSelector from "./example.selector";
import axios from "axios";

const shouldUseLogger = false;
const MOCK_STORE = configureStore(shouldUseLogger);

jest.spyOn(axios, "get");
jest.doMock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("example integration tests", () => {
  afterEach(() => {
    MOCK_STORE.dispatch(ExampleAction.clear());
  });
  describe("given Fetch action is dispatched", () => {
    describe("and there is no response yet from the server", () => {
      beforeEach(() => {
        MOCK_STORE.dispatch(ExampleAction.fetch());
      });

      it("should set the busy flag to true", () => {
        const state = MOCK_STORE.getState();
        expect(ExampleSelector.isBusy()(state)).toBe(true);
      });

      it("should send an axios GET request", () => {
        expect(axios.get).toHaveBeenCalled();
      });
    });

    describe("and there is a successful response", () => {
      beforeEach(() => {
        mockedAxios.get.mockReturnValueOnce(Promise.resolve({ data: "newValue" }));
        MOCK_STORE.dispatch(ExampleAction.fetch());
      });

      it("should set the busy flag to false", () => {
        const state = MOCK_STORE.getState();
        expect(ExampleSelector.isBusy()(state)).toBe(false);
      });

      it("should set the value in state", () => {
        const state = MOCK_STORE.getState();
        expect(ExampleSelector.getData()(state)).toBe("newValue");
      });
    });

    describe("and there is an error in the response", () => {
      beforeEach(() => {
        mockedAxios.get.mockReturnValueOnce(Promise.reject({ error: "error" }));
        MOCK_STORE.dispatch(ExampleAction.fetch());
      });

      it("should set the busy flag to false", () => {
        const state = MOCK_STORE.getState();
        expect(ExampleSelector.isBusy()(state)).toBe(false);
      });

      it("should not set the value in state", () => {
        const state = MOCK_STORE.getState();
        expect(ExampleSelector.getData()(state)).toBe("example");
      });
    });
  });
});
