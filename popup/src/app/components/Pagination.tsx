import Content from "./content/Content";
import PaginationContext from "./context/PaginationContext";
import Header from "./header/Header";
import usePaginationContextInit from "./usePaginationContextInit";

export default function Pagination(){
    const context = usePaginationContextInit();
    return <PaginationContext.Provider value={context}>
        <Header/>
        <Content/>
    </PaginationContext.Provider>
}