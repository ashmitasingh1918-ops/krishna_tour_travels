const fleetData = [
  {
    id: 1,
    name: "SIZUKI CIAZ",
    category: "Reliable SIZUKI CIAZ",
    type: "Luxury",

    seats: 4,
    luggage: 3,
    ac: true,

    transmission: "Manual",
    fuel: "Petrol",

    image: `${import.meta.env.BASE_URL}images/SIZUKI-CIAZ.jpg`,
    interior: `${import.meta.env.BASE_URL}images/SIZUKI-CIAZ-interior.jpg`,

    description:
      "The Sizuki Ciaz is a comfortable and fuel-efficient sedan, perfect for airport transfers, city rides, business travel, and family trips.",

    features: [
      "Air Conditioner",
      "Music System",
      "Mobile Charging",
      "Comfortable Seats",
      "Bottle Holder",
      "Power Windows",
    ],
  },

  {
    id: 2,
    name: "Maruti Ertiga",
    category: "Premium Family MPV",
    type: "GroupTravel",

    seats: 6,
    luggage: 4,
    ac: true,

    transmission: "Manual",
    fuel: "Petrol",

    image: `${import.meta.env.BASE_URL}images/ertiga.jpg`,
    interior: `${import.meta.env.BASE_URL}images/ertiga-interior.jpg`,

    description:
      "Maruti Ertiga is an excellent choice for family tours, pilgrimages, and group travel with spacious seating and luggage capacity.",

    features: [
      "Rear AC",
      "Music System",
      "Charging Point",
      "Comfortable Seats",
      "Large Boot Space",
      "Power Windows",
    ],
  },

  {
    id: 3,
    name: "Toyota Etios",
    category: "Executive Sedan",
    type: "Executive",

    seats: 4,
    luggage: 3,
    ac: true,

    transmission: "Manual",
    fuel: "Diesel",

    image: `${import.meta.env.BASE_URL}images/etios.jpg`,
    interior: `${import.meta.env.BASE_URL}images/etios-interior.jpg`,

    description:
      "Toyota Etios offers executive comfort with excellent ride quality, making it ideal for corporate and business travel.",

    features: [
      "Air Conditioner",
      "Music System",
      "Charging Point",
      "Comfortable Seats",
      "Power Windows",
    ],
  },

  {
    id: 4,
    name: "Toyota Innova",
    category: "Premium Family MPV",
    type: "GroupTravel",
     seats: 7,
    luggage: 5,
    ac: true,

    transmission: "Automatic",
    fuel: "Diesel",

    image: `${import.meta.env.BASE_URL}images/innova.jpg`,
    interior: `${import.meta.env.BASE_URL}images/innova-interior.jpg`,

    description:
      "Toyota Innova is our premium MPV designed for long-distance journeys, family vacations, and luxury travel.",

    features: [
      "Rear AC",
      "Captain Seats",
      "Music System",
      "Charging Point",
      "Large Luggage Space",
      "Power Windows",
    ],
  },

  {
    id: 5,
    name: "Toyota Crysta",
    category: "Luxury MPV",
    type: "Luxury",
    seats: 7,
    luggage: 5,
    ac: true,

    transmission: "Automatic",
    fuel: "Diesel",

    image: `${import.meta.env.BASE_URL}images/crysta.jpg`,
    interior: `${import.meta.env.BASE_URL}images/crysta-interior.jpg`,

    description:
      "Toyota Crysta delivers unmatched luxury, comfort, and safety for VIP guests, corporate executives, and premium tours.",

    features: [
      "Luxury Seats",
      "Rear AC",
      "Music System",
      "Charging Point",
      "Premium Interior",
      "Large Luggage Space",
    ],
  },

  {
    id: 6,
    name: "Tempo Traveller",
    category: "Group Traveller",
    type: "GroupTravel",
    seats: 12,
    luggage: 10,
    ac: true,

    transmission: "Manual",
    fuel: "Diesel",

    image: `${import.meta.env.BASE_URL}images/tempo.jpg`,
    interior: `${import.meta.env.BASE_URL}images/tempo-interior.jpg`,

    description:
      "Tempo Traveller is ideal for large groups, religious tours, weddings, corporate events, and long-distance travel.",

    features: [
      "Pushback Seats",
      "Full Air Conditioning",
      "Music System",
      "Charging Points",
      "Large Luggage Space",
      "Comfortable Legroom",
    ],
  },
];

export default fleetData;