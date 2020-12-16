import React, { useState } from "react";
import {
  HeroContainer,
  HeroBackground,
  Background,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroElements";
import Image from "../../images/bg.jpg";
import { Button } from "../ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground>
        <Background src={Image} />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Faz um pix.</HeroH1>
        <HeroP>
          Cadastre sua chave e faça tranferências sem taxas e na hora.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Crie sua chave {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
