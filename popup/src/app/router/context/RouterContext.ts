import { createContext } from "react";

export interface RouterContextModel{
    currentRoute:string, 
    claimPath : (id:string)=>boolean,
    setCurrentRoute: (newValue:string) =>void, goBack: (numberOfHistory?:number) => void
}

const RouterContext = createContext<RouterContextModel | null>(null);

export default RouterContext;