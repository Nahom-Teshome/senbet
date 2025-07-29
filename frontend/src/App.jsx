import { useState } from 'react'
import {Button} from '@/components/ui/button'
import HeaderImg1 from './assets/ChurchWebsite/HeaderImg1.jpg'
import HeaderImg2 from './assets/ChurchWebsite/HeaderImg2.jpg'
import HeaderImg3 from './assets/ChurchWebsite/HeaderImg3.jpg'
import currentEvent from './assets/ChurchWebsite/currentEvent.jpg'
import currentEvent1 from './assets/ChurchWebsite/currentEvent1.jpg'
import currentEvent2 from './assets/ChurchWebsite/currentEvent2.jpg'

import Event from './features/components/Event'
import GoalsVision from './features/components/GoalsVision'
import goals from './assets/ChurchWebsite/goals.jpg'
import vision from './assets/ChurchWebsite/vision.jpg'
import Nav from './features/components/Nav'
import Footer from './features/components/Footer'
import Hero from './features/components/Hero'
import {Calendar, MenuIcon,MapPin,Clock,BookOpen, CircleCheckBig, Binoculars, Instagram, Facebook, Twitter , Mail, Phone} from 'lucide-react'

function App() {
   
  return (
    <div className="no-scrollbar max-w-screen min-h-screen h-screen bg-gradient-to-b   from-senbet-gold to-white ">
       
        <Nav/>
        <div id="create space for the nav b/c it's fixed" className="h-2/25 sm:h-1/10 w-full bg-transparent p-0 m-0"></div>

      <div id="Body " className=" h-full min-w-full bord border-red-500 bg-white flex flex-col gap-4"> 
          <Hero/>
         
{/* Only For LG screen START */}
            <div id="heroLg" className="min-h-2/3 w-full hidden lg:flex lg:flex-row lg:justify-center gap-3  p-2 bg-white boder  brder-red-600">
              <header className="mt-10 w-2/5  boder border-red-400  md:bg-slate-00 lg:bg-green-00 flex flex-col gap-2 items-start p-4 ">

                <h1 className="text-heading leading-15  text-5xl text-senbet-heading-gray borde border-black w-9/10">
                  welcome to Selasie Senbet Timhirt Bet
                </h1>
                <h3 className="text-subheading text-senbet-sub-heading-gray borde border-black w-4/5">
                  Learn the Bible, the dogma and remarkable ways of the Orthodox Church
                </h3>

          </header>

           <section className= "mt-10 w-3/5  min-h-5/20 brder border-red-400 flex overflow-x-scroll scroll-smooth no-scrollbar snap-x  rounded-lg">
            <img className="borde border-black snap-center h-full min-w-full rounded-lg" src={HeaderImg1} alt="" />
            <img className="borde border-black snap-center h-full min-w-full rounded-lg" src={HeaderImg2} alt="" />
            <img className="borde border-black snap-center h-full min-w-full rounded-lg" src={HeaderImg3} alt="" />
           
          </section>
            </div>
{/* Only For LG screen END */}
          <section className="w-full sm:min-h-1/2 min-h-5/20 bordr lg:hidden flex overflow-x-scroll scroll-smooth snap-x gap-10">
            <img className="borde border-black snap-center h-full min-w-full" src={HeaderImg1} alt="" />
            <img className="borde border-black snap-center h-full min-w-full" src={HeaderImg2} alt="" />
            <img className="borde border-black snap-center h-full min-w-full" src={HeaderImg3} alt="" />
            <img className="borde border-black snap-center h-full min-w-full rounded-lg" src={currentEvent} alt="" />
            <img className="borde border-black snap-center h-full min-w-full rounded-lg" src={currentEvent1} alt="" />
            <img className="borde border-black snap-center h-full min-w-full rounded-lg" src={currentEvent2} alt="" />
          </section>

          <section id="events" className="w-full  xl:min-h-2/3 xl: py-4 border- border-blue-400 flex flex-col items-center gap-5 ">
            <div className=" w-full text-center flex flex-col gap-1 borde border-gray-700">

              <h2 className="text-heading text-senbet-gold border- border-red-400  ">
                Current Events
              </h2>

              <h4 className="text-subheading text-senbet-sub-heading-gray border- border-red-400">
                stay updated with all our events
              </h4>

            </div>

            <div className="w-full flex flex-col items-center gap-5 sm:gap-2 sm:flex sm:flex-row sm:px-2  xl:min-h-8/10 xl:w-9/10 xl:gap-10 border- border-blue-400">
            <Event
              title={'Weekly Events'}
              sub_title={'Join us weekly for new and exciting lessons'}
              time={'19:00 - 20:30'}
              subject={'Mezmur Study'}
              date={'June-16-2025'}
            />

                <Event
              title={'Monthly Events'}
              sub_title={'Join us monthly for new and exciting lessons'}
              time={'19:00 - 20:30'}
              subject={'Mezmur Study'}
              date={'June-16-2025'}
            />
                
               
            </div>
          </section>

          <section id="goals" className=" bg-gradient-to- from-senbet-goals-bg/39 to-senbet-gold/20 shadow-l flex gap-4  flex-col items-center md:hidden py-4 min-h-7/10  w-full borde  border-red-30">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Goals</h3>
              
              <GoalsVision
                icon={'goals'}
                text=" -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people"
                
              />
          </section>
          <section id="vision" className=" bg-gradient-to- from-senbet-goals-bg/39 to-senbet-gold/20 shadow-l flex gap-4  flex-col items-center md:hidden py-4 min-h-7/10  w-full borde  border-red-30">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Vision</h3>
            
              <GoalsVision
                icon={'vision'}
                text={" -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people"}
              />
          </section>
       
{/* Only for XL SCREEN START */}
          <div id="ourGoals" className="hidden md:flex md:flex-row  md:justify-center md:gap-2 bg-gradient-to- from-senbet-goals-bg/39 to-senbet-gold/20 inset-shadow-lg flex   py-4 min-h-7/10 w-full borde  border-red-00">
               <section id="goals" className=" flex gap-4  flex-col items-center justify-center py-4 min-h-7/10 w-1/2 borde border-red-700">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Goals</h3>
             
              <GoalsVision
                text=" -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people"
                icon={'goals'}
              />
          </section>
          <section id="ourVision" className="gap-4 justify-center flex flex-col items-center
            py-4 min-h-7/10 w-1/2">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Vision</h3>
             
              <GoalsVision
                text="-To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people"
                icon={'vision'}
              />
          </section>
          </div>
{/* Only for XL SCREEN END */}

          <Footer/>
         
      </div>
    </div>
  )
}
// ስላሴ

export default App
