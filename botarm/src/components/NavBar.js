import React from "react";


function NavBar (){
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="botArm.png"  alt="logo"/>
                </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            RG
                        </a>
                        <div className="navbar-dropdown">
                            
                            <a className="navbar-item" href="/history">
                                History
          </a>
                            <a className="navbar-item" href="/settings">
                                Sensor Settings
          </a>
                            <a className="navbar-item" href="/logout">
                                Logout
          </a>
          </div>
                    </div>


                </div>
                
            </div>
  
        </nav>
        
        
    )
   
   } 


export default NavBar