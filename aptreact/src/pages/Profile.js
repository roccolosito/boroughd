import React from "react";
import "../components/Profile/Profile.css";
import FeedNav from "../components/Navs/FeedNav";
import SideNav from "../components/Navs/SideNav"
import Saved from "../components/Profile/Saved";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer/Footer"


function Profile() {
    return (
        // This is the main page to show components: LOOKER to show the user their profile and SAVED to show the user's history of hearted listings
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <FeedNav />
            <Row>
                <Col xs={1}>
                    <SideNav />
                </Col>
                <Col xs={10}>
                    <Saved />
                </Col>
                <Col xs={1}>Right Nav Goes Here</Col>
            </Row>
            <Row>
            <Footer />
        </Row>
        </Container>
    )
}

export default Profile;