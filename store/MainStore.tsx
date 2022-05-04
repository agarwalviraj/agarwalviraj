import React, { useContext, useState } from "react";

const UserInfoContext = React.createContext<{
  application: any;
  setApplication: React.Dispatch<React.SetStateAction<any>>;
} | null>(null);

const UserDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [application, setApplication] = useState();

  return (
    <UserInfoContext.Provider value={{ application, setApplication }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserContext = () => useContext(UserInfoContext);

export default UserDetailsProvider;
