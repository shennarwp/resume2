# shennarwp's résumé

This is my résumé source code, developed further based on this
[template by Anthony Adamski](https://codepen.io/aja9104/pen/nzaZwW).

Live version can be seen on [shenna.rwpiri.com](https://shenna.rwpiri.com) or hosted here:

- [Hetzner VM](https://shennarwp.com/cv-staging/)
- [Azure Container Apps](https://resume.graysand-8af4e4eb.germanywestcentral.azurecontainerapps.io/)
- [Azure Static Web App](https://victorious-moss-02a509500.7.azurestaticapps.net/)
- [GitHub Pages](https://shennarwp.github.io/resume2/)

This repository is intended to learn the use of GitHub Action to perform CI/CD deployment within Azure + self-hosted cloud environment

## Local development

Use Node 24.21.0, matching CI and the Docker builders:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Before deploying, run `npm run check`, `npm run lint`, `npm run test:coverage`,
and `npm run build`. Run SvelteKit checks and builds sequentially because they
share generated files in `.svelte-kit`.

## VM deployment

The Hetzner and Oracle workflows use `scripts/deploy-vm.sh`. Hosts need Docker,
curl with `--retry-all-errors` support, the `nginx` Docker network, and the existing
`nginx` proxy container. The script pulls the image first, retains the old container
as `resume-rollback`, checks the replacement over a randomly assigned loopback port,
restarts nginx, and checks the public URL. A failed replacement restores the old
container and restarts nginx. A first deployment has no previous container to restore.

Deployments are serialized per environment. If an interrupted deployment leaves
`resume-rollback`, inspect and recover it before retrying; the script will not delete it.
Run recovery tests with `python3 -m unittest discover -s tests -p 'test_*.py'`.
