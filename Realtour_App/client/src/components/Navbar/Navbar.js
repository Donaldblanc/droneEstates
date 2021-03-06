import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import ModalWrapper from "../Modal"
import "./Navbar.css"

class Navbar extends React.Component {


    render() {
        const { src, auth } = this.props;

        return (
            <Container fluid>

                <nav className="navbar navbar-light">
                
                    <div>
                        <a href="/" className=""><img src={src} style={{ width: 40, height: 40 }} alt="drone" />  RealTour</a>
                    </div>
                    <div>
                        <ul className="">
                            <li className="nav-item active">
                            <ModalWrapper auth={auth}/>
                            </li>
                            <li className="nav-item active">
                                {auth === false && <a className="nav-link" href="/register">Register<span className="sr-only">(current)</span></a>}
                            </li>
                        </ul>
                    </div>
                </nav>

            </Container>


        )
    }
}

Navbar.props = {
    children: PropTypes.node,
    src: PropTypes.string
}
export default Navbar