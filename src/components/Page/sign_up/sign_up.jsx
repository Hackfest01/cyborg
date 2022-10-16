import { Link } from "react-router-dom"
import { OverView } from "../overview/overview"
import { SignUpForm } from "./signup_form"
import './sign_up.css'

export const SignUp = () =>
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center ">
                <div className="col-sm-4 d-flex justify-content-around  text-center
                 cyborg_side view_height_100" >
                   <Link to='/home' className="pt-5 mt-5"> 
                   <h3 className="text-white pt-5 mt-5 font-weight-bold">Cyborg</h3></Link>
                </div>
                <div className="col-sm-8">
                  <SignUpForm/>
                </div>
            </div>
        </div>
    )
}