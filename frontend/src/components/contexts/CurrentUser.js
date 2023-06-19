import React, { createContext, useState, useEffect } from 'react';

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/auth/profile', {
          credentials: 'include',
        });
        if (response.ok) {
          const user = await response.json();
          setCurrentUser(user);
        } else {
          // Handle error response here
          console.error('Failed to fetch user data:', response.status);
        }
      } catch (error) {
        // Handle network or other errors here
        console.error('Error while fetching user data:', error);
      }
    };

    getLoggedInUser();
  }, []);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;
