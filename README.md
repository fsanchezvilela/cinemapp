# Cinemapp - Front

## Versions tested
- Yarn 1.22.10
- Node 16.4.1

## Getting Started

#### First, run:

If dependencies not installed
````bash
yarn install
````

#### Start development server

```bash
yarn dev
```

## Hooks

This monorepo use 2 git hooks (with [husky](https://github.com/typicode/husky))
- Pre-Commit hook: lint files and check commit message
- Pre-Push: run tests

### Pre-Commit
Lint on staged files is executed using prettier and lint-staged. It will try to fix code style and check for eslint errors, if there is any eslint error the commit will be canceled, and you need to fix it manually

The other check is on message commit, it will check the message of every commit to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

### Commit conventions

Commit conventions allow team to add more semantic meaning to git history. This e.g. includes type, **scope** or **breaking changes**. With this additional information tools can derive useful human-readable information for releases of project. Some examples are [angular commit rules](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope**, and a **subject**:

```bash
type(scope?): subject
body?
footer?
```

#### Valid Commits

```bash
git commit -m "docs: add developer docs"
git commit -m "docs(scope or developer.md or package name): add developer docs"

// To close issue
git commit -m "fix(button): fix button target event, closes #JIRANUMBER "
```

### Revert

If the commit reverts a previous commit, it should begin with **revert:**, followed by the header of the reverted commit. In the body it should say: **this reverts commit hash.**, where the hash is the SHA of the commit being reverted.

### Possible types

- **chore**: Change build process, tooling or dependencies.
- **ci**: Changes to our CI configuration files and scripts (example scopes: gitlab-ci, Build)
- **feat**: Adds a new feature.
- **fix**: Solves a bug.
- **docs**: Adds or alters documentation.
- **style**: Improves formatting, white-space.
- **refactor**: Rewrites code without a feature, performance or bug changes.
- **perf**: Improves performance.
- **test**: Adds or modifies tests.
- **revert**: Changes that reverting other changes


## Tagging and versioning

We should use semantic versioning for our package.json version.

#### Examples
*Major release*
```bash
npm --no-git-tag-version version major -m 'feat!: Includes cool feature'
```
For example this will bump from 2021.1.0 to 2022.0.0 version and create git tag.

*Minor release*
```bash
npm --no-git-tag-version version minor -m 'feat: Includes small cool feature'
```
For example this will bump from 2021.1.0 to 2021.2.0 version and create git tag.

*Major release*
```bash
npm --no-git-tag-version version patch -m 'fix: Includes some cool fix'
```
For example this will bump from 2021.1.0 to 2021.1.1 version and create git tag.

_Single colon is used so *!* character is not confused by zsh as a modifier_


### TODO FUTURE IMPROVEMENT

- Add Sentry for bug track in production
- Add Animation and Transitions 
- Add end-2-end testing with Cypress
- Improve More Unit Test. with more cases
- Add Tailwind / styled components
- Import all Components in Storybook
- Improve Reducers Functions (need more clean repository / state layer)
- Add CI-CD in github pipelines / netlify
- Add ErrorBoundary and Router Guardian for forbbiden routes (private/public)

## Authors
By Fernando Sanchez