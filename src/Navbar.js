

const Navbar = () => {


    return (
        <>


            <div className="container p-4 color3">


                <div className="row">
                    <div className="col-5">
                        <h3>
                            <a className="text-primary fw-bold">Medi</a> <a className="text-warning fw-bold">Care+</a>
                        </h3>
                    </div>
                    <div className="col-7">
                        <ul className="nav navbar-expand-sm nav-pills">
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

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </>
    )

}

export default Navbar;