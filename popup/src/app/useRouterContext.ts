import { useContext } from "react";
import RouterContext from "./router/context/RouterContext";
import forceNonNullable from "./utils/assertions/forceNonNullable";

export default function useRouterContext(){
    return forceNonNullable(useContext(RouterContext));
}