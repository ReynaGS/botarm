import React from "react"; 
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";


import { useStoreContext } from "../utils/GlobalState";
function PrivateRoute({ children, ...rest }) {
    const [state, dispatch] = useStoreContext();
 console.log(state)

    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                
          
                    
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                    
             
            }
        />
    );
}
export default PrivateRoute; 