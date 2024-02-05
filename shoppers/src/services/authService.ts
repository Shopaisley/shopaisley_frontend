// authService.ts
import axios from 'axios';
// import { server } from './server';

// Function to store the token in localStorage
export const setAuthToken = (token: string) => {
  localStorage.setItem('authToken', token);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Function to remove the token from localStorage
export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  delete axios.defaults.headers.common['Authorization'];
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const setCustomerID = (customerID: string) => {
    localStorage.setItem('customerID', customerID);
}


