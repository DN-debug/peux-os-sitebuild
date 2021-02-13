---
title: XFWM-Effects
subtitle: Blur/Transparency Effects for XFWM4
date: '2020-12-26'
excerpt: >-
  Goes by the name of xfwm-blur-effects, will add transparency and blur effects
  to the xfwm4 Window manager.
template: post
thumb_image: images/xfwm-blur.jpg
---
Xfce**-blur-effects** is the actual name. It is a shameless copy of James Hoover's XFCE Effects. His site goes by  [**Kalideva**](https://www.kalideva.com/). All the credits for this package goes to him. If you are using XUBUNTU, then utilize the package on his site.

Since you can only create transparency to a certain level in XFWM4's default compositor settings, hence this was created by James only for Xubuntu.

I only changed the installation commands to port it to Arch-Linux. Few things to keep in mind before installing this:

*   Run software/package update before you install this
*   make the file executable by running chmod +x xfwm-effects-install.sh

\- **never run this without root-privileges**, or you will end up corrupting your Window manager. The end result would be a black screen after reboot. It's on you and you only.

Visit GitHub repo: [xfwm-blur-effects](https://github.com/dev-andi/xfce-blur-effects) for more details.
