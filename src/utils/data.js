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
    'https://res.cloudinary.com/inam6530/image/upload/v1667050849/inamwebsolutions/Untitled_design_3_aquzmj.svg',
}

// ================About Page================
export const aboutHeading = {
  title: 'Meet Our Team Members',
  paragraph:
    'We have very hardworking and dedicated team members, teamwork play a huge role in a project and outcomes shine when it comes to good understanding.',
}

// ==========Team Members=========
export const teamMembers = [
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1667047659/inamwebsolutions/Untitled_design_1_zufr0r.svg',
    titleName: 'Sania Rehman',
    titleJob: 'Marketing Manager',
    description: `Sania writes content for business and also take care of digital marketing campaigns.`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666904764/inamwebsolutions/Untitled_design_1_wwzfww.png',
    titleName: 'Inam Rehman',
    titleJob: 'Software engineer',
    description: `Inam creates Digital Solutions for your business and helps you launch your product all over the internet.`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666886063/inamwebsolutions/Untitled_design_qj4p3g.png',
    titleName: 'George Bush',
    titleJob: 'Software engineer',
    description: `George is a coding addict most of the time he fixes bugs and searching new technologies.`,
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

// =========Services============//
export const services = [
  {
    id: 1,
    title: 'Design Websites',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666983035/inamwebsolutions/Untitled_design_3_v7fddf.png',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
    ],
  },
  {
    id: 2,
    title: 'Hosting Services',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666983031/inamwebsolutions/Untitled_design_2_uw6iu1.png',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
    ],
  },
  {
    id: 3,
    title: 'Mobile Apps',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666991395/inamwebsolutions/Untitled_design_1_unvwrk.svg',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
    ],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666991811/inamwebsolutions/Untitled_design_maznza.svg',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
    ],
  },
  {
    id: 5,
    title: 'Business Solutions',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666990217/inamwebsolutions/Untitled_design_3_iu3ll4.svg',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
    ],
  },
  {
    id: 6,
    title: 'E-Commerce Project',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666992365/inamwebsolutions/Untitled_design_i7xgii.svg',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi tempora quod magni neque! Facilis, necessitatibus debitis. Exercitationem, molestias quaerat!',
      },
    ],
  },
]
