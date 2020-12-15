import React, {useRef} from "react";
import { useHistory } from 'react-router' 
import axios from "axios";

function SignupForm()
{
    const { push } = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const lastnameRef = useRef();
    const handleSignup = async (e) => {


        const creds = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            lastname: lastnameRef.current.value
        }
        // do the login with the api
        const { data } = await axios.post("/auth/signup", creds);
        push("/login")
    
    }
    return(

        <div>
            <div class="card">
                <div class="card-content">

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input ref={nameRef} className="input is-success" type="text" placeholder="Name input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>

                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input ref={lastnameRef} className="input is-success" type="text" placeholder=" Last Name input"  />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>

                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input ref={emailRef}className="input is-success" type="email" placeholder="Email input" />
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
                            <input ref={passwordRef} className="input is-success" type="password" placeholder="password" />
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
                            <a className=" button is-link" href="/login"> Login </a>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={handleSignup}>Sign Up</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>



    )
}
export default SignupForm