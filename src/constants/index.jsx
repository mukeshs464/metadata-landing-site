import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { AudioLines } from 'lucide-react';
import { GlobeLock } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "Our-Edge", href: "about-us" },
  { label: "Workflow", href: "workflow" },
  { label: "Teams", href: "teams" },
  { label: "Architecture", href: "architecture" },
  { label: "Testimonials", href: "testimonials" }
];

import student_logo from "../assets/student_logo.jpg";
import professional_cover from "../assets/professional_cover.jpg";
export const teams = [
  {
    id: 1,
    title: "Industrial Team",
    cover: professional_cover,
    lead: "Lead Industrial Name",
    members: "10 Members",
    category: "industry", // Added category
  },
  {
    id: 2,
    title: "Faculty Team",
    cover: null,
    instructor: "Lead Faculty Name",
    members: "8 Members",
    category: "faculty", // Added category
  },
  {
    id: 3,
    title: "Student Team",
    cover: student_logo,
    instructor: "Lead Student Name",
    members: "5 Members",
    category: "students", // Added category
  },
];






export const architectureOptions = [
  {
    title: "Machine Learning",
    description: "Supervised & Unsupervised Learning Techniques",
    features: [
      "Feature Engineering",
      "Model Training and Evaluation",
      "Cross-Validation",
    ],
    details: [
      "Hyperparameter Tuning with Grid Search",
      "Model Explainability (SHAP, LIME)",
      "Data Cleaning & Preprocessing",
    ],
  },
  {
    title: "Data Visualization",
    description: "Effective Data Storytelling and Insights",
    features: [
      "Interactive Dashboards",
      "Data Aggregation Techniques",
      "Library Usage: D3.js, Matplotlib, Plotly",
    ],
    details: [
      "Custom Charts and Graphs",
      "Real-time Data Visualization",
      "Data Wrangling for Visual Analysis",
    ],
  },
  {
    title: "Deep Learning",
    description: "Neural Network Models and Frameworks",
    features: [
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs)",
      "Transfer Learning Techniques",
    ],
    details: [
      "Model Optimization",
      "Handling Large Datasets with GPUs",
      "Pre-trained Models (ResNet, BERT, etc.)",
    ],
  },
];

export const testimonials = [
  {
    user: "XYZ",
    company: "KMCH",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "ABC",
    company: "Technologies",
    image: user2,
    text: "jaskdcslkdmfclskdmflkmskdmf sidjfioevsnmjodinmiofvs dfogviodiojgiojdojribgdjigtjbmidtjhj",
  },
  {
    user: "XYZ",
    company: "Company",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "asdasxcazsc",
    company: "ausdgha",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Generalization That Holds Up",
    description:
      "Models that don’t just memorize your data — they adapt to the unseen. Great for real-world deployment.",
  },
  {
    icon: <Fingerprint />,
    text: "Metrics That Matter",
    description:
      "Go beyond accuracy. Understand model behavior across classes, thresholds, and imbalance.",
  },
  {
    icon: <ShieldHalf />,
    text: "Scale Without Stress",
    description:
      "Whether it’s 10 rows or 10 million, MetaData handles your data with performance-first architecture.",
  },
  {
    icon: <BatteryCharging />,
    text: "Built-In Interpretability",
    description:
      "Use SHAP, LIME, and visual insights to understand why your model predicts what it does — crucial for healthcare, finance, and regulated domains.",
  },
  {
    icon: <AudioLines />,
    text: "Flexible, Modular Workflows",
    description:
      "Use Meta for classification today, regression tomorrow, and clustering next week — all without context switching",
  },
  {
    icon: <GlobeLock />,
    text: "Know What Moves the Needle",
    description:
      "Identify which features drive performance. Use that to optimize data, reduce noise, and make smarter decisions.",
  },
];



export const checklistItems = [
  {
    title: "Upload Data with Ease",
    description:
      "Seamlessly upload datasets and let the preloaded models handle complex data processing tasks.",
  },
  {
    title: "Pre-Trained Models at Your Fingertips",
    description:
      "Access cutting-edge machine learning models instantly, without the need for manual training or coding.",
  },
  {
    title: "Automated Insights in Minutes",
    description:
      "Get actionable insights and predictions quickly, empowering faster, data-driven decisions.",
  },
  {
    title: "Streamline Decision-Making",
    description:
      "Leverage ML-powered analysis to simplify workflows and accelerate decision-making processes.",
  },
];

