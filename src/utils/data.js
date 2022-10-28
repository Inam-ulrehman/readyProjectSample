import {
  FaHome,
  FaEnvelope,
  FaRegAddressBook,
  FaRegSun,
  FaInstagramSquare,
  FaFacebook,
  FaTwitterSquare,
} from 'react-icons/fa'

// ========Nav Bar=========== //

export const navbar = [
  { id: 1, path: '/', title: 'Home', icon: <FaHome /> },
  { id: 2, path: '/about', title: 'About', icon: <FaEnvelope /> },
  { id: 3, path: '/contact', title: 'Contact', icon: <FaRegAddressBook /> },
  { id: 4, path: '/product', title: 'Services', icon: <FaRegSun /> },
]

// ==========Landing Page=============//
export const landingPage = {
  heading: 'Website development solutions',
  paragraph:
    'We provide digital solutions to all businesses, from Software Development to deployment or design to hosting we cover your back.',
  path: '/product',
  buttonTitle: 'Services',
  image:
    'https://res.cloudinary.com/inam6530/image/upload/v1666878014/inamwebsolutions/landingPage_exwqdt.svg',
}

// =========Services============//
export const services = [
  {
    id: 1,
    title: 'Design Websites',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666983035/inamwebsolutions/Untitled_design_3_v7fddf.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis ab commodi consequuntur amet omnis dolorum sint.`,
  },
  {
    id: 2,
    title: 'Hosting Services',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666983031/inamwebsolutions/Untitled_design_2_uw6iu1.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis ab commodi consequuntur amet omnis dolorum sint.`,
  },
  {
    id: 3,
    title: 'Mobile Apps',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666991395/inamwebsolutions/Untitled_design_1_unvwrk.svg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis ab commodi consequuntur amet omnis dolorum sint.`,
  },
  {
    id: 4,
    title: 'Digital Marketing',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666991811/inamwebsolutions/Untitled_design_maznza.svg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis ab commodi consequuntur amet omnis dolorum sint.`,
  },
  {
    id: 5,
    title: 'Business Solutions',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666990217/inamwebsolutions/Untitled_design_3_iu3ll4.svg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis ab commodi consequuntur amet omnis dolorum sint.`,
  },
  {
    id: 6,
    title: 'E-Commerce Project',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666992365/inamwebsolutions/Untitled_design_i7xgii.svg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis ab commodi consequuntur amet omnis dolorum sint.`,
  },
]
// ================About Page================
export const aboutHeading = {
  title: 'Meet Our Team Members',
  paragraph:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempore. Vitae inventore aperiam quibusdam nam nisi sunt quam fugiat magnam!',
}

// ==========Team Members=========
export const teamMembers = [
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1664284821/WhatsApp_Image_2022-09-27_at_9.18.04_AM_-_Edited_k9u6lq.png',
    titleName: 'Sania Rehman',
    titleJob: 'Marketing Manager',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum!`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666904764/inamwebsolutions/Untitled_design_1_wwzfww.png',
    titleName: 'Inam Rehman',
    titleJob: 'Software engineer',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum!`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666886063/inamwebsolutions/Untitled_design_qj4p3g.png',
    titleName: 'George Bush',
    titleJob: 'Software engineer',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum!`,
  },
]
// ===========footer //============
// ===== Data for Address =====
export const address = [
  {
    id: 1,
    title: 'Address',
    titleInfo: 'https://www.google.com/maps/@43.4450731,-80.4859129,17z',
    titleText: '86 Cedar Street,Kitchener, ON,  N2G 3L8',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    id: 2,
    title: 'Mobile Number',
    titleInfo: 'tel:4165606790',
    titleText: '4165606790',
  },
  {
    id: 3,
    title: 'Landline',
    titleInfo: 'tel:4165606790',
    titleText: '4165606790',
  },
  {
    id: 4,
    title: 'Email',
    titleInfo: 'mailto:Support@inamwebsolutions.com',
    titleText: 'Support@inamwebsolutions.com',
  },
]
// ======Data for SocialIcons=====Start
export const socialIcons = [
  {
    id: 1,
    path: 'https://facebook.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaFacebook />,
    title: 'Facebook',
  },
  {
    id: 2,
    path: 'https://Twitter.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaTwitterSquare />,
    title: 'Twitter',
  },
  {
    id: 5,
    path: 'https://www.instagram.com/',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaInstagramSquare />,
    title: 'Instagram',
  },
]
// ======== data for google maps==========

export const googleMapsData = { lat: 43.4450848, lng: -80.48596 }
