import React, {useEffect, useState} from "react";
import { useStoreContext, } from "../utils/GlobalState";
import API from "../utils/API"


function History(){
    const[historyArray,setHistory] = useState([]);
    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        loadHistory(); 
    }); 
   async function loadHistory(){
       var s = await API.getHistory({email: state.email})
       console.log(s)
       setHistory(s.data); 
    }
    
    return (
        <div>
            <ol>
            {historyArray.map((event)=>{
                return(
                    <li>
                     {event.date} - {event.zone} : {event.state} 
                    </li>
                )
            })}
            </ol>
        </div>
    )
}

export default History;