import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'CHAT APP',
    desc:
      'Developed my app implementing MERN full stack development. visit: https://chatappmini.herokuapp.com/',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'MY PERSONAL WEBSITE',
    desc:
      'Html, css and javascript using to create my portfolio website. visit: http://mypersonalminiwebsite.herokuapp.com/',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'project 3',
    desc:
      'upcomming project.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "project 4",
    desc:
      'upcomming project.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'project 5',
    desc:
      'upcomming project.',
    img: ProjectImg,
  },
];

export default projects;