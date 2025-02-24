import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run(prompt);
  };
  onSent("What is React JS");
  const ContextValue = {};
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
