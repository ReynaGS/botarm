import React, { createContext, useReducer, useContext } from "react";
import {
    READ_SENSOR,
    LOGIN,
    SET_SENSOR_DATA,
    LOGOUT
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, params) => {
    console.log()
    switch (params.action) {
        case SET_SENSOR_DATA:
            return {
                ...state,
                sensorStatus: params.sensorStatus,
                
            };
            case LOGIN:
            return {
                ...state,
                email: params.email,
                apiToken: params.apiToken
            }
        case LOGOUT:
            
            return {
                ...state,
                email: "",
                apiToken: ""
            }

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        sensorStatus: 
        
        1, 
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };