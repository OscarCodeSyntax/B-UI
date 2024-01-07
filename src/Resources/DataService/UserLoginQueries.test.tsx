import { SignInUserType, SignUpUserType } from "../Types/UserLoginTypes";
import UserLoginQueries from "./UserLoginQueries";

// const userSignUp: SignUpUserType = {
//   username: "testuser1000",
//   email: "testuser1000@gmail.com",
//   roles: ["ADMIN"],
//   password: "passwordtest",
// };

const userSignIn: SignInUserType = {
  username: "testuser1000",
  password: "passwordtest",
};

//Data service must be running for these to pass
describe("UserLoginQueries Queries", () => {

  //cant reach delete so have to get rid of this as it is needed for the test flow

  // test("the signUp endpoint should return", () => {
  //   return UserLoginQueries.signUpUser(userSignUp).then((data) => {
  //     expect(data).toEqual({ message: "User registered successfully!" });
  //   });
  // });

  test("the signIn endpoint should return", () => {
    return UserLoginQueries.signInUser(userSignIn).then((data) => {
      expect(data.email).toBe("testuser1000@gmail.com");
      expect(data.username).toBe("testuser1000");
    });
  });

  //cant mock the ADMIN_ROLE to allow endpoint access - are tests in backend though

  // test("the delete endpoint should return", () => {
  //   return UserLoginQueries.deleteUser(userSignIn).then((data) => {
  //     expect(data).toEqual("Successfully deleted user");
  //   });
  // });

  test("the logout endpoint should return", () => {
    return UserLoginQueries.logout().then((data) => {
      expect(data).toEqual({ message: "User logged out successfully!" });
    });
  });

});
