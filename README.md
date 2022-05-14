This monorepo starter combines a NextJS frontend and a NestJS backend. A package for shared utilities, DTOs, and types is also included. It is my personal template and is liable to change dramatically.

Default settings for CORS and validation are applied to `back`, which uses Fastify underneath.

`front comes with the same libraries and defaults as [next-cnr-template](https://github.com/ideopunk/next-cnr-template).

`lib/dtos` is the single source of truth for requests and responses.

To deploy the front-end on Vercel:

- Build: `yarn --cwd=../.. build`
- Install: `yarn --cwd=../..`
- Root Dir: `apps/front`

