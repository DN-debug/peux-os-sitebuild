---
title: Update Error on Peux OS River
date: '2021-12-21'
excerpt: >-
  Recent jsoncpp dependency update has induced waybar-git build failure. Check
  this post to resolve the issue.
template: post
thumb_image: images/error.png
---
Peux OS River utilizes Waybar's git version, which has a dependency on 'jsoncpp'. Recent update has induced a newer version of jsoncpp that breaks the library dependency of waybar-git package. You'd see the below error:

> error: failed to prepare transaction (could not satisfy dependencies)
> :: installing jsoncpp (1.9.5-1) breaks dependency 'libjsoncpp.so=24-64' required by waybar-git

Also during the update of 'River' package from AUR, you'd get the error saying "river.desktop already exists in the filesystem".

To resolve these issues, first uninstall waybar-git and remove river.desktop file using :

> yay -Rddns waybar-git
>
>
> sudo rm -rf /usr/share/wayland-sessions/river.desktop

Then update your system, that'd include the River package as well:

> yay -Syu

Once done, install the waybar-git package using:

> yay -Sy waybar-git

This should solve the issue completely, restart if needed.

Note: The Beta ISO is missing grimshot from its package list, you may install 'grimshot' package from AUR using :

> yay -Sy grimshot

Thanks!
