  const fleetData = [
  {
    id: 1,
    name: "Suzuki Ciaz",
    category: "Premium Sedan",
    type: "CLASSIC SEDAN’S",

    seats: 5,
    luggage: 3,
    ac: true,

    transmission: "Manual",
    fuel: "Petrol",

    image: `${import.meta.env.BASE_URL}images/Ciaz.Exterior.png`,
    interior: `${import.meta.env.BASE_URL}images/Ciaz.Interior 1.png`,

    description:
      "The Suzuki Ciaz is a premium sedan offering exceptional comfort, fuel efficiency, and spacious interiors. It is perfect for airport transfers, business meetings, city rides, and family travel.",

    features: [
      "Automatic Climate Control",
      "Music System",
      "Mobile Charging Point",
      "Rear AC Vent",
      "Comfortable Seats",
      "Power Windows",
    ],

    specifications: {
      engine: {
        type: "K15 Smart Hybrid Petrol Engine",
        displacement: "1462 cc",
        power: "103 bhp @ 6000 rpm",
        torque: "138 Nm @ 4400 rpm",
      },

      capacity: {
        seating: "5",
        luggage: "3 Bags",
        fuelTank: "43 Litres",
      },

      dimensions: {
        length: "4490 mm",
        width: "1730 mm",
        height: "1485 mm",
        wheelBase: "2650 mm",
      },

      fuel: {
        fuelUsed: "Petrol",
      },
    },
  },

  {
    id: 2,
    name: "Maruti Swift Dzire",
    category: "Comfortable Sedan",
    type: "CLASSIC SEDAN’S",

    seats: 5,
    luggage: 3,
    ac: true,

    transmission: "Manual",
    fuel: "Petrol",

    image: `${import.meta.env.BASE_URL}images/swift-dzire.jpg`,
    interior: `${import.meta.env.BASE_URL}images/swift-dzire-interior.jpg`,

    description:
      "Maruti Swift Dzire is India's most trusted sedan offering superior mileage, comfort, and reliability for city rides and outstation travel.",

    features: [
      "Air Conditioner",
      "Music System",
      "Charging Point",
      "Comfortable Seats",
      "Power Windows",
      "Bottle Holder",
    ],

    specifications: {
      engine: {
        type: "1.2L DualJet Petrol",
        displacement: "1197 cc",
        power: "89 bhp @ 6000 rpm",
        torque: "113 Nm @ 4400 rpm",
      },

      capacity: {
        seating: "5",
        luggage: "3 Bags",
        fuelTank: "37 Litres",
      },

      dimensions: {
        length: "3995 mm",
        width: "1735 mm",
        height: "1515 mm",
        wheelBase: "2450 mm",
      },

      fuel: {
        fuelUsed: "Petrol",
      },
    },
  },

  {
    id: 3,
    name: "Kia Carens",
    category: "Premium MPV",
    type: "MVP",

    seats: 6,
    luggage: 4,
    ac: true,

    transmission: "Automatic",
    fuel: "Petrol",

    image: `${import.meta.env.BASE_URL}images/kiaExterior.jpeg`,
    interior: `${import.meta.env.BASE_URL}images/KiaInterior.jpeg`,

    description:
      "Kia Carens is a premium MPV featuring spacious seating, luxurious interiors, and advanced safety features, making it ideal for family vacations and corporate travel.",

    features: [
      "Automatic Climate Control",
      "Rear AC",
      "Touchscreen Infotainment",
      "Charging Ports",
      "Large Boot Space",
      "Premium Seats",
    ],

    specifications: {
      engine: {
        type: "1.5L Smartstream Petrol",
        displacement: "1497 cc",
        power: "115 bhp @ 6300 rpm",
        torque: "144 Nm @ 4500 rpm",
      },

      capacity: {
        seating: "6",
        luggage: "4 Bags",
        fuelTank: "45 Litres",
      },

      dimensions: {
        length: "4540 mm",
        width: "1800 mm",
        height: "1708 mm",
        wheelBase: "2780 mm",
      },

      fuel: {
        fuelUsed: "Petrol",
      },
    },
  },
{
  id: 4,
  name: "Toyota Innova Hycross",
  category: "Premium Family MPV",
  type: "SUV’S",

  seats: 7,
  luggage: 5,
  ac: true,

  transmission: "Automatic",
  fuel: "Petrol Hybrid",

  image: `${import.meta.env.BASE_URL}images/innova2.png`,
  interior: `${import.meta.env.BASE_URL}images/innova-interior.jpg`,

  description:
    "Toyota Innova Hycross combines luxury, performance, and hybrid efficiency, making it the perfect choice for family vacations, business trips, airport transfers, and long-distance journeys.",

  features: [
    "Automatic Climate Control",
    "Captain Seats",
    "Rear AC",
    "Touchscreen Infotainment",
    "Charging Ports",
    "Large Luggage Space",
  ],

  specifications: {
    engine: {
      type: "2.0L TNGA Petrol Hybrid",
      displacement: "1987 cc",
      power: "183.7 bhp",
      torque: "188 Nm",
    },

    capacity: {
      seating: "7",
      luggage: "5 Bags",
      fuelTank: "52 Litres",
    },

    dimensions: {
      length: "4755 mm",
      width: "1850 mm",
      height: "1790 mm",
      wheelBase: "2850 mm",
    },

    fuel: {
      fuelUsed: "Petrol Hybrid",
    },
  },
},
{
  id: 5,
  name: "Toyota Innova Crysta",
  category: "Luxury MPV",
  type: "SUV’S",

  seats: 7,
  luggage: 5,
  ac: true,

  transmission: "Manual",
  fuel: "Diesel",

  image: `${import.meta.env.BASE_URL}images/crysta.png`,
  interior: `${import.meta.env.BASE_URL}images/crysta-interior.png`,

  description:
    "Toyota Innova Crysta is one of India's most trusted premium MPVs, offering unmatched comfort, reliability, and safety for family vacations, corporate travel, and VIP transportation.",

  features: [
    "Luxury Captain Seats",
    "Automatic Climate Control",
    "Rear AC",
    "Premium Music System",
    "Charging Ports",
    "Large Luggage Space",
  ],

  specifications: {
    engine: {
      type: "2.4L GD Diesel Engine",
      displacement: "2393 cc",
      power: "148 bhp",
      torque: "343 Nm",
    },

    capacity: {
      seating: "7",
      luggage: "5 Bags",
      fuelTank: "55 Litres",
    },

    dimensions: {
      length: "4735 mm",
      width: "1830 mm",
      height: "1795 mm",
      wheelBase: "2750 mm",
    },

    fuel: {
      fuelUsed: "Diesel",
    },
  },
},
{
  id: 6,
  name: "Tempo Traveller",
  category: "Group Traveller",
  type: "MINI VANS’S",
 
  seats: 12,
  luggage: 10,
  ac: true,
 
  transmission: "Manual",
  fuel: "Diesel",
 
  image: `${import.meta.env.BASE_URL}images/tempo.png`,
  interior: `${import.meta.env.BASE_URL}images/tempo-interior.png`,
 
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
 
  specifications: {
    engine: {
      type: "2.6L CR Turbo Diesel",
      displacement: "2596 cc",
      power: "115 hp",
      torque: "350 Nm",
    },
 
    capacity: {
      seating: "12",
      luggage: "10 Bags",
      fuelTank: "70 Litres",
    },
 
    dimensions: {
      length: "5915 mm",
      width: "1975 mm",
      height: "2450 mm",
      wheelBase: "3350 mm",
    },
 
    fuel: {
      fuelUsed: "Diesel",
    },
  },
},
{
  id: 7,
  name: "Force Urbania",
  category: "Luxury Van",
  type: "MINI VANS’S",

  seats: 17,
  luggage: 12,
  ac: true,

  transmission: "Manual",
  fuel: "Diesel",

  image: `${import.meta.env.BASE_URL}images/force-urbania.jpg`,
  interior: `${import.meta.env.BASE_URL}images/force-urbania-interior.jpg`,

  description:
    "Force Urbania is a premium luxury van designed for group tours, corporate travel, weddings, pilgrimages, and long-distance journeys. It offers exceptional passenger comfort, spacious seating, and modern amenities for a luxurious travel experience.",

  features: [
    "Reclining Pushback Seats",
    "Powerful Air Conditioning",
    "Individual Charging Points",
    "LED Interior Lighting",
    "Premium Music System",
    "Large Luggage Space",
    "High Roof Design",
    "Comfortable Legroom",
  ],

  specifications: {
    engine: {
      type: "FM 2.6 CR Turbo Diesel",
      displacement: "2596 cc",
      power: "115 hp @ 2950 rpm",
      torque: "350 Nm @ 1400-2200 rpm",
    },

    capacity: {
      seating: "17",
      luggage: "12 Bags",
      fuelTank: "70 Litres",
    },

    dimensions: {
      length: "6960 mm",
      width: "2095 mm",
      height: "2550 mm",
      wheelBase: "4400 mm",
    },

    fuel: {
      fuelUsed: "Diesel",
    },
  },
}
];

export default fleetData;