import s1 from "/assets/img/s1.png";
import s2 from "/assets/img/s2.png";
import s3 from "/assets/img/s3.png";
import s4 from "/assets/img/s4.png";
import s5 from "/assets/img/s5.png";
import s6 from "/assets/img/s6.png";


import web from "/assets/img/netcore/web.jpg"
import ai from "/assets/img/netcore/ai.jpg"
import market from "/assets/img/netcore/market.jpg"
import design from "/assets/img/netcore/ui.jpg"
import app from "/assets/img/netcore/app.jpg"
import block from "/assets/img/netcore/block.jpg"


const features = [
  {
    id: 1,
    title: "Blockchain Development",
    description:
      "The process of developing, deploying, and maintaining blockchain-based systems and applications is known as blockchain development. A distributed ledger technology called blockchain makes it possible to securely and openly record digital assets and transactions. The following are some crucial elements and factors to take into account when developing a blockchain:",
    features: [
      {
        name: "Smart Contracts",
        description:
          "Self-executing agreements with predefined terms that automate transactions and enhance security while reducing the need for intermediaries.",
      },
      {
        name: "Consensus Mechanisms",
        description:
          "Different consensus methods like Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS) to validate and agree on the blockchain's state.",
      },
      {
        name: "Security and Encryption",
        description:
          "Robust encryption algorithms and cryptographic techniques ensure data integrity, transaction security, and tamper resistance.",
      },
      {
        name: "Tokenization and Cryptocurrencies",
        description:
          "Creation of digital tokens representing various assets, including native blockchain coins, utility tokens, and security tokens.",
      },
      {
        name: "Decentralization and Peer-to-Peer Networks",
        description:
          "Developing blockchain networks that eliminate centralized control, enabling direct interactions between participants.",
      },
      {
        name: "Scalability and Performance",
        description:
          "Implementing architectures that handle high transaction volumes using techniques like sharding, state channels, or layer-2 scaling solutions.",
      },
      {
        name: "Interoperability and Standards",
        description:
          "Ensuring compatibility between blockchain platforms using standards like BIP (Bitcoin Improvement Proposals) and Ethereum’s ERC-20 and ERC-721.",
      },
      {
        name: "Governance and Consensus Upgrades",
        description:
          "Establishing governance models for protocol updates, enabling decentralized decision-making in blockchain systems.",
      },
      {
        name: "Integration with Existing Systems",
        description:
          "Connecting blockchain applications with current business infrastructure using APIs and interoperability layers.",
      },
      {
        name: "Continuous Learning and Adoption",
        description:
          "Staying up-to-date with blockchain advancements, protocols, and best practices for long-term success.",
      },
    ],
    image: s6,
    img:block,
    delay: 100,
    
  },
  {
    id: 2,
    title: "Web Development & Design",
    description:
      "At NETCORE Nepal, we specialize in crafting high-performance, visually stunning, and user-friendly websites tailored to meet the unique needs of businesses, startups, and enterprises. Our expert team of developers and designers ensures that your online presence stands out in the competitive digital landscape",
    features: [
      {
        name: "Custom Web Development",
        description:
          "Tailor-made websites that align with business goals, built using scalable and secure technologies with seamless API integrations.",
      },
      {
        name: "UI/UX Design",
        description:
          "Intuitive, aesthetically pleasing designs with responsive layouts for cross-device compatibility, along with prototyping and wireframing.",
      },
      {
        name: "E-commerce Solutions",
        description:
          "Custom online stores with secure payment gateways, user-friendly product catalogs, and optimized checkout processes.",
      },
      {
        name: "CMS Development",
        description:
          "Easy-to-manage WordPress, Drupal, and Joomla-based content management systems with custom themes, plugins, and SEO-friendly structures.",
      },
      {
        name: "Web App Development",
        description:
          "Scalable and secure web applications integrated with cloud solutions for enhanced accessibility and performance.",
      },
    ],
    image: s3,
    img:web,
    delay: 200
  },

  {
    id: 3,
    title: "Mobile Development (Android & iOS)",
    description:
      "Building optimized and user-friendly mobile applications for both Android and iOS platforms.",
    features: [
      {
        name: "User-Centric Design",
        description:
          "Developing applications with intuitive and visually appealing interfaces, ensuring seamless user experiences.",
      },
      {
        name: "Platform Consistency",
        description:
          "Adhering to platform-specific design principles such as Material Design for Android and Human Interface Guidelines for iOS.",
      },
      {
        name: "Optimized Performance",
        description:
          "Reducing loading times, optimizing memory usage, and implementing background processing for smooth app performance.",
      },
      {
        name: "Offline Functionality",
        description:
          "Integrating offline capabilities through local storage, caching, and data synchronization for uninterrupted app usage.",
      },
    ],
    img:app,
    image: s2,
    delay: 300,
  },

  {
    id: 4,
    title: "Automation & AI",
    description:
      "At Netcore Nepal, we provide advanced Automation and Artificial Intelligence (AI) solutions to help businesses streamline operations, enhance efficiency, and accelerate growth. By integrating AI-driven automation, businesses can improve productivity, reduce manual effort, and deliver superior customer experiences. Our intelligent solutions ensure seamless workflows, smarter decision-making, and future-ready business strategies.",
    features: [
      {
        name: "Business Process Automation (BPA)",
        description:
          "Automating workflows across various departments to improve efficiency and reduce manual work.",
        sub_features: [
          "CRM & Sales Automation",
          "Finance & Accounting Automation",
          "Supply Chain & Inventory Management",
        ],
      },
      {
        name: "AI-Powered Chatbots & Virtual Assistants",
        description:
          "Enhancing customer engagement with AI-driven chatbots and virtual assistants available 24/7.",
        sub_features: [
          "Smart Chatbots for Websites & Social Media",
          "AI-Powered Voice Assistants",
          "Personalized Customer Support Solutions",
        ],
      },
      {
        name: "AI Agents & Predictive Analytics",
        description:
          "Using AI-powered systems to analyze data, predict trends, and automate decision-making processes.",
        sub_features: [
          "AI-Based Market Insights",
          "Demand Forecasting & Risk Analysis",
          "AI-Powered Decision Support Systems",
        ],
      },
      {
        name: "Robotic Process Automation (RPA)",
        description:
          "Automating repetitive tasks with software bots to enhance speed and accuracy.",
        sub_features: [
          "Data Entry & Processing Automation",
          "Invoice & Payroll Automation",
          "Report Generation & Compliance Management",
        ],
      },
      {
        name: "AI-Powered Cybersecurity & Risk Management",
        description:
          "Protecting businesses from cyber threats using AI-driven security solutions.",
        sub_features: [
          "Fraud Detection & Prevention",
          "AI-Powered Threat Analysis",
          "Automated Compliance & Security Audits",
        ],
      },
    ],
    image: s1,
    img:ai,
    delay: 400,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Helping businesses increase their online presence, engage their target audience, and drive sales through strategic digital marketing solutions.",
    features: [
      {
        name: "Search Engine Optimization (SEO)",
        description:
          "Optimizing websites to rank higher in search engines, improving visibility and organic traffic.",
      },
      {
        name: "Social Media Marketing (SMM)",
        description:
          "Creating targeted campaigns on platforms like Facebook, Instagram, and LinkedIn to increase brand awareness and engagement.",
      },
      {
        name: "Pay-Per-Click Advertising (PPC)",
        description:
          "Running paid ad campaigns on Google and social media to generate instant traffic and conversions.",
      },
      {
        name: "Content Marketing",
        description:
          "Crafting high-quality content, including blogs, infographics, and videos, to attract and retain customers.",
      },
      {
        name: "Email Marketing",
        description:
          "Designing personalized email campaigns to nurture leads, increase customer retention, and boost sales.",
      },
    ],
    image: s5,
    img:market,
    delay: 500
  },
  {
    id: 6,
    title: "UI UX & Graphics Design",
    description:
      "Creating visually appealing and user-friendly designs that enhance user engagement and provide a seamless experience.",
    features: [
      {
        name: "User Interface (UI) Design",
        description:
          "Designing intuitive and interactive user interfaces that enhance digital experiences.",
      },
      {
        name: "User Experience (UX) Design",
        description:
          "Optimizing the user journey by improving accessibility, usability, and overall satisfaction.",
      },
      {
        name: "Branding & Visual Identity",
        description:
          "Creating strong brand identities with unique logos, color schemes, and typography.",
      },
      {
        name: "Web & Mobile App Design",
        description:
          "Designing responsive and visually appealing web and mobile applications.",
      },
      {
        name: "Motion Graphics & Illustrations",
        description:
          "Creating engaging animations, infographics, and custom illustrations to make content stand out.",
      },
    ],
    image: s4,
    img:design,
    delay: 600,
  },
];

export default features;
