import { useContext } from "react";
import { MyRouter } from "@myrouter/MyRouter.jsx";

export function useMyRouter() {
    return useContext(MyRouter);
}