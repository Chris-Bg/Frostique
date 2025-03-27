import { createContext } from "react";

export const MyRouter = createContext({
    location: "",
    push: () => {},
});