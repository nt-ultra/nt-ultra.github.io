---
sidebar_position: 3
---

# Trackers

### Trackers are a new way to stay updated with your favorite content and sources through the use of RSS. New Tab Ultra provides dynamic trackers for the following:

| Tracker | Example |
|---------|---------|
| RSS | Any RSS URL |
| Dev.to | https://dev.to/username |
| Crypto | bitcoin, BTC, ethereum, ETH |
| GitHub Commits | https://github.com/nt-ultra/nt-ultra |
| GitHub Releases | https://github.com/nt-ultra/nt-ultra/releases |
| GitHub Discussions | https://github.com/nt-ultra/nt-ultra/discussions |
| GitHub Issues | https://github.com/nt-ultra/nt-ultra/issues |
| Mastodon Users | https://mastodon.social/@Mastodon |
| Medium | https://medium.com/@username |
| Reddit Posts | https://reddit.com/r/news/comments/... |
| Subreddits | https://reddit.com/r/news |
| Stocks | AAPL, TSLA, GOOG |
| Substack | https://newslettername.substack.com |
| Twitch Streams | https://twitch.tv/user |
| Weather | weather in New York, London weather, weather New York City, NY |
| YouTube Channels | https://www.youtube.com/@rcjonnie |

### While the methods used for tracking are all common, dependable, and no auth required:

| Method | Reason |
|--------|--------|
| rss2json | For basic RSS URL types |
| youtube/feed | For YouTube channel activity tracking |
| reddit.rss | For subreddit activity tracking and reddit post tracking |
| github api | For public repository monitoring |
| decapi.me | For Twitch stream live/offline status |
| coingecko api | For cryptocurrency price tracking |
| wttr.in | For weather data |
| yahoo finance api | For stock price tracking |
| direct xml parsing | For Mastodon RSS feeds |

:::note
Trackers are an experimental feature, mostly due to experience level with RSS, experience with methods used, and the limits set on amount and update intervals. If you are familiar with handling RSS feeds and want to see the feature improved. Please feel free to contribute to its [continued development](https://github.com/nt-ultra/nt-ultra)!
:::