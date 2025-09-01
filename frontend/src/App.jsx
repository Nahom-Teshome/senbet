import { useState, useEffect} from 'react'

import HeaderImg1 from './assets/ChurchWebsite/HeaderImg1.jpg'
import HeaderImg2 from './assets/ChurchWebsite/HeaderImg2.jpg'
import HeaderImg3 from './assets/ChurchWebsite/HeaderImg3.jpg'
import HeaderImg4 from './assets/ChurchWebsite/HeaderImg4.jpg'
import HeaderImg5 from './assets/ChurchWebsite/HeaderImg5.jpg'
import HeaderImg6 from './assets/ChurchWebsite/HeaderImg6.jpg'
import HeaderImg7 from './assets/ChurchWebsite/HeaderImg7.jpg'
import HeaderImg8 from './assets/ChurchWebsite/HeaderImg8.jpg'
import HeaderImg9 from './assets/ChurchWebsite/HeaderImg9.jpg'
import currentEvent from './assets/ChurchWebsite/currentEvent.jpg'
import currentEvent1 from './assets/ChurchWebsite/currentEvent1.jpg'
import currentEvent2 from './assets/ChurchWebsite/currentEvent2.jpg'

import Event from './features/components/Event'
import GoalsVision from './features/components/GoalsVision'
import Carousel from './features/components/Carousel'
import Nav from './features/components/Nav'
import Footer from './features/components/Footer'
import Hero from './features/components/Hero'
import { useTranslation } from 'react-i18next'

function App() {

    const [isMobile,setIsMobile] = useState(window.innerWidth >= 1024)
  
    const {t} = useTranslation()
    const headerImages = [HeaderImg1
                          ,HeaderImg2
                          ,HeaderImg4
                          ,HeaderImg5
                          ,HeaderImg6
                          ,HeaderImg7
                          ,HeaderImg8
                          ,HeaderImg9
                          ,HeaderImg3]
    const headerCarouselImg =[...headerImages,headerImages[0]]
    const mdHeaderCarouselImg =[...headerImages,currentEvent,currentEvent1,currentEvent2,headerImages[0]]//FOR MEDIUM SCREENS
      useEffect(()=>{
            const handleResize = ()=>{
              setIsMobile(  window.innerWidth >= 1024 )
            }

            window.addEventListener('resize',handleResize)

            return ()=>{window.removeEventListener('resize', handleResize)}
        },[])
        
  return (
    <div className="no-scrollbar max-w-screen min-h-screen h-screen bg-gradient-to-b   from-senbet-gold to-white ">
       
        <Nav isMobile={isMobile}/>
        <div id="create space for the nav b/c it's fixed" className="h-2/25 sm:h-1/10 w-full bg-transparent p-0 m-0"></div>

      <div id="Body" className=" h-full min-w-full bord border-red-500 bg-white flex flex-col gap-4"> 
          <Hero/>
         
{/* Only For LG screen START */}
            <div id="heroLg" className="min-h-2/3 w-full hidden lg:flex lg:flex-row lg:justify-center gap-3  p-2 bg-white boder  brder-red-600">
              <header className="mt-10 w-2/5  boder border-red-400  md:bg-slate-00 lg:bg-green-00 flex flex-col gap-2 items-start p-4 ">

                <h1 className="text-heading leading-15  text-5xl text-senbet-heading-gray borde border-black w-9/10">
                  {t('app.title')}
                </h1>
                <h3  className="text-subheading text-senbet-sub-heading-gray borde border-black w-4/5">
                 {t('app.sub_title')}
                </h3>

          </header>
              {isMobile?   <Carousel imgArray={headerCarouselImg}  isMobile={isMobile}/>:null}
                
            </div>
{/* Only For LG screen END */}
        
         {!isMobile? <Carousel imgArray={mdHeaderCarouselImg} isMobile={isMobile}/>:null}

          <section id="events" className="w-full  xl:min-h-2/3 xl: py-4 border- border-blue-400 flex flex-col items-center gap-5 ">
            <div className=" w-full text-center flex flex-col gap-1 borde border-gray-700">

              <h2 className="text-heading text-senbet-gold border- border-red-400  ">
                {t('app.event.title')}
              </h2>

              <h4 className="text-subheading text-senbet-sub-heading-gray border- border-red-400">
                {t('app.event.sub_title')}
              </h4>

            </div>

            <div className="w-full flex flex-col items-center gap-5 sm:gap-2 sm:flex sm:flex-row sm:px-2  xl:min-h-8/10 xl:w-9/10 xl:gap-10 border- border-blue-400">
            <Event
              title={t('app.event.week.title')}
              sub_title={t('app.event.week.sub_title')}
              eventDetails={[{
                time:t('app.week_time'),
                subject:t('app.week_session'),
                date:t('app.week_date'),
                link:t('app.week_link')
              },
              {
                time:t('app.week_time1'),
                subject:t('app.week_session1'),
                date:t('app.week_date1'),
                link:t('app.week_link1')
              }
          ]}
              
            />

                <Event
              title={t('app.event.month.title')}
              sub_title={t('app.event.month.sub_title')}
              eventDetails={[{
                time:t('app.month_time'),
                subject:t('app.month_session'),
                date:t('app.month_date'),
                link:t('app.month_link')
              }]}
             
            />
                
               
            </div>
          </section>

          <section id="goals" className=" bg-gradient-to- from-senbet-goals-bg/39 to-senbet-gold/20 shadow-l flex gap-4  flex-col items-center md:hidden py-4 min-h-7/10  w-full borde  border-red-30">
              <h3 className="text-mediumheading text-senbet-goals-header">{t('app.goal_title')}</h3>
              
              <GoalsVision
                icon={'goals'}
               
                text={t('app.goal_content')}
                
              />
          </section>
          <section id="vision" className=" bg-gradient-to- from-senbet-goals-bg/39 to-senbet-gold/20 shadow-l flex gap-4  flex-col items-center md:hidden py-4 min-h-7/10  w-full borde  border-red-30">
              <h3 className="text-mediumheading text-senbet-goals-header">{t('app.vision_title')}</h3>
            
              <GoalsVision
                icon={'vision'}
                text={t('app.vision_content')}
              />
          </section>
       
{/* Only for XL SCREEN START */}
          <div id="ourGoals" className="hidden md:flex md:flex-row  md:justify-center md:gap-2 bg-gradient-to- from-senbet-goals-bg/39 to-senbet-gold/20 inset-shadow-lg flex   py-4 min-h-7/10 w-full borde  border-red-00">
               <section id="goals" className=" flex gap-4  flex-col items-center justify-center py-4 min-h-7/10 w-1/2 borde border-red-700">
              <h3 className="text-mediumheading text-senbet-goals-header">{t('app.goal_title')}</h3>
             
              <GoalsVision
                text={t('app.goal_content')}
                icon={'goals'}
              />
          </section>
          <section id="ourVision" className="gap-4 justify-center flex flex-col items-center
            py-4 min-h-7/10 w-1/2">
              <h3 className="text-mediumheading text-senbet-goals-header">{t('app.vision_title')}</h3>
             
              <GoalsVision
                text={t('app.vision_content')}
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
