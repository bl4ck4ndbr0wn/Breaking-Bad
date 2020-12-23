import CharacterDescription from './pages/Character/CharacterDescription/CharacterDescription';
import Home from './pages/Home/Home';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/characters/:id',
    name: 'Character Description',
    component: CharacterDescription,
  },
];
export default routes;
