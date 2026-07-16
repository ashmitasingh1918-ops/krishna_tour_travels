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
    image: `${import.meta.env.BASE_URL}images/blog4.png`,
    coverImage: `${import.meta.env.BASE_URL}images/blog4.png`,
    images: [
      `${import.meta.env.BASE_URL}images/blog4.png`
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
  }
];

export default blogs;