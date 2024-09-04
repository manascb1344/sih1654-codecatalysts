import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Menu, Home, Info, Mail, LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const { user, signout, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignout = () => {
    signout();
    navigate('/');
  };

  if (loading) return null;

  return (
    <header className="bg-gray-800 shadow-md text-gray-100 px-4 py-3 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://rac.gov.in/images/rac_logo_2019.png"
            alt="RAC-DRDO Logo"
            className="h-10"
          />
          <h2 className="text-gray-100 text-2xl font-bold">ProFind</h2>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" icon={<Home size={18} />} text="Home" />
          <NavLink href="/about" icon={<Info size={18} />} text="About" />
          <NavLink href="/contact-us" icon={<Mail size={18} />} text="Contact us" />
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <UserMenu user={user} handleSignout={handleSignout} />
          ) : (
            <AuthButtons />
          )}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="text-gray-800" />
          </Button>
        </div>
      </div>

      {isMenuOpen && <MobileMenu user={user} handleSignout={handleSignout} />}
    </header>
  );
};

const NavLink = ({ href, icon, text }) => (
  <a className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors" href={href}>
    {icon}
    {text}
  </a>
);

const UserMenu = ({ user, handleSignout }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatarUrl || ''} alt={user.name || 'User'} />
          <AvatarFallback>{user.name ? user.name.charAt(0) : 'U'}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link to={`/${user.role}/profile`} className="flex items-center gap-2">
          <User size={16} />
          Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleSignout} className="flex items-center gap-2">
        <LogOut size={16} />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const AuthButtons = () => (
  <>
    <Link to="/login">
      <Button variant="outline" className="flex bg-gray-800 items-center gap-2">
        <LogIn size={18} />
        Login
      </Button>
    </Link>
    <Link to="/register">
      <Button variant="default" className="flex bg-black items-center gap-2">
        <UserPlus size={18} />
        Sign Up
      </Button>
    </Link>
  </>
);

const MobileMenu = ({ user, handleSignout }) => (
  <nav className="flex flex-col md:hidden items-start gap-4 mt-4">
    <NavLink href="/" icon={<Home size={18} />} text="Home" />
    <NavLink href="/about" icon={<Info size={18} />} text="About" />
    <NavLink href="/contact-us" icon={<Mail size={18} />} text="Contact us" />
    {user ? (
      <button onClick={handleSignout} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
        <LogOut size={18} />
        Logout
      </button>
    ) : (
      <AuthButtons />
    )}
  </nav>
);

export default Navbar;