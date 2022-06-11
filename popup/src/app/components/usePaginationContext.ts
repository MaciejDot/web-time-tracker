import { useContext } from "react";
import forceNonNullable from "../utils/assertions/forceNonNullable";
import PaginationContext from "./context/PaginationContext";

export default function usePaginationContext(){
    return forceNonNullable(useContext(PaginationContext))
}