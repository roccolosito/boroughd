import React, { useState } from "react";
import "./VideoFooter.css";
import HomeIcon from '@material-ui/icons/Home';
import Ticker from "react-ticker";
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import VideoModal from "../VideoModal/VideoModal";

function VideoFooter({ url, screenName, description, address1 }) {
  const [show, setShow] = useState(false);


  var handleClick = (url) => {
    setShow(true);
    console.log("Video Footer url: ", url);
  }

  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{apt}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <AspectRatioOutlinedIcon fontSize="large" className="expandIcon" onClick={() =>
        handleClick(url)}>
      </AspectRatioOutlinedIcon>
      <VideoModal url={url} show={show} setShow={setShow} />
    </div>
  );
}

export default VideoFooter;
