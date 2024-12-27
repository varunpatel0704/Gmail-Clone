import { createContext, ReactNode, useState } from "react";

type ToogleContext = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ToogleContext = createContext<ToogleContext>({} as ToogleContext);

export function ToogleProvider({ children }: { children: ReactNode }) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <ToogleContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </ToogleContext.Provider>
  );
}
