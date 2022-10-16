export const SignUpForm = () =>
{
    return (
        <div className="container-fluid">
            <div class="row align-items-center justify-content-center my-5 my-sm-0 py-5 py-sm-0">
                <div className="col-sm-9">
                    <div className="">
                        <p className="font-weight-bolder">Create your free account here</p>
                    </div>
                    <div className="mb-4">
                        <input type={'text'} id='emailInputName' className="form-control" placeholder="First and Last Name"></input>
                    </div>
                    <div  className="mb-4">
                        <input type={'text'} id='emailInputName' className="form-control" placeholder="Your business name"></input>
                    </div>
                    <div  className="mb-4">
                        <input type={'text'} id='emailInputName' className="form-control" placeholder="Your business email"></input>
                    </div>
                    <div  className="mb-4">
                        <input type={'text'} id='emailInputName' className="form-control" placeholder="Country"></input>
                    </div>
                    <div  className="mb-4">
                        <button className="btn withdraw_button w-100">Create Account</button>
                    </div>
                </div>

            </div>
        </div>
    )
}