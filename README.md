# Jughead - Hugo theme
Jughead is a minimal theme for Hugo with a markdown-ish look.

Combination of [Archie Theme](https://github.com/athul/archie) and [Gruvbox Theme](https://github.com/schnerring/hugo-theme-gruvbox)

## Demo

TODO: Create a demo.

## Features
	- Automatic Dark Mode (based on system settings)

## Installation
In your Hugo website directory, create a new folder named theme and clone the repo
```bash
$ mkdir themes
$ cd themes
$ git clone https://github.com/georgehosono/jughead.git
```
Edit the `config.toml` file with `theme="jughead"`
For more information read the official [setup guide](https://gohugo.io/installation/) of Hugo.

## Writing Posts
Create a new `.md` file in the *content/posts* folder
```yml
---
title: Title of the post
description:
date:
tldr: (optional)
draft: true/false (optional)
tags: [tag names] (optional)
---
```

## Credits
Forked from [Archie Theme](https://github.com/athul/archie) and Licensed under MIT License

----

## Config Options

### Custom CSS
Custom CSS files can be included though the `customcss` config parameter.

Note: CSS files should be placed under the `assets` directory e.g. `assets/css/first.css`.

```toml
[params]
	customcss = ["css/first.css", "css/second.css"]
```

# TODOs
	- Load fonts from a CDN
	- Move to prism code highlighting
