---
title: How to update the outdated pure arch-based systems?
date: '2021-12-22'
excerpt: >-
  This post will provide step by step update procedure on outdated pure
  arch-based systems, such as Peux
template: post
---
This post is solely for pure arch-based systems such as Peux OS itself, that does not ship custom mirrorlist. When these pure arch-based systems are outdated the system upgrade process would become a little hectic for people who don't know what to do next, for example, if you use any old Peux OS ISO then after installing the system it'll fail to update/upgrade the system packages.

The reason is simple, Arch routinely updates its mirrorlist and keyrings, which when encounters the unmatched and outdated keyring or mirror-list, fails to pull the database information into the system. It'll try to update the pgp key value during the upgrade process but would most likely fail.

The below steps would help you upgrade the outdated systems smoothly:

1.  Go to [Pacman Mirrorlist Generator](https://archlinux.org/mirrorlist/) website and select the country of your choice then generate the mirrorlist.

2.  Launch the terminal, then open the '**/etc/pacman.d/mirrorlist**' file with root privileges in the text editor of your choice. For example, if I want to use leafpad, I'd type: "**sudo leafpad /etc/pacman.d/mirrorlist**" or "**kate /etc/pacman.d/mirrorlist**".

3.  Remove the contents of the **mirrorlist** file and paste the newly generated mirrorlist from Step 1 into this file. Remove the hashes "#" in front of the lines that says "**Server**". Save and exit.
