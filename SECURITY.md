# Security policy

## Supported versions

Video-React is in security-only maintenance.

| Version | Supported                                  |
| ------- | ------------------------------------------ |
| 0.16.x  | Priority security fixes until January 2028 |
| < 0.16  | No                                         |

After January 2028, no versions receive fixes. We recommend migrating to [Video.js 10](https://videojs.org?utm_source=video-react), which Mux, the maintainer of Video-React, actively maintains together with the teams behind Video.js, Vidstack, Plyr, and Media Chrome. Start with the [Migrate from Video-React guide](https://videojs.org/docs/framework/react/guides/migrate-from-video-react?utm_source=video-react).

## Reporting a vulnerability

Please don't open a public issue or discussion for a security problem.

Report it privately with GitHub's [private vulnerability reporting](https://github.com/video-react/video-react/security/advisories/new).

Include the `video-react` version, a description of the issue and its impact, and steps to reproduce it. We'll acknowledge your report, keep you updated while we investigate, and credit you in the advisory unless you'd rather stay anonymous.

"Priority" means issues that let an attacker run script, read data, or otherwise compromise a site that embeds the player. Other bugs aren't fixed during security-only maintenance.
