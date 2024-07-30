import VideoEditing from '../assets/film-production.png'
import WebDev from '../assets/designer.png'
import Layers from '../assets/layers.png'
import Graphic from '../assets/web-design.png'
import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5"
import { SiAdobepremierepro } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

export const skillsContent =[
    {
        id : 1,  
        title: "WEB DESIGN",
        apps: [
            {name:"ReactJs",img:<FaReact size={70} />},
            {name:"HTML",img:<FaHtml5 size={70}/>},
            {name:"Tailwind CSS",img:<RiTailwindCssFill size={70}/>},
            {name:"JavaScript",img:<IoLogoJavascript size={70}/>}
        ],
        "img": WebDev
    },
    {
        id : 2,  
        title: "VIDEO EDITING",
        apps: [
            {name:"Premiere Pro",img:<SiAdobepremierepro size={70} />},
            {name:"Davinci Resolve",img:<SiDavinciresolve size={70} />}
        ],
        "img": VideoEditing
    },
    {
        id : 3,  
        title: "MOTION GRAPHICS",
        apps: [
            {name:"After Effects",img:<SiAdobeaftereffects size={70} />}
        ],
        "img": Layers
    }
]