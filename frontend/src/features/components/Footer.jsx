import { Instagram, Facebook, Twitter , Mail, Phone,} from 'lucide-react'
import { PiWhatsappLogoLight, } from "react-icons/pi";
import { PiTiktokLogoThin } from "react-icons/pi";
import { useTranslation } from 'react-i18next'
export default function Footer(){
    const {t} = useTranslation()
    return(
         <footer id="footer" className="min-h-4/10  md:min-h-4/10  w-full flex bordr  border-red-900 bg-senbet-footer-bg ">
            <div className="h-full w-3/5 md:w-4/5 flex flex-col md:flex md:flex-row gap-2 bordr">
                <div className=" md:w-3/5">
                    <div className="text-heading mt-5 pl-5    text-white w-full w-fit h-fit text-start">
                      {t('app.name')}
                    </div>

                    <div className="text-white hidden  bordeborder-red-500 h-5/10 md:flex md:flex-col items-start pl-5 mt-5 w-1/2 justify-center gap-2">
                        {/* <Facebook strokeWidth={1} className="hover:fill-white"/> */}
                          <a className="hover:fill-white hover:bg-white hover:text-black text-2xl rounded-xl"
                            href="https://www.tiktok.com/@kidest0481?_t=ZN-8yeu0UIS7hG&_r=1" target='#'>
                          <PiTiktokLogoThin />
                        

                            </a>
                        <a 
                            href="https://www.instagram.com/kidest_silasie/profilecard/?igsh=YnF2NWFybDU2bzJs" target='#'>
                              <Instagram strokeWidth={1} className="hover:fill-white/50"/>
                            </a>
                        {/* <Twitter strokeWidth={1} className="hover:fill-white"/> */}
                      <a className="hover:fill-white hover:bg-white hover:text-black text-2xl rounded-xl"
                            href="https://chat.whatsapp.com/FW3kNBRh22eF7eFVwW56wl?mode=ac_t" target='#'>
                        <PiWhatsappLogoLight />
                      </a>
                        
                    </div>
                </div>

              

                <div className="flex flex-col justify-between md:justify-start md:items-center md:p-5 md:gap-3 borde border-red-900 h-4/5 md:h-full w-full  wrap-anywhere">
                    <p className="hidden md:inline
                     text-mediumheading font-light text-white w-fit border-b ">{t('app.contact')}</p>
                  <div className="md:hidden border-pink-600 text-white borde h-5/10 flex flex-col pl-10 items-center w-1/2 justify-center gap-2">
                     {/* <Facebook strokeWidth={1} className="hover:fill-white"/> */}
                   <a className="hover:fill-white hover:bg-white hover:text-black text-2xl rounded-xl"
                        href="https://www.tiktok.com/@kidest0481?_t=ZN-8yeu0UIS7hG&_r=1" target='#'>
                        <PiTiktokLogoThin />
                        </a>
                        <a 
                        href="https://www.instagram.com/kidest_silasie/profilecard/?igsh=YnF2NWFybDU2bzJs" target='#'>
                          <Instagram strokeWidth={1} className="hover:fill-white/50"/>
                        </a>
                        <Twitter strokeWidth={1} className="hover:fill-white"/>
                     <a className="hover:fill-white hover:bg-white hover:text-black text-2xl rounded-xl"
                        href="https://chat.whatsapp.com/FW3kNBRh22eF7eFVwW56wl?mode=ac_t" target='#'>
                     <PiWhatsappLogoLight />
                  </a>
                  </div>

                  <div className="text-white flex gap-2 bor min-w-full wrap-anywhere borde pl-1  md:justify-center md:pl-20 items-center h-5/10  ">
                    <div className="flex flex-col gap-1 md:gap-3   ">
                      {/* <MapPin strokeWidth={1}/> */}
                      <Phone strokeWidth={1} className="hover:fill-white" />
                      <Mail strokeWidth={1} className="hover:fill-white/50"/>
                    </div>
                    <div className="flex text-sm md:text-mediumbody-txt font-light flex-col gap-1 md:gap-3 borde "> 
                      {/* <p className="text-body-txt font-thin md:text-mediumbody-txt">123 Business</p>  */}
                      <p className="text-body-txt font-thin md:text-mediumbody-txt">+1 (555) 123-4567 </p>
                      <p className="text-body-txt font-thin md:text-mediumbody-txt"> <a href="mailto:luxembourgholytrinity@gmail.com?subject=Inquiry&body=Hello,...">luxembourgholytrinity@gmail.com</a></p>
                    </div>
                    
                  </div>
                </div>
            
            </div>
             <div className="w-2/5 md:w-1/5 h-full flex flex-col gap-3  items-end p-5 borde  border-red-900">
                <p className="text-sm md:text-mediumheading font-light text-white w-fit border-b ">{t('app.quick_links')}</p>
                <div className="text-white/90 text-mediumbody-txt font-light "><a href="#events">{t('app.events')}</a></div>
      
                <div className="text-white/90 text-mediumbody-txt font-light ">
                   <a href="#ourGoals">{t('app.goals')}</a>
                </div>
                <div className="text-white/90 text-mediumbody-txt font-light ">
                    <a href="#ourVision">{t('app.vision')}</a>
              </div>
                <div className="text-white/90 text-mediumbody-txt font-light ">
                    <a href="#heroLg">{t('app.top')}</a>
              </div>
            </div>
          </footer>
    )
}