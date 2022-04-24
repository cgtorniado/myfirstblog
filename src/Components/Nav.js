import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="ui menu shadow-sm">
                <Link to="/"><span className="item">
                    <h1>Skin & Beauty</h1>
                </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="right menu d-flex my-auto">
                    <Link to="/blog"><span className="item" >Blog</span></Link>
                    <Link to="/products"><span className="item">Faves</span></Link>
                    <Link to="/aboutme"><span className="item">About</span></Link>
                </div>
            </div>
        </>
    )
}

export default Nav