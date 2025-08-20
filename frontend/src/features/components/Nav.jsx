import React from 'react'
import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ChurchIcon from '/churchicon.png'
import { Switch } from "@/components/ui/switch"
import { Avatar , AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { useTranslation } from 'react-i18next'
import { MenuIcon} from 'lucide-react'
export default function Nav(){
    const {i18n,t} = useTranslation()
    const [lang, setLang] = React.useState('am')
    const changeLang = ()=>{
        setLang(prev=>{
            if( prev === 'am'){
                i18n.changeLanguage('en')
                return 'en'
            }
            if(prev === 'en'){
                i18n.changeLanguage('am')
                return 'am'
            }
        })
    }
    return(
             <nav className="z-10 h-1/10 w-full top-0 fixed bg-gradient-to-r from-white/69 to-senbet-nav-gradient-gray/69 backdrop-blur-sm drop-shadow-lg drop-shadow-black/50 flex justify-between items-center px-4">
            <div className="flex  items-center gap-2">
                <Avatar className="size-12">
                     <AvatarImage src={ChurchIcon} />
                     <AvatarFallback>Holy Trinity</AvatarFallback>
                </Avatar>
              <div className='text-title'>{t('app.name')} </div>
            </div>
         <div className="text-mediumbody-txt  gap-5 borde items-center text-background hidden md:flex">
              <a href="#events">{t('app.events')}</a>
              <a href="#ourGoals">{t('app.goals')}</a>
              <a href="#ourVision">{t('app.vision')}</a>
              <div className="flex gap-1 font-light items-center">

              <Switch id="Language"
                                onCheckedChange ={()=>changeLang()}
                                />
                        <label htmlFor='Language'>{t('app.lang')}</label>
              </div>
              <Button className=" h-1/10  "><a href="#footer">{t('app.contact')}</a></Button>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon/>
                </DropdownMenuTrigger> 
                <DropdownMenuContent>
                    <DropdownMenuItem><a href="#events">{t('app.events')}</a></DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem> <a href="#goals">{t('app.goals')}</a></DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem><a href="#vision">{t('app.vision')}</a></DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        <Switch id="Language"
                                onCheckedChange ={()=>changeLang()}
                        />
                        <label htmlFor='Language'>{lang === 'am'?'Amharic':"English"}</label>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem><a href="#footer"><Button className=" h-1/10 "><a href="#footer">{t('app.contact')}</a></Button></a></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>  
          
        </nav>
    
    )
}