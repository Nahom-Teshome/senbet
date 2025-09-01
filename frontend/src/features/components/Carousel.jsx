import React,{useEffect, useState,useRef} from 'react'
import {Button} from '@/components/ui/button'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Carousel ({imgArray, isMobile}){
    const [switcher, setSwitcher] = useState({left:true,right:true})
        const carouselRef = useRef(null)
        const carouselRefMobile = useRef(null)
        const [mouseInCarousel, setMouseInCarousel] = useState(false)
      
        const intervalRef = useRef(null)

      
         const handleNext =()=>{
        
             
              if (carouselRef.current){
        
                const slideWidth = carouselRef.current.offsetWidth
                carouselRef.current.scrollLeft += slideWidth
                  carouselRef.current.scrollLeft + slideWidth >= slideWidth * 8 ? setSwitcher( prev=> ({left:true,right:false})) : setSwitcher(prev=> ({left:true,right:true}))
                //   console.table('carouselRef.current: ',carouselRef.current.scrollLeft )
                //   console.table('\n slideWidth: ',slideWidth )
                }
          
            }
            
            const handlePrevious =()=>{
              
             if (carouselRef.current){
                const slideWidth = carouselRef.current.offsetWidth
                // console.table('carouselRef.current before: ',carouselRef.current.scrollLeft)
                carouselRef.current.scrollLeft -= slideWidth
                 carouselRef.current.scrollLeft - (slideWidth*2) <= 0 ? setSwitcher( prev=> ({right:true,left:false})) : setSwitcher(prev=> ({right:true,left:true}))
                //  console.table('carouselRef.current after: ',carouselRef.current.scrollLeft,'\n slideWidth: ',slideWidth )
              }
           
            }
              const autoScroll = (caller) =>{
                  
                  const slideWidth = carouselRef.current?.offsetWidth
                  if (carouselRef.current){
                    // console.count('AutoScroll Counter')
                    if(carouselRef.current?.scrollLeft + slideWidth >= (slideWidth * 9)){
                          setTimeout(() => {
                            if (carouselRef.current) {
                              carouselRef.current.scrollLeft = 0;
                              carouselRef.current.style.scrollBehavior = 'smooth'; // Temporarily disable smooth scroll
                            }
                          }, 1000);
                        }
                        else {
                          
                          carouselRef.current.scrollLeft += slideWidth
                          carouselRef.current.scrollLeft + slideWidth >= slideWidth * 8 ? setSwitcher( prev=> ({left:true,right:false})) : setSwitcher(prev=> ({left:true,right:true}))
                          
                        }
                  }
              
              }
        
                  
                  
        
                  const startAutoScroll=()=>{
                    if(!intervalRef.current){
                        intervalRef.current = setInterval(()=>{
                                autoScroll()
                      },4000)
                    }
                  }
                   
        
                const  stopAutoScroll = ()=>{
                    if(intervalRef.current){
                      clearInterval(intervalRef.current)
                      intervalRef.current = null
                    }
                  }
               
            useEffect(()=>{
                startAutoScroll()
                return ()=>stopAutoScroll()
            },[])
            
            useEffect(()=>{
        
              if (carouselRef.current){
             
                  const slideWidth = carouselRef.current.offsetWidth
                  carouselRef.current.scrollLeft - slideWidth <= 0 ? setSwitcher( prev=> ({right:true,left:false})) : setSwitcher(prev=> ({right:true,left:true}))
              }
              
            },[])

    return(
       
        <section 
                onMouseEnter={()=>{stopAutoScroll()}} 
                onMouseLeave={()=>{startAutoScroll()}}
                className={isMobile?`relative t-10  w-3/5 min-h-5/20 bordr border-red-400 flex overflow-x-scroll scroll-smooth no-scrollbar  snap-x snap-mandatory rounded-lg`:"w-full sm:min-h-1/2 min-h-5/20 bordr lg:hidden flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory gap-10"}
                ref ={carouselRef}>
                    {switcher.left? 
                    <Button className={` sticky ${isMobile?'flex':'hidden'} left-0 z-1 top-1/2 bg-transparent hover:bg-transparent hover:cursor-pointer `}
                      onClick={()=>handlePrevious()}
                    >
                      <SlArrowLeft className="size-20 text-white/50"/>
                    </Button>: null}
                      {imgArray.map((img,ind)=>{
                        return(
                          <img key={ind} className={`borde border-black snap-center h-full min-w-full ${isMobile?'rounded-lg':'rounded-md'} object-cover snap-center `} src={img} alt="" />
                        )
                      })}
                      
                    {switcher.right?
                    <Button className={`${isMobile?'flex':'hidden'} sticky right-0 z-1 top-1/2 bg-transparent hover:bg-transparent hover:cursor-pointer `}
                      onClick={()=>handleNext()}
                    >
                        <SlArrowRight className="size-20 text-white/50"/>
                    </Button>:null}
                
                </section>
           
        
    )
}