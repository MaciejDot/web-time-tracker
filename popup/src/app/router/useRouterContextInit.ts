import { useCallback, useEffect, useRef, useState } from "react"

export default function useRouterContextInit(){
    const historyRef = useRef<string[]>([])
    const [currentRoute, setCurrentRoute] = useState<string>("")
    const pathIsClaimedById = useRef<string | null>(null)
    useEffect(()=>{
        pathIsClaimedById.current = null;
        historyRef.current.push(currentRoute);
    },[currentRoute])

    const goBack = useCallback((numberOfHistory = 1)=>{
        const history = historyRef.current;
        const index = history.length - numberOfHistory;
        if(index >= 0){
            history.splice(index);
            setCurrentRoute(history[index]);
        }
    }, [])

    const claimPath = useCallback((id:string)=>{
        if(pathIsClaimedById.current === id)
            return true
        if(pathIsClaimedById.current === null){
            pathIsClaimedById.current = id;
            return true;
        }
        return false;
    },[]) 

    return { currentRoute, setCurrentRoute, goBack, claimPath }
}