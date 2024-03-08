import React, { createContext, useContext } from 'react';
import Cookies from 'js-cookie';

// Create a context for the user's role
export const RoleContext = createContext();

// Create a custom hook to use the RoleContext
export function useRole() {
  return useContext(RoleContext);
}

// Create a provider component for the RoleContext
export function RoleProvider({ children }) {
  let role = Cookies.get('token'); // Replace this with your logic for getting the user's role

  return (
    <RoleContext.Provider value={role}>
      {children}
    </RoleContext.Provider>
  );
}
