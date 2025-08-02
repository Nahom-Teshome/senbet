import { useTranslation } from "react-i18next"
export default function Hero(){
    const {t} = useTranslation()
    return(
         <header id="hero" className="mt-10 w-full borde border-red-400  lg:hidden lg:bg-green-80 flex flex-col gap-2 items-start p-4">

             <h1 className="text-heading text-senbet-heading-gray borde border-black w-9/10">
               {t('app.title')}
            </h1>
            <h3 className="text-subheading text-senbet-sub-heading-gray borde border-black w-4/5">
             {t('app.sub_title')}
            </h3>

          </header>
    )
}
