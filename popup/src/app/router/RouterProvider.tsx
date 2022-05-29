import { ReactNode } from "react";
import RouterContext from "./context/RouterContext";
import useRouterContextInit from "./useRouterContextInit";

export default function RouterProvider({children}: {children:ReactNode}){
    const context = useRouterContextInit();
    return <RouterContext.Provider value={context}>{children}</RouterContext.Provider>;
}