import AuthSlice, {initialState, signIn, signOut} from "./authSlice";

describe("authSlice", () => {
  test("initialize with initial value", () => {
    const authSliceInit = AuthSlice(initialState, {type: "unknown"});
    expect(authSliceInit).toBe(initialState);
  });

  test("should handles sign in reducer property", () => {
    const authSlice = AuthSlice(initialState, signIn());
    expect(authSlice.isLoggedIn).toBe(true);
  });

  test("should handles sign out reducer property", () => {
    const authSlice = AuthSlice(initialState, signOut());
    expect(authSlice.isLoggedIn).toBe(false);
  });
});
