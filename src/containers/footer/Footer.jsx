import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear();

  const footer_links = [
    {
      group: 'Links',
      content: [
        'Overons',
        'Social Media',
        'Counters',
        'Content'
      ]
    },
    {
      group: 'Company',
      content: [
        'Terms & Conditions',
        'Privacy Policy',
        'Contact'
      ]
    },
    {
      group: 'Get in Touch',
      content: [
        'Crechterwoord K12 182 DK Alknjkcb',
        '085-132567',
        'info@payme.net'
      ],
    }
  ]

  return (

    <div className='gpt3__footer-container'>
      <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>
            Do you want to step in to the future before others?
          </h1>
        </div>

        <div className='gpt3__footer-btn'>
          <p>Resquest Early Acess</p>
        </div>

        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt='GPT-3 Logo'/>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          {footer_links.map((item, index) => (
            <div className='gpt3__footer-links_div'>
              <h4>{item.group}</h4>
              {footer_links[index].content.map((link, indexLink) => (
                <p key={indexLink}>{link}</p>
              ))}
            </div>
          ))}
        </div>

        <div className='gpt3__footer-copyright'>
          <p>© {year} GPT-3. All right reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;