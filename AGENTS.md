# Developer Portal Guide

## Repository purpose

This repository publishes the Move Payment ecommerce developer portal using
Zudoku 0.12, React, TypeScript, MDX, and GitHub Pages.

## Architecture and navigation

- pages contains authored MDX documentation. Keep integration subjects under
  pages/docs and follow the existing topic directories.
- zudoku.config.ts defines metadata, top navigation, sidebar order, redirects,
  the documentation glob, and the remote ecommerce OpenAPI input.
- public contains images and downloadable/static assets referenced from MDX.
- The API reference is sourced from a remote endpoint at build/runtime; authored
  pages and generated API reference are different contracts.

## Supported workflow

Use the checked-in npm lockfile:

    npm ci
    npm run dev
    npm run lint
    npm run build

The local development server normally listens on port 9001.

## Documentation conventions

- When adding, moving, or renaming a page, update the sidebar entry in
  zudoku.config.ts in the same change and verify the route.
- Use root-relative public asset paths. Keep asset names descriptive and avoid
  committing editor exports, operating-system files, or unnecessarily large
  media.
- Write examples that are internally consistent and safe to copy. Use
  placeholders for tokens, keys, signatures, hosts, customer data, and account
  identifiers.
- Keep terminology, endpoint paths, request fields, webhook behavior, and
  signature rules aligned with the current movepay ecommerce OpenAPI contract.
- Preserve MDX-compatible syntax. Check headings, code fences, links, alt text,
  and navigation order in the rendered site.
- Do not change the remote OpenAPI URL, redirects, domain configuration, or
  GitHub Pages workflow unless the request is specifically about publishing.

## Validation

- Run npm run lint for TypeScript/configuration changes.
- Run npm run build for page, sidebar, MDX, asset-path, or configuration changes.
- Manually inspect newly referenced local assets and exercise new internal links.
- If the remote OpenAPI source or network is unavailable, separate that external
  failure from local MDX/configuration errors in the report.

## Safety boundaries

- Do not edit node_modules or generated build output.
- Do not publish, change the CNAME, or trigger Pages deployment unless explicitly
  requested.
- Never place real API credentials, webhook secrets, production payload data, or
  unredacted customer information in docs, screenshots, examples, or logs.
