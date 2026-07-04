import { TOUR_META, TOUR_STOPS } from '@/lib/tour-data';

export const AURELIA_APP_INFO = {
  name: 'Aurelia',
  tagline: 'Colosseum Offline Guide',
  description:
    'Aurelia is a personal offline audio guide for the Colosseum in Rome. It includes narrated stops, transcripts, images, and an AI assistant for questions about the monument.',
  languages: ['English', 'Spanish (coming soon)'],
  packageSize: TOUR_META.packageSize,
  totalStops: TOUR_META.totalStops,
  estimatedDuration: TOUR_META.estimatedDuration,
};

export const COLOSSEUM_FACTS = [
  'The Colosseum (Flavian Amphitheatre) was completed in 80 AD under Emperor Titus.',
  'It could hold an estimated 50,000 to 80,000 spectators.',
  'Gladiatorial contests, animal hunts, and public spectacles were held in the arena.',
  'The hypogeum beneath the arena housed gladiators, animals, and stage machinery.',
  'A velarium (awning) could be extended to shade spectators from the sun.',
  'The Colosseum is a UNESCO World Heritage Site and one of Rome\'s most visited landmarks.',
  'Construction began under Emperor Vespasian around 70-72 AD.',
  'The name "Colosseum" may come from a colossal statue of Nero nearby.',
];

export const AURELIA_FAQ = [
  {
    question: 'Can I use Aurelia offline?',
    answer:
      'Yes. After downloading the guide package, audio, transcripts, and images work without an internet connection. Ask Aurelia chat requires internet.',
  },
  {
    question: 'How long is the full tour?',
    answer: `The tour has ${TOUR_META.totalStops} stops and takes approximately ${TOUR_META.estimatedDuration}.`,
  },
  {
    question: 'What languages are supported?',
    answer: 'English is available now. More languages are coming soon.',
  },
];

export function buildAureliaSystemPrompt() {
  const stopsText = TOUR_STOPS.map(
    (stop) =>
      `Stop ${stop.id}: ${stop.title} — ${stop.subtitle}\nTranscript excerpt: ${stop.transcript}`,
  ).join('\n\n');

  const factsText = COLOSSEUM_FACTS.map((fact) => `- ${fact}`).join('\n');

  const faqText = AURELIA_FAQ.map(
    (item) => `Q: ${item.question}\nA: ${item.answer}`,
  ).join('\n\n');

  return `You are Aurelia, a warm and knowledgeable AI guide for the Colosseum offline tour app.

Your role:
- Answer questions about the Colosseum, ancient Rome, and this app's tour content.
- Use ONLY the knowledge below. If something is not covered, say you do not have that information and suggest exploring the relevant tour stop.
- Keep replies concise (2-4 short paragraphs max) for mobile reading.
- Write in the same language the user uses.
- Be elegant and historical in tone, matching a premium cultural guide.

APP INFO:
- Name: ${AURELIA_APP_INFO.name}
- Tagline: ${AURELIA_APP_INFO.tagline}
- Description: ${AURELIA_APP_INFO.description}
- Languages: ${AURELIA_APP_INFO.languages.join(', ')}
- Package size: ${AURELIA_APP_INFO.packageSize}
- Stops: ${AURELIA_APP_INFO.totalStops}
- Duration: ${AURELIA_APP_INFO.estimatedDuration}

TOUR STOPS:
${stopsText}

COLOSSEUM FACTS:
${factsText}

FAQ:
${faqText}`;
}

export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  role: ChatRole;
  content: string;
};
