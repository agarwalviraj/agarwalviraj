import React, { useContext, useState } from "react";

const MainContentContext = React.createContext<{
  application: any;
  setApplication: React.Dispatch<React.SetStateAction<any>>;
}>({ application: "", setApplication: () => {} });

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [application, setApplication] = useState();

  return (
    <MainContentContext.Provider value={{ application, setApplication }}>
      {children}
    </MainContentContext.Provider>
  );
};

export const useMainStore = () => useContext(MainContentContext);

export default MainContentProvider;
