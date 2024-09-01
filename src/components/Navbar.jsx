import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
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
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (loading) {
    return null;
  }

  return (
    <header className="bg-black text-white px-4 py-3 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://rac.gov.in/images/rac_logo_2019.png"
            alt="RAC-DRDO Logo"
            className="h-10"
          />
          <h2 className="text-white text-4xl font-bold">ProFind</h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-white hover:text-gray-300" href="/">
            Home
          </a>
          <a className="text-white hover:text-gray-300" href="/about">
            About
          </a>
          <a className="text-white hover:text-gray-300" href="/contact-us">
            Contact us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login" className="group relative">
                <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <button className="relative bg-red-600 text-white px-6 py-2 font-bold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200">
                  Login
                </button>
              </Link>

              <Link to="/register" className="group relative">
                <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <button className="relative bg-red-600 text-white px-6 py-2 font-bold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="text-white" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col md:hidden items-start gap-4 mt-4">
          <a className="text-white" href="/">
            Home
          </a>
          <a className="text-white" href="/about">
            About
          </a>
          <a className="text-white" href="/contact-us">
            Contact us
          </a>
          {user ? (
            <a className="text-white" href="/" onClick={logout}>
              Logout
            </a>
          ) : (
            <>
              <Link to="/login" className="group relative">
                <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <button className="relative bg-red-600 text-white px-6 py-2 font-bold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200">
                  Login
                </button>
              </Link>
              <Link to="/register" className="group relative">
                <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <button className="relative bg-red-600 text-white px-6 py-2 font-bold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200">
                  Signup
                </button>
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
