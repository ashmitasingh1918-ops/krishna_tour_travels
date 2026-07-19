// Detail page (interior) images
import detailDelhiTour from "../assets/places/local-tour.png";
import detailMandawa from "../assets/places/mandawa.png";
import detailTri from "../assets/places/tri.png";
import detailJaipur from "../assets/places/jai.png";
import detailHari from "../assets/places/harid.png";
import detailAgra from "../assets/places/taj.png";

// Homepage slider card images
import cardDelhiTour from "../assets/images/delhi_tour.png";
import cardMandawa from "../assets/images/mandawa.png";
import cardTriangle from "../assets/images/triangle.png";
import cardJaipur from "../assets/images/jaipur.png";
import cardHari from "../assets/images/hari.png";
import cardAgra from "../assets/images/agra.png";
import cardDelhi from "../assets/images/delhi.png";

const packages = [
  {
    id: "delhi-local",

    title: "Delhi Local City Tour",

    duration: "1 Night / 2 Days",

    cardImage: cardDelhiTour,

    gallery: detailDelhiTour,

    overview:
      "Discover the vibrant blend of history and culture in India’s capital. This short getaway takes you through the architectural marvels of Humayun’s Tomb and Qutub Minar, the patriotic charm of India Gate, and the grandeur of Rashtrapati Bhavan. Experience the spiritual aura of Jama Masjid, followed by a lively rickshaw ride through Chandni Chowk, where bustling bazaars and historic lanes bring Old Delhi to life. Perfect for travelers seeking a quick yet immersive introduction to Delhi’s heritage and modern highlights.",

    shortDesc: "Experience the rich heritage and culture with our exclusive local city tour.",

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
      "Complimentary WI-FI",
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
    id: "delhi-agra-delhi-2n",

    title: "Delhi-Agra-Delhi Tour",

    duration: "2 Nights / 3 Days",

    // price: "₹6,500",

    cardImage: cardDelhi,

    gallery: detailAgra,

    overview:
      "Discover the perfect blend of history, culture, and architecture with this Delhi-Agra-Delhi tour. Explore the iconic landmarks of Delhi and witness the timeless beauty of the Taj Mahal and Agra Fort, two of India's most celebrated heritage sites.",

    shortDesc: "A perfect short getaway to witness the majestic Taj Mahal and historical wonders of Agra.",

    highlights: [
      "Qutub Minar",
      "India Gate",
      "Raj Ghat",
      "Jama Masjid",
      "Chandni Chowk",
      "Taj Mahal",
      "Agra Fort",
      "Presidential House Drive",
      "Parliament House Drive",
      "Red Fort View"
    ],

    itinerary: [
      {
        day: "Day 01",
        title: "Arrive Delhi by Morning Flight",
        description:
          "Meeting and assistance on arrival in Delhi. Proceed for sightseeing covering Qutub Minar, India Gate (War Memorial Arch), President House, Parliament House, and Government Secretariat Buildings. Later visit Raj Ghat, Jama Masjid, Red Fort area, and Chandni Chowk. Overnight stay in Delhi."
      },

      {
        day: "Day 02",
        title: "Delhi – Agra – Delhi",
        description:
          "After an early breakfast, depart for a same-day excursion to Agra. Visit the world-famous Taj Mahal, one of the Seven Wonders of the World and a symbol of eternal love built by Emperor Shah Jahan. Continue to Agra Fort, the magnificent Mughal fortress on the banks of the Yamuna River. After sightseeing, return to Delhi for an overnight stay."
      },

      {
        day: "Day 03",
        title: "Departure from Delhi",
        description:
          "After breakfast, transfer to the airport or railway station for your onward journey. Tour concludes with wonderful memories of Delhi and Agra."
      }
    ],

    included: [
      "Our Own Company Cabs",
      "Complimentary WI-FI",
      "Pickup & Drop from Airport / Hotel",
      "Polite & Professional Drivers",
      "Planned Tours to Visit All Sites",
      "2 Bottled Drinking Water per Day",
      "Best Hotel Suggestions"
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
    id: "golden-triangle",

    title: "Golden Triangle Tour",

    duration: "6 Nights / 7 Days",

    // price: "₹24,900",

    cardImage: cardTriangle,

    gallery: detailTri,

    overview:
      "Discover India's most iconic destinations on the Golden Triangle Tour covering Delhi, Agra, Jaipur, and Mandawa. Experience magnificent Mughal monuments, royal palaces, historic forts, colorful markets, and the rich cultural heritage of North India.",

    shortDesc: "Explore the vibrant culture of India by visiting the iconic cities of Delhi, Agra, and Jaipur.",

    highlights: [
      "India Gate",
      "Qutub Minar",
      "Humayun's Tomb",
      "Red Fort",
      "Jama Masjid",
      "Chandni Chowk Rickshaw Ride",
      "Taj Mahal",
      "Agra Fort",
      "Fatehpur Sikri",
      "Amer Fort",
      "Hawa Mahal",
      "City Palace",
      "Jantar Mantar",
      "Mandawa Havelis"
    ],

    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Delhi",
        description:
          "Arrive in Delhi and meet our representative at the airport. Transfer to your hotel in a chauffeur-driven vehicle. Check in and relax after your journey. Overnight stay in Delhi."
      },

      {
        day: "Day 02",
        title: "Delhi Sightseeing",
        description:
          "Explore the contrasting charm of Old and New Delhi. Visit India Gate, Parliament House, President House, Qutub Minar, Humayun's Tomb, Raj Ghat, Red Fort, Jama Masjid, and enjoy a traditional rickshaw ride through Chandni Chowk. Overnight stay in Delhi."
      },

      {
        day: "Day 03",
        title: "Delhi to Agra",
        description:
          "Drive to Agra, the former capital of the Mughal Empire. Visit the magnificent Taj Mahal, Agra Fort, and Sikandra, the tomb of Emperor Akbar. Overnight stay in Agra."
      },

      {
        day: "Day 04",
        title: "Agra – Fatehpur Sikri – Jaipur",
        description:
          "Proceed to Jaipur via Fatehpur Sikri, the beautifully preserved Mughal city built by Emperor Akbar. Continue to Jaipur, famously known as the Pink City, and check in at your hotel. Overnight stay in Jaipur."
      },

      {
        day: "Day 05",
        title: "Jaipur Sightseeing",
        description:
          "Visit the majestic Amer Fort, City Palace, Hawa Mahal, and Jantar Mantar. Explore Jaipur's rich Rajput heritage, magnificent palaces, and vibrant local markets. Overnight stay in Jaipur."
      },

      {
        day: "Day 06",
        title: "Jaipur to Mandawa",
        description:
          "Drive to Mandawa and check in at your hotel. Visit the famous havelis known for their beautiful fresco paintings and rich architectural heritage. Overnight stay in Mandawa."
      },

      {
        day: "Day 07",
        title: "Mandawa to Delhi Departure",
        description:
          "After breakfast, drive back to Delhi. Enjoy free time for shopping or leisure activities before your transfer to the airport for your onward journey."
      }
    ],

    included: [
      "Our Own Company Cabs",
      "Complimentary WI-FI",
      "Pick up and drop from Airport / Hotel.",
      "Polite & Professional Drivers.",
      "Planned Tours to Visit All Sites in Delhi.",
      "2 Bottled Drinking Water per Day.",
      "Best Hotel Suggestions in Delhi."
    ],

    excluded: [
      "Accommodation in Delhi.",
      "Camera and Monument Fees.",
      "Tips & Gratuities.",
      "Any Alcoholic Drink During Lunch.",
      "Any Personal Activity During the Tour.",
      "Guide Charges.",
      "Rickshaw Ride."
    ]
  },
  {
    id: "delhi-agra-jaipur-delhi",

    title: "Delhi-Agra-Jaipur-Delhi Tour",

    duration: "3 Nights / 4 Days",

    // price: "₹12,900",

    cardImage: cardJaipur,

    gallery: detailJaipur,

    overview:
      "Experience the famous Golden Triangle circuit covering Delhi, Agra, and Jaipur. Visit iconic Mughal monuments, majestic forts, royal palaces, and discover the rich heritage and culture of North India.",

    shortDesc: "Comprehensive golden triangle experience with extended exploration of Jaipur's pink city charm.",

    highlights: [
      "Qutub Minar",
      "India Gate",
      "Lotus Temple",
      "Raj Ghat",
      "Taj Mahal",
      "Agra Fort",
      "Sikandra",
      "Fatehpur Sikri",
      "Pink City Jaipur",
      "Amber Fort",
      "City Palace",
      "Hawa Mahal",
      "Jantar Mantar"
    ],

    itinerary: [
      {
        day: "Day 01",
        title: "Arrive Delhi",
        description:
          "Arrival at Delhi Airport. Meet our representative and transfer to the hotel. Visit Qutub Minar, Lotus Temple (Bahai Temple), and Raj Ghat. Overnight stay in Delhi."
      },

      {
        day: "Day 02",
        title: "Delhi – Agra",
        description:
          "After breakfast proceed to Agra. Visit the world-famous Taj Mahal, built by Emperor Shah Jahan in memory of Mumtaz Mahal. Continue to Agra Fort and Sikandra (Akbar's Tomb). Overnight stay in Agra."
      },

      {
        day: "Day 03",
        title: "Agra – Jaipur",
        description:
          "After breakfast proceed to Jaipur. En route visit Fatehpur Sikri, the historic Mughal city built by Emperor Akbar. Continue to Jaipur, famously known as the Pink City. Overnight stay in Jaipur."
      },

      {
        day: "Day 04",
        title: "Jaipur – Delhi Departure",
        description:
          "After breakfast visit Jaipur's local attractions including City Palace, Hawa Mahal, Jantar Mantar and Amber Fort. Later drive back to Delhi for your onward journey."
      }
    ],

    included: [
      "Our Own Company Cabs",
      "Complimentary WI-FI",
      "Pickup & Drop from Airport / Hotel",
      "Polite & Professional Drivers",
      "Planned Tours to Visit All Sites",
      "2 Bottled Drinking Water per Day",
      "Best Hotel Suggestions"
    ],

    excluded: [
      "Accommodation",
      "Camera & Monument Fees",
      "Tips & Gratuities",
      "Alcoholic Drinks",
      "Personal Activities During Tour",
      "Guide Charges"
    ]
  },
  {
    id: "delhi-haridwar-rishikesh",

    title: "Delhi - Haridwar - Rishikesh - Delhi Tour",

    duration: "1 Night / 2 Days",

    // price: "₹5,500",

    cardImage: cardHari,

    gallery: detailHari, // import your package image

    overview:
      "Experience a spiritual journey to Haridwar and Rishikesh, two of India's most sacred destinations. Witness the divine Ganga Aarti, visit famous temples, explore ashrams, and enjoy the peaceful atmosphere of the holy Ganges.",

    shortDesc: "Spiritual journey to holy destinations with river rafting and yoga experiences in Rishikesh.",

    highlights: [
      "Har Ki Pauri",
      "Ganga Aarti",
      "Chandi Devi Temple",
      "Mansa Devi Temple",
      "Daksh Mahadev Temple",
      "Rishikesh Ashrams",
      "Lakshman Jhula",
      "Shivananda Ashram",
      "Yoga & Meditation Experience"
    ],

    itinerary: [
      {
        day: "Day 01",
        title: "Delhi – Haridwar",
        description:
          "Pick up from your location in Delhi and drive to Haridwar (215 Kms / Approx. 5 Hours). On arrival check in at the hotel. Visit Chandi Devi Temple, Mansa Devi Temple, Daksh Mahadev Temple and the famous Har Ki Pauri. In the evening witness the mesmerizing Ganga Aarti and take a holy dip in the Ganges. Overnight stay at Haridwar."
      },

      {
        day: "Day 02",
        title: "Haridwar – Rishikesh – Delhi",
        description:
          "After breakfast proceed to Rishikesh (24 Kms). Visit the famous Shivananda Ashram and Lakshman Jhula. Explore the spiritual atmosphere of Rishikesh, attend prayer sessions and experience yoga and meditation activities. Later drive back to Delhi (226 Kms / Approx. 5 Hours) and drop at your desired location. Tour concludes with happy memories."
      }
    ],

    included: [
      "Our Own Company Cabs",
      "Complimentary WI-FI",
      "Pickup & Drop from Airport / Hotel",
      "Polite & Professional Drivers",
      "Planned Tours to Visit All Sites",
      "2 Bottled Drinking Water per Day",
      "Best Hotel Suggestions"
    ],

    excluded: [
      "Accommodation",
      "Camera & Monument Fees",
      "Tips & Gratuities",
      "Alcoholic Drinks",
      "Personal Activities During Tour",
      "Guide Charges"
    ]
  },
  {
    id: "delhi-agra-delhi-1n",

    title: "Agra Tour Package From Delhi",

    duration: "1 Night / 2 Days",

    // price: "₹4,500",

    cardImage: cardAgra,

    gallery: detailAgra,

    overview:
      "Experience the timeless beauty of Agra with a comfortable trip from Delhi. Visit the majestic Agra Fort and witness the breathtaking Taj Mahal, one of the Seven Wonders of the World.",

    shortDesc: "Quick escape to marvel at the Taj Mahal and the architectural splendor of Agra fort.",

    highlights: [
      "Taj Mahal",
      "Agra Fort",
      "Horse Cart Ride",
      "Mughal Architecture",
      "Yamuna River View",
      "Historic Agra City"
    ],

    itinerary: [
      {
        day: "Day 01",
        title: "Delhi – Agra",
        description:
          "Arrive in Delhi and proceed directly to Agra by road (Approx. 210 Kms / 4 Hours). On arrival check in at the hotel. In the evening visit Agra Fort, built by Emperor Akbar between 1565 and 1573 on the western bank of the Yamuna River. Dinner and overnight stay in Agra."
      },

      {
        day: "Day 02",
        title: "Agra – Delhi Departure",
        description:
          "Early morning visit to the magnificent Taj Mahal, one of the world's most beautiful monuments and a symbol of eternal love. Enjoy a traditional horse-cart ride near the Taj Mahal area. Return to the hotel for breakfast and later drive back to Delhi. Transfer to the airport or railway station for your onward journey with wonderful memories."
      }
    ],

    included: [
      "Our Own Company Cabs",
      "Complimentary WI-FI",
      "Pickup & Drop from Airport / Hotel",
      "Polite & Professional Drivers",
      "Planned Tours to Visit All Sites",
      "2 Bottled Drinking Water per Day",
      "Best Hotel Suggestions"
    ],

    excluded: [
      "Accommodation",
      "Camera & Monument Fees",
      "Tips & Gratuities",
      "Alcoholic Drinks",
      "Personal Activities During Tour",
      "Guide Charges"
    ]
  },
  {
    id: "majestic-rajasthan-circuit",

    title: "Majestic Rajasthan Circuit",

    duration: "10 Nights / 11 Days",

    cardImage: cardMandawa,

    gallery: detailMandawa,

    overview:
      "Embark on a grand journey across the royal deserts, painted cities, and golden forts of Rajasthan. From the ornate havelis of Mandawa and the vast Thar Desert of Jaisalmer to the Blue City of Jodhpur, the rose-pink lakes of Pushkar, and the majestic Pink City of Jaipur — this circuit is a feast for the senses, culminating with the iconic Taj Mahal in Agra before returning to Delhi.",

    shortDesc: "A grand royal circuit across Rajasthan's most iconic destinations — deserts, forts, palaces, and spiritual lakes.",

    highlights: [
      "Red Fort, Jama Masjid & Chandni Chowk in Delhi",
      "Edwin Luyten's designed India Gate & circular Parliament House",
      "Humayun's Tomb & Qutub Minar in New Delhi",
      "Mandawa Fort & beautifully frescoed painted mansions",
      "Asia's largest camel breeding farm in Bikaner",
      "Junagarh Fort & Karni Mata Temple at Deshnok",
      "Jaisalmer Fort, Patwon/Nathmal Havelis & Sunset Camel Ride at Sam Dunes",
      "Mehrangarh Fort & White-Marble Cenotaph Jaswant Thada in Jodhpur",
      "Pushkar Lake holy bath & Lord Brahma Temple",
      "Elephant Ride to Amber Fort, City Palace, Hawa Mahal & Jantar Mantar in Jaipur",
      "Fatehpur Sikri Mughal capital & Buland Darwaza",
      "Taj Mahal, Red-Sandstone Agra Fort & Akbar's memorial in Sikandra"
    ],

    itinerary: [
      {
        day: "Day 01",
        title: "Delhi Arrival & Old Delhi Sightseeing",
        description:
          "When you arrive at the Indira Gandhi International airport, a state express tour operator’s representative will receive you at the Indira Gandhi International airport and transfer you to your hotel. Later we go for sight-seeing tour of Old Delhi. See the grandeur of the Mughal Empire, the majestic Red Fort. It has served as the capital and center of operations for the Mughal emperor Shah Jahan for two centuries. This majestic monument is now used as a platform by the Prime minister of India to address the people of the republic on the eve of Independence Day. Board on to a rickshaw and enjoy a rickshaw ride through the intricate alleys of Chandni Chowk. We will visit Jama Masjid; Jama Masjid is the oldest and one of Asia’s largest mosques. It was built by Shah Jahan in the year 1656. We will visit India Gate, Rashtrapati Bhawan and Parliament buildings. India Gate is an arch that was built to commemorate the death of 70,000 soldiers who sacrificed their lives during World War 1. The memorial even imprints the names of British and Indian soldiers who laid their lives during Afghan war. This splendid monument was designed by Edwin Luyten. There is an immortal flame that burns throughout the day and night as a mark of remembrance. In the close vicinity of the India Gate lies the Parliament House which is a circular colonnade building housing offices of various ministries and a well-stocked library. This imperial style architectural monument comprises of open air verandah and 144 columns. It is indeed a sight to watch. Next to the Parliament House is Rashtrapati Bhawan, the residential estate of President of India. This magnificent monument cannot be compared to any other monument in terms of its size, immensity and magnificence. Rashtrapati Bhawan houses 4 storeys and 340 rooms. Return to hotel for overnight stay."
      },
      {
        day: "Day 02",
        title: "Delhi – Mandawa (270 KM, 6 Hours)",
        description:
          "After breakfast, we continue our tour of New Delhi by first visiting Humayun’s Tomb. It was the first garden tomb of Indian subcontinent. The tomb of Humayun was built by his widow, Biga Begum (Hajji Begum) in 1569-70, 14 years after his death, at the cost of 1.5 million rupees. It has inspired several major architectural innovations, culminating in construction of Taj Mahal. The last monument we visit in Delhi is Qutub Minar, the world’s tallest brick minaret. This magnificent tower is indeed a landmark of the city and is surrounded by the ruins of the structures that were built during the Qutub Ud aback dynasty. In the afternoon, we leave for Mandawa, a town in Rajasthan and part of Shekhavati region. Here you will find forts of the Rajputs and painted mansions of rich merchant families who migrated to the cities long back, leaving their beautiful frescoed havelis behind. Arrive and check in at hotel for overnight stay."
      },
      {
        day: "Day 03",
        title: "Mandawa – Bikaner (200 KM, 4 Hours)",
        description:
          "In the morning, enjoy the majestic castles and havelis of Mandawa that dot the great Thar desert. The city was founded in the 18th century. The havelis of Mandawa are open art galleries, as they are frescoed with beautiful wall paintings. In the afternoon, we leave for Bikaner. Founded by Rao Bikaji in 1488, the city is renowned for its beautiful ‘Jharokas’ that are intricately carved stone designs that cover the windows of the splendid Junagarh fort, havelis and temples of the city. Asia’s largest camel breeding farm is also situated here. Arrive and check in at hotel. Overnight stay."
      },
      {
        day: "Day 04",
        title: "Bikaner Sightseeing & Leisure",
        description:
          "In the morning, enjoy the majestic castles and havelis of Mandawa that dot the great Thar desert. The city was founded in the 18th century. The havelis of Mandawa are open art galleries, as they are frescoed with beautiful wall paintings. In the afternoon, we leave for Bikaner. Founded by Rao Bikaji in 1488, the city is renowned for its beautiful ‘Jharokas’ that are intricately carved stone designs that cover the windows of the splendid Junagarh fort, havelis and temples of the city. Asia’s largest camel breeding farm is also situated here. Arrive and check in at hotel. Overnight stay."
      },
      {
        day: "Day 05",
        title: "Bikaner – Jaisalmer (330 KM, 6 Hours)",
        description:
          "In the Morning we shall leave for sightseeing tour of Bikaner. Our visit will start with impressive Junagarh Fort. It is the most impressive and organized fort of Junagarh and was built in 1588 AD by Raja Rai Singh Ji. The fort houses a small museum that has a rich collection of antiquated weapons that were used by former maharajas. The interiors of the fort are well adorned with intricate paintings, which are a visual treat to the eyes. If you like then we can even plan a visit to the Karni Mata Temple at Deshnok. The temple is dedicated to Karniji who was worshipped by the royal families of Jodhpur and Bikaner. Leave for Jaisalmer. Jaisalmer, popularly known as the Golden city of the country was founded by Maharawal Jaisal Singh, a Rajput king. The city has been recognised as a World Heritage Site. It is famous for its ornate havelis and 12th century fort. The golden city is scattered over the desert land of Rajasthan and has become one of the most important tourist attractions in the country. The combination of ancient and the medieval era architecture will inspire your imagination. Arrive and check in at hotel. Overnight stay."
      },
      {
        day: "Day 06",
        title: "Jaisalmer City Tour",
        description:
          "After breakfast we will leave for the sightseeing of the city. Rajasthan tour operators will start our sightseeing with a visit to the Jaisalmer Fort, which is a commanding structure in the sands. Made of yellow sandstone, the Jaisalmer Fort is the second oldest fort in the state. It is made with the fusion of Rajput and Islamic style of architecture. The Fort of Jaisalmer is indeed a very majestic fort, rising from the arid sands of Thar like an illusion from a bygone era. We will then visit Patwon ki Haveli, which is one of the largest havelis in Rajasthan. It is a cluster of five small havelis. It housing beautiful, intricate carvings on the windows. The entrance of the havelis is made of Indo Persian architecture. The havelis still have that old era royalty and charm. Next stop is Nathmal ki Haveli. The Haveli gives a great source of information about the lifestyle of Marwari Businessmen. The carvings on the exterior walls are very detailed and elaborate. In the afternoon we shall leave for an excursion to the sand dunes, which are located at the distance of 42 km from the Golden City. Enjoy the sun setting down over the horizons of never ending sand dunes and enjoy a mesmerizing camel ride. Return to hotel for overnight stay."
      },
      {
        day: "Day 07",
        title: "Jaisalmer – Jodhpur (310 KM, 6 Hours)",
        description:
          "In the morning we leave for Jodhpur. Jodhpur is also known as the blue city as most of the houses in the old Jodhpur are painted in blue color. This crowded desert city flutters with beauty, warmth and romance. A visit to Jodhpur is a romantic journey into the past with forts, palaces, temples, culture, tradition, spices, fabric, color, and flourishing handicrafts. Arrive and check in at hotel. In the afternoon, we will leave for sightseeing tour of Jodhpur city and start by first visiting Mehrangarh Fort. Mehrangarh Fort is one of the biggest forts in India. Several palaces are confined within the fort by its thick walls. These palaces are renowned for their intricate carvings and comprehensive courtyards. The museum in the fort is the most well stocked museum in the state. You can check out the huge collection of musical instruments, royal costumes, royal palanquins, and the cannons in the fort’s courtyard. The fort even provides a wonderful view of the city. Close to the fort is Jaswant Thada, our next stop. It is a memorial of Maharaja Jaswant Singh II that was built by his son, Maharaja Sardar Singh in the 19th century. The complex comprises of uniquely carved pavilions, beautiful lush green gardens and a small lake. This beautiful white-marble cenotaph serves as the official cremation ground for the Marwar royal family. Overnight stay."
      },
      {
        day: "Day 08",
        title: "Jodhpur – Pushkar – Jaipur (330 KM, 7 Hours)",
        description:
          "In the morning we will leave for Jaipur. On our way we will stop at Pushkar. Pushkar is a sacred town, often called as the king of pilgrimage sites. The city is one of the five sanctified pilgrimage places for devout Hindus. Pushkar was developed on the shores of Pushkar Lake and it houses five main temples, numerous small temples and Ghats where pilgrims descend to the lake to take bath in the sacred waters of the lake. Pushkar Fair which is held in November, is the liveliest event in Rajasthan. The liveliness and spark of the Pushkar Camel Fair have no parallel to any other fairs in the world. Then we leave for Jaipur. Jaipur, the Pink city is the capital and the largest city of Rajasthan. The city is endorsed as the Pink City because the buildings in the city are dyed with pink color, giving a visual treat to the eyes. Jaipur is also acknowledged as the city of Victory. The city still holds the same charm of its royal past. The rest of the day is free for you to explore the bazaars of Jaipur. Overnight stay."
      },
      {
        day: "Day 09",
        title: "Jaipur City Tour",
        description:
          "In the morning we will go for an excursion to Amber Fort. Start with an elephant ride to Amber fort, which is set atop the hill. The palace is a typical romantic fort with the artistic style of Hindu elements in its architecture. It has a beautiful mixture of both Hindu and Mughal architecture, an ultimate feature of this fort. In the afternoon we will leave for the sightseeing of Jaipur. City Palace is a center of the ruler of Jaipur and is a conglomerate of palaces with many courtyards and palaces. The architecture of the palace is a great combination of three dynasties, namely, Mughal, Rajput and European. The palace constitutes two famous palaces- Chandra Mahal and Mubarak Mahal. Today, Chandra Mahal has been converted into a museum, which exhibits various uniforms, handcrafted products and lifestyle of royal families. The next ornate we visit is Jaipur’s most distinctive landmark, Hawa Mahal, commonly known as Palace of Winds. It was constructed by Maharaja Sawai Pratap Singh in 1799 to enable ladies of the royal household to watch the life and processions of the city and enjoy street festivals from the windows. Jantar Mantar is an observatory with monumental astrological devices. It is the largest and best – preserved observatory out of the five existing ancient observatories in the country. The observatory consists of fourteen major geometric devices for measuring time, forecasting eclipses, tracing stars in their paths, determining the declinations of planets, and predicting the heavenly altitudes. Overnight stay."
      },
      {
        day: "Day 10",
        title: "Jaipur – Fatehpur Sikri – Agra (230 KM, 6 Hours)",
        description:
          "In the morning leave for Agra. On our way we will stop at Fatehpur Sikri. Founded in 1569, Fatehpur Sikri was the second capital of Mughal emperor Akbar. The emperor was predicted with a birth of an heir by a Sufi Saint. When prediction came true, he ordered for the construction of grand mosque as a token of appreciation to the saint. He even built three palaces for his favorite wives. The city is a perfect representation of the Indo Islamic style and is a UNESCO world heritage site. Then proceed to Agra. Agra, a primeval city, finds its name in the pages of the Mahabharata, but the city drew key attention during the Mughal Dynasty. Agra is a well-known city across the globe as it claims one of the Seven Wonders of the World, The Taj Mahal. Every tourist gets attracted by the complementary constructions of red sandstone and white marble. The complicated lanes and old-fashioned buggies add to the charisma of the city. Check in at Hotel for overnight stay."
      },
      {
        day: "Day 11",
        title: "Agra – Delhi (200 KM, 4 Hours)",
        description:
          "In the morning we will go for sightseeing of the city. We visit the most beautiful world heritage site – Taj Mahal a monument built in white marble that was built to celebrate love. It was built by Shah Jahan for his beloved wife Mumtaz Mahal as a final resting place. The grandiose of Taj Mahal incorporates hard work of 20,000 workers and was completed in 22 years. The architect of the masterpiece was Ustad Ahmad Lahauri, a Persian architect. It is also renowned for its stylish domes, exceptionally carved screens, and for finest inlay work. Agra Fort is an imperialistic fort positioned on the banks of the Yamuna. The red sandstone structure encircles numerous palaces and houses like the Moti Masjid, Diwan-I-Am, Diwan-I-Khas, Khaas Mahal, and Sheesh Mahal etc. Sikandra is the memorial of the great Mughal emperor, Akbar. The emperor started the construction of his tomb during his lifetime, which was completed by his son Jahangir. The monument features manicured lawns with finely carved gateways and white marble memorial. This monument perfectly imbibes the best of all religions, indicating the new religion started by Akbar – the DEEN E ILAHI. In the afternoon leave for Delhi. Arrive and transfer to airport for flight to an onward destination."
      }
    ],

    included: [
      "Our Own Company Cabs",
      "Complimentary WI-FI",
      "Pickup & Drop from Airport / Hotel",
      "Polite & Professional Drivers",
      "Planned Tours to Visit All Sites",
      "2 Bottled Drinking Water per Day",
      "Best Hotel Suggestions"
    ],

    excluded: [
      "Accommodation",
      "Camera & Monument Fees",
      "Tips & Gratuities",
      "Alcoholic Drinks",
      "Personal Activities During Tour",
      "Guide Charges",
      "Elephant / Camel Ride Charges"
    ]
  }


];

export default packages;