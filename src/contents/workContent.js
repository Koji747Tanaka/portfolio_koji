const workContents = [
    { 
        title: "SEO System DX", 
        subtitle: "Semi-automate labour with LLM", 
        bullets: [
            "Role: Dev Team Leader",
            "Tech: FastAPI, Redis, LLM",
        ],
        description: `CyberOwl provides a service where clients can obtain articles optimized for SEO performance. 
        However, the process of analysing keywords on the Search Engine Results Page (SERP) and evaluating articles 
        against numerous criteria was not only time-consuming but also cost the company thousands of dollars every month. 
        By leveraging Large Language Models and other Natural Language Processing techniques, 
        we've managed to automate a significant portion of the operation. My role was to lead and cooperate with an internship student team.`,
        image: "images/dx.webp", 

    },
    { 
        title: "Large Language Model Analysis", 
        subtitle: "Fine-Tuning and Augmenting LLM", 
        bullets: [
            "Role: AI Research",
            "Tech: GPT Models, RAG, Embedding",
        ],
        description: `To gain a deeper understanding of the capabilities and limitations of Large Language Models (LLMs) and 
        to understand the possibility of adopting it for projects, 
        we conducted an in-depth analysis of Transformer-based models, Retrieved Augmented Generation, 
        and Fine-Tuning techniques. Additionally, we explored various features offered by OpenAI's APIs, 
        including Beta functions. Furthermore, as part of the 'SEO System DX' project, we carried out prompt engineering analysis.`,
        image: "images/llmAnalysis.webp", 

    },
    { 
        title: "User Behaviour Prediction", 
        subtitle: "Creating Deep Neural Network", 
        bullets: [
            "Role: Machie Learning Model Dev",
            "Tech: BigQuery ML",
        ],
        description: `CyberOwl Inc. hosts a large number of websites listing thousands of cram schools. 
        The company gathers extensive data on visitor traffic and user interaction patterns for each tutoring page, 
        which is stored in BigQuery for analytical purposes. In an effort to predict website impressions, clicks, and conversions, 
        we have developed machine learning models, such as Deep Neural Networks and XGBoost trees. 
        The most effective model among these has attained an error rate of approximately 7%.`,
        image: "images/dnnKv.webp", 

    },
    { 
        title: "Vue.js Plugin Update", 
        subtitle: "Creating reusable pages", 
        bullets: [
            "Role: Front-End Dev",
            "Tech: Vue2.js, Vue3.js",
        ],
        description: `When introducing new projects, there is a need to reimplement functions that have already been introduced in other projects, such as creating API key and user management page. 
        Therefore, CyberOwl Inc. has developed a system that allows developers to create these pages with just a bit of JSON and JavaScript code. 
        However, this system was developed using Vue2.js, and there are many breaking changes between Vue2.js and Vue3.js. 
        As a result, I converted it to Vue3.js and introduced the system to the most recent project I worked on.`,
        image: "images/vueplugin.webp" 
    },
    { 
        title: "Video Streaming System", 
        subtitle: "Converting and Distributing videos", 
        bullets: [
            "Role: Full-Stack Dev",
            "Tech: Ruby on Rails, AWS",
        ],
        description: `
        CyberOwl Inc. aimed to enrich their web service with engaging video content. To optimise user experience and ensure broad compatibility across devices, 
        we engineered a system for converting MP4 and various video formats into HLS (HTTP Live Streaming) format and creating a cache for streaming. 
        By leveraging Ruby on Rails' efficient direct upload feature to cloud-based object storage, AWS's video processing services and Content Delivery Network (CDN), we managed to smoothly upload, process, and distribute videos.`,
        image: "images/videoStreaming.webp"
    
    },   
    { 
        title: "Image Hosting System", 
        subtitle: "at CyberOwl", 
        bullets: [
            "Role: Back-End Dev",
            "Tech: Ruby on Rails, AWS",
        ],
        description: `CyberOwl Inc. offers services that utilise images, such as a blogging platform. 
        These images need to be processed efficiently and stored properly. 
        By leveraging Ruby on Rails' Active Record system, direct uploads to a cloud storage system, and MiniMagick (an image processing Ruby gem), we have developed an image hosting service. 
        This service enables users to resize images, as well as change the resolution and format of the files. 
        Furthermore, by creating a cache on the CDN, we can reduce server load and accelerate loading times.`,
        image: "images/hosting.webp",
    },
    { 
        title: "SEO Analysis System", 
        subtitle: "at CyberOwl", 
        bullets: [
            "Role: Front-End Dev",
            "Tech: Vue3.js, Vuetify3, AWS",
        ],
        description: `Analysing Search Engine Result Pages (SERPs) is crucial for improving SEO. To present the analysis results in a user-friendly manner, 
        I contributed to this project as a front-end engineer. A similar system had already been implemented within the organisation, so I migrated it from Vue2.js to Vue3.js, 
        making necessary changes to meet the requirements of the newly migrated service. We also developed and introduced an SSO (Single Sign-On) authentication system for this and 
        other services.`,
        image: "images/seo_analysis.webp",
    },
    { 
        title: "Website Quality Check", 
        subtitle: "at CyberOwl", 
        bullets: [
            "Role: Back-End Dev",
            "Tech: Node.js, Express.js, AWS",
        ],
        description: `CyberOwl Inc. hosts thousands of websites for cram schools, and checking the HTML tags and JSON-LD formats of these sites is really time-consuming for the Quality Checking team. 
        Therefore, we developed a system to scrape websites, retrieve necessary information, and check it against the predetermined formats. 
        By leveraging Node.js's non-blocking I/O feature, we were able to implement a concurrent queue that speeds up the process and prevents sending too many requests at once, which could be considered a cyber attack.`,
        image: "images/web_check.webp",
    },
];
export default workContents;