import React from "react"; 

function SignupForm()
{
    return(

        <div>
            <div class="card">
                <div class="card-content">

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="email" placeholder="Name input" />
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
                            <input className="input is-success" type="email" placeholder=" Last Name input"  />
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
                            <input className="input is-success" type="email" placeholder="Email input" />
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
                            <input className="input is-success" type="password" placeholder="password" />
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
                            <a className=" button is-link"> Login </a>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Sign Up</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>



    )
}
export default SignupForm