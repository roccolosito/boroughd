import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import "./VideoModal.css";
import axios from "../../utils/axios";
import "../Newsfeed/Main.css";
import BigVideo from "../Newsfeed/BigVideo";

import {
    PaddedContainer,
    EmailSymbol,
    PasswordSymbol,
    ResponsiveHeader4,
    MutedSpan,
    VerticalCenterWrapper,
    SubmitButton as SubmitButton
} from "./style";


function Vid( {url} ) {
    const [videos, setVideos] = useState([]);
    console.log(url);

    return (
        <div className="bigMain">
            <div className="bigMain_videos">
                {
                    videos.map(({ url}) => (
                        <BigVideo 
                        url={url} />
                    ))
                }
            </div>
        </div>
    );
}
const VideoModal = props => {
    return (
        <Modal 
        style={{ opacity: 1 }} 
        show={props.show} 
        onHide={() => props.setShow(false)}
        size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title> Apartment Video
            
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>

            <Vid />

            </Modal.Body>
            
        </Modal>
    );
};

export default VideoModal;
