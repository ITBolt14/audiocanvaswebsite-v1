export type EventSlug =
<<<<<<< HEAD
    | "conferences"
    | "corporate-events"
    | "hybrid-meetings-training-sessions"
    | "live-performances"
    | "school-functions"
    | "marketing-events"
    | "year-end-functions"
    | "private-events"
    | "birthday-parties"
    | "weddings";
=======
    "conferences"
"corporate-events"
"hybrid-meetings-training-sessions"
"live-performances"
"school-functions"
"marketing-events"
"year-end-functions"
"private-events"
"birthday-parties"
"weddings";
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48

export type EventPage = {
    slug: EventSlug;
    title: string;
    subtitle: string;
<<<<<<< HEAD
    image: string;
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
    overview: string;
    typicalRequirements: string[];
    whatWeProvide: string[];
    approach: string[];
};

export const events: EventPage[] = [
    {
        slug: "conferences",
        title: "Conferences",
        subtitle: "Clear communication, professional presentation, and reliable technical delivery.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "Audio Canvas provides structured audio-visual solutions for conferences, ensuring consistent sound, clean visuals and stable technical execution throughout your programme. Our focus is clarity, reliability and a professional attendee experience.",
        typicalRequirements: [
            "Presenter microphones (lapel/handheld) and clean speech reinforcement",
            "Playback audio for videos and presentations",
            "Visual display support (projector / LED screen) integration",
            "Stage monitoring and operator support",
            "Hybrid or streaming support where required",
        ],
        whatWeProvide: [
            "Technical planning aligned to yoour run-of-show",
            "Professional setup, testing and on-site operation",
            "Audio integration for speech clarity and balanced coverage",
            "Reliable signal flow management and contingency planning",
        ],
        approach: [
            "We assess the venue and programme requirements to design a stable technical plan.",
            "We implement and test all systems prior to start time to reduce risk.",
            "We provide on-site operational support to maintain consistent quality throughout the event.",
        ],
    },
    {
        slug: "corporate-events",
        title: "Corporate Events",
        subtitle: "Professional audio-visual execution that supports your message and brand.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "From formal functions to brand launches, Audio Canvas delivers dependable audio-visual solutions that enhance the atmosphere while maintaining a professional standard. We prioritise clear communication, stable technology and polished presentation.",
        typicalRequirements: [
            "Speech reinforcement and multi-microphone management",
            "Background music and playback audio",
            "Lighting to support ambience and presentation areas",
            "Display integration for branded visuals and media",
            "Optional streaming or recording where required",
        ],
        whatWeProvide: [
            "Structured planning and technical coordination",
            "Audio, lighting and visual integration",
            "Professional on-site operation and troubleshooting",
            "Reliable outcomes with attention to detail",
        ],
        approach: [
            "We align on event objectives and venue constraintsearly.",
            "We design and implement a technical layout suited to the space and programme.",
            "We operate and monitor the system to ensure consistent performance and presentation quality.",
        ],
    },
    {
        slug: "hybrid-meetings-training-sessions",
        title: "Hybrid Meetings and Training Sessions",
        subtitle: "Seamless connection between in-room and remote participants.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "Audio Canvas provides stable hybrid solutions that connect in-room and remote participants into one unified experience. We ensure clear audio, professional video presentation and reliable platform integration so your session runs smoothly with minimal disruption.",
        typicalRequirements: [
            "Clear speech capture for presenters and audience interaction",
            "Room speaker coverage and echo control",
            "Camera framing for professional presence",
            "Platform integration (Teams / Zoom / other)",
            "Technical facilitation during live sessions",
        ],
        whatWeProvide: [
            "Room assessment and hybrid workflow design",
            "Audio and video setup aligned to your session objectives",
            "Platform configuration and stability testing",
            "Live technical support for smooth delivery",
        ],
        approach: [
            "We define the participant experience and platfrom requirements.",
            "We configure audio/visual for clarity and consistency for both room and remote attendees.",
            "We provide live monitoring and support to maintain stability throughout the session.",
        ],
    },
    {
        slug: "live-performances",
        title: "Live Performances (In-door and Outdoor)",
        subtitle: "Balanced sound and reliable production for performers and audiences.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "We provide professional sound and production support for live performances in both indoor and outdoor environments. Our focus is balanced coverage, system stability and consistent sound quality that supports the performance and the audience experience.",
        typicalRequirements: [
            "Front-of-house sound reinforcement",
            "Stage monitoring for performers",
            "Microphone and instrument input management",
            "Lighting support where required",
            "Power and signal planning for outdoor environments",
        ],
        whatWeProvide: [
            "System design and deployment suited to venue size and layout",
            "Professional setup, tuning and live operation",
            "Stage monitoring configuration and feedback control",
            "On-site troubleshooting and operational support",
        ],
        approach: [
            "We assess the venue and technical rider requirements.",
            "We deploy and tune the system for coverage, clarity, and stability.",
            "We operate and monitor live to maintain consistent performance quality.",
        ],
    },
    {
        slug: "school-functions",
        title: "School Functions (Revue & Sports Days)",
        subtitle: "Reliable audio solutions for announcements, performances and large audiences.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "Audio Canvas support school events with practical, reliable audio-visual solutions suited to the environment and audience size. We focus on clear announcements, stable playback and dependable operation for smooth programme flow.",
        typicalRequirements: [
            "Clear PA for announcements and commentary",
            "Microphones for MCs and presenters",
            "Playback audio for performances and prize-giving",
            "Outdoor coverage planning for sports days",
            "operator support throughout the programme",
        ],
        whatWeProvide: [
            "Audio planning aligned to programme flow and venue layout",
            "Setup, testing and on-site operation",
            "Reliable speech clarity and balanced sound coverage",
            "Practical solutions aligned to school environments",
        ],
        approach: [
            "We define the programme needs and site requirements.",
            "We implement and test for clarity and coverage prior to start.",
            "We support the event operationally to minimise disruptions and ensure smooth flow.",
        ],
    },
    {
        slug: "marketing-events",
        title: "Marketing Events",
        subtitle: "Audio-visual support that enhances engagement and visibility.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "For activations and marketing events, Audio Canvas delivers professional audio-visual support designed to attract attention and support brand messaging. We focus on clarity, stability and presentation quality that matches your campaign objectives.",
        typicalRequirements: [
            "Playback audio and voice reinforcement for activations",
            "Lighting support to enhance presence and brand areas",
            "Display integration for visuals and content loops",
            "Quick setup and reliable operation for high-traffic environments",
            "Optional recording/streaming where required",
        ],
        whatWeProvide: [
            "Practical setup suited to venues and activation spaces",
            "Clean audio reinforcement and playback management",
            "Lighting and visual integration where required",
            "Stable operation with professional presentation",
        ],
        approach: [
            "We align on campaign objectives and technical requirements.",
            "We deploy a solution that is reliable and practical for the environment.",
            "We operate and monitor to maintain consistency throughout the activation.",
        ],
    },
    {
        slug: "year-end-functions",
        title: "Year-End Functions",
        subtitle: "Professional sound and lighting that supports atmosphere and programme flow.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "Audio Canvas provides audio, lighting and production support for year-end functions, ensuring reliable system performance and a polished event atmosphere. We focus on clear communication, consistent playback and professional execution.",
        typicalRequirements: [
            "Speech microphones for programme segments",
            "Music playback and DJ integration where required",
            "Lighting support for ambience and focal areas",
            "Audio support for awards and announcements",
            "Operator support throughout the event",
        ],
        whatWeProvide: [
            "Audio, lighting and playback system setup",
            "Professional on-site operation and troubleshooting",
            "Programme-aligned technical planning and execution",
            "Stable performance and polished outcomes",
        ],
        approach: [
            "We align on your event flow and venue constraints.",
            "We implement and test to ensure stability before doors open.",
            "We operate live to keep the event running smoothly with consistent quality.",
        ],
    },
    {
        slug: "private-events",
        title: "Private Events",
        subtitle: "Reliable audio-visual support tailored to your venue and vision.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "Audio Canvas supports private events with a structured approach that blends technical mastery with practical execution. We deliver reliable audio-visual outcomes that enhance the atmosphere while keeping the experience smooth and well-managed.",
        typicalRequirements: [
            "Background music and speech reinforcement",
            "Microphones for toasts and announcements",
            "Lighting support where required",
            "Playback support for special moments",
            "Reliable setup and smooth operation",
        ],
        whatWeProvide: [
            "Tailored technical planning for the venue and guest count",
            "Professional setup, testing and on-site support",
            "Clean audio and balanced coverage for the space",
            "Stable operation and polished experience",
        ],
        approach: [
            "We clarify requirements and venue conditions early.",
            "We design a solution that fits the space and event flow.",
            "We deliver professional execution so you can focus on the occasion.",
        ],
    },
    {
        slug: "birthday-parties",
        title: "Birthday Parties",
        subtitle: "Clean sound, reliable setup and a well-managed experience.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "We provide dependable sound and event support for birthday celebrations, focusing on clear music playback, stable operation and a professional setup that fits your venue. Our approach is practical, structured and aligned to your needs.",
        typicalRequirements: [
            "Music playback and sound reinforcement",
            "Microphone for announcements and special moments",
            "Lighting support where required",
            "Setup suited to venue size and guest count",
            "Reliable operation throughout the event",
        ],
        whatWeProvide: [
            "Audio setup, tuning and on-site support",
            "Playback management and consistent sound levels",
            "Practical technical planning and smooth execution",
            "Professional presentation and reliability",
        ],
        approach: [
            "We assess the venue size and requirements.",
            "We set up and test to ensure stable, clean sound.",
            "We support the event so the experience remains smooth and enjoyable.",
        ],
    },
    {
        slug: "weddings",
        title: "Weddings",
        subtitle: "Professional audio-visual support for key moments and a seamless expereince.",
<<<<<<< HEAD
        image: "/events/events.jpg",
=======
>>>>>>> fc74ce7bf99b36b288df0699f37bdcfedc0bed48
        overview:
            "Audio Canvas supports weddings with reliable audio-visual solutions designed to ensure key moments are delivered clearly and professionally. From ceremonies to receptions, we focus on stability, clarity and a smooth experience for hosts and guests.",
        typicalRequirements: [
            "Ceremony microphones and speech clarity",
            "Playback for entrance, vows, and special moments",
            "Reception sound and speech support",
            "Lighting support where required",
            "On-site operation for a seamless flow",
        ],
        whatWeProvide: [
            "Structured technical planning aligned to your schedule",
            "Professional setup, testing and live operation",
            "Clean audio reinforcement and playback management",
            "Reliable delivery and attention to detail",
        ],
        approach: [
            "We align on schedule, venue layout and key moments.",
            "We implement and test early to prevent disruptions.",
            "We operate live to keep sound and playback consistent throughout.",
        ],
    },
];

export function getEvent(slug: string) {
    return events.find((e) => e.slug === slug);
}