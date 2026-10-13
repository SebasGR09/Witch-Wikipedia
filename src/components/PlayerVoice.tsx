import MediaThemeTailwindAudio from 'player.style/tailwind-audio/react';
import YoutubeVideo from 'youtube-video-element/react';

export default function PlayerVoice({source}: {source: string}) {
  return (
    <>
        <MediaThemeTailwindAudio style={{width: "80%"}}>
            <YoutubeVideo
              slot="media"
              src={source}
              playsInline
              crossOrigin="anonymous"
            ></YoutubeVideo>
        </MediaThemeTailwindAudio>
    </>
  );
}