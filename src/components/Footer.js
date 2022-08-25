import facebook from '../assets/Facebook Icon.png';
import instagram from '../assets/Instagram Icon.png';
import twitter from '../assets/Twitter Icon.png';
import github from '../assets/GitHub Icon.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <img src={facebook} alt={'social icons'} />
        <img src={twitter} alt={'social icons'} />
        <img src={instagram} alt={'social icons'} />
        <img src={github} alt={'social icons'} />
      </div>
    </div>
  );
};

export default Footer;
