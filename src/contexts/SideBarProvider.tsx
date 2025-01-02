import { createContext, ReactNode, useState } from "react";

type SideBarContext = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SideBarContext = createContext<SideBarContext>({} as SideBarContext);

export function SideBarProvider({ children }: { children: ReactNode }) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}
