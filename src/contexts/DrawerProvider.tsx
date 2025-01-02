import React, { useState } from "react";
import { createContext } from "react";

type DrawerContext = {
  showAppDrawer: boolean;
  setShowAppDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DrawerContext = createContext<DrawerContext>({} as DrawerContext);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [showAppDrawer, setShowAppDrawer] = useState(false);
  return (
    <DrawerContext.Provider value={{ showAppDrawer, setShowAppDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
