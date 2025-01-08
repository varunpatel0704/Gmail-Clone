import { Settings } from 'http2';
import React, { useState } from 'react'
import { createContext } from 'react'

type SettingsContext = {
  showSettings:boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsContext = createContext<SettingsContext>({} as SettingsContext);

export function SettingsProvider({children}:{children: React.ReactNode}) {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <SettingsContext.Provider value={{showSettings, setShowSettings}}>
      {children}
    </SettingsContext.Provider>
  )
}

