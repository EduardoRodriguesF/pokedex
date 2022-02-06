import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container, SocialMedia, Credits, BuyMeACoffe } from './styles';

const Footer: React.FC = () => {
  return(
    <Container>
      <SocialMedia>
        <a href="https://github.com/EduardoRodriguesF" rel="noopener">
          <AiFillGithub size={32} title="Github" />
        </a>
        <a href="https://www.linkedin.com/in/edu-rodrigues-dev/" rel="noopener">
          <AiFillLinkedin size={32} title="Linkedin" />
        </a>
      </SocialMedia>
      <Credits>
        created by <a target="_blank" href="https://linktr.ee/eduardo.dev" rel="noopener">Eduardo Rodrigues</a>
      </Credits>
      <BuyMeACoffe target="_blank" href="https://www.buymeacoffee.com/edurodrigues" rel="noopener">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
        <span>buy me a coffee</span>
      </BuyMeACoffe>
    </Container>
  );
}

export default Footer;