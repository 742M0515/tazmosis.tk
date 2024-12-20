---
title: switch jekyll themes the smart way
pubDate: 05/09/2024 04:20
author: "tazmosis"
tags:
  - jekyll
  - ssg
  - mods
  - optimal
imgUrl: "../../assets/astro.jpeg"
description: work smarter not harder.
layout: "../../layouts/BlogPost.astro"
---

original post: [Daniel A.A. Pelsmaeker](https://stackoverflow.com/users/146622/daniel-a-a-pelsmaeker) on [stackoverflow.com](https://stackoverflow.com/a/37186333/10015616)

This is what I did to change the theme of an existing Jekyll installation. Adjust these instructions to suit your needs.
Pull the new theme

We create a new orphan branch newtheme and ensure it's empty.

git checkout --orphan newtheme
git rm -rf .
git clean -dfx

Then we pull the theme files into it by adding the theme as an upstream remote. In this example I pull John Otander's Pixyll theme's master branch.

git remote add upstream https://github.com/johnotander/pixyll.git
git fetch upstream
git pull upstream master

Build the theme and test it.

bundler install
jekyll serve

Merge your changes

Now we merge our posts, configuration, etc. You can use Git checkout to copy a file or folder from your old Jekyll site. Note that this will overwrite the theme's file if it exists.

git checkout master -- \_posts

Alternatively, you can copy a file under a new name, for example to merge it manually.

git show master:\_config.yml > \_config.yml.old

If you accidently overwrote a theme file, you can restore it.

git checkout upstream/master -- about.md

These are the files I had to copy, merge, adjust or remove:

    Markdown files in the root folder.
    Posts in the _posts folder.
    Drafts in the _drafts folder.
    The _config.yml configuration file.
    The Gemfile gem file.
    The CNAME file (for GitHub pages).
    The Rakefile (if any).
    The favicon files (if any).
    Manual theme changes such as Google Analytics, Disqus, SEO fields (if any).

Commit your changes, and don't forget to test the theme again.
Replace the master branch

Finally we replace our existing master branch with the new newtheme branch. Assuming we're on the newtheme branch:

git checkout newtheme
git merge -s ours master
git checkout master
git merge newtheme

Push the changes.

git push

And clean up the local newtheme branch.

git branch -d newtheme

That's it! You've successfully replaced your theme. If there's anything I missed, or you have anything to add, please leave a comment.
Updating the theme

If at any later point you want to update the theme to include the latest upstream changes, simply:

git pull upstream master

And fix any merge conflicts. Here I assume the upstream remote is still set to the theme's repository (you can check this with git remote -v).
