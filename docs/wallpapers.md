---
sidebar_position: 6
---

# Wallpaper Selection

### What can be used as a wallpaper?

Any image format. Any gif. The limit is set to 100MB per image (animated wallpapers ✔). And 10 wallpapers total. These limitations are set in [consideration of IndexDB](https://rxdb.info/articles/indexeddb-max-storage-limit.html).

Wallpapers are saved via IndexDB (seperate from other settings). This allows for a greater storage limit when utilizing locality, with barely any compression. Wallpapers are also excluded from potential Browser Sync and Exporting for these reasons.

### Linking Wallpapers