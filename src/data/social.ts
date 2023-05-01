import { faTwitch, faTwitter, faTiktok, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Social } from "@/types";

const socials: Social[] = [
    {
        name: "Twitter",
        link: "https://twitter.com/prismotorsports",
        fa_icon: faTwitter
    },
    {
        name: "Twitch",
        link: "https://twitch.tv/prismaticmotorsports",
        fa_icon: faTwitch
    },
    {
        name: "Youtube",
        link: "https://youtube.com/@prismaticmotorsports5471",
        fa_icon: faYoutube
    },
    {
        name: "TikTok",
        link: "https://www.tiktok.com/@prismaticmotorsports",
        fa_icon: faTiktok
    },
    {
        name: "Instagram",
        link: "https://instagram.com/prismaticmotorsports",
        fa_icon: faInstagram
    },
]

export default socials;