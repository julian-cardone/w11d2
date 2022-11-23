// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext("50");

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [temperature, setTemperature] = useState("");
 
  return (
    <ClimateContext.Provider
      value={{
        temperature,
        setTemperature
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
