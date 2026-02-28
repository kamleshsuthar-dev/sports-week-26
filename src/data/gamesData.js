import imgTugOfWar from '../assets/tug-of-war.png';
import imgCricket from '../assets/cricket.png';
import imgKabaddi from '../assets/kabbadi.png';
import imgVolleyball from '../assets/volleyball.png';
import imgKhoKhoBoys from '../assets/kho-kho-boys.png';
import imgKhoKhoGirls from '../assets/kho-kho-girls.png';
import imgBadmintonBoys from '../assets/badminton.png';
import imgBadmintonGirls from '../assets/badminton-girls.png';
import imgTableTennis from '../assets/table-tennis.png';
import imgChess from '../assets/chess.png';
import imgCarrom from '../assets/carrom.png';
import imgGullyCricketGirls from '../assets/gully-cricket-girls.png';

// ── Detail-page background images (full-bleed, separate from card thumbnails) ──
import bgDefault from '../assets/bg1.png';
import bgGullyCricketGirls from '../assets/gully-cricket-girls-bg.png';
import bgCricket from '../assets/cricket-bg.png';
import bgKabaddi from '../assets/kabbadi-bg.png';
import bgVolleyball from '../assets/volleyball-bg.png';
import bgKhoKhoBoys from '../assets/kho-kho-boys-bg.png';
import bgKhoKhoGirls from '../assets/kho-kho-girls-bg.png';
import bgBadminton from '../assets/badminton-bg.png';
import bgBadmintonGirls from '../assets/badminton-girls-bg.png';
import bgTableTennis from '../assets/table-tennis-bg.png';
import bgChess from '../assets/chess-bg.png';
import bgCarrom from '../assets/carrom-bg.png';
import bgTugOfWar from '../assets/tug-of-war-bg.png';

