import { useState } from "react"
import PaginationRoutes from "./models/PaginationRoutes"

export default function usePaginationContextInit(){
    const [activePage, setActivePage] = useState<PaginationRoutes>("default")
    return { activePage, setActivePage} 
}