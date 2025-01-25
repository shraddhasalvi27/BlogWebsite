import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../utils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState();
  const [profile, setProfile] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // token should be let type variable because its value will change in every login. (in backend also)
        let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
        if (token) {
          const { data } = await axios.get(
            `${BACKEND_URL}/api/users/my-profile`,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setProfile(data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/all-blogs`,
          { withCredentials: true }
        );
        
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);