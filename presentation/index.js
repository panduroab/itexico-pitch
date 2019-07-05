// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  itexico: require('../assets/itexico_logo.png'),
  communication: require('../assets/communication.gif'),
  ego: require('../assets/ego.gif'),
  team: require('../assets/team.gif'),
  team2: require('../assets/team2.gif'),
  crisis: require('../assets/crisis.gif'),
  goals: require('../assets/goals.gif'),
  partner: require('../assets/partner.gif'),
  questions: require('../assets/questions.gif'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            Learned lessons as Developer, TL and DO
          </Heading>
          <Image src={images.itexico} />
          <Heading size={5} textColor="tertiary">Abraham Panduro</Heading>
        </Slide>
        <Slide  transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="tertiary">Disclaimer</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Learned lessons as Developer</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Communication</Heading>
          <Image transition={['fade']} src={images.communication} width={500} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Ego</Heading>
          <Image transition={['fade']} src={images.ego} width={500} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">Learned lessons as TL</Heading>
        </Slide>
        <Slide  transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">Build your team</Heading>
          <Image transition={['fade']} src={images.team2} width={500} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">Crisis intervention</Heading>
          <Image transition={['fade']} src={images.crisis} width={500} />
        </Slide>
        <Slide transition={['fade']}  bgColor="secondary">
          <Heading size={3} textColor="tertiary">Learned lessons as DO</Heading>
        </Slide>
        <Slide transition={['fade']}  bgColor="secondary">
          <Heading size={3} textColor="tertiary">Project goals and decision making</Heading>
          <Image transition={['fade']} src={images.goals} width={500} />
        </Slide>
        <Slide  transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="tertiary">Your client is your partner</Heading>
          <Image transition={['fade']} src={images.partner} width={500} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="tertiary">Questions?</Heading>
          <Image transition={['fade']} src={images.questions} width={500} />
        </Slide>
      </Deck>
    );
  }
}
