# Video-React Contributor Guide

## Getting Started

- Clone Newsela's [Angelou repo](https://github.com/newsela/angelou) & follow the instructions if you haven't already
- `cd` to the root folder of the _angelou_ repo
- Run `yarn install` to install _angelou_ dependencies
- Run `git config push.recurseSubmodules check` to make sure you never push to _angelou_ without also pushing your submodule work
- Run `git submodule update --init --recursive` to fetch files for the _video-react_ submodule
- `cd video-react` to navigate into the _video-react_ folder

While inside of _video-react_'s root folder:

- `yarn install` to install _video-react_'s dependencies
- `yarn build` to build _video-react_'s project

After these steps, you should be able to...

- Run angelou with `yarn start` from the root of your angelou project
- View the _video-react_ files
- Build, run & work on the `<Video />` component

## Contributing

### Note: Any time you run `git submodule update` or use the `--recurse-submodules` flag, you will be left in a _detached HEAD_ with the submodule.

### Pulling changes from the submodule

If a collaborator adds changes to this submodule, running `git pull` from the angelou repo alone _isn't enough_ to receive these changes. By default, `git pull` fetches submodule changes, but does not _update_ the submodules. Because of this, you have two options for retrieving the updates:

- Simply run `git pull --recurse-submodules` in _angelou_'s root folder when you want to retrieve updates for both _angelou_ & _video-react_

_OR_

- Run `git pull` from _angelou_'s root folder to retrieve the _angelou_ updates
- Run `git submodule update` to retrieve the _video-react_ updates

### Working (& Pushing) on the submodule

Before you start working on the submodule, make sure to checkout to a new branch. Otherwise, your work might be on a detached HEAD.

If you need to pull in updates from the remote while working on your branch, run `git submodule update --remote --merge`.

If you forget the `--merge`, Git will just update the submodule to whatever is on the server and reset your project to a detached HEAD state. If this happens, just checkout to the branch your work is on and don't forget the `--merge` flag this time. :)

If you've made changes in...

#### Angelou only

Proceed to follow the regular process outlined in [Angelou's README.md](https://github.com/newsela/angelou#release-workflow).

#### Both video-react & angelou OR video-react alone

- Create a branch for your work in the submodule if you haven't done so yet
- Commit your work in the _video-react_ submodule
- Push your work to a branch in the remote repository
