# Video-React agent guide

`video-react` is deprecated. It's in security-only maintenance: priority security fixes until January 2028, and nothing else. Its successor is [Video.js 10](https://github.com/videojs/v10) (`@videojs/react`). Mux maintains Video-React and builds Video.js 10 together with the teams behind Video.js, Vidstack, Plyr, and Media Chrome. Don't start new projects with Video-React or add new Video-React code. Migrate instead.

## Migrating to Video.js 10

- **Skill:** install the Video.js skill with `npx @videojs/cli agents skills`, or follow https://github.com/videojs/skills.
- **Installation:** read https://videojs.org/docs/guides/installation/react.md and follow the prompt in its "AI Quickstart" section.
- **Concept mapping:** there's no Video-React migration guide. Video-React was modelled on Video.js, and its `Player` props (`fluid`, `aspectRatio`, `poster`, `preload`, `playsInline`) and controls (`ControlBar`, `BigPlayButton`, `PlayToggle`) mirror Video.js 8's options and components. The Video.js 8 guide covers the closest concepts: https://videojs.org/docs/framework/react/guides/migrate-from-video-js-8.md. Before you change code, compare its "Known gaps" section with the features the project uses.
- **Docs:** https://videojs.org/docs/framework/react/llms.txt indexes every page as Markdown. Once Video.js is installed, use `node_modules/@videojs/react/docs/llms.txt` instead, because it matches the installed version.

## Working in the video-react/video-react repository

- Only fix security issues. Don't add features, refactor, change public APIs, or upgrade dependencies unless that fixes a vulnerability.
- Security reports go through `SECURITY.md`, not public issues.
- Use npm: `npm test`, `npm run lint`, and `npm run build`.
- Keep a fix as small as possible and add a test that fails without it.
