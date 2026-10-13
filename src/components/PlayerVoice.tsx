import MediaThemeTailwindAudio from 'player.style/tailwind-audio/react';
import YoutubeVideo from 'youtube-video-element/react';
import type { CSSProperties } from 'react';

export default function PlayerVoice({ source, color }: { source: string, color:string }) {
  const playerStyle = {
    "--media-accent-color": color,
    width: "80%"
  } as CSSProperties;

  return (
    <MediaThemeTailwindAudio style={playerStyle}>
      <YoutubeVideo
        slot="media"
        src={source}
        playsInline
        crossOrigin="anonymous"
      />
    </MediaThemeTailwindAudio>
  );
}
