const projects = [
    {
        id: "1",
        name: "E-Commerce Fullstack",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/audiophile_kqv3eg.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "Node.js", icon: "./NodeJS-Dark.svg" },
            { name: "MongoDB", icon: "./MongoDB.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/Audiophile-frontend",
            liveDemo: "https://audiophile-frontend-nine.vercel.app/"
        }
    },
    {
        id: "2",
        name: "Fylo",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865864/fylo_rccwne.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/fylo-dark/",
            liveDemo: "https://fylo-dark-murex.vercel.app/"
        }
    }
    ,
    {
        id: "18",
        name: "Countries",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865860/countries_avcnfy.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/REST-Countries",
            liveDemo: "https://countries-delta-liart.vercel.app/"
        }
    }
    ,
    {
        id: "3",
        name: "EasyBank",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865861/easybank_ybovfq.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/fylo-dark/",
            liveDemo: "https://easy-bank-neon.vercel.app/"
        }
    }
    ,
    {
        id: "31",
        name: "Uptask",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865878/uptask_btywv6.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "Node.js", icon: "./NodeJS-Dark.svg" },
            { name: "MongoDB", icon: "./MongoDB.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/uptask_backend",
            liveDemo: "https://uptask-ruby.vercel.app/"
        }
    }
    ,
    {
        id: "5",
        name: "PPTLS",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865868/pptls_kzlmxr.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/PPTLS/tree/master",
            liveDemo: "https://pptls-delta.vercel.app/"
        }
    }
    ,
    {
        id: "4",
        name: "Expense Planner",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865864/gastos_zpfasw.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/7-expense_planner",
            liveDemo: "https://musical-valkyrie-340301.netlify.app/"
        }
    }
    ,
    {
        id: "6",
        name: "Manage",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865868/manage_ro6mnv.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/manage-frontendMentor/tree/master",
            liveDemo: "https://manage-frontend-mentor-sigma.vercel.app/"
        }
    }
    ,
    {
        id: "7",
        name: "Blogr",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/blogr_iojvtm.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/Blogr-challengeFM/tree/master",
            liveDemo: "https://blogr-challenge-fm.vercel.app/"
        }
    }
    ,
    {
        id: "8",
        name: "Huddle",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865864/huddle_umlxjb.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/huddle-frontendMentor",
            liveDemo: "https://huddle-frontend-mentor-sooty.vercel.app/"
        }
    }
    ,
    {
        id: "9",
        name: "Cripto Price",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865860/cripto_sdopq5.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/11-cripto-react-typescript",
            liveDemo: "https://remarkable-hummingbird-d11e5d.netlify.app/"
        }
    }
    ,
    {
        id: "10",
        name: "Cocktail",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/cocktail_bxspiq.jpg",
        technologies: [
            { name: "Next", icon: "./NextJS-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
            { name: "Prisma", icon: "./Prisma.svg" }
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/15-kiosco",
            liveDemo: "https://silly-torrone-276e56.netlify.app/"
        }
    }
    ,
    {
        id: "11",
        name: "Calories",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/calories_olbwt4.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/4-Calorias",
            liveDemo: "https://lucky-macaron-25d0bd.netlify.app/"
        }
    }
    ,
    {
        id: "12",
        name: "Vet",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865879/vet_wwnadp.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/9-vet-zustand-reactHookForm",
            liveDemo: "https://poetic-squirrel-785041.netlify.app/"
        }
    }
    ,
    {
        id: "13",
        name: "Weather",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865879/weather_ljtgnc.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/10-weather-api",
            liveDemo: "https://super-cuchufli-df401a.netlify.app/"
        }
    }
    ,
    {
        id: "14",
        name: "Tips and Consumption",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/consum_xxn5al.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "TypeScript", icon: "./TypeScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/Proyects-React/tree/master/10-weather-api",
            liveDemo: "https://gleeful-queijadas-771e39.netlify.app/"
        }
    }
    ,
    {
        id: "15",
        name: "Years Calculator",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865854/calculatorAge_otvkgf.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/ageCalculator/tree/master",
            liveDemo: "https://age-calculator-delta-ten.vercel.app/"
        }
    }
    ,
    {
        id: "16",
        name: "Credit Card",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865860/creditcard_gq7vmu.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/form-frondentMentor/tree/master",
            liveDemo: "https://form-frondent-mentor.vercel.app/"
        }
    }
    ,
    {
        id: "17",
        name: "To Do",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865878/todo1_ucrrf2.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/todoApp-FM",
            liveDemo: "https://todo-app-fm-psi.vercel.app/"
        }
    }
    ,
    {
        id: "19",
        name: "Bookmark",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/bookmark_sf023d.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/bookmark",
            liveDemo: "https://bookmark-sepia.vercel.app/"
        }
    }
    ,
    {
        id: "20",
        name: "SoundDZing",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865873/soundD_tbqtlz.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/land1-figmaToReact/tree/master",
            liveDemo: "https://land1-figma-to-react.vercel.app/"
        }
    }
    ,
    {
        id: "21",
        name: "Try Trial",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865872/rose_lxrve8.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/form-rose/tree/master",
            liveDemo: "https://form-rose-pied.vercel.app/"
        }
    }
    ,
    {
        id: "22",
        name: "Snap",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865873/snap_aicwxc.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/snap-frontendMentor",
            liveDemo: "https://snap-frontend-mentor-git-master-mfkutz.vercel.app/"
        }
    }
    ,
    {
        id: "23",
        name: "Sunnyside Agency",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865878/sunnyside_kuorrx.jpg",
        technologies: [
            { name: "HTML", icon: "./HTML.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "CSS", icon: "./CSS.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/Sunnyside-agency",
            liveDemo: "https://mfkutz.github.io/Sunnyside-agency/"
        }
    }
    ,
    {
        id: "24",
        name: "Porcent Calculator",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865868/porcentCalc_twblhb.jpg",
        technologies: [
            { name: "HTML", icon: "./HTML.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "CSS", icon: "./CSS.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/calculator-porcent",
            liveDemo: "https://mfkutz.github.io/calculator-porcent/"
        }
    }
    ,
    {
        id: "25",
        name: "Base Apparel",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865855/baseapparel_ms6f0o.jpg",
        technologies: [
            { name: "HTML", icon: "./HTML.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "CSS", icon: "./CSS.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/base-apparel-mentor",
            liveDemo: "https://mfkutz.github.io/base-apparel-mentor/"
        }
    }
    ,
    {
        id: "26",
        name: "W. Web 3.0",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865883/wweb_bnufx2.jpg",
        technologies: [
            { name: "HTML", icon: "./HTML.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "CSS", icon: "./CSS.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/news-homepage",
            liveDemo: "https://mfkutz.github.io/news-homepage/"
        }
    }
    ,
    {
        id: "27",
        name: "Gas Price",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865863/etherscan_rqzsp4.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/gasAlarmEth/tree/master",
            liveDemo: "https://gas-alarm-eth.vercel.app/"
        }
    }
    ,
    {
        id: "28",
        name: "Will Turner",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865882/willturner_nc5gxb.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/framer_motion_one/tree/master",
            liveDemo: "https://framer-motion-one-tau.vercel.app/"
        }
    }
    ,
    {
        id: "29",
        name: "Argentine Provinces",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865867/leaf_gqztpl.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/leaflet-MAP-provinces/tree/master",
            liveDemo: "https://leaflet-map-provinces.vercel.app/"
        }
    }
    ,
    {
        id: "30",
        name: "Spotify Clon",
        image: "https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1741865874/spotify_ttte0t.jpg",
        technologies: [
            { name: "React", icon: "./React-Dark.svg" },
            { name: "Javascript", icon: "./JavaScript.svg" },
            { name: "TailwindCSS", icon: "./TailwindCSS-Dark.svg" },
        ],
        links: {
            github: "https://github.com/mfkutz/Spotify-NextJS-ClonStyle/tree/master",
            liveDemo: "https://spotify-next-js-clon-style.vercel.app/"
        }
    }


];

export default projects;
