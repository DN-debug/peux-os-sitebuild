---
title: ISO - Recent Issues
subtitle: ''
date: '2020-12-02'
excerpt: >-
  In most cases, laptop's touchpad should work. However, if it doesn't, then
  that means the libinput settings are not working properly.
template: post
thumb_image: images/spectacular-turtle.jpg
---
I released XFCE, LXQt and GNOME ISOs on 1st of August. After a week later I started receiving messages that Gnome ISO never worked. That was quite weird as I did run full tests on different machines before releasing it. So what was the issue: users reported that the were facing login-loop. Now there are different aspects of viewing this issue. Let me first explain those areas.

**Issue:**

If an user was selecting autologin, then the user was not able to run privileged commands within the userspace. If the user was not selecting autologin, then the user was not able to login at all.

Here's what I did :--

1.  Firstly, I installed it on a real hardware again. Two scenarios were involved: a) with auto-login b) without auto-login

2.  With Auto-login:

    1.  I needed to fix the issue with user privilege first. So, after a fresh login, if the user attempts to run privileged commands, the first three attempts would definitely fail. You'd then have to wait for 10 min before attempting again, which then would work until the next login-session.

    2.
