import React, { createContext, useReducer, useContext } from "react";
import {
    LOGIN,
    SET_SENSOR_DATA,
    LOGOUT, 
    SET_SENSOR_CONFIGURATION,
    SET_ACTUAL_SENSOR_STATUS
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, params) => {
    console.log(params)
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

        case SET_SENSOR_CONFIGURATION:

            return {
                ...state,
                sensorConfiguration: params.sensorConfiguration,
                
            }
        case SET_ACTUAL_SENSOR_STATUS:

            return {
                ...state,
                actualSensorState: params.actualSensorState,

            }


        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        sensorStatus: 1, 
        email:"", 
        apiToken:"",
        sensorConfiguration: {
            url:"",
            contactPhone:"",
            sensorStateConfig: [],
        },
        actualSensorState: []


    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };