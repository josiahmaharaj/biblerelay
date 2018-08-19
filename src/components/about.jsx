import React from "react";
import Helmet from "react-helmet";

const About = () => {
  return (
    <div className="container px-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Trinidad Bible Relay</title>
        <link rel="canonical" href="http://relay.trueworshippers.org/about" />
      </Helmet>
      <h1 data-aos="fade-up">About</h1>
      <p className="about" data-aos="fade-up">
        <a
          href="https://trueworshippers.org"
          target="blank"
          rel="noopener noreferrer"
        >
          True Worshippers Evangelistic Centre
        </a>{" "}
        in collaboration with Tzion Gate Life Centre Ministry is hosting the
        first ever ‘BIBLE RELAY’ in Trinidad in celebration of{" "}
        <a
          href="http://trueworshippers.org/sermons/gods-passion-for-souls/"
          target="blank"
          rel="noopener noreferrer"
        >
          36 years in Ministry.
        </a>{" "}
        The theme is: ‘Rekindling the Flame for Evangelism’. As we celebrate, we
        will love to have you join us in this special event to participate in
        the reading of the Bible from Genesis to Revelation…Book by Book…Chapter
        by Chapter…Verse by Verse.
      </p>
      <br />
      <p className="about" data-aos="fade-up">
        Come and participate in this God experience, as we read about our
        Creator, our Patriarchs and Matriarchs, Prophets and follow in the
        footsteps of our Lord and Saviour, Jesus Christ from the Gospels and the
        Epistles to the return of the Messiah.
      </p>
    </div>
  );
};

export default About;
