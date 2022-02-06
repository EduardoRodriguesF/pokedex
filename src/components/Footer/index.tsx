import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container, SocialMedia, Credits, BuyMeACoffe } from './styles';

const Footer: React.FC = () => {
  return(
    <Container>
      <SocialMedia>
        <a href="https://github.com/EduardoRodriguesF">
          <AiFillLinkedin size={32} />
        </a>
        <a href="https://www.linkedin.com/in/edu-rodrigues-dev/">
          <AiFillGithub size={32} />
        </a>
      </SocialMedia>
      <Credits>
        created by <a target="_blank" href="https://linktr.ee/eduardo.dev">Eduardo Rodrigues</a>
      </Credits>
      <BuyMeACoffe target="_blank" href="https://www.buymeacoffee.com/edurodrigues">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
        <span>buy me a coffee</span>
      </BuyMeACoffe>
    </Container>
  );
}

export default Footer;