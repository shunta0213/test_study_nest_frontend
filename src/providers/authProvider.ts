import React, { createContext } from "react";

export interface AuthContextType {
  isLoggedIn: boolean;
}

export const AuthContext = createContext({});
