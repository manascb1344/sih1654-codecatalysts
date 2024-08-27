import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    // <header className="border-b">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <NavigationMenu>
    //         <NavigationMenuList>
    //           <NavigationMenuItem>
    //             <Link to="/" legacyBehavior passHref>
    //               <NavigationMenuLink className="font-medium">Home</NavigationMenuLink>
    //             </Link>
    //           </NavigationMenuItem>
    //           {user && (
    //             <NavigationMenuItem>
    //               <Link to="/dashboard" legacyBehavior passHref>
    //                 <NavigationMenuLink className="font-medium">Dashboard</NavigationMenuLink>
    //               </Link>
    //             </NavigationMenuItem>
    //           )}
    //         </NavigationMenuList>
    //       </NavigationMenu>

    //       <div className="flex items-center">
    //         {user ? (
    //           <DropdownMenu>
    //             <DropdownMenuTrigger asChild>
    //               <Button variant="ghost" className="relative h-8 w-8 rounded-full">
    //                 <Avatar className="h-8 w-8">
    //                   <AvatarImage src={user.avatarUrl} alt={user.name} />
    //                   <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
    //                 </Avatar>
    //               </Button>
    //             </DropdownMenuTrigger>
    //             <DropdownMenuContent align="end">
    //               <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //               <DropdownMenuSeparator />
    //               <DropdownMenuItem asChild>
    //                 <Link to="/profile">Profile</Link>
    //               </DropdownMenuItem>
    //               <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
    //             </DropdownMenuContent>
    //           </DropdownMenu>
    //         ) : (
    //           <>
    //             <Button variant="ghost" asChild className="mr-2">
    //               <Link to="/login">Login</Link>
    //             </Button>
    //             <Button asChild>
    //               <Link to="/register">Register</Link>
    //             </Button>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </header>


    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">RAC AI Board Interview</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-[#111418] text-sm font-medium leading-normal" href="/">Home</a>
          <a className="text-[#111418] text-sm font-medium leading-normal" href="/about">About</a>
          <a className="text-[#111418] text-sm font-medium leading-normal" href="/contact-us">Contact</a>
        </nav>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1466b8] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">
              <Link to="/register">Sign up</Link>
            </span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">
              <Link to="/login">Login</Link>
            </span>
          </button>
        </div>
      </div>
    </header>


  );
};

export default Navbar;





