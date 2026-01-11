
export interface Question {
  id: number;
  text: string;
  options: string[];
}

export enum AppState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  MAIN_SITE = 'MAIN_SITE'
}

export interface GalleryImage {
  url: string;
  alt: string;
}
