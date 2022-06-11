import React from "react"
import PaginationRoutes from "../models/PaginationRoutes";

export interface PaginationContextModel{
    activePage : PaginationRoutes,
    setActivePage: (page :PaginationRoutes) => void
}

const PaginationContext = React.createContext<null | PaginationContextModel>(null)

export default PaginationContext;