import Ridwan_Salahudeen from "../assets/contributor_photo/Student/Ridwan_Salahudeen.jpg";
import Benisemeni_Dama_Francis from "../assets/contributor_photo/Student/Benisemeni_Dama_Francis.jpg";
import John_Monday from "../assets/contributor_photo/Student/John_Monday.jpg";  
// import Muktar_Usman from "../assets/contributor_photo/Student/Muktar_Usman.jpg";
import Rofhiwa_Mudau from "../assets/contributor_photo/Student/Rofhiwa_Mudau.jpg";
import Tarcízio_Ferrão from "../assets/contributor_photo/Student/Tarcizio_Ferrao.jpg";
import Roland_T_Tweh from "../assets/contributor_photo/Student/Roland_T_Tweh.jpg";
import Otu_Uchechi from "../assets/contributor_photo/Student/Otu_Uchechi.jpg";
import Krishna_GSVV from "../assets/contributor_photo/Student/Krishna_GSVV.jpg";
import Thejas_Monikuttan from "../assets/contributor_photo/Student/Thejas_Monikuttan.jpg";  
import Esther_Alice_Mathew from "../assets/contributor_photo/Student/Esther_Alice_Mathew.jpg";
import Stanly_Kurian from "../assets/contributor_photo/Student/Stanly_Kurian.jpeg";
import Junia_Sam_Dani from "../assets/contributor_photo/Student/Junia_Sam_Dani.jpeg";
// import Jenolin_Esther_S from "../assets/contributor_photo/Student/Jenolin_Esther_S.JPG";
import Aleena_Saji from "../assets/contributor_photo/Student/Aleena_Saji.png";  
import I_Lydia_Princess from "../assets/contributor_photo/Student/I_Lydia_Princess.jpg";
import Prajusha_R from "../assets/contributor_photo/Student/Prajusha_R.jpg";
import Shebin_Sam from "../assets/contributor_photo/Student/Shebin_Sam.jpg";
import Steve_Thomas_Mulamoottil from "../assets/contributor_photo/Student/Steve_Thomas_Mulamoottil.jpg";  
import Bandaru_Pavana_Sandhya from "../assets/contributor_photo/Student/Bandaru_Pavana_Sandhya.jpeg";
import Srinithi_S from "../assets/contributor_photo/Student/Srinithi_S.jpg";  
import Benetta_M_Thomas from "../assets/contributor_photo/Student/Benetta_M_Thomas.jpg";  

import Vikashini_S from "../assets/contributor_photo/Student/Vikashini_S.jpg";  
import Arun_Thomas from "../assets/contributor_photo/Student/Arun_Thomas.jpg";
import Thirmalreddy_Mary_Shalini from "../assets/contributor_photo/Student/Thirmalreddy_Mary_Shalini.jpg";  
export const student_contributors = [
  {id: 1,name: "Ridwan Salahudeen",photo: Ridwan_Salahudeen, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 2,name: "Benisemeni Dama Francis",photo: Benisemeni_Dama_Francis,degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 3,name: "John Monday",photo: John_Monday,degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 4,name: "Muktar Usman",photo: null,degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 5,name: "Rofhiwa Mudau",photo: Rofhiwa_Mudau,degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 6,name: "Tarcízio Ferrão",photo: Tarcízio_Ferrão,degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 7,name: "Roland T. Tweh",photo: Roland_T_Tweh,degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  {id: 8,name: "Otu Uchechi",photo: Otu_Uchechi,degree: "MSC", links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]},
  { id: 9, name: "Sri Kailaash Kumar", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 10, name: "Harshni Sri", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 11, name: "Ganeshkaran M", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 12, name: "Hanish K R", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 13, name: "Guhan K.B", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 14, name: "Srividya M", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 15, name: "Keshav S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 16, name: "Aakash P", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 17, name: "Vanmathi V M", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 18, name: "NISHANTH R", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 19, name: "Pramothini S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 20, name: "Aadhithya Bharathi A", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 21, name: "M.Chandana", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 22, name: "A.Snigdha Siri Valli", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 23, name: "T.Neha", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 24, name: "Nethra Kanagaraj", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 25, name: "Harish S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 26, name: "S Adwaitha", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 27, name: "Golla Ram", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 28, name: "Gokul Balajiram", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 29, name: "Krishna GSVV", photo: Krishna_GSVV, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 30, name: "KISHORE S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 31, name: "Dhayanandh N", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 32, name: "Thejas Monikuttan", photo: Thejas_Monikuttan, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 33, name: "Esther Alice Mathew", photo: Esther_Alice_Mathew, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 34, name: "Stanly Kurian", photo: Stanly_Kurian, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 35, name: "Junia Sam Dani", photo: Junia_Sam_Dani, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 36, name: "Aleena Saji", photo: Aleena_Saji, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 37, name: "Jenolin Esther S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 38, name: "I Lydia Princess", photo: I_Lydia_Princess, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 39, name: "Prajusha R", photo: Prajusha_R, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 40, name: "V Jaswanthini", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 41, name: "Shebin Sam", photo: Shebin_Sam, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 42, name: "Shon Mathew Shalu", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 43, name: "Steve Thomas Mulamoottil", photo: Steve_Thomas_Mulamoottil, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 44, name: "Krishnapriya S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 45, name: "Bandaru Pavana Sandhya", photo: Bandaru_Pavana_Sandhya, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 46, name: "Srinithi S", photo: Srinithi_S, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 47, name: "Benetta M Thomas", photo: Benetta_M_Thomas, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 48, name: "Sheron Xalxo", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 49, name: "Aaron Ande", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 50, name: "Vikashini S", photo: Vikashini_S, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 51, name: "Arun Thomas", photo: Arun_Thomas, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 52, name: "Thirmalreddy Mary Shalini", photo: Thirmalreddy_Mary_Shalini, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 53, name: "Gopu Rachel Rejoice Reddy", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 54, name: "Jenulin Makros", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 55, name: "Viswanthan S S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 56, name: "Giftlin Olivia T", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 57, name: "Nisha K", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 58, name: "Darshnee Sunderraj", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 59, name: "S Abika Blessy", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 60, name: "Beereddy Sreeja", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 61, name: "Mokara Anjali", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 62, name: "Yetukuri Gana Bala Meghana", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 63, name: "Justina Sam", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 64, name: "Golla Lakshmi Supriya Yadav", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 65, name: "Kesireddygari Mounika", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 66, name: "V Praisy", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 67, name: "Allen Matthew T J", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 68, name: "M Harish", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 69, name: "Anbi Tibina K K", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 70, name: "Angel Merrin John", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 71, name: "R Akhila Jyothi", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 72, name: "Bettina Ninan", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 73, name: "Nancy Sharon S", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 74, name: "Gayathri J", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 75, name: "Stany Cyril R", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 76, name: "Berbin MS", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 77, name: "Sindhe Nigama Sree", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },
  { id: 78, name: "Vishal A", photo: null, degree: null, links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ] },


];


