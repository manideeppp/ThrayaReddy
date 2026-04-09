export type Lang = 'te' | 'en'

export const content = {
  curtain: {
    te: {
      blessing: 'శ్రీ గణేశాయ నమః',
      invited: 'శుభలేఖ',
      subtitle: 'శుభ వివాహ వేడుకకు',
      couple: 'త్రయ & భరత్',
      button: 'ఆహ్వానం చూడండి',
    },
    en: {
      blessing: 'Sri Ganeshaya Namaha',
      invited: "You're Invited",
      subtitle: 'To Celebrate the Marriage Ceremony of',
      couple: 'Thraya & Bharath',
      button: 'Open Invitation',
    },
  },
  hero: {
    te: {
      blessing: 'ॐ శ్రీ మహా గణాధిపతయే నమః',
      families: 'ఇరు కుటుంబాల సంతోషంతో',
      tagline: 'ఏడడుగుల బంధం, జీవితకాలపు నేస్తం',
      ceremony: 'శుభ వివాహం',
    },
    en: {
      blessing: 'Om Sri Maha Ganadhipataye Namaha',
      families: 'Together with their families',
      tagline: 'Two Hearts, One Beautiful Journey',
      ceremony: 'Wedding Ceremony',
    },
  },
  couple: {
    te: {
      label: 'వధూవరులు',
      title: 'వధూవరుల పరిచయం',
      groom: 'భరత్ రెడ్డి',
      groomParentsLabel: 'తల్లిదండ్రులు',
      groomParents: 'శ్రీ రాజేష్ శర్మ & శ్రీమతి సునీత శర్మ',
      groomCity: 'న్యూ ఢిల్లీ',
      bride: 'త్రయ రెడ్డి',
      brideParentsLabel: 'తల్లిదండ్రులు',
      brideParents: 'శ్రీ విక్రం కపూర్ & శ్రీమతి ప్రియా కపూర్',
      brideCity: 'ముంబై',
    },
    en: {
      label: 'The Couple',
      title: 'Bride & Groom',
      groom: 'Bharath Simha Reddy',
      groomParentsLabel: 'Son of',
      groomParents: 'Maram Haritha - Late Sri Samara Simha Reddy',
      groomCity: 'Kurnool',
      bride: 'Thraya Reddy',
      brideParentsLabel: 'Daughter of',
      brideParents: 'Gowreddy Rama Devi - Maheswar Reddy',
      brideCity: 'Thippaipally, Wanaparthy',
    },
  },
  story: {
    te: {
      label: 'మా కథ',
      title: 'మా ప్రయాణం',
      events: [
        { year: '2022', title: 'తొలి పరిచయం', desc: 'ఒక మంచి రోజున ఇద్దరం తొలిసారి కలుసుకున్నాం.' },
        { year: '2024', title: 'నిశ్చితార్థం', desc: 'పెద్దల ఆశీర్వాదంతో పెళ్ళి నిశ్చయమైంది.' },
        { year: '2026', title: 'పెళ్ళి', desc: 'ఏడడుగులు కలిసి నడిచే శుభ ఘడియ వచ్చేసింది.' },
      ],
    },
    en: {
      label: 'Our Story',
      title: 'A Love Story',
      events: [
        { year: '2022', title: 'First Meeting', desc: 'Two hearts met on a beautiful evening that changed everything.' },
        { year: '2024', title: 'Engagement', desc: 'With blessings of both families, the union was sealed.' },
        { year: '2026', title: 'Wedding', desc: 'Beginning a lifetime journey of love, together forever.' },
      ],
    },
  },
  weddingEvents: {
    te: {
      label: 'వేడుకలు',
      title: 'శుభ కార్యక్రమాలు',
      events: [
        { icon: '🌼', title: 'హల్దీ', date: 'ఏప్రిల్ 24, 2026', time: 'ఉ. 10:30 (పింక్ దుస్తులు)', venue: 'ఇంట్లో వేడుక', specialRequest: 'త్రయ కోసం: మన ప్రత్యేక రోజులో నిమిరిన గులాబీ రంగులలో ధరించిన అందాన్ని చూడటానికి మేము చాలా ఆసక్తిగా ఉన్నాము.' },
        { icon: '🌿', title: 'మెహందీ & సంగీత్', date: 'ఏప్రిల్ 24, 2026', time: 'సా. 5:00 నుండి', venue: 'ఇంట్లో వేడుక' },
        { icon: '💐', title: 'పెళ్ళికూతురు', date: 'ఏప్రిల్ 25, 2026', time: 'ఉ. 11:30 నుండి', venue: 'ఇంట్లో వేడుక' },
        { icon: '🔥', title: 'సుముహూర్తం', date: 'ఏప్రిల్ 26, 2026', time: '', venue: '' },
        { icon: '✨', title: 'రిసెప్షన్', date: 'ఏప్రిల్ 28, 2026', time: '', venue: '' },
      ],
    },
    en: {
      label: 'Celebrations',
      title: 'Wedding Events',
      events: [
        { icon: '🌼', title: 'Haldi', date: 'April 24, 2026', time: '10:30 AM', venue: 'Home Ceremony', specialRequest: 'Special 𝚛̶𝚎̶𝚚̶𝚞̶𝚎̶𝚜̶𝚝̶ (ORDER) from Thraya:\nI would love to see you in beautiful shades of pink to celebrate our special day' },
        { icon: '🌿', title: 'Mehendi & Sangeet', date: 'April 24, 2026', time: '5:00 PM Onwards', venue: 'Home Ceremony' },
        { icon: '💐', title: 'Pellikuthuru', date: 'April 25, 2026', time: '11:30 AM Onwards', venue: 'Home Ceremony' },
        { icon: '🔥', title: 'Sumuhurtham', date: 'April 26, 2026', time: '9:48 AM', venue: 'JVR Convention Hall, Wanaparthy' },
        { icon: '✨', title: 'Reception', date: 'April 28, 2026', time: '11:00 AM', venue: 'National Crown Palace, Kurnool' },
      ],
    },
  },
  venue: {
    te: {
      label: 'వేదిక',
      title: 'ముహూర్త స్థలం',
      name: 'J.V.R. కన్వెన్షన్ హాల్',
      address: 'RBVR స్కూల్ సమీపంలో, విలియంకొండ గ్రామం',
      city: 'కొత్తకోట మండలం, వనపర్తి జిల్లా, తెలంగాణ — 509104',
      mapBtn: 'మ్యాప్‌లో చూడండి',
      mapLink: 'https://www.google.com/maps?daddr=7XP4%2BJ5W,+Ullamkonda,+Telangana+509104',
    },
    en: {
  label: 'Venue',
  title: 'Wedding Venue',
  name: 'J.V.R. Convention Hall',
  address: 'Near RBVR School, Williamkonda Village',
  city: 'Kothakota Mandal, Wanaparthy District, Telangana — 509104',
  mapBtn: 'View on Map',
  mapLink: 'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCDEyMzdqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kcdz9UUnA8o7MURmK12B9tVX&daddr=7XP4%2BJ5W,+Ullamkonda,+Telangana+509104'
}
  },
  countdown: {
    te: {
      label: 'ఎదురుచూస్తున్నాం...',
      title: 'శుభ ముహూర్తానికి',
      days: 'రోజులు',
      hours: 'గంటలు',
      minutes: 'నిమిషాలు',
      seconds: 'సెకన్లు',
    },
    en: {
      label: 'Counting Down...',
      title: 'Until the D-Day',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
  },
  gallery: {
    te: { label: 'చిత్రాలు', title: 'మా జ్ఞాపకాలు' },
    en: { label: 'Memories', title: 'Our Gallery' },
  },
  message: {
    te: {
      label: 'మీ ఆశీర్వాదం',
      title: 'త్రయకు మీ ఆశీర్వచనం',
      subtitle: 'మీ ఆశీర్వాదమే మాకు పెద్ద వరం',
      name: 'మీ పేరు *',
      namePlaceholder: 'పూర్తి పేరు నమోదు చేయండి',
      message: 'మీ సందేశం *',
      messagePlaceholder: 'త్రయకు మీ శుభాకాంక్షలు రాయండి...',
      submit: 'సందేశం పంపండి',
      thankYou: 'ధన్యవాదాలు! 🙏',
      thankYouMsg: 'మీ ఆశీర్వాదం అందుకున్నాం. చాలా కృతజ్ఞతలు!',
      another: 'మరొక సందేశం పంపండి',
    },
    en: {
      label: 'Your Blessings',
      title: 'Send a Message for Thraya',
      subtitle: 'Your heartfelt blessings mean the world to us',
      name: 'Your Name *',
      namePlaceholder: 'Enter your full name',
      message: 'Your Message *',
      messagePlaceholder: 'Write your blessings and wishes for Thraya...',
      submit: 'Send Message',
      thankYou: 'Thank You! 🙏',
      thankYouMsg: 'Your message will be delivered to Thraya. We appreciate your love and blessings!',
      another: 'Send Another Message',
    },
  },
  closing: {
    te: {
      quote: '"ప్రేమ ఉన్నచోట జీవితం ఉంటుంది"',
      author: '— మహాత్మా గాంధీ',
      message1: 'ఈ శుభ సందర్భంలో మీ ఆశీర్వాదం మాకు చాలా విలువైనది.',
      message2: 'మీ కుటుంబ సమేతంగా మా పెళ్ళికి తప్పక రావలసినదిగా ఆహ్వానిస్తున్నాం.',
      groomFamily: 'వరుడి కుటుంబం',
      brideFamily: 'వధువు కుటుంబం',
      withLove: 'ప్రేమతో',
    },
    en: {
      quote: '"Where there is love, there is life."',
      author: '— Mahatma Gandhi',
      message1: 'Your gracious presence and blessings on this auspicious occasion would be the greatest gift.',
      message2: 'We invite you and your family to our wedding celebrations.',
      brideFamily: "Bride's Family",
      groomFamily: "Groom's Family",
      withLove: 'With Love',
    },
  },
  footer: {
    te: {
      made: '❤ తో — త్రయ & భరత్',
      hashtag: '#త్రయభరత్వివాహం',
      date: 'శుభ వివాహం • జూలై 18, 2026',
    },
    en: {
      hashtag: '#ThrayaToBeBharaths',
      date: 'Sumuhurtham • April 26, 2026',
      made: 'Made with ❤ for Thraya Akka • By Manideep',
    },
  },
  langToggle: {
    te: 'EN',
    en: 'తె',
  },
} as const
