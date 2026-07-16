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
  }
];

export default blogs;