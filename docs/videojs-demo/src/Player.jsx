import '@videojs/react/video/skin.css';
// The /spf entry uses Video.js's own streaming engine instead of hls.js, which
// roughly halves the bundle. Use '@videojs/react/media/mux-video' for hls.js.
import { MuxVideo } from '@videojs/react/media/mux-video/spf';
import { VideoPlayer, VideoSkin } from '@videojs/react/video';

// "View From A Blue Moon" trailer, hosted on Mux.
const playbackId = 'lyrKpPcGfqyzeI00jZAfW6MvP6GNPrkML';
const poster = `https://image.mux.com/${playbackId}/thumbnail.webp?time=133`;

export default function Player() {
  return (
    <VideoPlayer title="View From A Blue Moon" poster={poster}>
      <VideoSkin>
        <MuxVideo source={{ playbackId }} playsInline crossOrigin="anonymous" />
      </VideoSkin>
    </VideoPlayer>
  );
}
