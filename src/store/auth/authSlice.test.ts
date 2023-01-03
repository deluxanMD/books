import AuthSlice, {initialState, signIn} from "./authSlice";

describe("authSlice", () => {
  test("initialize with initial value", () => {
    const authSliceInit = AuthSlice(initialState, {type: "unknown"});
    expect(authSliceInit).toBe(initialState);
  });

  test("should handles isLoggedIn property", () => {
    const authSlice = AuthSlice(initialState, signIn());
    expect(authSlice.isLoggedIn).toBe(true);
  });
});
