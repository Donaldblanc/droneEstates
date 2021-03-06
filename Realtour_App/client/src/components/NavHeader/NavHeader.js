import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import { FlexBox} from "../FlexBox"
import "./NavHeader.css"
// import ModalWrapper from "../Modal"

class NavHeader extends React.Component {



    render() {
        const { userId, display } = this.props;
        // console.log(userId)
        // let user = JSON.stringify(userId)
        // console.log(user)
        return (

            <div style={{ display: display }}>
                <Container fluid>

                    {/* <nav className="navbar navheader">
                        <FlexBox>
                            <div className ="flex-fill">
                                <a href={"/myListings/:" + userId} className="navbar-brand">My Listings</a>
                            </div>
                            <div className ="flex-fill">
                                <a href={"/postListing/:" + userId} className="navbar-brand"> Post Listing</a>
                            </div>
                            <div className ="flex-fill">
                                <a href={"/savedListings/:" + userId} className="navbar-brand"> Saved Listings</a>
                            </div>
                        </FlexBox>
                    </nav> */}



                      <nav>
                        {/* <ul className="nav nav-pills">
                            <li role="presentation" >
                                <a href={"/myListings/:" + userId} className="navbar-brand">My Listings test </a>
                            </li>
                            <li role="presentation" >
                                <a href={"/postListing/:" + userId} className="navbar-brand"> Post Listing</a>
                            </li>
                            <li role="presentation" >
                                <a href={"/savedListings/:" + userId} className="navbar-brand"> Saved Listings</a>
                            </li>
                        </ul> */}
                    </nav>


                </Container>
            </div>


        )
    }
}
NavHeader.props = {
    children: PropTypes.node,
    userId: PropTypes.string,
    login: PropTypes.string,
}
export default NavHeader