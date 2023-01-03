import AuthSlice, {initialState} from "./authSlice";

describe("authSlice", () => {
  test("initialize with initial value", () => {
    const authSliceInit = AuthSlice(initialState, {type: "unknown"});
    expect(authSliceInit).toBe(initialState);
  });
});
