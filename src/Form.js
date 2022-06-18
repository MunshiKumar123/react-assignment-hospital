
const From = () => {



    return (
        <>

            <div className="container p-4 color3">
                <div className="p-5 bg-primary text-white br">
                    <h1 className="text-center">Subscribe to Newsletter</h1>
                    <p className="pb-5 text-center">We have a wide experience in experience design and strategy,</p>

                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">

                            <form action="a.php">
                                <label><input className="p-4 input" type="email" placeholder="Enter your email address" required /> <button
                                    type="submit" className="btn btn-primary mt-3 btn-1">Send Now</button></label>

                            </form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-8">
                        <h3>
                            <spna className="text-primary">Medi</spna><span className="text-warning">Care+</span>
                        </h3>
                    </div>
                    <div className="col-4">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default From;