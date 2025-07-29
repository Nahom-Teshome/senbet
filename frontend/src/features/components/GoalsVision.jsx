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
                <div className="w-full h-9/10  md:px-4  ">
                    {/* <div className="w-8/10  h-1/2 drop-shadow-l drop-shadow-gray-400  md:w-3/5 lg:w-1/2 md:h-8/10  xl:min-h-full xl: rounded-lg  ">
                      <img  src={img} alt="" className="w-full h-full rounded-lg" />
                    </div> */}
                    <div className=" p-1  w-9/10 h-4/5 m-auto  md:p-4    shadow-gray-300 overflow-y-scroll no-scrollbar rounded-md ">
                      <p className="text-mediumbody-txt leading-6 indent-2 md:text-black/90 italic font-normal text-senbet-sub-heading-gray">
                         {text}
                      </p>
                    </div>
                </div>
              </div>
        </>
    )
}