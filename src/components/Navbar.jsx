import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (!loading) {
      setIsLoaded(true);
    }
  }, [loading]);

  if (!isLoaded) {
    return null; 
  }

  return (
    <header className="border-b border-solid border-b-[#f0f2f4] px-4 py-3 md:px-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">RAC AI Board Interview</h2>
          </div>
          <div className="md:hidden">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
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
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu />
              </Button>
            )}
          </div>
        </div>
        <div className={`flex-col md:flex-row md:flex md:flex-1 md:justify-end md:gap-8 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-9 mt-4 md:mt-0">
            <a className="text-[#111418] text-sm font-medium leading-normal" href="/">Home</a>
            <a className="text-[#111418] text-sm font-medium leading-normal" href="/about">About</a>
            <a className="text-[#111418] text-sm font-medium leading-normal" href="/contact-us">Contact</a>
          </nav>
          <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
            {user ? (
              <a className="text-[#111418] text-sm font-medium leading-normal" href="/" onClick={logout}>Logout</a>
            ) : (
              <>
                <Button variant="ghost" asChild className="justify-start md:justify-center">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="justify-start md:justify-center w-full">
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;