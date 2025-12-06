---
sidebar_position: 3
---

# Trackers

Trackers are a new way to stay updated with your favorite content and sources through the use of RSS. New Tab Ultra provides dynamic trackers for the following:

| Tracker | Example | Method/Reason |
|---------|---------|--------|
| RSS | Any RSS URL | rss2json |
| Dev.to | https://dev.to/username | rss2json |
| Crypto | bitcoin, BTC, ethereum, ETH | coingecko api - For cryptocurrency price tracking |
| GitHub Commits | https://github.com/nt-ultra/nt-ultra | github api - For public repository monitoring |
| GitHub Releases | https://github.com/nt-ultra/nt-ultra/releases | github api |
| GitHub Discussions | https://github.com/nt-ultra/nt-ultra/discussions | github api |
| GitHub Issues | https://github.com/nt-ultra/nt-ultra/issues | github api |
| Mastodon Users | https://mastodon.social/@Mastodon | direct xml parsing for Mastodon RSS feeds |
| Medium | https://medium.com/@username | rss2json |
| Reddit Posts | https://reddit.com/r/news/comments/... | reddit.rss - for subreddit activity and reddit post |
| Subreddits | https://reddit.com/r/news | reddit.rss |
| Stocks | AAPL, TSLA, GOOG | yahoo finance api - For stock price tracking |
| Substack | https://newslettername.substack.com | rss2json |
| Twitch Streams | https://twitch.tv/user | decapi.me - For offline/live status |
| Weather | weather in New York, London weather, weather New York City, NY | wttr.in - for location result |
| YouTube Channels | https://www.youtube.com/@rcjonnie | youtube/feed - for YouTube channel activity tracking |


The methods used for tracking are all common, dependable, and no auth required:

:::note
Trackers are an experimental feature, mostly due to experience level with RSS, experience with methods used, and the limits set on amount and update intervals. If you are familiar with handling RSS feeds and want to see the feature improved. Please feel free to contribute to its [continued development](https://github.com/nt-ultra/nt-ultra)!
:::