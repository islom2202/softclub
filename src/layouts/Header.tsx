import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/courses'>Courses</NavLink>
      <NavLink to='/news'>News</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </div>
  )
}
