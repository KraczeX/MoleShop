import React from 'react';

import logo from '../assets/icons-white/logo.png';

const Header = () => {
  return (
    <div>
      <div>
        {/*logo*/}
        <div>
          <img src="{logo}" alt="" className='md:w-12 md:h-12 w-10 h-10'/>
          <span>CodingMole</span>
        </div>
        <ul><li>Home</li></ul>
      </div>
    </div>
  );
};

export default Header;