import Selvanayaki_Kolandapalayam_Shanmugam from "../assets/contributor_photo/Faculty/Selvanayaki_Kolandapalayam_Shanmugam.webp";
import Ajibesin_A_Abel from "../assets/contributor_photo/Faculty/Dr.Ajibesin_A_Abel.jpg";
import Senthil_Kumar_T from "../assets/contributor_photo/Faculty/Senthil_Kumar_T.jpg";

export const faculty_contributors = [
  {
    id: 1,
    name: "Dr. Selvanayaki Kolandapalayam Shanmugam",
    photo: Selvanayaki_Kolandapalayam_Shanmugam,
    quote: "Tough topics don’t break you. They build you.",
    link: "https://www.ashland.edu/faculty/selvanayaki-kolandapalayam-shanmugam-phd",
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/selvanayaki-kolandapalayam-shanmugam-155a2129/"},
    ]
  },
  {
    id: 2,
    name: "Dr. Ajibesin A. Abel",
    photo: Ajibesin_A_Abel,
    quote: "Be Confident and Trust yourself",
    link: "https://drajibesin.com/",
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/abelajibesin?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaFP0wFAUQeiHSGcuMYD7sA%3D%3D"},
    ]
  },
  {
    id: 3,
    name: "Dr. Senthil Kumar T. ",
    photo: Senthil_Kumar_T,
    quote: "It all comes back:especially the kindness.",
    link: "https://www.amrita.edu/faculty/t-senthilkumar/",
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/senthilkumar-thangavel-ba4784aa/"},
    ]
  },
  {
    id: 4,
    name: "Dr. G Naveen Sundar ",
    photo: null,
    quote: "A little progress each day adds up to big results",
    link: "https://www.karunya.edu/sites/default/files/img/cst/faculty/Faculty-profile/Dr%20Naveen.pdf",
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/dr-naveen-sundar-93b6b787/"},
    ]
  },
  {
    id:5,
    name: "Dr. D. Narmadha",
    photo: null,
    quote: "Build a career, yes. But don’t forget to build a life",
    link: "https://karunya.edu/sites/default/files/img/cst/faculty/Faculty-profile/Dr.%20Narmadha.pdf",
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/narmadhanaveen/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"},
    ]
  }
];

export const industrial_contributors = [
  {
    id: 1,
    name: "Chetan",
    photo: Senthil_Kumar_T,
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]
  },
  {
    id: 2,
    name: "Rajesh J",
    photo: Senthil_Kumar_T,
    links: [
      {title: "GitHub", icon: <Github />, href: "https://github.com"},
      {title: "Linkedin", icon: <Linkedin />, href: "https://linkedin.com"},
    ]
  },
];




export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];




// export const teams = [
//   {
//     id: 1,
//     cover: "",
//     title: "ML",
//     lessons: "",
//     tag: "",
//     instructor: "XYZ",
//     rating: "",
//   },
//   {
//     id: 2,
//     cover: "",
//     title: "UI & UX Design",
//     lessons: "",
//     tag: "",
//     instructor: "ABC",
//     rating: "",
//   },
//   {
//     id: 3,
//     cover: "",
//     title: "Hypothesis Testing",
//     lessons: "",
//     tag: "",
//     instructor: "ABC",
//     rating: "",
//   },
//   {
//     id: 4,
//     cover: "",
//     title: "Data Visualisation",
//     lessons: "",
//     tag: "",
//     instructor: "MNO",
//     rating: "4.2(987)",
//   },
//   {
//     id: 5,
//     cover: "",
//     title: "Deep Learning",
//     lessons: "",
//     tag: "Life Skills",
//     instructor: "EFT",
//     rating: "4.7(2K)",
//   },
//   {
//     id: "",
//     cover: "",
//     title: "Pre Math",
//     lessons: "",
//     tag: "ABC",
//     instructor: "",
//     rating: "",
//   },
// ];

