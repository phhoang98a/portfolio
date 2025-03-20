export const projectsData = [
    {
        id: 1,
        name: 'Youtube Live Chat Analysis',
        description: "• Leveraged Kafka to stream crawled YouTube live chats into Apache Spark for sentiment analysis\n • Integrated MongoDB Change Streams with Fiber (Golang) backend, using Server-Sent Events and Socket.IO to deliver real-time chat sentiment and video-frame updates",        
        tools: ['Go', 'Kafka', 'Apache Spark', 'MongoDB', 'Socket.IO', 'Server-Sent Events', 'Fiber'],
        role: 'Backend Developer',
        code: 'https://github.com/phhoang98a/Youtube-Live-Analysis',
        demo: '',
    },
    {
        id: 2,
        name: 'Shortify',
        description: '• Architected a distributed and scalable URL Shortener, utilizing Docker\n • Implemented unique ID generator inspired by Twitter snowflake, converting the ID to short URL with base 62 conversions\n • Configured Nginx as a load balancer and a reverse proxy to handle backend server traffic',
        tools: ['Java', 'Docker', 'Springboot', 'Nginx', 'Redis'],
        role: 'Full Stack Developer',
        code: 'https://github.com/phhoang98a/Shortify',
        demo: '',
    },
    {
        id: 3,
        name: 'EngPronun',
        description: '• Created an English pronunciation platform with voice recording and instant feedback using Azure AI Speech API\n• Built the web interface with Next.js, styled with Tailwind CSS, and used Flask for the backend\n• Implemented Supabase for robust database services and user authentication by Google Magic Link',
        tools: ['Next.js', 'Tailwind CSS', 'Supabase', 'Azure AI Speech API', 'Flask'],
        code: 'https://github.com/phhoang98a/EnglishPronunciation',
        role: 'Full Stack Developer',
        demo: '',
    },
    {
        id: 4,
        name: 'MassEmail',
        description: "• Extracted LinkedIn post data using Puppeteer and enabled bulk email dispatch with AWS Lambda and AWS SES",
        tools: ['React', 'Express', 'MUI', 'Puppeteer', 'AWS Lambda', 'API Gateway', 'AWS S3', 'AWS SES'],
        code: 'https://github.com/phhoang98a/MassEmail',
        demo: '',
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },