import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ajith</h1>
          <PText>
            
          A  web designer and developer from Tamilnadu. I always make websites that have unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+917395858781',
                path: 'tel:+917395858781',
              },
              {
                title: 'ajith737353@gmail.com',
                path: 'mailto:ajith737353@gmail.com',
              },
              {
                title: '3/169 Sellappam Palayam, Udumalpet, Tiruppur, Tamil Nadu-642207.',
                path: 'https://www.google.com/maps/@10.5606649,77.0853739,15z',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'linkedin',
                path: 'https://www.linkedin.com/mwlite/in/ajith-d-77252010a',
              },
              {
                title: 'github',
                path: 'https://github.com/ajith73',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/__.ajithx._/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Ajith | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="#">
              web ajith
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}