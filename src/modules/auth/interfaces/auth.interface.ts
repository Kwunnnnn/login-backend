export interface IAuth {
  email: string;
  password: string;
}

export interface IUserWithoutPW {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  createdAt: Date;
}
