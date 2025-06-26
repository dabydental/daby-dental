import { footer } from "../footer/footer";

export default {
    title: "Components/Footer",
    component: footer,
}

export const Footer = {
    args: {
        logoAlt: "Daby Dental",
        logoUrl: "https://res.cloudinary.com/ddslirbcf/image/upload/v1750762721/Daby_dental_logo_centered_1_gbocaa.png",
        copyright: "© 2025 Daby Dental ",
        location : [{
            city: "Phoenix",
            street: "Koenig Lane 1, Vacoas-Phoenix",
            phone: "5253 7896"
        },
        {
            city: "Pamplemousses",
            street: "Royal Road, Canton Belle Eau",
            phone: "5760 0232"
        },
    ]
    }
}