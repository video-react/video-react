# Video-React Contributor Guide

## Issues

### Reporting bugs

If you encounter a bug, please take a look at [the issue list](https://github.com/video-react/video-react/issues) first. If an issue you have is already reported, please add additional information or add a 👍 reaction to indicate your agreement. Otherwise, please click the "New issue" button and choose "Bug report" option. To maximize the chances of a quick fix, please make sure you follow the template and provide as much information as possible. It's highly appreciated if you can create an online demo based on [this codesandbox demo](https://codesandbox.io/s/0xn619734p) that can help us quickly reproduce the issue.

### Suggesting features

We welcome any ideas about how to make video-react better for your use case. Unless there is overwhelming demand for a feature, it might not get implemented immediately, but please include as much information as possible that will help people have a discussion about your proposal.

## Pull requests

### Improving the documentation

Improving the documentation, examples, and other open source content can be the easiest way to contribute to the library. If you see a piece of content that can be better, open a PR with an improvement, no matter how small! If you would like to suggest a big change or major rewrite, we’d love to hear your ideas but please open an issue for discussion before writing the PR.

### Small bug fixes

For a small bug fix change (less than 20 lines of code changed), feel free to open a pull request. We’ll try to merge it as fast as possible and ideally publish a new release on the same day.

### Big PRs

For significant changes to a repository, it’s important to settle on a design before starting on the implementation. Since big changes can be risky and might not always get merged, it’s good to reduce the amount of possible wasted effort by agreeing on an implementation design/plan first.

1. **Open an issue**. Open an issue about your bug or feature, as described above.
1. **Reach consensus**. Maintainers and community members should reach an agreement that this feature or bug is important. Further discussion might be needed to reach agreement on intended behavior and implementation plan.
1. **Submit PR**. In the case where multiple dependent patches need to be made to implement the change, only submit one at a time. Otherwise, the others might get stale while the first is reviewed and merged. Make sure to avoid “while we’re here” type changes - if something isn’t relevant to the improvement at hand, it should be in a separate PR; this especially includes code style changes of unrelated code.
1. **Review**. At least one core contributor should sign off on the change before it’s merged.
1. **Merge and release**.

## New contributors

If you want to contribute to video-react, but aren't quite sure where to start, take a look at the issue list and look for those labeled with "help wanted". Join the discussion if the design is not clear yet, or you can leave a comment letting people know that you are ready to take it!

## Releasing

Maintainers should follow these steps to release a new version:

### Create Release Branch

To create a release branch and changelog, run the following command, optionally with a semantic release type (major, minor, patch) (if not provided, it will default to semver (it's best to let it default)):

```
./scripts/release <release-type>
```

Verify changelog in branch. Create a PR if everything looks good. Merge when tests are green.

### Tagging and Publishing

Once the release branch is merged, checkout master and run:

```
./scripts/publish
```
