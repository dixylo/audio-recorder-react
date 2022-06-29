import { useState } from 'react';
import record from '../controller/record';
import Button from '../components/Button';
import Instruction from '../components/Instruction';
import AudioPlayer from '../components/AudioPlayer';
import { Recording } from '../types';
import './styles.css';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [instruction, setInstruction] = useState<string>('Please click "Record" to start recording.');
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [recording, setRecording] = useState<Recording>();

  const handleStartRecording = async () => {
    if (!recording) {
      const newRecording: Recording = await record();
      newRecording.start();
      setRecording(newRecording);
    } else {
      recording.start();
    }
    setIsRecording(true);
    setInstruction('Please click "Stop" to stop recording.');
  };

  const handleStopRecording = async () => {
    if (recording) {
      const audioUrl: string = await recording.stop();
      setAudioUrl(audioUrl);
      setIsRecording(false);
      setInstruction('Please click ▶️ to play back.');
    }
  };

  return (
    <div className='container'>
      <div className='sub-container'>
        <h2 className='header'>Audio Recorder</h2>
        <div className='button-container'>
          <Button title='Record' disabled={isRecording} onClick={handleStartRecording} />
          <Button title='Stop' disabled={!isRecording} onClick={handleStopRecording} />
        </div>
        <Instruction text={instruction} />
        <AudioPlayer src={audioUrl} hidden={!audioUrl || isRecording} />
      </div>
    </div>
  );
}

export default AudioRecorder;
