// Blog_api.js

export const blogs = [
  {
    id: 1,
    title: "A Memorable Family Trip Across Golden Triangle",
    date: "12 June 2026",
    publishedDate: "12 June 2026",
    author: "Aarav Sharma",
    readTime: "8 Min Read",
    category: "Heritage Tour",
    featured: true,
    image: `${import.meta.env.BASE_URL}images/blog1.jpeg`,
    coverImage: `${import.meta.env.BASE_URL}images/blog1.jpeg`,
    images: [
      `${import.meta.env.BASE_URL}images/blog1.jpeg`,
      `${import.meta.env.BASE_URL}images/blog2.jpeg`,
      `${import.meta.env.BASE_URL}images/blog3.jpeg`
    ],
    tags: ["Golden Triangle", "Family Vacation", "Taj Mahal", "Heritage"],
    description: "Our Golden Triangle tour offered an unforgettable experience through Delhi, Agra, and Jaipur with premium chauffeur-driven vehicles.",
    content: [
      {
        type: "paragraph",
        text: "I visited India with my friends last summer. We had an amazing experience having all our tours organized by Gaurav: we went on a tour to Agra, the Taj Mahal and Red Fort, and later on another tour to beutiful Jaipur. We had the opportunity to carefully choose all the details of our tours, and to get a private driver and tour guide for very competitive prices - especially compared to the European standards. It’s was overall a great and lovely experience and I strongly recommend it to get the best out of your time in India."
      },
    ]
  },
  {
    id: 2,
    title: "An Unforgettable Journey Across India's Heritage Cities",
    date: "16 July 2026",
    publishedDate: "16 July 2026",
    author: "Verified Traveler",
    readTime: "5 Min Read",
    category: "Heritage Tour",
    featured: true,
    image: `${import.meta.env.BASE_URL}images/blog2.jpeg`,
    coverImage: `${import.meta.env.BASE_URL}images/blog2.jpeg`,
    images: [
      `${import.meta.env.BASE_URL}images/blog2.jpeg`,
      `${import.meta.env.BASE_URL}images/blog21.jpeg`,
      `${import.meta.env.BASE_URL}images/blog22.jpeg`,
    ],
    tags: ["Varanasi", "Orchha", "Golden Triangle", "Custom Tour", "Impeccable Organization"],
    description: "A review of our flawless customized journey through Orchha, Khajuraho, Varanasi, Agra, Jaipur, and Delhi organized by Gaurav and team.",
    content: [
      {
        type: "paragraph",
        text: "⭐⭐⭐⭐⭐"
      },
      {
        type: "paragraph",
        text: "I had an unforgettable experience with Krishna Tour, and I highly recommend them to anyone planning a trip to India."
      },
      {
        type: "paragraph",
        text: "Our journey through **Orchha, Khajuraho, Varanasi, Agra, Jaipur and Delhi** was perfectly organized from beginning to end. Every destination had something unique to offer, and the itinerary was carefully planned to let us experience the true beauty, culture and spirituality of India without ever feeling rushed."
      },
      {
        type: "paragraph",
        text: "A very special thank you goes to **Gaurav**, whose professionalism, kindness and attention to every detail made this trip exceptional. His organization was absolutely flawless. He was always available, responsive and ready to solve any request immediately, making us feel safe and well looked after throughout the entire journey."
      },
      {
        type: "paragraph",
        text: "The hotels, transportation, guides and timing were all excellent. Everything worked exactly as promised, allowing us to relax and fully enjoy every moment of the trip."
      },
      {
        type: "paragraph",
        text: "If you are looking for a reliable travel agency with outstanding customer service and impeccable organization, Krishna Tour is the perfect choice. Thanks to Gaurav and his team, this wasn't just a vacation—it was a truly unforgettable experience that exceeded all our expectations."
      },
      {
        type: "paragraph",
        text: "Thank you again, Gaurav. We will definitely travel with Krishna Tour again!"
      }
    ]
  },
  {
    id: 3,
    title: "Perfectly Organized — A Review by Davide P",
    date: "December 2025",
    publishedDate: "December 2025",
    author: "Davide P",
    readTime: "2 Min Read",
    category: "Guest Review",
    featured: false,
    image: `${import.meta.env.BASE_URL}images/blog3new.png`,
    coverImage: `${import.meta.env.BASE_URL}images/blog3new.png`,
    images: [
      `${import.meta.env.BASE_URL}images/blog3new.png`,
      `${import.meta.env.BASE_URL}images/blog31.jpeg`,
    ],
    tags: ["5 Stars", "TripAdvisor", "Organized Tour", "Guest Review"],
    description: "We had an amazing experience planning our trip to India with Krishna Tour. Everything was very well organized from start to finish.",
    content: [
      {
        type: "paragraph",
        text: "We had an amazing experience planning our trip to India with Krishna Tour. Everything was very well organized from start to finish, which allowed us to simply enjoy the journey without worrying about the logistics. Always available to answer our questions, quick to respond, and incredibly helpful throughout the entire process."
      },
      {
        type: "paragraph",
        text: "The itinerary was very well thought out (thank you for the suggestions and advice), and every detail was thoughtfully arranged. We had many additional requests and amendments, through which we have been counselled and managed to discuss all alternatives. Thanks to their professionalism and support, we had one of the best trips we've ever taken. We would definitely recommend them to anyone looking for a stress-free and memorable travel experience in India."
      },
      {
        type: "tip",
        text: "Date of experience: December 2025 · Reviewed on TripAdvisor ⭐⭐⭐⭐⭐"
      }
    ]
  },
  {
    id: 4,
    title: "Unforgettable Experience — A Review by Annita P",
    date: "18 July 2026",
    publishedDate: "18 July 2026",
    author: "Annita P",
    readTime: "2 Min Read",
    category: "Guest Review",
    featured: false,
    image: `${import.meta.env.BASE_URL}images/blog4new.png`,
    coverImage: `${import.meta.env.BASE_URL}images/blog4new.png`,
    images: [
      `${import.meta.env.BASE_URL}images/blog4new.png`,
      `${import.meta.env.BASE_URL}images/blog41.png`,
      `${import.meta.env.BASE_URL}images/blog42.jpeg`,
    ],
    tags: ["5 Stars", "TripAdvisor", "Delhi", "Varanasi", "Heritage Tour"],
    description: "Our trip through Delhi, Varanasi, Khajuraho, Orcha & Agra was exceptionally well organized from start to finish.",
    content: [
      {
        type: "paragraph",
        text: "⭐⭐⭐⭐⭐ Our trip through Delhi Varanasi Khajiurao Orcha Agra was exceptionally well organized from start to finish. Every detail was carefully planned, allowing us to fully experience the culture, history and spirituality of India with complete peace of mind."
      },
      {
        type: "paragraph",
        text: "A special thanks to **Gaurav** for his outstanding professionalism, constant support and impeccable organization. His dedication, responsiveness and attention to detail made the entire journey smooth, enjoyable and truly memorable. I highly recommend **Krishna Tour** to anyone looking for a reliable travel agency that delivers excellent service and an unforgettable travel experience. We will certainly travel with them again. 💗"
      },
      {
        type: "tip",
        text: "Visited June 2026 · Travelled as a couple · Written 18 July 2026 · TripAdvisor ⭐⭐⭐⭐⭐"
      }
    ]
  },
  {
    id: 5,
    title: "Excellent Experience — A Review by Alberto A",
    date: "19 July 2026",
    publishedDate: "19 July 2026",
    author: "Alberto A",
    readTime: "3 Min Read",
    category: "Guest Review",
    featured: false,
    image: `${import.meta.env.BASE_URL}images/agra.jpg`,
    coverImage: `${import.meta.env.BASE_URL}images/agra.jpg`,
    images: [
      `${import.meta.env.BASE_URL}images/agra.jpg`
    ],
    tags: ["5 Stars", "TripAdvisor", "Family Travel", "Gaurav Gupta"],
    description: "This tour operator is the best. Mr. Gaurav Gupta organizes everything for you — hotels, transport, guides — at competitive prices.",
    content: [
      {
        type: "paragraph",
        text: "This tour operator is the best. I have travelled with it last month and it was great. It is ran by Mr. Gaurav Gupta, an enterprising young man who organize everything for you. You just need to tell him where you would like to go, the area you want to visit and he can provide everything, hotels (very good quality hotel), car or bus according to the number of people."
      },
      {
        type: "paragraph",
        text: "He asks a payment as soon as you arrive in India and this cover all you have booked through him, hotels, transport etc. This is also very good because allow you to travel in India with a little cash money because all major services are already paid. The people working for Gaurav are professional, very kind and generally they are proud of being Indian and try their best to help the traveler to understand their culture."
      },
      {
        type: "paragraph",
        text: "The drivers know the places where to go for a quick easy, and cheap lunch while travelling. They are also willing to help with restaurant choices for the dinners, shopping or other things. I have never had a single, minimum obstacle during the tour. They are professional, punctual and the prices are still competitive comparing with other tour operators. I really recommend this tour operator for any of your travel in India."
      },
      {
        type: "tip",
        text: "Visited June 2026 · Travelled with family · Written 19 July 2026 · TripAdvisor ⭐⭐⭐⭐⭐"
      }
    ]
  },
  {
    id: 6,
    title: "Perfect Tour Agency! — A Review by Julio B",
    date: "July 2026",
    publishedDate: "July 2026",
    author: "Julio B",
    readTime: "2 Min Read",
    category: "Guest Review",
    featured: false,
    image: `${import.meta.env.BASE_URL}images/Julio.jpg`,
    coverImage: `${import.meta.env.BASE_URL}images/Julio.jpg`,
    images: [
      `${import.meta.env.BASE_URL}images/Julio.jpg`,
      `${import.meta.env.BASE_URL}images/Julio1.jpg`,
      `${import.meta.env.BASE_URL}images/Julio2.jpg`,
    ],
    tags: ["5 Stars", "TripAdvisor", "Delhi", "Ladakh", "Guest Review"],
    description: "Wonderful experience with them! We had a beautiful tour in Delhi and Ladakh and everything was fully and perfectly organized.",
    content: [
      {
        type: "paragraph",
        text: "Wonderful experience with them! We had a beautiful tour in Delhi and Ladakh and everything was fully and perfectly organized. They provided transportation, internal flight, accommodation and guide service in whole tour and everything was perfect — we really enjoy the magnificent of India!!"
      },
      {
        type: "tip",
        text: "Reviewed on TripAdvisor · 5 contributions · ⭐⭐⭐⭐⭐"
      }
    ]
  }
];

export default blogs;