# Nx enterprise Angular starter, built lesson by lesson

An Angular admin portal in an Nx workspace, built up in small lessons: auth guards, NgRx, translations, Tailwind,
tooling, Docker. Each lesson is a tagged point in the history, so you can open the code as it stood after that lesson or
see exactly what the lesson changed.

**Now on Angular 22, Nx 24, NgRx 22 and TypeScript 6.** Lessons 01–07 were written on Angular 18; lesson 08 is the
upgrade.

## Lessons

| #   | Lesson                                                | Code at this point                                                                                     | What changed                                                                                                                                 |
| --- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Auth module: login and home layouts, guard stubs      | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-01-auth-module)              | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/b67e256...lesson-01-auth-module)                                         |
| 02  | NgRx store, effects and router store                  | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-02-setup-ngrx)               | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-01-auth-module...lesson-02-setup-ngrx)                            |
| 03  | Translations with Transloco, language in the store    | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-03-setup-i18n)               | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-02-setup-ngrx...lesson-03-setup-i18n)                             |
| 04  | Tailwind CSS with a dark and light theme              | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-04-setup-ui)                 | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-03-setup-i18n...lesson-04-setup-ui)                               |
| 05  | Husky, commitlint and lint-staged                     | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-05-chores-and-build-tools)   | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-04-setup-ui...lesson-05-chores-and-build-tools)                   |
| 06  | Folder structure, assets moved to `public/`           | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-06-chores-and-minor-updates) | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-05-chores-and-build-tools...lesson-06-chores-and-minor-updates)   |
| 07  | Docker image served by nginx                          | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-07-deploy-with-docker-ngnix) | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-06-chores-and-minor-updates...lesson-07-deploy-with-docker-ngnix) |
| 08  | Upgrade from Angular 18 / Nx 19 to Angular 22 / Nx 24 | [browse](https://github.com/tomavic/ng-nx-enterprise-monorepo/tree/lesson-08-upgrade-to-angular-22)    | [diff](https://github.com/tomavic/ng-nx-enterprise-monorepo/compare/lesson-07-deploy-with-docker-ngnix...lesson-08-upgrade-to-angular-22)    |

To work from a lesson locally: `git checkout lesson-03-setup-i18n`.

### What lesson 08 shows

Upgrading four major versions one step at a time, with a passing build, tests and lint after each step (one commit per
step):

- `nx migrate` from Nx 20 to 24, which also moved Angular 18 → 22, NgRx 18 → 22 and TypeScript 5.4 → 6.0.
- Constructor injection replaced with `inject()` using Angular's own migration.
- Components moved to the Angular 22 default, OnPush, instead of keeping the `Eager` opt-out the migration added.
- ESLint moved to flat config; lint and test targets are now inferred by Nx plugins, since Nx 24 removed the old
  executors.
- Translations load as lazy chunks with `import()`, so prerendered pages get them too (HTTP loading failed at build
  time).
- The Docker image fixed and rebuilt on Node 22 and pnpm, serving the prerendered pages.

## What is inside

- **App:** `apps/admin-portal`, standalone components, server-side rendering with prerendered routes, lazy-loaded
  dashboard.
- **State:** NgRx Store with effects, router store and devtools; a facade service in front of the layout state.
- **Routing:** login and home layouts, each with a functional guard ready for your auth check (both allow every user for
  now), and a 404 page.
- **Translations:** Transloco, with the current language kept in the store.
- **UI:** Tailwind CSS with a dark and light theme toggle.
- **Tooling:** ESLint (flat config), Prettier, Jest, Playwright for end-to-end tests, Husky with commitlint and
  lint-staged.
- **Delivery:** GitHub Actions CI (lint, test, build, Docker build) and a two-stage Docker image served by nginx.

## Run it

Requires Node 22 and pnpm 10.

```shell
pnpm install
pnpm nx serve admin-portal          # http://localhost:4200
pnpm nx run-many -t lint test build
pnpm nx graph                       # see how the projects relate
```

### Docker

```shell
docker build -t admin-portal .
docker run --rm -p 8080:80 admin-portal   # http://localhost:8080
```

## Licence

[MIT](LICENSE)
