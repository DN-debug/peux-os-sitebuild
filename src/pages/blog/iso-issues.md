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

If an user was selecting autologin, then the user was not able to run privileged commands within the user-space. If the user was not selecting autologin, then the user was not able to login at all.

Here's what I did :--

1.  Firstly, I installed it on a real hardware again. Two scenarios were involved: a) with auto-login b) without auto-login

2.  With Auto-login:

    1.  I needed to fix the issue with user privilege first. So, after a fresh login, if the user attempts to run privileged commands, the first three attempts would definitely fail. You'd then have to wait for 10 min before attempting again, which then would work until the next login-session.

    2.  What options can we have if "sudo" doesn't work? I had two things: a) "su" and b) pkexec \[ few systems would have gksudo as well ]

    3.  Well, to confirm that password is working but the package is faulty, I used "su" privileges, which is technically a different user-space. I was able to get into "root" mode. I first edited the /etc/security/faillock.conf file to reduce the account lock duration and then I proceeded with system lock. Apparently, I got the same result, i.e 3 failed attempts were made, wait for 1 min \[ due to the modified lock file as stated above ] .

    4.  Once unlocked, I immediately checked the journal logs and figured out that the pam authentication was receiving empty password entries even before user could type it. It was happening every time after the first session logon.

    5.  It was clear as the sky that sudo was broken. I removed sudo and installed doas. configured it  and the issue was gone.

3.  Without Auto-login:

    1.  Next task at hand was to resolve the xorg login loop issue as Wayland was working for me unlike others . Well, thanks to my past experiences. I logged into tty session and wiped out the shell-extensions. Performed a reboot and was able to fix it.

    2.  Back in 2018, I was using Fedora, I still do tbh. I hada similar issue and I remembered fixing it the same way.

These issues are common, but not well-known among many users. Why sudo was broken? I have no idea as I didn't dig into its execution state. Why the extension caused a problem? Same answer. Among several other reasons, a login loop can also be caused by improper permissions on /tmp directory or on .Xauthority.

The post-installation script updates the mirrorlist and packages as well, now that could have induced something idk.
