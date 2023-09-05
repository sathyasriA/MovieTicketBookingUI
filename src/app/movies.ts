export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
  genre: string;
  date: string;
  location: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
}


export interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
