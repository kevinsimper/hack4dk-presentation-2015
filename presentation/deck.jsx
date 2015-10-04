import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide>
          <Heading size={2} fit caps lineHeight={1}>Danish Radio Archive</Heading>
          <Heading size={1} caps fit lineHeight={1} textColor="black">Face</Heading>
          <Heading size={1} caps fit lineHeight={1} textColor="black">Recognition</Heading>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1}>77.000</Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image width='100%' src='http://hack4dk.dr.dk/Batch04/DR-behandlet/15779%20%202_259842.jpg'/>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image width='100%' src='http://hack4dk.dr.dk/Batch04/DR-ubehandlet/17123_16_253517.jpg'/>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Image fit src='http://openbiometrics.org/openbr_white.png'/>
          <Heading textColor='black'>OpenBR</Heading>
        </Slide>
        <Slide>
          <Heading caps>9181 Pictures</Heading>
          <Heading caps textColor='black'>6821 had people</Heading>
          <Heading caps textColor='black' fit lineHeight={1}>15376 total</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>Age</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1} textColor='black'>Average: 47.85</Heading>
        </Slide>
        <Slide bgImage='http://hack4dk.dr.dk/Batch03/DR-behandlet/3255_227776.jpg'>
          <Appear fid="1">
            <Heading textColor='primary' fit lineHeight={1}>7338681</Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgImage='http://hack4dk.dr.dk/Batch01/DR-behandlet/4358_186659.jpg'>
        </Slide>
        <Slide transition={["zoom"]} bgImage='http://i.imgur.com/80p6zq6.jpg'>
        </Slide>
        <Slide transition={["zoom"]} bgImage='http://i.imgur.com/TVamI8J.png'>
          <Appear fid="1">
            <Heading textColor='primary' fit lineHeight={1}>5184</Heading>
          </Appear>
        </Slide>
        <Slide bgImage='http://i.imgur.com/kSALgwb.jpg'>
          <Heading cpas fit>Before</Heading>
        </Slide>
        <Slide bgImage='http://i.imgur.com/1xtyKs5.png'>
          <Heading cpas fit>SLOW</Heading>
          <Heading cpas fit>Unorganized</Heading>
        </Slide>
        <Slide bgImage='http://www.macleans.ca/wp-content/uploads/2013/05/MAC17_HEAVEN01.jpg'>
          <Heading caps textColor='black'>searchable</Heading>
          <Heading caps fit textColor='black'>Website</Heading>
          <Heading caps size={1} textColor='black'>API</Heading>
        </Slide>
        <Slide bgColor='white' bgImage='http://i.imgur.com/qaXc6bz.jpg'>
        </Slide>
        <Slide>
          <Heading fit textColor='black'>183 billion pixels</Heading>
          <image width='100%' src='https://forums.frontier.co.uk/attachment.php?attachmentid=19697&d=1426006294' />
        </Slide>
        <Slide bgImage='http://i.imgur.com/BLZGA8J.jpg?1'>
          <Heading fit textColor='black'>Try yourself</Heading>
        </Slide>
        <Slide bgImage='http://images6.fanpop.com/image/polls/1184000/1184377_1361665209548_full.jpg'>
          <Heading fit caps>Future</Heading>
          <Heading fit caps>Plans</Heading>
        </Slide>
      </Deck>
    );
  }
}
