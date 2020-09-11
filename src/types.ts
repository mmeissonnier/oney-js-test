export type SignInData = {
  email: string;
  name: string;
};

export type Store = {
  user: SignInData & { id: number };
};

export type Action = {
  type: string;
  payload: any;
};
