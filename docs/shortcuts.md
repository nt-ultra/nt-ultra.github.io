---
sidebar_position: 2
---

# Shortcuts

Managing shortcuts is made to be extremely simple. Like Firefox with extra qol.

## New shortcuts

You can create new shortcuts in a couple of ways

- Manually via the `+ New` shortcut button
- By dragging links into the shortcut grid
- By dragging tabs from the `Tab Browser` into the shortcut grid
- By importing saved shortcuts via `Settings` -> `Shortcuts`

## Importing shortcuts

Shortcuts are imported via file or clipboard in a simplified list format. The format looks something like this:

```text
website title favicon
```

Including `title` and `favicon` are completely optional, so the list could be as simple as:

```text
https://example1.com
https://example2.com
https://example3.com
```

Or a combination of data, such as:

```text
https://example1.com
https://example2.com Custom Title
https://example3.com Example https://example.com/icon.png
```

When exporting shortcuts, your custom titles and favicons are also saved in this format.

## Importing Firefox New Tab Page Shortcuts

Unfortunately there isn't a way for the extension to fetch Firefox Home Page shortcuts automatically, but it can parse the shortcuts that are pinned when given the data.

1. In Firefox, go to: about:config
2. Search for: `browser.newtabpage.pinned`
3. Copy the entire value and paste it when `importing from firefox`