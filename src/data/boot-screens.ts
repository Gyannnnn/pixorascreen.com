export type BootLogoImageConfig = {
  type: 'image';
  src: string;
  width: number;
  height?: number;
  alt?: string;
};

export type BootLogoWordmarkConfig = {
  type: 'ubuntu-wordmark';
  /** Font size in px for the "ubuntu" wordmark */
  fontSize: number;
};

export type BootLogoConfig = BootLogoImageConfig | BootLogoWordmarkConfig;

export type BootLoaderDotsConfig = {
  type: 'dots';
  count: number;
  colors: string[];
  size: number;
  gap: number;
  animation: string;
  duration: number;
  loop: boolean;
};

export type BootLoaderConfig = BootLoaderDotsConfig;

export type BootLayoutConfig = {
  justify: 'center' | 'start' | 'end';
  align: 'center' | 'start' | 'end';
  spacing: number;
};

export type BootScreenConfig = {
  background: string;
  logo: BootLogoConfig;
  loader: BootLoaderConfig;
  layout: BootLayoutConfig;
};