export const allGames = [
  {
    id: 'tugofwar',
    title: 'Tug Of War',
    category: 'Team',
    image: imgTugOfWar,
    bgImage: bgTugOfWar,
    registerationForm: 'https://forms.google.com/',
    teamSize: '8 players',
    eventDate: 'March 12, 2026',
    venue: 'Sports Field',
    coordinator: 'Prof. Rajesh Patel',
    phone: '+91 98765 43214',
    email: 'rajesh.patel@katpur.edu',
    icon: 'sports_bar',
    about: 'Test your team strength and coordination in this classic battle of power and strategy.',
    details: 'Tug of War is an ancient sport that tests the collective strength and stamina of a team. This year we follow international specifications with proper ground preparation and safety equipment.',
    rules: [
      'Each team must have exactly 8 players',
      'Alternate grip and collar grip are not allowed',
      'Weight must be worn at the belt',
      'All players must wear sports shoes and college uniform',
      'College ID is required on event day'
    ]
  },
  {
    id: 'cricket',
    title: 'Cricket',
    category: 'Team',
    image: imgCricket,
    bgImage: bgCricket,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: '11 Players',
    eventDate: 'March 12, 2026',
    venue: 'Cricket Ground',
    coordinator: 'Prof. Nilesh Shah',
    phone: '+91 98765 43212',
    email: 'nilesh.shah@katpur.edu',
    icon: 'sports_cricket',
    about: 'Experience the thrill of international cricket format. Our T20 tournament ensures fast-paced and exciting gameplay.',
    details: 'Cricket is a bat-and-ball sport played between two teams of 11 players. The batting side scores runs while the fielding side tries to dismiss the batters. Our inter-college tournament follows T20 format.',
    rules: [
      'Each team must have exactly 11 players',
      'T20 format – 20 overs per innings',
      'Equipment (bat, ball) provided by organizers',
      'Sports shoes and college uniform are mandatory',
      'College ID is required on event day'
    ]
  },
  {
    id: 'kabaddi',
    title: 'Kabaddi',
    category: 'Team',
    image: imgKabaddi,
    bgImage: bgKabaddi,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: '7 Players',
    eventDate: 'March 14, 2026',
    venue: 'Court Hall',
    coordinator: 'Prof. Vikram Singh',
    phone: '+91 98765 43215',
    email: 'vikram.singh@katpur.edu',
    icon: 'sports_rugby',
    about: 'A traditional Indian sport that combines skill, strength, and strategy. Test your raiding and defending abilities.',
    details: 'Kabaddi is an ancient contact team sport that requires balance, coordination, and team spirit. Players take turns raiding the opposing side while teammates defend.',
    rules: [
      'Each team must have 7 players on field',
      '12 minutes per half for college level',
      'Raiders must chant "Kabaddi" continuously',
      'Out-of-bound play results in a point for defending team',
      'College uniform and ID are mandatory'
    ]
  },
  {
    id: 'volleyball',
    title: 'Volleyball',
    category: 'Team',
    image: imgVolleyball,
    bgImage: bgVolleyball,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: '6 Players',
    eventDate: 'March 15, 2026',
    venue: 'Volleyball Court',
    coordinator: 'Prof. Anita Desai',
    phone: '+91 98765 43216',
    email: 'anita.desai@katpur.edu',
    icon: 'sports_volleyball',
    about: 'A dynamic team sport requiring coordination, speed, and precision ball control.',
    details: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by hitting a ball over the net.',
    rules: [
      'Each team must have 6 players on court',
      'Three hits maximum per side before returning',
      'Rotation occurs when a team gains serving right',
      'First to 25 points (with 2-point lead) wins',
      'Proper court shoes and uniform required'
    ]
  },
  {
    id: 'khokho-boys',
    title: 'Kho Kho (Boys)',
    category: 'Team',
    image: imgKhoKhoBoys,
    bgImage: bgKhoKhoBoys,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: '9 Players',
    eventDate: 'March 16, 2026',
    venue: 'Kho Kho Court',
    coordinator: 'Prof. Ramesh Kumar',
    phone: '+91 98765 43217',
    email: 'ramesh.kumar@katpur.edu',
    icon: 'sports_soccer',
    about: 'A high-speed chasing game that tests agility, speed, and tactical abilities.',
    details: 'Kho Kho is an ancient Indian sport that requires tremendous physical agility and tactical skills. It is played between two teams that try to chase and tag.',
    rules: [
      'Each team must have a minimum of 9 players',
      '9 minutes per innings',
      'Defenders can only run in lanes',
      'Chasers must pass by touching',
      'Sports shoes and uniform mandatory'
    ]
  },
  {
    id: 'khokho-girls',
    title: 'Kho Kho (Girls)',
    category: 'Team',
    image: imgKhoKhoGirls,
    bgImage: bgKhoKhoGirls,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: '9 Players',
    eventDate: 'March 16, 2026',
    venue: 'Kho Kho Court',
    coordinator: 'Prof. Priya Sharma',
    phone: '+91 98765 43218',
    email: 'priya.sharma@katpur.edu',
    icon: 'sports_soccer',
    about: 'A thrilling display of speed, agility and strategic gameplay for girls.',
    details: 'Kho Kho for girls follows the official rules with same standards as boys event, providing equal opportunities.',
    rules: [
      'Each team must have a minimum of 9 players',
      '9 minutes per innings',
      'Defenders can only run in lanes',
      'Chasers must pass by touching',
      'Sports shoes and uniform mandatory'
    ]
  },
  {
    id: 'badminton-boys',
    title: 'Badminton (Boys)',
    category: 'Racquet',
    image: imgBadmintonBoys,
    bgImage: bgBadminton,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: 'Single/Double',
    eventDate: 'March 17, 2026',
    venue: 'Badminton Court',
    coordinator: 'Prof. Suresh Nair',
    phone: '+91 98765 43219',
    email: 'suresh.nair@katpur.edu',
    icon: 'sports_ping_pong',
    about: 'A precision sport that demands skill, speed, and strategic racket play.',
    details: 'Badminton is played with a lightweight racket and a shuttlecock. Matches can be singles (1v1) or doubles (2v2).',
    rules: [
      'Best of 3 games format',
      'First to 21 points wins per game',
      'Shuttlecock must clear the net',
      'Service must be performed below waist level',
      'Court shoes are essential'
    ]
  },
  {
    id: 'badminton-girls',
    title: 'Badminton (Girls)',
    category: 'Racquet',
    image: imgBadmintonGirls,
    bgImage: bgBadmintonGirls,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: 'Single/Double',
    eventDate: 'March 17, 2026',
    venue: 'Badminton Court',
    coordinator: 'Prof. Deepika Reddy',
    phone: '+91 98765 43220',
    email: 'deepika.reddy@katpur.edu',
    icon: 'sports_ping_pong',
    about: 'Girls badminton championship with exciting rallies and competitive spirit.',
    details: 'Girls badminton tournament following international standards with equal opportunities.',
    rules: [
      'Best of 3 games format',
      'First to 21 points wins per game',
      'Shuttlecock must clear the net',
      'Service must be performed below waist level',
      'Court shoes are essential'
    ]
  },
  {
    id: 'tabletennis',
    title: 'Table Tennis',
    category: 'Racquet',
    image: imgTableTennis,
    bgImage: bgTableTennis,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: 'Single/Double',
    eventDate: 'March 18, 2026',
    venue: 'Recreation Center',
    coordinator: 'Prof. Arjun Verma',
    phone: '+91 98765 43221',
    email: 'arjun.verma@katpur.edu',
    icon: 'sports_ping_pong',
    about: 'A fast-paced indoor sport demanding quick reflexes and precision.',
    details: 'Table tennis is a fast-paced sport played on a hard table divided by a net. Players use small paddles to hit the ball.',
    rules: [
      'Best of 5 games format',
      'First to 11 points wins per game',
      'Ball must bounce on both sides of table',
      'Service alternates every 2 points',
      'Casual sports attire acceptable'
    ]
  },
  {
    id: 'chess',
    title: 'Chess',
    category: 'Board',
    image: imgChess,
    bgImage: bgChess,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: 'Individual',
    eventDate: 'March 19, 2026',
    venue: 'Chess Hall',
    coordinator: 'Prof. Sudhir Menon',
    phone: '+91 98765 43222',
    email: 'sudhir.menon@katpur.edu',
    icon: 'sports_esports',
    about: 'A timeless game of strategy and intellect that challenges master minds.',
    details: 'Chess is an ancient board game that tests strategic thinking, planning, and tactical skills.',
    rules: [
      'Standard FIDE chess rules apply',
      'Individual tournament format',
      'Swiss system for grouping',
      '15 minutes + 10 seconds increment time control',
      'Digital score sheets will be used'
    ]
  },
  {
    id: 'carrom',
    title: 'Carrom',
    category: 'Board',
    image: imgCarrom,
    bgImage: bgCarrom,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: 'Single/Double',
    eventDate: 'March 20, 2026',
    venue: 'Recreation Area',
    coordinator: 'Prof. Meera Joshi',
    phone: '+91 98765 43223',
    email: 'meera.joshi@katpur.edu',
    icon: 'sports_baseball',
    about: 'A classic board sport that tests striking accuracy and strategic planning.',
    details: 'Carrom is a tabletop game played with coins and a striker on a square board.',
    rules: [
      'Singles and doubles formats available',
      'Pocket all coins and Queen to win',
      'Players alternate turns',
      'Foul result in penalty points',
      'Follow regional carrom federation rules'
    ]
  },
  {
    id: 'gullycricket-girls',
    title: 'Gully Cricket (Girls)',
    category: 'Team',
    image: imgGullyCricketGirls,
    bgImage: bgGullyCricketGirls,
    registerationForm: 'https://forms.gle/your-google-form-link',
    teamSize: '6-8 Players',
    eventDate: 'March 21, 2026',
    venue: 'Cricket Ground',
    coordinator: 'Prof. Divya Iyer',
    phone: '+91 98765 43224',
    email: 'divya.iyer@katpur.edu',
    icon: 'sports_cricket',
    about: 'A fun and fast-paced version of cricket adapted for mixed urban spaces.',
    details: 'Gully cricket is a casual form of cricket with 5 players per side, perfect for fun competition.',
    rules: [
      '5 players per team on field',
      'Simplified bowling rules',
      'Two-pitch distance',
      'Entertaining and recreational format',
      'Casual sports attire acceptable'
    ]
  }
];

