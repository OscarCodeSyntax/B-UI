export interface SignInUserType {
  username: string;
  password: string;
}

export interface SignUpUserType {
  username: string;
  email: string;
  roles: string[];
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
