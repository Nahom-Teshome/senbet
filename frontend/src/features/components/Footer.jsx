import {Calendar, MenuIcon,MapPin,Clock,BookOpen, CircleCheckBig, Binoculars, Instagram, Facebook, Twitter , Mail, Phone} from 'lucide-react'

export default function Footer(){
    return(
         <footer id="footer" className="min-h-4/10 md:min-h-3/10 w-full flex bordr  border-red-900 bg-senbet-footer-bg ">
            <div className="h-full w-3/5 md:w-4/5 flex flex-col md:flex md:flex-row gap-2 bordr">
            <div>
              <div className="text-heading mt-5 ml-5 m  text-white w-fit h-fit text-start">
                SELASIE
              </div>
             <div className="text-white hidden  borde h-5/10 md:flex md:flex-col items-center justify-center gap-2">
                    <Facebook strokeWidth={1}/>
                    <Instagram strokeWidth={1}/>
                    <Twitter strokeWidth={1}/>
                  </div>
            </div>

              

                <div className="flex flex-col justify-between md:justify-start md:items-center md:p-5 md:gap-3 borde borde-red-900 h-4/5 md:h-full w-full  wrap-anywhere">
                    <p className="hidden md:inline
                     text-mediumheading font-light text-white w-fit border-b ">Contacts</p>
                  <div className="md:hidden text-white borde h-5/10 flex flex-col pl-10 items-start justify-center gap-2">
                    <Facebook strokeWidth={1}/>
                    <Instagram strokeWidth={1}/>
                    <Twitter strokeWidth={1}/>
                  </div>

                  <div className="text-white flex gap-2 bor min-w-full wrap-anywhere borde pl-1  md:justify-center md:pl-20 items-center h-5/10  ">
                    <div className="flex flex-col gap-1 md:gap-3   ">
                      <MapPin strokeWidth={1}/>
                      <Phone strokeWidth={1} />
                      <Mail strokeWidth={1}/>
                    </div>
                    <div className="flex text-sm md:text-mediumbody-txt font-light flex-col gap-1 md:gap-3 borde "> 
                      <p className="text-body-txt font-thin md:text-mediumbody-txt">123 Business</p> 
                      <p className="text-body-txt font-thin md:text-mediumbody-txt">+1 (555) 123-4567 </p>
                      <p className="text-body-txt font-thin md:text-mediumbody-txt">info@yourbusiness.com</p>
                    </div>
                    
                  </div>
                </div>
            
            </div>
             <div className="w-2/5 md:w-1/5 h-full flex flex-col gap-3  items-end p-5 borde  border-red-900">
                <p className="text-sm md:text-mediumheading font-light text-white w-fit border-b ">Quick links</p>
                <div className="text-white/90 text-mediumbody-txt font-light "><a href="#events">Event</a></div>
      
                <div className="text-white/90 text-mediumbody-txt font-light ">
                   <a href="#ourGoals">Goals</a>
                </div>
                <div className="text-white/90 text-mediumbody-txt font-light ">
                    <a href="#ourVision">Vision</a>
              </div>
                <div className="text-white/90 text-mediumbody-txt font-light ">
                    <a href="#heroLg">Top</a>
              </div>
            </div>
          </footer>
    )
}