"use client";
import { createContext, useCallback, useMemo, useState } from "react";

const StateContext = createContext(null);

const initialState = {
  theme: "dark",
};

const StateContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const handleSetState = useCallback((_state) => setState(_state), []);
  const handleSetTheme = useCallback(
    (_theme) => setState({ ...state, theme: _theme }),
    []
  );

  const contextValue = useMemo(
    () => ({ state, handleSetState, handleSetTheme }),
    [state, handleSetState, handleSetTheme]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
