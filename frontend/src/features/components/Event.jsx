import React from 'react'
import currentEvent from '../../assets/ChurchWebsite/currentEvent.jpg'
// import currentEvent1 from './assets/ChurchWebsite/currentEvent1.jpg'
import currentEvent2 from '../../assets/ChurchWebsite/currentEvent2.jpg'
import HeaderImg1 from '../../assets/ChurchWebsite/HeaderImg1.jpg'
import {Calendar,Link,MenuIcon,MapPin,Clock,BookOpen, CircleCheckBig, Binoculars, Instagram, Facebook, Twitter , Mail, Phone} from 
'lucide-react'
import {Button} from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
export default function Event({title,sub_title,eventDetails,time,subject,date,link}){
    
    const {t} = useTranslation()
    return(
        <>
        
                <div className={`bg-[url(./public/kidusGebrielChurch.jpg)] bg-gradinet-to-b from-senbet-event-bg/22 to-white/0 w-19/20   text-white  rounded-lg border- border-green-700 lg:h-full`}>
                
                  <div id="blureffect" className=" flex flex-col items-center xl:bg-gradient-to-r bg-gradient-to-br from-senbet-gold  rounded-lg to-senbet-event-gradient-gray/50 borde w-full p-2 lg:h-full">

                      <h2 className="text-mediumheading">{title}</h2>
                      <h4 className="text-mediumbody-txt font-medium w-9/10 borde text-center">
                        {sub_title}
                      </h4>
                      <div className="borde borde-red-400 flex gap-3 direction-reverse xl:gap- xl:w-full xl:min-h-8/10  h-full  items-center my-2.5">

                        

                        {
                          eventDetails.map((event,i)=>{
                            return(
                               <div className="border- xl:w-2/4 xl:text-black/60 border-red-400 flex gap-2"
                                    key={i}>

                                  <div className=" flex flex-col xl:gap-3 gap-1 ml-auto ">
                                    <Calendar size={20} strokeWidth={2.5}/>
                                    <Clock size={20} strokeWidth={2.5}/>
                                    <BookOpen size={20} strokeWidth={2.5}/>
                                    <Link size={20} strokeWidth={2.5}/>
                                  </div>
                                  <div className=" flex flex-col xl:gap-3 gap-1 mr-auto">
                                      <div className="text-body-txt ">{event.date}</div>
                                      <div className="text-body-txt">{event.time}</div>
                                      <div className="text-body-txt">{event.subject}</div>
                                      <div className="text-body-txt">{event.link}</div>
                                  </div>
                        </div>
                            )
                          })
                         }

                        <div className={`hidden xl:flex   ${eventDetails.length > 0 ? ' w-full':'w-7/10'} border- 2xl:h-full h-8/10 overflow-x-scroll snap-x snap-mandatory rounded-md no-scrollbar `}>
                            <img className="borde border-black snap-center h-full min-w-full object-cover" src={currentEvent} alt="" />
                            <img className="borde border-black snap-center h-full min-w-full object-cover" src={currentEvent2} alt="" />
                            <img className="borde border-black snap-center h-full min-w-full object-cover object-center" src={HeaderImg1} alt="" />
                        </div>
                      </div>
                      
                      <Button className="xl:hidden w-full p-6  text-senbet-event-CTA bg-white">
                        <a href="#hero" className="text-cta ">{t('app.events.gallery')}</a>
                      </Button>
                  </div>

                </div>
        </>
    )
}
    {/* <div className="border- xl:w-1/4 border-red-400 flex gap-2">
    
      <div className=" flex flex-col gap-1 ">
        <Calendar size={20} strokeWidth={1.5}/>
        <Clock size={20} strokeWidth={1.5}/>
        <BookOpen size={20} strokeWidth={1.5}/>
        <MapPin size={20} strokeWidth={1.5}/>
      </div>
      <div className=" flex flex-col gap-1 ">
          <div className="text-body-txt">{date}</div>
          <div className="text-body-txt">{time}</div>
          <div className="text-body-txt">{subject}</div>
          <div className="text-body-txt">Online</div>
      </div>

    </div> */}