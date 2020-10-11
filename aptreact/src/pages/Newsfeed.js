import React from "react";
import "../components/Newsfeed/Newsfeed.css"
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import Main from "../components/Newsfeed/Main";
import SideNav from "../components/Navs/SideNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Newsfeed() {
    return (
        <div className="newsfeed">
            <FeedNav />
            <Container fluid>
                <Row>
                    <Col xs={2}><SideNav /></Col>
                    <Col xs={8}> <Main /></Col>
                    <Col xs={2}><SideNav /></Col>

                </Row>
            </Container>
        </div>

        // Take inspiration from TIKTOK
        // Another (right) side component could be added here as well
    );
}

export default Newsfeed;