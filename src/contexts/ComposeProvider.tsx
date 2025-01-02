import React, { createContext, useState } from "react";

type ComposeContext = {
  showCompose: boolean;
  setShowCompose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ComposeContext = createContext<ComposeContext>(
  {} as ComposeContext
);

export function ComposeProvider({ children }: { children: React.ReactNode }) {
  const [showCompose, setShowCompose] = useState(false);
  return (
    <ComposeContext.Provider
      value={{ showCompose, setShowCompose }}
    >
      {children}
    </ComposeContext.Provider>
  );
}
