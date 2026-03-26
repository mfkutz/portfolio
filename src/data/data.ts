const projects = [
  {
    id: "100",
    name: "Presumate",
    description: "SaaS for tradespeople to create professional quotes in minutes, send them via WhatsApp, and get notified the moment a client views or accepts.",
    image: "./screenshots/presumate.webp",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
      { name: "Node.js", icon: "./NodeJS-Dark.svg" },
      { name: "MongoDB", icon: "./MongoDB.svg" },
    ],
    links: {
      liveDemo: "https://www.presumate.com.ar/",
    },
  },
  {
    id: "103",
    name: "Synkro",
    description: "SaaS landing page for a team collaboration platform — features, how-it-works, pricing tiers, testimonials, and a working annual/monthly toggle.",
    image: "./screenshots/synkro.webp",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      liveDemo: "https://synkro-app-six.vercel.app/",
    },
  },
  {
    id: "102",
    name: "Meridian Advisory",
    description: "Landing page for a boutique business strategy & executive coaching firm — services, 4-step process, client testimonials, and an inquiry form.",
    image: "./screenshots/meridian.webp",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      liveDemo: "https://meridian-advisory-git-main-mfkutzs-projects.vercel.app/",
    },
  },
  {
    id: "101",
    name: "ClearMint Dental",
    description: "Landing page for a modern dental clinic — includes service showcase, team profiles, patient testimonials, and an appointment booking form.",
    image: "./screenshots/clearmint.webp",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      liveDemo: "https://clearmint-dental.vercel.app",
    },
  },
  {
    id: "1",
    name: "E-Commerce Fullstack",
    description: "Full-stack e-commerce store for audio products — product catalog, shopping cart, checkout flow, and user authentication with a Node.js/MongoDB backend.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/audiophile_kqv3eg.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "Node.js", icon: "./NodeJS-Dark.svg" },
      { name: "MongoDB", icon: "./MongoDB.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Audiophile-frontend",
      backend: "https://github.com/mfkutz/audiophile-backend",
      liveDemo: "https://audiophile-frontend-nine.vercel.app/",
    },
  },
  {
    id: "2",
    name: "Fylo",
    description: "Frontend Mentor challenge — dark-themed file storage landing page with sign-up sections, feature highlights, and testimonials.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865864/fylo_rccwne.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/fylo-dark/",
      liveDemo: "https://fylo-dark-murex.vercel.app/",
    },
  },
  {
    id: "18",
    name: "Countries",
    description: "REST Countries API app — browse every country with search and region filter, then click through to details including borders and currencies.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865860/countries_avcnfy.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/REST-Countries",
      liveDemo: "https://countries-delta-liart.vercel.app/",
    },
  },
  {
    id: "3",
    name: "EasyBank",
    description: "Frontend Mentor challenge — landing page for a modern online banking service with features section, latest articles, and a fully responsive layout.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865861/easybank_ybovfq.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/fylo-dark/",
      liveDemo: "https://easy-bank-neon.vercel.app/",
    },
  },
  {
    id: "31",
    name: "Uptask",
    description: "Full-stack project management app — create projects, assign tasks, invite collaborators, and track progress with JWT authentication and real-time updates.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865878/uptask_btywv6.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "Node.js", icon: "./NodeJS-Dark.svg" },
      { name: "MongoDB", icon: "./MongoDB.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Uptask",
      backend: "https://github.com/mfkutz/uptask_backend",
      liveDemo: "https://uptask-ruby.vercel.app/",
    },
  },
  {
    id: "5",
    name: "PPTLS",
    description: "Figma-to-React pixel-perfect conversion — responsive landing page built from a design file with custom components and clean Tailwind utility styling.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865868/pptls_kzlmxr.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/PPTLS/tree/master",
      liveDemo: "https://pptls-delta.vercel.app/",
    },
  },
  {
    id: "4",
    name: "Expense Planner",
    description: "Budget tracker app — set a spending limit, log expenses by category, and see real-time balance updates with the ability to edit or delete any entry.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865864/gastos_zpfasw.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/7-expense_planner",
      liveDemo: "https://musical-valkyrie-340301.netlify.app/",
    },
  },
  {
    id: "6",
    name: "Manage",
    description: "Frontend Mentor challenge — project management SaaS landing page with a testimonials carousel, feature breakdown, and mobile-first responsive design.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865868/manage_ro6mnv.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/manage-frontendMentor/tree/master",
      liveDemo: "https://manage-frontend-mentor-sigma.vercel.app/",
    },
  },
  {
    id: "7",
    name: "Blogr",
    description: "Frontend Mentor challenge — blogging platform landing page with animated dropdown navigation, feature sections, and a responsive layout.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/blogr_iojvtm.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Blogr-challengeFM/tree/master",
      liveDemo: "https://blogr-challenge-fm.vercel.app/",
    },
  },
  {
    id: "8",
    name: "Huddle",
    description: "Frontend Mentor challenge — community platform landing page with alternating feature blocks, statistics strip, and a call-to-action footer.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865864/huddle_umlxjb.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/huddle-frontendMentor",
      liveDemo: "https://huddle-frontend-mentor-sooty.vercel.app/",
    },
  },
  {
    id: "9",
    name: "Cripto Price",
    description: "Cryptocurrency price checker — select a fiat currency and a coin to fetch live exchange rates from a public API, with a clean card-based display.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865860/cripto_sdopq5.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/11-cripto-react-typescript",
      liveDemo: "https://remarkable-hummingbird-d11e5d.netlify.app/",
    },
  },
  {
    id: "10",
    name: "Cocktail",
    description: "Cocktail ordering kiosk built with Next.js — browse a drink menu, add items to the order, and complete checkout. Prisma handles the database layer.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/cocktail_bxspiq.jpg",
    technologies: [
      { name: "Next", icon: "./NextJS-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
      { name: "Prisma", icon: "./Prisma.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/15-kiosco",
      liveDemo: "https://silly-torrone-276e56.netlify.app/",
    },
  },
  {
    id: "11",
    name: "Calories",
    description: "Calorie and activity tracker — log food intake and exercise sessions with a running daily total, edit or delete any entry, and reset at any time.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/calories_olbwt4.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/4-Calorias",
      liveDemo: "https://lucky-macaron-25d0bd.netlify.app/",
    },
  },
  {
    id: "12",
    name: "Vet",
    description: "Veterinary patient manager — add, edit, and delete patient records using Zustand for state management and React Hook Form for validation. Data persists in localStorage.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865879/vet_wwnadp.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/9-vet-zustand-reactHookForm",
      liveDemo: "https://poetic-squirrel-785041.netlify.app/",
    },
  },
  {
    id: "13",
    name: "Weather",
    description: "Weather app powered by OpenWeatherMap API — search any city to get current temperature, humidity, and conditions with a clean, responsive interface.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865879/weather_ljtgnc.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/10-weather-api",
      liveDemo: "https://super-cuchufli-df401a.netlify.app/",
    },
  },
  {
    id: "14",
    name: "Tips and Consumption",
    description: "Restaurant bill splitter — enter a total, pick a tip percentage, split across any number of diners, and get an instant per-person breakdown.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/consum_xxn5al.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "TypeScript", icon: "./TypeScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Proyects-React/tree/master/10-weather-api",
      liveDemo: "https://gleeful-queijadas-771e39.netlify.app/",
    },
  },
  {
    id: "15",
    name: "Years Calculator",
    description: "Frontend Mentor age calculator — enter a birth date and get the exact years, months, and days elapsed today, with client-side date validation.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/calculatorAge_otvkgf.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/ageCalculator/tree/master",
      liveDemo: "https://age-calculator-delta-ten.vercel.app/",
    },
  },
  {
    id: "16",
    name: "Credit Card",
    description: "Frontend Mentor interactive card form — type in card details and watch the card design update in real-time, with front/back flip and full input validation.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865860/creditcard_gq7vmu.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/form-frondentMentor/tree/master",
      liveDemo: "https://form-frondent-mentor.vercel.app/",
    },
  },
  {
    id: "17",
    name: "To Do",
    description: "Frontend Mentor to-do app — drag-and-drop task reordering, dark/light theme toggle, and filters to view all, active, or completed items.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865878/todo1_ucrrf2.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/todoApp-FM",
      liveDemo: "https://todo-app-fm-psi.vercel.app/",
    },
  },
  {
    id: "19",
    name: "Bookmark",
    description: "Frontend Mentor bookmark manager landing page — tabbed features section, FAQ accordion, and browser extension install CTAs with a responsive layout.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/bookmark_sf023d.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/bookmark",
      liveDemo: "https://bookmark-sepia.vercel.app/",
    },
  },
  {
    id: "20",
    name: "SoundDZing",
    description: "Figma-to-React conversion — headphone product landing page with bold typography, feature highlights, and a pixel-perfect responsive layout.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865873/soundD_tbqtlz.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/land1-figmaToReact/tree/master",
      liveDemo: "https://land1-figma-to-react.vercel.app/",
    },
  },
  {
    id: "21",
    name: "Try Trial",
    description: "Frontend Mentor multi-step form — collects user info across multiple steps with validation, a review summary screen, and a confirmation state.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865872/rose_lxrve8.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/form-rose/tree/master",
      liveDemo: "https://form-rose-pied.vercel.app/",
    },
  },
  {
    id: "22",
    name: "Snap",
    description: "Frontend Mentor navigation challenge — responsive landing page with animated dropdown menus, a mobile slide-in hamburger nav, and feature sections.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865873/snap_aicwxc.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/snap-frontendMentor",
      liveDemo: "https://snap-frontend-mentor-git-master-mfkutz.vercel.app/",
    },
  },
  {
    id: "23",
    name: "Sunnyside Agency",
    description: "Frontend Mentor creative agency landing page — built with vanilla HTML/CSS/JS, featuring a full-viewport hero, image grid layout, and testimonials.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865878/sunnyside_kuorrx.jpg",
    technologies: [
      { name: "HTML", icon: "./HTML.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "CSS", icon: "./CSS.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Sunnyside-agency",
      liveDemo: "https://mfkutz.github.io/Sunnyside-agency/",
    },
  },
  {
    id: "24",
    name: "Porcent Calculator",
    description: "Tip calculator built with vanilla JS — enter a bill, choose a tip percentage, and split the total across multiple people with an instant per-person result.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865868/porcentCalc_twblhb.jpg",
    technologies: [
      { name: "HTML", icon: "./HTML.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "CSS", icon: "./CSS.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/calculator-porcent",
      liveDemo: "https://mfkutz.github.io/calculator-porcent/",
    },
  },
  {
    id: "25",
    name: "Base Apparel",
    description: "Frontend Mentor coming-soon page — email sign-up form with client-side validation, styled with CSS Grid and fully responsive across all screen sizes.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/baseapparel_ms6f0o.jpg",
    technologies: [
      { name: "HTML", icon: "./HTML.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "CSS", icon: "./CSS.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/base-apparel-mentor",
      liveDemo: "https://mfkutz.github.io/base-apparel-mentor/",
    },
  },
  {
    id: "26",
    name: "W. Web 3.0",
    description: "Frontend Mentor news homepage — multi-column layout with a featured article, trending sidebar, and a fully responsive grid built with vanilla CSS.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865883/wweb_bnufx2.jpg",
    technologies: [
      { name: "HTML", icon: "./HTML.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "CSS", icon: "./CSS.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/news-homepage",
      liveDemo: "https://mfkutz.github.io/news-homepage/",
    },
  },
  {
    id: "27",
    name: "Gas Price",
    description: "Ethereum gas price tracker using the Etherscan API — monitor current gas fees and get alerted when they drop below a user-defined threshold.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865863/etherscan_rqzsp4.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/gasAlarmEth/tree/master",
      liveDemo: "https://gas-alarm-eth.vercel.app/",
    },
  },
  {
    id: "28",
    name: "Will Turner",
    description: "Framer Motion animation showcase — scroll-driven animations, smooth page transitions, and interactive motion effects demonstrating advanced React animation patterns.",
    image:
      "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865882/willturner_nc5gxb.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/framer_motion_one/tree/master",
      liveDemo: "https://framer-motion-one-tau.vercel.app/",
    },
  },
  {
    id: "29",
    name: "Argentine Provinces",
    description: "Interactive map of Argentine provinces using Leaflet.js — click on any region to explore geographic data, built with React and custom tile layers.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865867/leaf_gqztpl.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/leaflet-MAP-provinces/tree/master",
      liveDemo: "https://leaflet-map-provinces.vercel.app/",
    },
  },
  {
    id: "30",
    name: "Spotify Clon",
    description: "Spotify UI clone — recreates the music player interface with a playlist sidebar, track list, and a responsive layout inspired by Spotify's design system.",
    image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865874/spotify_ttte0t.jpg",
    technologies: [
      { name: "React", icon: "./React-Dark.svg" },
      { name: "Javascript", icon: "./JavaScript.svg" },
      { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
    ],
    links: {
      github: "https://github.com/mfkutz/Spotify-NextJS-ClonStyle/tree/master",
      liveDemo: "https://spotify-next-js-clon-style.vercel.app/",
    },
  },
];

export default projects;
