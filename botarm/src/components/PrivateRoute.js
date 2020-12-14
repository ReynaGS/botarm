import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";


import { useStoreContext } from "../utils/GlobalState";
function PrivateRoute({ children, ...rest }) {
    const [state, dispatch] = useStoreContext();
    console.log(rest)


    return (
        <Route>
            {state.apiToken ? (
              <rest.component />  
            ) : <Redirect to="/login" />} 
        </Route>
    );
}
export default PrivateRoute; 