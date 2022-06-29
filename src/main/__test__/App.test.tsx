import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '..';

describe('Audio Recorder App', () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
    render(<App />);
  });
  
  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a header', () => {
    const header = screen.getByText(/Audio Recorder/i);
    expect(header).toBeInTheDocument();
  });

  it('should render a Record button', () => {
    const recordButton = screen.getByTestId('btn-Record');
    expect(recordButton).toBeInTheDocument();
  });

  it('should render a Stop button', () => {
    const stopButton = screen.getByTestId('btn-Stop');
    expect(stopButton).toBeInTheDocument();
  });

  it('should render an instruction', () => {
    const instruction = screen.getByText(/Please click/i);
    expect(instruction).toBeInTheDocument();
  });

  it('should render an audio player', () => {
    const audioplayer = screen.getByTestId('audioplayer');
    expect(audioplayer).toBeInTheDocument();
  });

  it('should render a disabled Stop button', () => {
    const stopButton = screen.getByTestId('btn-Stop');
    expect(stopButton).toBeDisabled();
  });

  it('should render a hidden audio player', () => {
    const audioplayer = screen.getByTestId('audioplayer');
    expect(audioplayer).not.toBeVisible();
  });

  it('should disable Record button on Record button clicked', () => {
    windowSpy.mockImplementation(() => {
      const recordButton = screen.getByTestId('btn-Record');
      fireEvent.click(recordButton);
      expect(recordButton).toBeDisabled();
    });
  });

  it('should enable Stop button on Record button clicked', () => {
    windowSpy.mockImplementation(() => {
      const recordButton = screen.getByTestId('btn-Record');
      const stopButton = screen.getByTestId('btn-Stop');
      fireEvent.click(recordButton);
      expect(stopButton).toBeEnabled();
    });
  });

  it('should disable Stop button on Stop button clicked', () => {
    windowSpy.mockImplementation(() => {
      const recordButton = screen.getByTestId('btn-Record');
      const stopButton = screen.getByTestId('btn-Stop');
      fireEvent.click(recordButton);
      fireEvent.click(stopButton)
      expect(stopButton).toBeDisabled();
    });
  });

  it('should show the audio player on Stop button clicked', () => {
    windowSpy.mockImplementation(() => {
      const recordButton = screen.getByTestId('btn-Record');
      const stopButton = screen.getByTestId('btn-Stop');
      const audioplayer = screen.getByTestId('audioplayer');
      fireEvent.click(recordButton);
      fireEvent.click(stopButton)
      expect(audioplayer).toBeVisible();
    });
  });

  it('should enable Record button on Stop button clicked', () => {
    windowSpy.mockImplementation(() => {
      const recordButton = screen.getByTestId('btn-Record');
      const stopButton = screen.getByTestId('btn-Stop');
      fireEvent.click(recordButton);
      fireEvent.click(stopButton)
      expect(recordButton).toBeEnabled();
    });
  });


});
