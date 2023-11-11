import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import PinterestImg from '../images/pinterest.png';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'CHAT APP',
    desc: 'Technologies Used: React.js, Express, Node.js, MongoDb.',
    link: 'https://chatappmini.vercel.app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'MY PERSONAL WEBSITE',
    desc: 'Technologies Used: Html, css and javascript.',
    link: 'http://mypersonalminiwebsite.vercel.app/',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'PINTEREST CLONE',
    desc:
      'Technologies Used: React.js, sanity.io.',
    link: 'https://pinterestcloneapp.vercel.app/login',
    img: PinterestImg,
  },
  {
    id: uuidv4(),
    name: "project 4",
    desc:
      'upcomming project.',
    link: '',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'project 5',
    desc:
      'upcomming project.',
    link: '',
    img: ProjectImg,
  },
];

export default projects;