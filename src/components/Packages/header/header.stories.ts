import { Header } from "./header";

export default {
    title: "Components/Header",
    component: Header,
}

export const header = {
    args: {
        logoAlt: "Daby Dental",
        logoUrl: "https://res.cloudinary.com/ddslirbcf/image/upload/v1750762721/Daby_dental_logo_centered_1_gbocaa.png",
        navProps: [
            {
                navName: "Home",
                navLink: "/",
            },
            {
                navName: "Our Services",
                navLink: "/our-services",
                newTab: true
            },
            {
                navName: "About Us",
                navLink: "/about-us",
            },
            {
                navName: "Contact Us",
                navLink: "/contact-us",
            }
        ]
    }
}