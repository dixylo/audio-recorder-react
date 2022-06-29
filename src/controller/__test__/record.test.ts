import record from '../record';
import { Recording } from '../../types';

describe('Record function', () => {
  const mockRecording: Recording = {
    start: jest.fn(),
    stop: jest.fn().mockResolvedValue(''),
  };

  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });
  
  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should return a Recording object', () => {
    windowSpy.mockImplementation(async () => {
      const recording: Recording = await record();
      expect(recording).toBeEqual(mockRecording);
    });
  });

  it('should return a string on stopping recording', () => {
    windowSpy.mockImplementation(async () => {
      const recording: Recording = await record();
      const audioUrl: string = await recording.stop();
      expect(audioUrl).any(String);
    });
  });
});
