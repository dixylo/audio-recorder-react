import { Recording } from "../types"

function record (): Promise<Recording> {
  return new Promise<Recording>(async (resolve) => {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder: MediaRecorder = new MediaRecorder(stream);
    const audioChunks: Blob[] = [];

    mediaRecorder.addEventListener("dataavailable", (event: BlobEvent) => {
      audioChunks.push(event.data);
    });

    const start = (): void => {
      mediaRecorder.start();
    };

    const stop = (): Promise<string> => {
      return new Promise<string>((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob: Blob = new Blob(audioChunks);
          const audioUrl: string = URL.createObjectURL(audioBlob);
          resolve(audioUrl);
        });

        mediaRecorder.stop();
        audioChunks.splice(0, audioChunks.length);
      });
    };

    resolve({ start, stop });
  });
}

export default record;
