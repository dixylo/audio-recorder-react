import { render } from '@testing-library/react';
import AudioPlayer from '..';

describe('AudioPlayer component', () => {
  const audioUrl: string = '';

  it('should render an audio', () => {
    const { getByTestId } = render(<AudioPlayer src={audioUrl} />);
    const audio: HTMLElement = getByTestId('audioplayer');
    expect(audio).toBeTruthy();
  });

  it('should hide with an attribute of "hidden"', () => {
    const { getByTestId } = render(<AudioPlayer src={audioUrl} hidden />);
    const audio: HTMLElement = getByTestId('audioplayer');
    expect(audio).not.toBeVisible();
  });
});
