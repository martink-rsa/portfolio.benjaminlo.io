import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      {console.log(theme)}
      <AnchorLink className={(theme) === "light" ? "dark-link" : "light-link"} href="#about">About</AnchorLink>
      <AnchorLink className={(theme) === "light" ? "dark-link" : "light-link"} href="#projects">Projects</AnchorLink>
      <AnchorLink className={(theme) === "light" ? "dark-link" : "light-link"} href="#resume">Resume</AnchorLink>
      <AnchorLink className={(theme) === "light" ? "dark-link" : "light-link"} href="#contact">Contact</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
