---
title: 'Hblock - What is it? '
subtitle: ''
date: '2020-12-02'
excerpt: >-
  For the privacy-aware users, tools like hBlock can be helpful to block
  malicious domains, malware, advertisements, and trackers. Trackers could be
  pixels added to websites to track which pages you visited, which might invade
  your privacy.
template: post
thumb_image: images/hblock.png
---
> For the privacy-aware users, tools like hBlock can be helpful to block malicious domains, malware, advertisements, and trackers. Trackers could be pixels added to websites to track which pages you visited, which might invade your privacy.

\-- From LinuxSecurityExperts

General Public often is unaware of the malicious domains or trackers that run behind the actual GUI interface.  HBlock comes into the picture in such scenarios.

We, as end-users will only have to initiate HBlock and it will download the information from its source. Once downloaded, it will then activate the denylist and sanitize the blocklist.

To initiate Hblock, open up your terminal in Peux OS and type in:
\~> hblock

It may prompt you for the sudo-password after it sanitizes the blocklist.

**Behind the scenes**

hBlock works with the /etc/hosts file of the system which contains the blocklist. Requests to bad and malicious hosts are blocked as they relate the entries that are resolved to 0.0.0.0. This effectively prevents the system from connecting to these particular hostnames.

Link to Github repo: [https://github.com/hectorm/hblock](https://)
