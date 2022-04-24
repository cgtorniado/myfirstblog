import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="container footer">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                           <h1>Skin & Beauty</h1>
                        </a>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">&copy; 2022 Cleo Beverly Torniado</li>
                        <li className="ms-3"><a className="text-muted fs-4 " href="https://github.com/cgtorniado"><i className="bi bi-github"></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer