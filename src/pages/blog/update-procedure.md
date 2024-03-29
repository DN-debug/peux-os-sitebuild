---
title: How to update the outdated pure arch-based systems?
date: '2021-12-22'
excerpt: >-
  This post will provide step by step update procedure for the outdated pure
  arch-based systems.
template: post
thumb_image: >-
  images/0x80070643-error-what-is-it-featured-1cdf279cb61f4ecc8240364b7b8cdbd1.jpg
---
This post is solely for pure arch-based systems such as Peux OS itself, that does not ship the custom mirror-list. When these pure arch-based systems are outdated the system upgrade process would become a little hectic for people who don't know what to do next, for example, if you use any couple of months ol Peux OS ISO then after installing the system, you most likely won't be able to update/upgrade the system.

The reason is simple, Arch routinely updates its mirror-list and keyrings, which when encounters the unmatched and outdated keyring or mirror-list in the system \[ that doesn't match with the one in the 'Servers'], fails to pull the database information into the system. At some point it might even  try to update the pgp key value during the upgrade process but would most likely fail.

The below steps would help you upgrade the outdated systems smoothly:

1.  Go to [Pacman Mirrorlist Generator](https://archlinux.org/mirrorlist/) website and select the country of your choice then generate the mirrorlist.

2.  Launch the terminal, then open the '**/etc/pacman.d/mirrorlist**' file with root privileges in the text editor of your choice. For example, if I want to use leafpad, I'd type: "**sudo leafpad /etc/pacman.d/mirrorlist**" or to use kate, I'd type "**kate /etc/pacman.d/mirrorlist**".

3.  Remove the contents of the **mirrorlist** file and paste the newly generated mirrorlist from Step 1 into this file. Remove the hash symbols "#" in front of the lines that says "**Server**". Save and exit.

4.  Now in the terminal, we will update the database and install the package "archlinux-keyring" using the command : "**sudo pacman -Sy archlinux-keyring**".

5.  Once done, populate the keys using the command : "**sudo pacman-key --populate archlinux**", followed by "**sudo pacman -Syy**".

6.  Now you should be good to go, run "**sudo pacman -Syu**" to upgrade the system.

***You may also start directly at Step 4, sometimes it is not necessary to update the mirrorlist at all. ***

If above steps doesn't work out for you, then you may reach out to me using the means listed in the '[Connect](https://peux-os.netlify.app/#con)' section.

Thanks!
