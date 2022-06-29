
export type Recording = {
  start: () => void;
  stop: () => Promise<string>;
};

export type ButtonAttributes = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
};

export type AudioPlayerAttributes = {
  src: string;
  hidden?: boolean;
};
