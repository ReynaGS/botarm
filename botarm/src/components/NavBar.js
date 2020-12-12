import React from "react";


function NavBar (){
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation" >
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
                </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
                            
                            <a className="navbar-item">
                                History
          </a>
                            <a className="navbar-item">
                                Sensor Settings
          </a>
                            <a className="navbar-item">
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