import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  FacebookShareCount
} from "react-share";

const Social = () => {
  const shareUrl = "https://relay.trueworshippers.org";
  const title = "Trinidad Bible Relay";
  const body = "Join us as we read the Living Word of God together";
  const hastags = ["twectt", "tziongate", "Jesus", "BibleReading"];
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <FacebookShareButton
            children="Share"
            url={shareUrl}
            quote={body}
            hastag={hastags}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <div className="align-center">
            <FacebookShareCount url={shareUrl} />
          </div>
        </div>
        <div className="col-1">
          <TwitterShareButton
            children="Share"
            url={shareUrl}
            title={body}
            hashtag={hastags}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
        <div className="col-1">
          <WhatsappShareButton
            children="Share"
            url={shareUrl}
            title={body}
            separator=" | "
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
        <div className="col-1">
          <EmailShareButton
            children="Share"
            url={shareUrl}
            subject={title}
            body={body}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default Social;
