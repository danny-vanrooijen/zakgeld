export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};
