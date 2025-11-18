import { BotMessageSquare } from "lucide-react";
import { Mail } from "lucide-react";
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


//Student-a  
import Pramothini from "../assets/contributor_photo/Student/Student-a/Pramothini.jpg";
import Ridwan from "../assets/contributor_photo/Student/Student-a/Ridwan.jpg";
import Rahul_Ravikumar from "../assets/contributor_photo/Student/Student-a/rahul.jpg";
import Hanish from "../assets/contributor_photo/Student/Student-a/hanish.jpg";
import Aakash from "../assets/contributor_photo/Student/Student-a/aakash.jpg";
import Vaan from "../assets/contributor_photo/Student/Student-a/vaan.jpg";

export const student_contributors_a = [
  {id: 1,name: "Ridwan Salahudeen", role:"Student SPOC for American University of Nigiera", college: "Saint Francis University, Hong Kong", photo:Ridwan, desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/sridwan222", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/inkedin.com/in/ridwan-salahudeen-5b7b4b3b"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]},
  {id: 2,name: "Vanmathi V M", role:"Principal Developer & Core Architect", college: "Amrita Vishwa Vidyapeetham", photo: Vaan , desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "www.linkedin.com/in/vanmathivijay"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]}, 
  {id: 3,name: "Aakash P", role:"Core Architect and Devops Engineer", college: "Amrita Vishwa Vidyapeetham", photo: Aakash, desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/aakash-p-5173671b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjDigun5sRJyAZZAV%2FToIww%3D%3D"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]},
  {id: 4,name: "Hanish K R", role:"Core Architect and Module Designer", college: "Amrita Vishwa Vidyapeetham", photo: Hanish, desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/hanish-k-r-8402b0226?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtD3SllTQSfaoOquYNKU2Mw%3D%3D"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]},
  {id: 5,name: "Rahul Ravikumar", role:"Principal Developer & Visualisation module lead", college: "Amrita Vishwa Vidyapeetham", photo: Rahul_Ravikumar, desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/rahulravikumar03/"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]},
  {id: 6,name: "Pramothini", role:"Statistics SPOCS", college: "Amrita Vishwa Vidyapeetham", photo:Pramothini, desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/pramothini-s-a91018301/"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]},
]

// Student-b
import Allen from "../assets/contributor_photo/Student/Allen_Matthew_T_J.jpg";
import AaronAnde from "../assets/contributor_photo/Student/Aaron_Ande.jpg";
import Anbi_Tibina_K_K from "../assets/contributor_photo/Student/Anbi_Tibina_K_K.jpg";
import Arun_Thomas from "../assets/contributor_photo/Student/Arun_Thomas.jpg";
import Bandaru_Pavana_Sandhya from "../assets/contributor_photo/Student/Bandaru_Pavana_Sandhya.jpeg";
import Beereddy_Sreeja from "../assets/contributor_photo/Student/Beereddy_Sreeja.jpeg";
import Benetta_M_Thomas from "../assets/contributor_photo/Student/Benetta_M_Thomas.jpg";
import Benisemeni_Dama_Francis from "../assets/contributor_photo/Student/Benisemeni_Dama_Francis.jpg";
import Berbin_MS from "../assets/contributor_photo/Student/Berbin_MS.png";
import Bettina_Ninan from "../assets/contributor_photo/Student/Bettina_Ninan.jpg";
import Darshnee_Sunderraj from "../assets/contributor_photo/Student/Darshnee_Sunderraj.jpg";
// import Esther_Alice_Mathew from "../assets/contributor_photo/Student/Esther_Alice_Mathew.jpg";
// import Giftlin_Olivia_T from "../assets/contributor_photo/Student/Giftlin_Olivia_T.jpeg";
// import Golla_Lakshmi_Supriya_Yadav from "../assets/contributor_photo/Student/Golla_Lakshmi_Supriya_Yadav.jpeg";
// import LLydia_Princess from "../assets/contributor_photo/Student/LLydia_Princess.jpg";
// import Jenolin_Esther_S from "../assets/contributor_photo/Student/Jenolin_Esther_S.JPG";
// import Jenulin_Makros from "../assets/contributor_photo/Student/Jenulin_Makros.jpg";
import John_Monday from "../assets/contributor_photo/Student/John_Monday.jpg";
import Junia_Sam_Dani from "../assets/contributor_photo/Student/Junia_Sam_Dani.jpeg";
import Krishna_GSVV from "../assets/contributor_photo/Student/Krishna_GSVV.jpg";
// import M_Harish from "../assets/contributor_photo/Student/M_Harish.JPEG";
import Mokara_Anjali from "../assets/contributor_photo/Student/Mokara_Anjali.jpeg";
import Nancy_Sharon_S from "../assets/contributor_photo/Student/Nancy_Sharon_S.jpeg";
import Nisha_K from "../assets/contributor_photo/Student/Nisha_K.jpeg";
import Otu_Uchechi from "../assets/contributor_photo/Student/Otu_Uchechi.jpg";
import Prajusha_R from "../assets/contributor_photo/Student/Prajusha_R.jpg";

export const student_contributors_b = [
  {id: 1,name: "Mukesh S", role:"FRONTEND", college: "Amrita vishwa vidyapeetham chennai", photo: null, desc: "Worked on developing front end part in landing page.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/mukeshs464", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/mukesh-suresh-5b0544370?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
  {title: "Mail", icon: <Mail />, href: "mailto:mukesheverwin21@gmail.com"}
]},
{id: 2,name: "Raam", role:"FRONTEND, BACKEND, STATISTICS", college: "Amrita Vishwa Vidyapeetham", photo: "null", desc: "Built smart metadata insights using statistical analysis of datasets—focusing on normality, modality, and confidence intervals to drive better data understanding.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/NethraK15", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/nethra-kanagaraj-902b84301"},
  {title: "Mail", icon: <Mail />, href: "mailto:nethu1508@gmail.com"}
]},
{id: 3,name: "Jenulin Makros G", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1rGkm3DPds3b868jj0QMr-uGmgvMl4ynz", desc: "I implemented preprocessing options and dynamic plotting features to prepare data effectively for XGBoost model training and evaluation.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Jenulin", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jenulin-makros-g"},
  {title: "Mail", icon: <Mail />, href: "mailto:jenulinmakros@karunya.edu.in"}
]},
{id: 4,name: "Gopu Rachel Rejoice Reddy", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1ikh72I-GUEcQhzscxSoXwAW8TtcsLxfx", desc: "I contributed the XGBoost regression pipeline with performance metrics like MSE and MAE for assessing prediction accuracy.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Rachel-dan", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/gopu-rachel-rejoice-reddy"},
  {title: "Mail", icon: <Mail />, href: "mailto:gopurachel@karunya.edu.in"}
]},
{id: 5,name: "THIRMALREDDY MARY SHALINI", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1Qws1gvBNi5FVOn4YYltyxEQtP-SZHkc3", desc: "I developed the XGBoost classification workflow, including model training, and evaluation using confusion matrix and ROC-AUC.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Thirmalreddy-Mary-Shalini", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/mary-shalini"},
  {title: "Mail", icon: <Mail />, href: "mailto:thirmalreddymary@karunya.edu.in"}
]},
{id: 6,name: "Sagana Murali ", role:"STATISTICS", college: "Amrita Vishwa Vidyapeetham Coimbatore ", photo: "https://drive.google.com/open?id=162qljYdySSm94-ekIrdhNSygBZsjNZuh", desc: "I have build a normalisation module under statistics group. The module normalizes the desired column of your dataset and it also has features for various type pf normalisation methods hence making normalisation task so simple for the user as they can download a normalized csv once the process is complete.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Sanuu17"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/sagana-murali"},
  {title: "Mail", icon: <Mail />, href: "mailto:ramamurali29@gmail.com"}
]},
{id: 7,name: "Shon Mathew Shalu ", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1j65Vy7q2pD6cMeEMOJV4GpbzNwsIf1em", desc: "Developed and implemented an AdaBoost model to enhance predictive accuracy and improve decision-making efficiency.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/shon123123/ADABoost"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/shonms?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:shonmathew22@karunya.edu.in"}
]},
{id: 8,name: "Shebin Sam", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1H-DXU36C5VTgzCbchp1FReiyIOUQXBJp", desc: "Developing and fine-tuning an optimized AdaBoost implementation for robust, high-accuracy classification tasks across diverse datasets. Focused on improving model performance, interpretability, and training efficiency.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/shebin-sam"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/shebin--sam"},
  {title: "Mail", icon: <Mail />, href: "mailto:shebinsam294@gmail.com"}
]},
{id: 9,name: "S Adwaitha", role:"FRONTEND, STATISTICS", college: "Amrita Vishwa Vidyapeetham", photo: "https://drive.google.com/open?id=175YUnIam9bpE3NiG8-0mtCeEqoLHZEtz", desc: "Built a data analysis tool that identifies central trends in datasets, offering a simple yet effective approach to understanding data distribution.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Adwaitha31", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/adwaitha-satheesh-2aa999367"},
  {title: "Mail", icon: <Mail />, href: "mailto:satheeshadwaitha@gmail.com"}
]},
{id: 10,name: "Esther Alice Mathew", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1MULAGU24LpQELuXR-7xq1Q5X_a45fe1m", desc: "I contributed the Random Forest regression pipeline with performance metrics like MSE and MAE for assessing prediction accuracy.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/esther-alice"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/https://in.linkedin.com/in/estheramathew"},
  {title: "Mail", icon: <Mail />, href: "mailto:estheralice@karunya.edu.in"}
]},
{id: 11,name: "Darshnee Sunderraj", role:"Data Visualization", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=17H2bm28RHp-q7aCpOjfO-e3SiG52pY2S", desc: "Worked on data visualization, autocorrelation, partial autocorrelation, and missingness maps to analyze and interpret time series data.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/darshneesunderraj"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/darshneesunderraj"},
  {title: "Mail", icon: <Mail />, href: "mailto:darshneesunderraj@karunya.edu.in"}
]},
{id: 12,name: "Nisha K", role:"ML/DL MODELLING, INTEGRATION", college: "Karunya Institute of technology and science ", photo: "https://drive.google.com/open?id=1S5pEqFXa6GdGD91IScHVlZWPI4tprNUk", desc: "Working on machine learning models with a focus on Gradient Boosting for efficient and accurate classification.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/nishaak"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/nishaak"},
  {title: "Mail", icon: <Mail />, href: "mailto:nishak@karunya.edu.in"}
]},
{id: 13,name: "Stanly Kurian ", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1v1j51Zi7ayLp21JBPpHNJEFfO-OvbI9F", desc: "Worked in the Deep Learning team on building an Electra-based text classification model with custom dataset. Applied preprocessing and class imbalance techniques like SMOTE, with a Flask interface.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/stanlee47"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/stanly-kurian-0249b4249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:stanlykurian@karunya.edu.in"}
]},
{id: 14,name: "Aaron Ande", role:"ML/DL MODELLING", college: "KARUNYA INSTITUTE OF TECHNOLOGY AND SCIENCES", photo: AaronAnde, desc: "Worked on the Random Forest Model. Contributed towards feature selection and model tuning, data preprocessing, training, and evaluation of the model.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/AaronAnde"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/aaronande"},
  {title: "Mail", icon: <Mail />, href: "mailto:aaronande@karunya.edu.in"}
]},
{id: 15,name: "Vikashini S", role:"STATISTICS", college: "Karunya Institute of technology and sciences ", photo: "https://drive.google.com/open?id=1jnC42YChq5i_SWv8vcqpcojnThtnXAXP", desc: "I create powerful data-driven visuals and interactive dashboards to uncover insights and tell compelling stories. Specialized in Python, machine learning, and data visualization.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/vikashinisiva"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/vikashini-s-3a413a300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:vikashinis@karunya.edu.in"}
]},
{id: 16,name: "Thejas Monikuttan", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1vduHqztQqgo9uZax8AmHaBU39pedkTkq", desc: "I worked on Random Forest model training and evaluation using Confusion matrix and AUC-ROC.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Thejas31"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/thejas-monikuttan"},
  {title: "Mail", icon: <Mail />, href: "mailto:thejasmonikuttan31@gmail.com"}
]},
{id: 17,name: "PRAJUSHA R", role:"ML/DL MODELLING", college: "Karunya institute of technology and sciences ", photo: "https://drive.google.com/open?id=1KlOjQ48H-M-OjMVR08ysRAk63kK8perW", desc: "Developed a high-accuracy Bayesian Network model with seamless ML workflow integration.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Prajusha17"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/prajusharajkumar"},
  {title: "Mail", icon: <Mail />, href: "mailto:prajushar@karunya.edu.in"}
]},
{id: 18,name: "I Lydia Princess", role:"ML/DL MODELLING", college: "Karunya Technology and Sciences", photo: "https://drive.google.com/open?id=1-qAbCSiptpfJs0zR8C1wL-RmnMrwwW4r", desc: "I built a high- accuracy Bayesian Network model with ML integration", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/lydics"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/ilydiaprincess"},
  {title: "Mail", icon: <Mail />, href: "mailto:ilydia@karunya.edu.in"}
]},
{id: 19,name: "Jenolin Esther S", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1bx14ZucrivWPy6rdcj70OaqJuBnOBkFM", desc: "LightGBM is a fast, efficient gradient boosting framework used for high-performance machine learning tasks. When integrated with Flask, it allows deploying the trained model as a lightweight web API for real-time predictions.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/jenolinesther", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jenolin-esther"},
  {title: "Mail", icon: <Mail />, href: "mailto:jenolinesther@karunya.edu.in"}
]},
{id: 20,name: "Giftlin Olivia T", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1nX1PEeRu7H96mMf-zoDGNp1RiR5QJqK4", desc: "Worked on Gradient Boosting Machine Learning Model for Classification and Regression", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/giftlinolivia"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/giftlin-olivia"},
  {title: "Mail", icon: <Mail />, href: "mailto:giftlinolivia@karunya.edu.in"}
]},
{id: 21,name: "Nancy Sharon S ", role:"STATISTICS", college: "karunya Institute of technology and sciences ", photo: "https://drive.google.com/open?id=1-wKFDCk-MdO1y34qSsBa73jkp5_BgaMD", desc: "Focused on visualizing data using kernel density estimation to uncover underlying patterns and trends. Skilled in turning raw data into smooth, interpretable plots for better insights.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/nancysharon08"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/nancy-sharon-5a9a61249"},
  {title: "Mail", icon: <Mail />, href: "mailto:nancysharon@karunya.edu.in"}
]},
{id: 22,name: "Junia Sam Dani ", role:"ML/DL MODELLING", college: "Karunya Institute of technology and science ", photo: "https://drive.google.com/open?id=1XUNvu3W5tnQCuJkCyxDSoJpEDevCgDr3", desc: "I developed the DBSCAN clustering workflow, including data preprocessing using Min-Max Scaling, Standard Scaling, and Normalization. For visualization, I used scatter plots and pairwise plots to analyze and present the clustering results effectively.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Juniasam"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/junia-sam-dani"},
  {title: "Mail", icon: <Mail />, href: "mailto:juniasam@karunya.edu.in"}
]},
{id: 23,name: "R. Akhila Jyothi ", role:"STATISTICS", college: "Karunya institute of technology and sciences ", photo: "https://drive.google.com/open?id=1Dd-wZ9qctOw4OlQrdwXyNMrBXGKmtCUO", desc: "Skilled in creating matrix plots to explore relationships and correlations within complex datasets. I use visual patterns to simplify multi-variable data analysis", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Akhila-Jyothi"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/akhila-jyothi-a893b2249"},
  {title: "Mail", icon: <Mail />, href: "mailto:rachapudiakhila@karunya.edu.in"}
]},
{id: 24,name: "S.Abika Blessy", role:"STATISTICS", college: "Karunya Institue of Technology and Sciences", photo: "https://drive.google.com/open?id=1Qvr7H1nupvZjCRXBFqwwMmt5v4qVkc-H", desc: "Visualized geographic data using choropleth maps to reveal patterns and insights in metadata", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Abika2304"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/abika-blessy-s-a6533a369"},
  {title: "Mail", icon: <Mail />, href: "mailto:abikablessy@karunya.edu.in"}
]},
{id: 25,name: "Aleena Saji ", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1XGWIZXzB_N__E-kofV_4K9uH_0Fj_aap", desc: "Developed a machine learning model using LightGBM for accurate predictions and efficient computation.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Aleena162004"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/aleena-saji"},
  {title: "Mail", icon: <Mail />, href: "mailto:aleenasaji@karunya.edu.in"}
]},
{id: 26,name: "V Jaswanthini ", role:"ML/DL MODELLING", college: "Karunya institute of technology and sciences ", photo: "https://drive.google.com/open?id=1FcSRTGcInkkiDv8x5EMqRD-VjQo5wIKY", desc: "Built a Bayesian Network model to capture and analyze conditional dependencies between variables, supporting probabilistic inference and data-driven decision-making.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/V-Jaswanthini"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jaswanthini-victor"},
  {title: "Mail", icon: <Mail />, href: "mailto:vjaswanthini@karunya.edu.in"}
]},
{id: 27,name: "Angel Merrin John", role:"ML/DL MODELLING", college: "KARUNYA INSTITUTE OF TECHNOLOGY AND SCIENCES ", photo: "https://drive.google.com/open?id=1Yt2e3MBSmvv1hzxuTOKO9d9m9lRFdZKi", desc: "I trained an distillbert-based language model and built a user-friendly solution that enables others to easily train their own models on custom datasets.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/angelmerrinjohn"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/angel-merrin-john-8b7984249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:aj1518094@gmail.com"}
]},
{id: 28,name: "ARUN THOMAS", role:"TESTING", college: "KARUNYA INSTITUTE OF TECHNOLOGY AND SCIENCES", photo: Arun_Thomas, desc: "As the tester for the project, I was responsible for designing and executing test cases to ensure the functionality, reliability, and accuracy of the software. I validated that the system correctly handled user inputs, selected the appropriate machine learning algorithms, and generated the expected outputs based on the provided datasets. I also identified bugs, collaborated with developers to troubleshoot issues, and verified performance across different algorithm and data combinations.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/ARUNTHOMAS3"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/-arunthomas"},
  {title: "Mail", icon: <Mail />, href: "mailto:arunthomas22@karunya.edu.in"}
]},
{id: 29,name: "Anbi Tibina K K", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: Anbi_Tibina_K_K , desc: "I trained an DISTILL-based language model and built a user-friendly solution that enables others to easily train their own models on custom datasets.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Anbi105", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/anbitibinakk"},
  {title: "Mail", icon: <Mail />, href: "mailto:anbitibina3@gmail.com"}
]},
{id: 30,name: "ANGEL MERRIN JOHN", role:"ML/DL MODELLING", college: "KARUNYA INSTITUTE OF TECHNOLOGY AND SCIENCES", photo: "https://drive.google.com/open?id=1cGFZsiU45Es8W-lRMS0Zzrd5JMoJfIc-", desc: "I trained a DistilBERT-based NLP model and developed an accessible pipeline that allows users to fine-tune the model on custom datasets for various text classification tasks.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/angelmerrinjohn"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/angel-merrin-john-8b7984249"},
  {title: "Mail", icon: <Mail />, href: "mailto:angelmerrinjohn@gmail.com"}
]},
{id: 31,name: "BANDARU PAVANA SANDHYA", role:"ML/DL MODELLING", college: "KARUNYA INSTITUTE OF TECHNOLOGY AND SCIENCES", photo: "https://drive.google.com/open?id=1_TqhZk2-8VWXb2elRV7Jc1RSRBlLE27d", desc: "Developed a deep learning model using a customizable MLP architecture with integrated preprocessing, SMOTE for class balancing, dynamic training, and performance evaluation.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/bandarupavana"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/bandaru-pavana-sandhya"},
  {title: "Mail", icon: <Mail />, href: "mailto:bandarupavana@karunya.edu.in"}
]},
{id: 32,name: "Declan Anthony Dmello", role:"ML/DL MODELLING", college: "Jain (Deemed-to-be-University)", photo: "https://drive.google.com/open?id=1X7PXOMjZ9KeMQisOYN1YH024LDOCaN56", desc: "Exploring the Creative potential of Machine Learning through computer vision, generative AI and hands on problem solving via Kaggle.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Declan-Dmello"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/declan-dmello-50a70b25a"},
  {title: "Mail", icon: <Mail />, href: "mailto:declandmello2757@gmail.com"}
]},
{id: 33,name: "Srinithi S", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1IxjH8JTdf0DEZiCLC6lX0-kgt12fkZBH", desc: "Had a great learning experience working on this MLP model and gained valuable insights throughout the process", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Rookie-cyc", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/srinithi-s005"},
  {title: "Mail", icon: <Mail />, href: "mailto:srinithis22@karunya.edu.in"}
]},
{id: 34,name: "Bettina Ninan", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1veY82_E2Zjm5jDGIyR6Ovb1ySmnxAKqn", desc: "Worked on developing sequence models using LSTM and GRU architectures to efficiently capture temporal dependencies in time-series data. Focused on optimizing model performance and reducing training time.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Bettina2004"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/bettina-ninan-09b986249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:bettinaninan@karunya.edu.in"}
]},
{id: 35,name: "V.Praisy", role:"ML/DL MODELLING", college: "Karunya Institution of Technology and Sciences", photo: "https://drive.google.com/open?id=1Zl6st6Q6zElLmBWG_74dh6anUemDQDgH", desc: "I have worked on dbscan model where i have first preprocessed the data and grouped the data points into different n clusters where the hyperparameters like min sample and epochs where made user friendly the points which is above the given epochs and is equal to the min sample gets clustered into a group. This model overall helps in identifying different group while preserving the common points or data in a particular cluster", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/URK22CS5109", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/praisy-joice-289b2825a"},
  {title: "Mail", icon: <Mail />, href: "mailto:vpraisy@karunya.edu.in"}
]},
{id: 36,name: "Golla Ram", role:"RESEARCH AND DOCUMENTATION, CHATBOT", college: "Amrita Vishwa Vidyapeetham", photo: "https://drive.google.com/open?id=1fGuTfdHG-loSi6R6fFv2tNfRXabMgzKO", desc: "To develop a smart chatbot that assists users with seamless navigation, resolves doubts instantly through real-time support, and also a well-structured easy-to-follow documentation", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/GollaRam", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/Ram Golla"},
  {title: "Mail", icon: <Mail />, href: "mailto:gollaram77777@gmail.com"}
]},
{id: 37,name: "Jenolin Esther S", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1dZQRJTy7Xyk8zrDmdQ3lUYCt-lncQn3q", desc: "LightGBM is a fast, efficient gradient boosting framework used for high-performance machine learning tasks. When integrated with Flask, it allows deploying the trained model as a lightweight web API for real-time predictions.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/jenolinesthers", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jenolin-esther"},
  {title: "Mail", icon: <Mail />, href: "mailto:jenolinesther@karunya.edu.in"}
]},
{id: 38,name: "Aleena Saji", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1MjA8xAyTpDGuc4soNTdVyNmxzqvr5whe", desc: "Developed and optimized a LightGBM model for high-performance classification/regression tasks, achieving improved accuracy and reduced training time.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Aleena2004"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/aleena-saji"},
  {title: "Mail", icon: <Mail />, href: "mailto:aleenasaji@karunya.edu.in"}
]},

