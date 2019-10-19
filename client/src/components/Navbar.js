import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            HostelManage
                         </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#mobile-nav"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* <div className="collapse navbar-collapse" id="mobile-nav">
                            {isAuthenticated ? authlinks : guestLinks}
                        </div> */}
                    </div>
                </nav>
            </div>
        )
    }
}