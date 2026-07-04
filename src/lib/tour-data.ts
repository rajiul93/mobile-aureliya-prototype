export type TourStop = {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  transcript: string;
};

export const TOUR_STOPS: TourStop[] = [
  {
    id: 1,
    title: 'The Colosseum Entrance',
    subtitle: 'Where 50,000 spectators once entered',
    duration: '8 min',
    transcript:
      'Welcome to the Colosseum. As you stand before these ancient arches, imagine the roar of the crowd and the grandeur of imperial Rome unfolding around you.',
  },
  {
    id: 2,
    title: 'The Arena Floor',
    subtitle: 'Heart of the gladiatorial games',
    duration: '7 min',
    transcript:
      'Beneath your feet lies the wooden arena floor, now removed to reveal the hypogeum — the underground network where gladiators and wild animals awaited their fate.',
  },
  {
    id: 3,
    title: 'The Hypogeum',
    subtitle: 'Underground chambers and lifts',
    duration: '9 min',
    transcript:
      'The hypogeum was a labyrinth of tunnels and cages. Complex machinery lifted fighters and beasts directly into the arena above.',
  },
  {
    id: 4,
    title: 'The Emperor\'s Box',
    subtitle: 'The best seat in Rome',
    duration: '6 min',
    transcript:
      'From this privileged vantage point, the emperor presided over the games, demonstrating power and generosity to the Roman people.',
  },
  {
    id: 5,
    title: 'The Velarium',
    subtitle: 'Rome\'s retractable awning',
    duration: '5 min',
    transcript:
      'Roman engineers devised an enormous awning system operated by sailors, shading spectators from the Mediterranean sun.',
  },
  {
    id: 6,
    title: 'The Upper Tiers',
    subtitle: 'Where ordinary Romans sat',
    duration: '7 min',
    transcript:
      'The highest seats were reserved for women and the poorest citizens, yet even from here the spectacle was unforgettable.',
  },
  {
    id: 7,
    title: 'The Arch of Constantine',
    subtitle: 'Triumph and transition',
    duration: '8 min',
    transcript:
      'Just outside stands the Arch of Constantine, commemorating a pivotal victory that would reshape the empire forever.',
  },
  {
    id: 8,
    title: 'Farewell at the Colosseum',
    subtitle: 'Reflecting on ancient Rome',
    duration: '10 min',
    transcript:
      'As your journey ends, take a moment to absorb two millennia of history etched into every stone of this remarkable monument.',
  },
];

export const TOUR_META = {
  totalStops: TOUR_STOPS.length,
  estimatedDuration: '~60 min',
  packageSize: '180 MB',
};

export function getTourStop(id: number) {
  return TOUR_STOPS.find((stop) => stop.id === id);
}
