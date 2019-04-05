import React from 'react';
import Banner from '../static/images/EPBanner.png';

const Header = () => (
  <header className="fit my-header" id="header">
      <img className="my-header-pic" src={Banner} />
  </header>
);

export default Header;
