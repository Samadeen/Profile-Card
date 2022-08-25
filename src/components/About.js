import mail from '../assets/Icon.png';
import link from '../assets/Link.png';

import './About.css';

const About = () => {
  return (
    <div className='profile'>
      <div className='headings'>
        <h1>Laura Smith</h1>
        <p>Front End Developer</p>
        <small>
          <a href='https://www.github.com/Samadeen'>www.github.com/Samadeen</a>
        </small>
      </div>
      <div className='buttons'>
        <button className='btn email'>
          <img src={mail} alt='email icon' />
          <a href='mailto:samadmomoh@gmail.com'>Email</a>
        </button>
        <button className='btn link'>
          <img src={link} alt='email icon' />
          LinkedIn
        </button>
      </div>
      <div className='sub_about'>
        <div>
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className='interest'>
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
