export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
  link: string;
}


export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}


export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}


export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}


export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
}