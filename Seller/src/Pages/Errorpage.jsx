import { NavLink, useRouteError } from "react-router-dom";

export const Errorpage = () =>{
    const error = useRouteError();
  

    return (
        <div>
            <h1> Oops ! An Error Occurred</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"> 
                <button>Go Home</button> 
            </NavLink>
        </div>
    );

};