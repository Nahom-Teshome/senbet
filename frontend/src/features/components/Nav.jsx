import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Calendar, MenuIcon,MapPin,Clock,BookOpen, CircleCheckBig, Binoculars, Instagram, Facebook, Twitter , Mail, Phone} from 'lucide-react'
export default function Nav(){
    return(
             <nav className="z-10 h-1/10 w-full top-0 fixed bg-gradient-to-r from-white/69 to-senbet-nav-gradient-gray/69 backdrop-blur-sm drop-shadow-lg drop-shadow-black/50 flex justify-between items-center px-4">
          <div className='text-title'> SELASIE </div>
         <div className="text-mediumbody-txt  gap-5 borde items-center text-background hidden md:flex">
              <a href="#events">Event</a>
              <a href="#ourGoals">Goals</a>
              <a href="#ourVision">Vision</a>
              
              <Button className=" h-1/10  "><a href="#footer">Contact Us!</a></Button>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon/>
                </DropdownMenuTrigger> 
                <DropdownMenuContent>
                    <DropdownMenuItem><a href="#events">Event</a></DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem> <a href="#goals">Goals</a></DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem><a href="#vision">Vision</a></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>  
          
        </nav>
    
    )
}