const packages = [
  {
    id: "delhi-local",

    title: "Delhi Local City Tour",

    duration: "1 Night / 2 Days",

    price: "₹2,500",

    image: "/src/assets/images/delhi_tour.png",

    overview:
      "Explore the rich heritage of Old and New Delhi with guided sightseeing covering iconic landmarks and cultural attractions.",

    highlights: [
      "Qutub Minar",
      "Humayun's Tomb",
      "India Gate",
      "Jama Masjid",
      "Chandni Chowk",
      "Rickshaw Ride"
    ],

    itinerary: [
  {
    day: "Day 01",
    title: "Delhi Sightseeing",
    description: `
In the morning at 0830 Hrs pick up from your hotel and proceed for a full-day tour of Old and New Delhi.

Visit Humayun's Tomb, built in 1565 A.D. by Bega Begam in memory of Emperor Humayun. Continue to Qutub Minar, the magnificent five-storey victory tower and one of Delhi's most iconic monuments.

Visit India Gate, the famous war memorial arch located in the heart of New Delhi. Drive past Rashtrapati Bhavan and Parliament House.

After lunch at a local restaurant, visit Jama Masjid, one of India's largest mosques. Enjoy a traditional rickshaw ride through Chandni Chowk and explore the bustling markets and historic streets of Old Delhi.

Later in the evening, return to your hotel with wonderful memories of Delhi sightseeing.
`
  }
],

   included: [
  "Our Own Company Cabs",
  "Pickup & Drop from Airport / Hotel",
  "Polite & Professional Drivers",
  "Planned Tours to Visit All Sites in Delhi",
  "2 Bottled Drinking Water per Day",
  "Best Hotel Suggestions in Delhi"
],

    excluded: [
  "Accommodation in Delhi",
  "Camera & Monument Fees",
  "Tips & Gratuities",
  "Alcoholic Drinks",
  "Personal Activities During Tour",
  "Guide Charges"
]
  },
   {
    id: "delhi-agra-delhi",

    title: "Delhi-Agra-Delhi",

    duration: "2 Nights / 3 Days",

    price: "₹6,500",

    image: "/src/assets/agra.png",

    overview:
      "Explore Delhi and Agra including Taj Mahal and Agra Fort.",

    highlights: [
      "India Gate",
      "Qutub Minar",
      "Taj Mahal",
      "Agra Fort"
    ],

    itinerary: [],

    included: [],

    excluded: []
  },

  {
    id: "golden-triangle",

    title: "Golden Triangle Tour",

    duration: "6 Nights / 7 Days",

    price: "₹24,900",

    image: "/src/assets/golden.png",

    overview:
      "Delhi, Agra, Jaipur and Mandawa heritage journey.",

    highlights: [],

    itinerary: [],

    included: [],

    excluded: []
  }

];

export default packages;