import React from "react";
import usePaginationContext from "../usePaginationContext";
import Graph from "./graph/Graph";

export default function Content() {
   const {activePage} = usePaginationContext();
   if(activePage === 'default')
    return <main style={{backgroundColor:'white', height:'100%'}}>
        <Graph/>
    </main>;
    return <main style={{backgroundColor:'white', height:'100%'}}/>    
}