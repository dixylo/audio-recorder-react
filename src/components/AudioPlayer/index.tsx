import { AudioPlayerAttributes } from '../../types';

const AudioPlayer = ({ src, hidden }: AudioPlayerAttributes) => {
  return (
    <audio
      data-testid='audioplayer'
      src={src}
      controls
      style={{ visibility: hidden ? 'hidden' : 'visible' }}
    >
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
