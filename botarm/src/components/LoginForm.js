import React,{useRef} from "react"; 
import { useHistory } from 'react-router'
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";

//https://reactrouter.com/web/example/auth-workflow


import axios from "axios";

function LoginForm (){
    const { push } = useHistory();
   
    const emailRef = useRef();
    const passwordRef = useRef();

    const [state, dispatch] = useStoreContext();


const handleLogin = async (e)=>{


    const creds = {
        email: emailRef.current.value,
        password: passwordRef.current.value
    }
    // do the login with the api
    const { data } = await axios.post("/auth/login", creds);
    // put the email and token in the state
    const { email, token } = data;
    const apiToken = token;
    console.log(apiToken);
    dispatch({
        action: LOGIN,
        email,
        apiToken: data.token
    });
     localStorage.setItem("user", JSON.stringify({ email, token }));
     push("/home")
}

    return(

        <div>
            <div class="card">
                <div class="card-content">

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="email" placeholder="Email input"  ref={emailRef}/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                
            </div>
            

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="password" placeholder="password" ref={passwordRef} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>

                </div>
           
                    <div className="field is-grouped" >
                        <div className="control">
                    <button className="button is-link" onClick={handleLogin}>Login</button>
                </div>
                <div className="control">
                            <button className="button is-link is-light" onClick={() => push('/signup')}>Sign Up Here!</button>
                </div>
            </div>
            </div>
            </div>
        </div>

    )
}
export default LoginForm; 

