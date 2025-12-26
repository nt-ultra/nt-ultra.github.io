---
sidebar_position: 6
---

# Wallpaper Selection

### Selecting a wallpaper

Select up to 10 wallpapers to add to your collection.

<iframe width="100%" height="560" src="/demo/setting-wallpaperselection.mp4" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### What can be used as a wallpaper?

Any image format. Any gif. The limit is set to 100MB per image. And 10 wallpapers total. These limitations are set in [consideration of IndexDB](https://rxdb.info/articles/indexeddb-max-storage-limit.html). The 100MB limit mostly compensates for scenarios where you might use a high quality gif locally. The limit can be higher but, higher MB wallpapers may slow down page load speed depending on how fast your storage is.

Wallpapers are saved via IndexDB (seperate from other settings). This allows for a greater storage limit when utilizing locality, with barely any compression.