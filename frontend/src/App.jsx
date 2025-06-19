import { useState } from 'react'
import {Button} from '@/components/ui/button'
import HeaderImg1 from './assets/ChurchWebsite/HeaderImg1.jpg'
import HeaderImg2 from './assets/ChurchWebsite/HeaderImg2.jpg'
import HeaderImg3 from './assets/ChurchWebsite/HeaderImg3.jpg'
import currentEvent from './assets/ChurchWebsite/currentEvent.jpg'
import currentEvent1 from './assets/ChurchWebsite/currentEvent1.jpg'
import currentEvent2 from './assets/ChurchWebsite/currentEvent2.jpg'
import goals from './assets/ChurchWebsite/goals.jpg'
import vision from './assets/ChurchWebsite/vision.jpg'
import {Calendar, MenuIcon,MapPin,Clock,BookOpen, CircleCheckBig, Binoculars, Instagram, Facebook, Twitter , Mail, Phone} from 'lucide-react'

function App() {
    const [mobile,setMobile] = useState(true)
  return (
    <div className="no-scrollbar max-w-screen min-h-screen h-screen bg-gradient-to-b  from-senbet-gold to-white ">
        <nav className="z-10 h-1/10 w-full fixed bg-gradient-to-r from-white/69 to-senbet-nav-gradient-gray/69 backdrop-blur-sm drop-shadow-lg drop-shadow-black/50 flex justify-between items-center px-4">
          <div className='text-title'> SELASIE </div>
         <div className="text-mediumbody-txt  gap-5 borde items-center text-background hidden md:flex">
              <a href="#events">Event</a>
              <a href="#ourGoals">Goals</a>
              <a href="#ourVision">Vision</a>
              
              <Button className=" h-1/10  "><a href="#footer">Contact Us!</a></Button>
          </div>
          <div className="md:hidden">
              <MenuIcon/>
          </div>  
          
        </nav>

        <div id="create space for the nav b/c it's fixed" className="h-1/10 w-10 bg-transparent"></div>

      <div id="Body " className=" h-full min-w-full bord border-red-500 bg-white flex flex-col gap-4"> 

          <header id="hero" className="mt-10 w-full borde border-red-400  lg:hidden lg:bg-green-80 flex flex-col gap-2 items-start p-4">

             <h1 className="text-heading text-senbet-heading-gray borde border-black w-9/10">
               welcome to Selasie Senbet Timhirt Bet
            </h1>
            <h3 className="text-subheading text-senbet-sub-heading-gray borde border-black w-4/5">
              Learn the Bible, the dogma and remarkable ways of the Orthodox Church
            </h3>

          </header>
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
            
                <div className={`bg-[url(/kidusGebrielChurch.jpg)] bg-gradinet-to-b from-senbet-event-bg/22 to-white/0 w-19/20   text-white  rounded-lg border- border-green-700 lg:h-full`}>
                
                  <div id="blureffect" className=" flex flex-col items-center xl:bg-gradient-to-r bg-gradient-to-br from-senbet-gold  rounded-lg to-senbet-event-gradient-gray/50 borde w-full p-2 lg:h-full">

                      <h2 className="text-mediumheading">Weekly Events</h2>
                      <h4 className="text-mediumbody-txt font-medium w-9/10 borde text-center">
                        Join us weekly for new and exciting lessons
                      </h4>
                      <div className="borde borde-red-400 flex gap-3  xl:gap- xl:w-full xl:min-h-8/10  h-full  items-center my-2.5">

                        

                        <div className="border- xl:w-1/4  border-red-400 flex gap-2">

                          <div className=" flex flex-col gap-1 ">
                            <Calendar size={20} strokeWidth={1.5}/>
                            <Clock size={20} strokeWidth={1.5}/>
                            <BookOpen size={20} strokeWidth={1.5}/>
                            <MapPin size={20} strokeWidth={1.5}/>
                          </div>
                          <div className=" flex flex-col gap-1 ">
                              <div className="text-body-txt ">June-16-2025</div>
                              <div className="text-body-txt">19:00 - 20:30</div>
                              <div className="text-body-txt">Mezmur Study</div>
                              <div className="text-body-txt">St Michael Church</div>
                          </div>
                        </div>
                        <div className="border- xl:w-1/4 border-red-400 flex gap-2">
                        
                          <div className=" flex flex-col gap-1 ">
                            <Calendar size={20} strokeWidth={1.5}/>
                            <Clock size={20} strokeWidth={1.5}/>
                            <BookOpen size={20} strokeWidth={1.5}/>
                            <MapPin size={20} strokeWidth={1.5}/>
                          </div>
                          <div className=" flex flex-col gap-1 ">
                              <div className="text-body-txt">June-16-2025</div>
                              <div className="text-body-txt">19:00 - 20:30</div>
                              <div className="text-body-txt">Mezmur Study</div>
                              <div className="text-body-txt">Online</div>
                          </div>

                        </div>
                        <div className="hidden xl:flex w-7/10 border- 2xl:h-full h-8/10 overflow-x-scroll snap-x rounded-md no-scrollbar ">
                            <img className="borde border-black snap-center h-full min-w-full" src={currentEvent} alt="" />
                            <img className="borde border-black snap-center h-full min-w-full" src={currentEvent2} alt="" />
                            <img className="borde border-black snap-center h-full min-w-full" src={HeaderImg1} alt="" />
                        </div>
                      </div>
                      
                      <Button className="xl:hidden w-full p-6  text-senbet-event-CTA bg-white">
                        <p className="text-cta ">View Gallery</p>
                      </Button>
                  </div>

                </div>
                <div className={`bg-[url(./public/kidusGebrielChurch.jpg)] bg-gradinet-to-b from-senbet-event-bg/22 to-white/0 w-19/20   text-white  rounded-lg border- border-green-700 lg:h-full`}>
                
                  <div id="blureffect" className=" flex flex-col items-center bg-gradient-to-br from-senbet-gold  rounded-lg to-senbet-event-gradient-gray/50 borde w-full p-2 lg:h-full">

                      <h2 className="text-mediumheading">Monthly Events</h2>
                      <h4 className="text-mediumbody-txt font-medium w-9/10 borde text-center">
                        Join us monthly for new and exciting lessons
                      </h4>
                      <div className="borde borde-red-400 flex gap-3  xl:gap- xl:w-full xl:min-h-8/10  h-full  items-center my-2.5">

                        <div className="hidden xl:flex w-7/10 border- 2xl:h-full h-8/10 overflow-x-scroll snap-x rounded-md no-scrollbar ">
                            <img className="borde border-black snap-center h-full min-w-full" src={currentEvent1} alt="" />
                            <img className="borde border-black snap-center h-full min-w-full" src={currentEvent} alt="" />
                            <img className="borde border-black snap-center h-full min-w-full" src={HeaderImg1} alt="" />
                        </div>

                        <div className="border- xl:w-1/4  border-red-400 flex gap-2">

                          <div className=" flex flex-col gap-1 ">
                            <Calendar size={20} strokeWidth={1.5}/>
                            <Clock size={20} strokeWidth={1.5}/>
                            <BookOpen size={20} strokeWidth={1.5}/>
                            <MapPin size={20} strokeWidth={1.5}/>
                          </div>
                          <div className=" flex flex-col gap-1 ">
                              <div className="text-body-txt ">June-16-2025</div>
                              <div className="text-body-txt">19:00 - 20:30</div>
                              <div className="text-body-txt">Mezmur Study</div>
                              <div className="text-body-txt">St Michael Church</div>
                          </div>
                        </div>
                        <div className="border- xl:w-1/4 border-red-400 flex gap-2">
                        
                          <div className=" flex flex-col gap-1 ">
                            <Calendar size={20} strokeWidth={1.5}/>
                            <Clock size={20} strokeWidth={1.5}/>
                            <BookOpen size={20} strokeWidth={1.5}/>
                            <MapPin size={20} strokeWidth={1.5}/>
                          </div>
                          <div className=" flex flex-col gap-1 ">
                              <div className="text-body-txt">June-16-2025</div>
                              <div className="text-body-txt">19:00 - 20:30</div>
                              <div className="text-body-txt">Mezmur Study</div>
                              <div className="text-body-txt">Online</div>
                          </div>

                        </div>
                        
                      </div>
                      <Button className="xl:hidden w-full p-6  text-senbet-event-CTA bg-white">
                        <p className="text-cta ">View Gallery</p>
                      </Button>
                  </div>

                </div>
                {/* <div className={`bg-[url(./assets/ChurchWebsite/kidusGebrielChurch.jpg)] bg-gradinet-to-b from-senbet-event-bg/22 to-white/0 w-19/20  text-white  rounded-lg border- border-green-700`}>
                
                  <div id="blureffect" className="h-full flex flex-col items-center bg-gradient-to-br from-senbet-gold  rounded-lg to-senbet-event-gradient-gray/50  w-full p-2">

                      <h2 className="text-mediumheading">Monthly Events</h2>
                      <h4 className="text-mediumbody-txt font-medium w-9/10">
                        Join us monthly for new and exciting lessons
                      </h4>
                      <div className="border- border-red-400 flex gap-3 my-2.5">
                        <div className="border- border-red-400 flex gap-2">
                          <div className=" flex flex-col gap-1 ">
                            <Calendar size={20} strokeWidth={1.5}/>
                            <Clock size={20} strokeWidth={1.5}/>
                            <BookOpen size={20} strokeWidth={1.5}/>
                            <MapPin size={20} strokeWidth={1.5}/>
                          </div>
                          <div className=" flex flex-col gap-1 ">
                              <div className="text-body-txt">June-16-2025</div>
                              <div className="text-body-txt">19:00 - 20:30</div>
                              <div className="text-body-txt">Mezmur Study</div>
                              <div className="text-body-txt">St Michael Church</div>
                          </div>
                        </div>
                        <div className="border- border-red-400 ">
                          <div className="border- border-red-400 flex gap-2">
                          <div className=" flex flex-col gap-1 ">
                            <Calendar size={20} strokeWidth={1.5}/>
                            <Clock size={20} strokeWidth={1.5}/>
                            <BookOpen size={20} strokeWidth={1.5}/>
                            <MapPin size={20} strokeWidth={1.5}/>
                          </div>
                          <div className=" flex flex-col gap-1 ">
                              <div className="text-body-txt">June-16-2025</div>
                              <div className="text-body-txt">19:00 - 20:30</div>
                              <div className="text-body-txt">Mezmur Study</div>
                              <div className="text-body-txt">Online</div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <Button className="w-full p-6 xl:text-senbet-event-CTA bg-white">
                        <p className="text-cta ">View Gallery</p>
                      </Button>
                  </div>
                </div> */}
            </div>
          </section>

          <section id="goals" className=" bg-gradient-to-b from-senbet-goals-bg/39 to-senbet-gold/20 shadow-lg flex gap-4  flex-col items-center xl:hidden py-4 min-h-7/10  w-full border  border-red-30">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Goals</h3>
              <div className="w-9/10 h-9/10 py-4 bg-white rounded-lg flex flex-col items-center gap-4 border drop-shadow-lg xl:w-1/2  md:w-full ">
                <div className="">
                  <CircleCheckBig strokeWidth={3} size={40}/>
                </div>
                <div className="w-full h-9/10  borde flex flex-col items-center gap-4 borde border-red-500 md:flex md:flex-row md:px-4  ">
                    <div className="w-8/10  h-1/2 drop-shadow-l drop-shadow-gray-400  md:w-3/5 lg:w-1/2 md:h-8/10  xl:min-h-full xl: rounded-lg  ">
                      <img  src={goals} alt="" className="w-full h-full rounded-lg" />
                    </div>
                    <div className=" p-1  w-9/10 h-1/2 md:w-2/5 lg:w-1/2  md:p-4   md:h-8/10 md:flex md:flex-col md:justify-center md:shadow-md  shadow-gray-300 overflow-y-scroll no-scrollbar rounded-md ">
                      <p className="text-mediumbody-txt leading-6 indent-2 md:text-black/90 italic font-normal text-senbet-sub-heading-gray">
                          -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people
                      </p>
                    </div>
                </div>
              </div>
          </section>
          <section id="vision" className=" bg-gradient-to-b from-senbet-goals-bg/39 to-senbet-gold/20 shadow-lg flex gap-4  flex-col items-center xl:hidden py-4 min-h-7/10  w-full border  border-red-30">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Vision</h3>
              <div className="w-9/10 h-9/10 py-4 bg-white rounded-lg flex flex-col items-center gap-4 border drop-shadow-lg xl:w-1/2  md:w-full ">
                <div className="">
                  <Binoculars strokeWidth={3} size={40}/>
                </div>
                <div className="w-full h-9/10  borde flex flex-col items-center gap-4 borde border-red-500 md:flex md:flex-row md:px-4  ">
                    <div className="w-8/10  h-1/2 drop-shadow-l drop-shadow-gray-400  md:w-3/5 lg:w-1/2 md:h-8/10  xl:h-full xl: rounded-lg  ">
                      <img  src={vision} alt="" className="w-full h-full rounded-lg" />
                    </div>
                    <div className=" p-1  w-9/10 h-1/2 md:w-2/5 lg:w-1/2  md:p-4   md:h-8/10 md:flex md:flex-col md:justify-center md:shadow-md  shadow-gray-300 overflow-y-scroll rounded-md ">
                      <p className="text-mediumbody-txt leading-6 indent-2 md:text-black/90 italic font-normal text-senbet-sub-heading-gray">
                          -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people
                      </p>
                    </div>
                </div>
              </div>
          </section>
          {/* <section id="Vision" className="gap-4 bg-gradient-to-b from-senbet-goals-bg/39 to-senbet-gold/20 drop-shadow-md xl:hidden md:bg-slate-40 lg:bg-blue-4 flex flex-col items-center py-4 min-h-7/10 ">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Vision</h3>
              <div className="w-9/10 h-9/10 py-4 bg-white rounded-lg flex flex-col items-center gap-4 border drop-shadow-lg md:w-full">
                <div className="">
                  <Binoculars strokeWidth={3} size={40}/>
                </div>
                <div className="w-8/10 md:9/10 h-1/2 rounded-lg ">
                  <img src={vision} alt="" className="rounded-lg w-full h-full" />
                </div>
                 <div className=" p-1  w-9/10 h-1/2 overflow-y-scroll rounded- ">
                  <p className="text-mediumbody-txt leading-6 indent-2 italic font-normal text-black/90">
                      -"To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people"
                  </p>
                </div>
              </div>
          </section> */}
{/* Only for XL SCREEN START */}
          <div id="ourGoals" className="hidden xl:flex xl:flex-row  xl:justify-center  bg-gradient-to-b from-senbet-goals-bg/39 to-senbet-gold/20 shadow-lg flex   py-4 min-h-9/10 w-full border  border-red-30">
               <section id="goals" className=" flex gap-4  flex-col items-center  py-4 min-h-7/10 w-1/2 borde  border-red-00">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Goals</h3>
              <div className="w-9/10 h-9/10 py-4 bg-white rounded-lg flex flex-col items-center gap-4 border drop-shadow-lg ">
                <div className="min-h-1/10 boder">
                  <CircleCheckBig strokeWidth={3} size={40}/>
                </div>
                <div className="w-full h-9/10  borde flex flex-col items-center gap-4 borde borde-red-500 ">
                    <div className="w-8/10  h-1/2 drop-shadow-xl drop-shadow-gray-400   rounded-lg borde ">
                      <img  src={goals} alt="" className="w-full max-h-full rounded-lg" />
                    </div>
                    <div className=" p-1  w-9/10 h-2/5  overflow-y-scroll no-scrollbar rounded-md borde borde-blue-500 ">
                      <p className="text-mediumbody-txt leading-6 indent-2  text-senbet-sub-heading-gray">
                          -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people
                      </p>
                    </div>
                </div>
              </div>
          </section>
          <section id="ourVision" className="gap-4  flex flex-col items-center py-4 min-h-7/10 w-1/2">
              <h3 className="text-mediumheading text-senbet-goals-header">Our Vision</h3>
              <div className="w-9/10 h-9/10 py-4 bg-white rounded-lg flex flex-col items-center gap-4 borde drop-shadow-lg ">
                <div className="min-h-1/10 borde">
                  <Binoculars strokeWidth={3} size={40}/>
                </div>
                <div className="w-full h-9/10  borde flex flex-col items-center gap-4 borde borde-red-500 ">

                  <div className="w-8/10 h-1/2 drop-shadow-xl drop-shadow-gray-400 rounded-lg borde-red-500 borde ">
                    <img src={vision} alt="" className="rounded-lg w-full h-full" />
                  </div>
                  <div className=" p-1  w-9/10 h-2/5 overflow-y-scroll no-scrollbar rounded- borde-red-500 borde ">
                    <p className="text-mediumbody-txt leading-6 indent-2 text-senbet-sub-heading-gray">
                        -To ensure that the dogma, canon, faith    and system oof the Ethiopian Orthodox Tewahedo Church are preserved and transmitted from generation to ggeneration without being corrupted or revised.<br/> -To ensure that every believer who is a follower of the church knows and understands the religious system in detail.<br/> -To ensure that young people learn the laws and systems of the church and become useful, good and morally upright citizens for the country and the people
                    </p>
                  </div>
                </div>
              </div>
          </section>
          </div>
{/* Only for XL SCREEN END */}
          <footer id="footer" className="min-h-4/10 w-full flex   bg-senbet-footer-bg ">
            <div className="h-full  w-3/5 flex flex-col gap-2 borde">

              <div className="text-heading mt-5 ml-5 m  text-white w-fit h-fit text-start">
                SELASIE
              </div>

              

                <div className="flex flex-col justify-between borde h-4/5 w-full">
                  <div className="text-white borde h-5/10 flex flex-col pl-10 items-start justify-center gap-2">
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                  </div>

                  <div className="text-white flex gap-2 borde items-center h-5/10 w-100 ">
                    <div className="flex flex-col gap-2 ">
                      <MapPin/>
                      <Phone/>
                      <Mail/>
                    </div>
                    <div className="flex flex-col gap-2 "> 
                      <p>123 Business Street, City, Country</p> 
                      <p>+1 (555) 123-4567 </p>
                      <p>info@yourbusiness.com</p>
                    </div>
                    
                  </div>
                </div>
            
            </div>
             <div className="w-2/5 h-full flex flex-col gap-3  max-h-1/2 py-5 brder">
                <p className="text-mediumheading font-medium text-white w-fit border-b ">Quick links</p>
                <div className="text-white/90 text-subheading font-light "><a href="#events">Event</a></div>
      
                <div className="text-white/90 text-subheading font-light ">
              <a href="#ourGoals">Goals</a>
                </div>
                <div className="text-white/90 text-subheading font-light ">
              <a href="#ourVision">Vision</a>
              </div>
                <div className="text-white/90 text-subheading font-light ">
              <a href="#heroLg">Up</a>
              </div>
              </div>
          </footer>
      </div>
    </div>
  )
}
// ስላሴ

export default App
