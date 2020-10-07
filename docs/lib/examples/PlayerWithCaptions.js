import React from 'react';
import { Player, ControlBar, ClosedCaptionButton } from 'video-react';

export default function PlayerWithCaptions() {
  return (
    <Player videoId="video-1" autoPlay>
      <source
        src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4"
        type="video/mp4"
      />
      <source
        src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg"
        type="video/ogg"
      />

      <track
        kind="captions"
        src="/assets/elephantsdream/captions.en.vtt"
        srcLang="en"
        label="English"
        default
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.sv.vtt"
        srcLang="sv"
        label="Swedish"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ru.vtt"
        srcLang="ru"
        label="Russian"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ja.vtt"
        srcLang="ja"
        label="Japanese"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ar.vtt"
        srcLang="ar"
        label="Arabic"
      />

      <track
        kind="descriptions"
        src="/assets/elephantsdream/descriptions.en.vtt"
        srcLang="en"
        label="English"
      />

      <track
        kind="chapters"
        src="/assets/elephantsdream/chapters.en.vtt"
        srcLang="en"
        label="English"
      />

      <ControlBar autoHide={false}>
        <ClosedCaptionButton order={7} />
      </ControlBar>
    </Player>
  );
}
