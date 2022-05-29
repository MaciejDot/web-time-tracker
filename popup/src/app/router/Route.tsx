import { ReactNode, useEffect, useState } from "react";
import useRouterContext from "../useRouterContext";

export default function Route({path, children}: {path :string, children: ReactNode}) {
    const [id] = useState(Math.random().toString())
    const {currentRoute, claimPath} = useRouterContext();
    const [render, setRender] = useState(false);
    useEffect(()=>{
        if(currentRoute === path){
            setRender(claimPath(id));
            return;
        }
        if(RegExp(path).test(currentRoute)){
            setRender(claimPath(id));
            return;
        }
        setRender(false);
    }, [currentRoute, path])
    
    if(render)
        return children;
    return null;
}