{id: 40,name: "V Jaswanthini ", role:"ML/DL MODELLING", college: "Karunya institute of technology and sciences ", photo: "https://drive.google.com/open?id=1EnEq0ElfGkxXjzxx6j-9yDJFlAlqSzNh", desc: "Built a Bayesian Network model to capture and analyze conditional dependencies between variables, supporting probabilistic inference and data-driven decision-making.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/V-Jaswanthini"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jaswanthini-victor"},
  {title: "Mail", icon: <Mail />, href: "mailto:jaswanthinivictor14@gmail.com"}
]},
{id: 41,name: "Stanly Kurian", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1HWvG5YHnQHN9Mx3WYNLubWXYZ01prNfp", desc: "Built a smart text classification model which cleaned up messy data, balanced things, and made it all usable through a simple web interface.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/stanlee47"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/stanly-kurian-0249b4249"},
  {title: "Mail", icon: <Mail />, href: "mailto:stanlykurian@karunya.edu.in"}
]},
{id: 42,name: "I Lydia Princess ", role:"ML/DL MODELLING", college: "Karunya institute of technology and sciences ", photo: "https://drive.google.com/open?id=1MqOhwduIogtErIWxC7ZcBXbvc3FKvZVv", desc: "Trained a Bayesian Network machine learning model and achieved high accuracy on the task.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/lydics"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/ilydiaprincess"},
  {title: "Mail", icon: <Mail />, href: "mailto:ilydia@karunya.edu.in"}
]},
{id: 43,name: "Sagana Murali ", role:"STATISTICS", college: "Amrita Vishwa Vidyapeetham Coimbatore ", photo: "https://drive.google.com/open?id=1pFA7LfXU2ph4hZ7ICr5PCqDvQCyolaMw", desc: "I have build a normalisation module under statistics group. The module normalizes the desired column of your dataset and it also has features for various type pf normalisation methods hence making normalisation task so simple for the user as they can download a normalized csv once the process is complete.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Sanuu17"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/sagana-murali"},
  {title: "Mail", icon: <Mail />, href: "mailto:saganamurali8@gmail.com"}
]},
{id: 44,name: "Shon Mathew Shalu ", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1BpLL8HP9dHs2ox8O1x8KGCAN6GDAhwlL", desc: "AdaBoost, short for Adaptive Boosting, is an ensemble learning method that combines multiple 'weak' learners (models that perform slightly better than random guessing) to create a 'strong' learner.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/shon123123", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/shonms?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:shonprivate03@gmail.com"}
]},
{id: 45,name: "Angel Merrin John ", role:"ML/DL MODELLING", college: "Karunya Institute of technology and Sciences ", photo: "https://drive.google.com/open?id=1MMWVMlMJqesFw_d76GAEMeW3PSICNlPn", desc: "I trained DistilBERT, an efficient, distilled version of BERT. This empowers users to train their own smaller and faster language models on custom datasets, making them ideal for performance-critical applications.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/angelmerrinjohn"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/angel-merrin-john-8b7984249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:aj1518094@gmail.com"}
]},
{id: 46,name: "Anbi Tibina K K ", role:"ML/DL MODELLING", college: "Karunya Institute of technology and Sciences ", photo: "https://drive.google.com/open?id=17z_T-y6MLY4y4h0daWeH9WnlrTlvp79u", desc: "I trained DistilBERT, an efficient, distilled version of BERT. This empowers users to train their own smaller and faster language models on custom datasets, making them ideal for performance-critical applications.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Anbi105"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/anbitibinakk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {title: "Mail", icon: <Mail />, href: "mailto:anbitibina@karunya.edu.in"}
]},
{id: 47,name: "Srinithi S", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1_BHNKAV3OyVSHutF9qVhIQR09hBmPZjL", desc: "Had a great time collaborating with my team while working on the metadata project", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Rookie-cyc"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/srinithi-s005"},
  {title: "Mail", icon: <Mail />, href: "mailto:srinithis22@karunya.edu.in"}
]},
{id: 48,name: "Bandaru Pavana Sandhya", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: Bandaru_Pavana_Sandhya, desc: "Designed and implemented a Multilayer Perceptron (MLP) neural network to perform classification on labeled datasets. The model was trained and evaluated to measure accuracy, demonstrating its effectiveness in supervised learning tasks.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/bandarupavana"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/bandaru-pavana-sandhya"},
  {title: "Mail", icon: <Mail />, href: "mailto:bandarupavana@karunya.edu.in"}
]},
{id: 49,name: "Bettina Ninan", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=10IhpVxnhMa8q10FUdULO-uqE4TWHDS-i", desc: "Worked on developing sequence models using LSTM and GRU architectures to efficiently capture temporal dependencies in time-series data. Focused on optimizing model performance and reducing training time.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Bettina2004"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/bettina-ninan-09b986249"},
  {title: "Mail", icon: <Mail />, href: "mailto:bettinaninan@karunya.edu.in"}
]},
{id: 50,name: "Guhan K.B", role:"ML/DL MODELLING, RESEARCH AND DOCUMENTATION, CHATBOT", college: "Amrita Vishwa Vidhyapeetham", photo: "https://drive.google.com/open?id=1H7xImkZpm3wxyEK7ZzpuZDQ79FLQ93sz", desc: "Building AI-powered chatbots using Olama, with clear documentation for easy deployment and integration.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Guhanbala"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/guhan-balachandran"},
  {title: "Mail", icon: <Mail />, href: "mailto:guhankb575@gmail.com"}
]},
{id: 51,name: "Golla Ram", role:"ML/DL MODELLING, RESEARCH AND DOCUMENTATION, CHATBOT", college: "AMRITA VISHWA VIDYAPPETHAM,COIMBATORE", photo: "https://drive.google.com/open?id=1Hs3-rLkJ_yUDpZoA6iGIASlG2jtVHj_r", desc: "Designed and developed a smart chatbot to enhance user experience by assisting in navigation, resolving doubts, and enabling topic-specific question handling.Developing kmeans, Created comprehensive product documentation and user manual. Acted as the SPOC for cross-functional coordination and delivery.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/GollaRam", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/https://tinyurl.com/Golla-Ram"},
  {title: "Mail", icon: <Mail />, href: "mailto:gollaram55555@gmail.com"}
]},
{id: 52,name: "Prajusha R", role:"ML/DL MODELLING", college: "Karunya University", photo: "https://drive.google.com/open?id=1-x-Em1X6t_ylwiMjzuwF-vgEkplxbUFl", desc: "Developed a high-accuracy Bayesian Network model leveraging probabilistic reasoning to uncover complex data relationships.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Prajusha17"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/prajusharajkumar"},
  {title: "Mail", icon: <Mail />, href: "mailto:prajushar@karunya.edu.in"}
]},
{id: 53,name: "Aleena Saji", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=11p5jNxxijB7d5LikRjUC9knEOeOE_A4m", desc: "We built a machine learning model using LightGBM for efficient and accurate predictions. The model was trained on structured data with optimized parameters for performance. We evaluated it using metrics like accuracy and tuned it for better generalization.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Aleena2004"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/aleena-saji"},
  {title: "Mail", icon: <Mail />, href: "mailto:aleenasaji@karunya.edu.in"}
]},
{id: 54,name: "Jenolin Esther S", role:"ML/DL MODELLING", college: "Karunya University", photo: "https://drive.google.com/open?id=1Kdo3xQjZorm8SUcz0GRM2Xs9Xisxpm9c", desc: "LightGBM is a fast, efficient gradient boosting framework used for high-performance machine learning tasks. When integrated with Flask, it allows deploying the trained model as a lightweight web API for real-time predictions.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/jenolinesthers", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jenolin-esther"},
  {title: "Mail", icon: <Mail />, href: "mailto:jenolinesther@karunya.edu.in"}
]},
{id: 55,name: "V Jaswanthini ", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1Glz1Cn1hkXhgQ8FUYZIj_11AKegZX3lU", desc: "Built a Bayesian Network model to capture and analyze conditional dependencies between variables, supporting probabilistic inference and data-driven decision-making.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/V-Jaswanthini"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/jaswanthini-victor"},
  {title: "Mail", icon: <Mail />, href: "mailto:jaswanthinivictor14@gmail.com"}
]},
{id: 56,name: "Ridwan Salahudeen", role:"BACKEND, ML/DL MODELLING, RESEARCH AND DOCUMENTATION", college: "Saint Francis University, Hong Kong", photo: "https://drive.google.com/open?id=1kG0-45khaZAhENFmKDH7yoCs8Iy_Sc6Z", desc: "Led the team in developing a user-friendly interface and applying unsupervised machine learning techniques—including clustering, association rule mining, and dimensionality reduction", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/sridwan222", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/inkedin.com/in/ridwan-salahudeen-5b7b4b3b"},
  {title: "Mail", icon: <Mail />, href: "mailto:contactsridwan@gmail.com"}
]},
{id: 57,name: "Esther Alice Mathew", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences ", photo: "https://drive.google.com/open?id=1AXUnlE20Gcsy9VSDsJbnqEy29A0wSV1L", desc: "I contributed the Random Forest regression pipeline with performance metrics like MSE and MAE for assessing prediction accuracy and data visualization.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/esther-alice", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/estheramathew"},
  {title: "Mail", icon: <Mail />, href: "mailto:estheramathewjv@gmail.com"}
]},
{id: 58,name: "Thejas Monikuttan", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=17aS8ZUsbBdZV85KECa9Heb988yOIJBaR", desc: "I developed the XGBoost classification workflow, including model training, and evaluation using confusion matrix and ROC-AUC.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/Thejas31", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/thejas-monikuttan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSohZZR6dS9G6TY3yG%2FQnMg%3D%3D"},
  {title: "Mail", icon: <Mail />, href: "mailto:thejasmoni31@gmail.com"}
]},
{id: 59,name: "Aaron Ande", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1OxB71pGovrlALUGpKYQbZCVfD5gorHj2", desc: "Worked on advanced data preprocessing and scaling methods.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/AaronAnde", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/aaronande?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnDRwRJkORbuxISqi8yQpAg%3D%3D"},
  {title: "Mail", icon: <Mail />, href: "mailto:aaronande@karunya.edu.in"}
]},
{id: 60,name: "Stanly Kurian", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: "https://drive.google.com/open?id=1ArZCkkVIz91wTHlwvD-SfKY0NrWG7oWR", desc: "Collaborated with the Deep Learning team to build an end-to-end training pipeline for classification task using the Electra model. Developed modules for data preprocessing and automated model training all integrated into Flask interface.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/stanlee47"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/stanly-kurian-0249b4249"},
  {title: "Mail", icon: <Mail />, href: "mailto:stanlykurian22@gmail.com"}
]},
{id: 61,name: "Allen Matthew T J", role:"ML/DL MODELLING", college: "Karunya Institute of Technology and Sciences", photo: Allen, desc: "Worked on developing and fine-tuning the ELECTRA deep learning model to improve performance on a range of natural language processing tasks.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/asta-maxx", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/allenmatthewtj"},
  {title: "Mail", icon: <Mail />, href: "mailto:allenmatthew@karunya.edu.in"}
]},
{id: 62,name: "Nethra Kanagaraj", role:"FRONTEND, BACKEND, STATISTICS", college: "Amrita Vishwa Vidyapeetham", photo: "https://drive.google.com/open?id=11XqPvxz_LaRiT160haOg4Z1tGY0bvo_m", desc: "Built smart metadata insights using statistical analysis of datasets—focusing on normality, modality, and confidence intervals to drive better data understanding.", degree: null, links: [
  {title: "GitHub", icon: <Github />, href: "https://github.com/NethraK15", comment: "modified"},
  {title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/nethra-kanagaraj-902b84301"},
  {title: "Mail", icon: <Mail />, href: "mailto:nethu1508@gmail.com"}
]}
]

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

