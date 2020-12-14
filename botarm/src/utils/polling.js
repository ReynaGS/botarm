import axios from "axios";
import API from "./API"



function startPolling (state, dispatch,time){

    async function axiosCall() {
        try{
            const { data } = await API.getSensor()
            console.log(data); 
        }catch(errr){
            console.log(errr)
        }
        
        var id = setTimeout(axiosCall, time)
        
    }
    
    var id = setTimeout(axiosCall, time)

}

export default startPolling