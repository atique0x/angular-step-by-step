export interface User {
  id?: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  phone: string;
  dateOfBirth: string; // could use Date if you convert from string
  gender: string;
  addresses: Address[];
  skills: string[];
  agreement: boolean;
}

interface Address {
  street: string;
  division: string;
  city: string;
  region: string;
  postal: number;
}
