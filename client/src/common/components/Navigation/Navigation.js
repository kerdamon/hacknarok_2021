import React from 'react';

import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import { NavList, Link, LogoutButton } from './navigation.css';
import { logout } from 'state/auth/authActions';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

const Navigation = ({ isAuthentificated }) => {
  // const mobileMode = useMediaQuery('(max-width:768px)');
  // const [open, setOpen] = useState(true);

  const publicNavItems = [
    <li key={1}><Link to='/'>Home</Link></li>,
    <li key={2}><Link to='/login'>Login</Link></li>,
  ]

  const privateNavItems = [
    <li key={1}><Link to='/'>Home</Link></li>,
    <li key={4}><Link to='/offers'>Offers</Link></li>,
    <li key={5}><Link to='/profile'>Profile</Link></li>,
    <li key={3}>
      <LogoutButton 
        endIcon={<ExitToAppIcon htmlColor='white'/>}
        onClick={logout}
      >
        Logout
      </LogoutButton>
    </li>,
  ]

  const navItems = isAuthentificated ? privateNavItems : publicNavItems;

  // const lines = [<Line className="toggle"/>,
  //   <Line className="toggle"/>,
  //   <Line className="toggle"/>];

  // const handleBurgerClick = (e) => {
  //   e.preventDefault();
  //   setOpen(!open);
  // }

  return (
    <>
      <NavList>
        {navItems}
      </NavList>

      {/* { mobileMode 
        ? <MenuBurger onClick={handleBurgerClick} open={open}>
            {lines}
          </MenuBurger> 
        : null } */}
    </>
  )
}

export default Navigation;