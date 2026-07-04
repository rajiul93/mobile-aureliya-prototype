import { AudioLines, FileText, ImageIcon, MessageCircle } from 'lucide-react';

export const FEATURES = [
  {
    icon: AudioLines,
    title: 'Audio guide',
    description: '8 narrated stops with offline playback',
  },
  {
    icon: FileText,
    title: 'Transcript',
    description: 'Read along with every stop',
  },
  {
    icon: ImageIcon,
    title: 'Images',
    description: 'Historical visuals for each location',
  },
  {
    icon: MessageCircle,
    title: 'Aurelia Answers',
    description: 'Ask questions about the Colosseum',
  },
] as const;
