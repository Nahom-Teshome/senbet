import {Calendar, MenuIcon,MapPin,Clock,BookOpen, CircleCheckBig, Binoculars, Instagram, Facebook, Twitter , Mail, Phone} from 'lucide-react'
// import goals from './assets/ChurchWebsite/goals.jpg'
// import vision from './assets/ChurchWebsite/vision.jpg'

export default function GoalsVision({text,icon}){
    return(
        <>
        <div className="w-9/10 h-9/10 py-4 bg-white rounded-lg flex flex-col items-center md:justify-center gap-4 border drop-shadow-lg xl:w-4/5  md:w-full ">
                <div className="">
                 { icon === 'goals'? <CircleCheckBig strokeWidth={3} size={40}/>:<Binoculars strokeWidth={3}size={40}/>}
                </div>
                <div className="w-full h-8/10  md:px-4  ">
                    
                    <div className=" p-1  w-9/10 h-4/5 m-auto  md:p-4 flex items-center  shadow-gray-300 overflow-y-scroll no-scrollbar rounded-md ">
                      <p className="border-  text-mediumbody-txt leading-6 indent-2 md:text-black/90 italic font-normal text-senbet-sub-heading-gray">
                         {text}
                      </p>
                    </div>
                </div>
              </div>
        </>
    )
}