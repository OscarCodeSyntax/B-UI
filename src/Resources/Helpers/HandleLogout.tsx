import UserLoginQueries from "../Queries/UserLoginQueries";

function HandleLogout(e: any) {
  e.preventDefault();
  // store the user in localStorage
  localStorage.setItem("username", null);
  localStorage.setItem("id", null);
  localStorage.setItem("isLoggedIn", null);
  localStorage.setItem("roles", null);
  window.location.reload();

  return UserLoginQueries.logout();
}

export default HandleLogout;
