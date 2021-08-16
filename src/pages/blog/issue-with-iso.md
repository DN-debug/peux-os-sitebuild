---
title: ISO - Recent Issues
date: '2021-08-16'
template: post
thumb_image: images/YRzXPk.jpeg
excerpt: Explaination on the Gnome login-loop issue
---
I released XFCE, LXQt and GNOME ISOs on 1st of August. After a week later I started receiving messages that Gnome ISO never worked. That was quite weird as I did run full tests on different machines before releasing it. So what was the issue: users reported that they were facing a login-loop. Now there are different aspects of viewing this issue. Let me first explain those areas.

**Issue:**

Upon selecting autologin, the user was not able to run privileged commands within the user-space. If the user was not selecting autologin, then the user was not able to login at all.

Here's what I did :--

1.  Firstly, I installed it on a real hardware again. Two scenarios were involved: a) with auto-login b) without auto-login

2.  With Auto-login:

    1.  I needed to fix the issue related to user privilege first. So, after a fresh login, if the user attempts to run privileged commands, the first three attempts would definitely fail. You'd then have to wait for 10 min before attempting it again, which then would work but only until the next login-session.

    2.  What options can we have if "sudo" doesn't work? I had two things: a) "su" and b) pkexec \[ few systems would have gksudo as well ]

    3.  Well, to confirm that password is working but the package is faulty, I used "su" privileges, which is technically a different user-space. I was able to get into "root" mode. I first edited the /etc/security/faillock.conf file to reduce the account lock duration and then I proceeded with system lock. Apparently, I got the same result, i.e 3 failed attempts were made, wait for 1 min \[ due to the modified lock file as stated above ] .

    4.  Once unlocked, I immediately checked the journal logs and figured out that the pam authentication was receiving empty password entries even before user could type it. It was happening every time after the first logon session.

    5.  It was clear as the sky that sudo was broken. I removed sudo and installed doas. configured it and the issue was gone.

3.  Without Auto-login:

    1.  Next task at hand was to resolve the xorg login loop issue as Wayland was working for me unlike others . Well, thanks to my past experiences. I logged into the TTY session and wiped out the shell-extensions that were present in $HOME/.local/share/gnome-shell/. Performed a reboot and was able to fix it.

These issues are common, has occurred on Ubuntu as well but not well-known amongst many users. Why sudo was broken? I have no idea as I didn't dig into its execution state. Why the extension caused a problem? Same answer. Among several other reasons, a login loop can also be caused by the improper permissions on /tmp directory or on .Xauthority.

The post-installation script updates the mirrorlist and packages as well, now that might have induced something idk.

**Conclusion:**

It was a broken weather extension and a broken sudo package that has caused all of this.

**Tips:**

Doas is your friend. It is lightweight and less bloated when compared to sudo. However, it sometimes can act weird too, i.e you may receive this : ***"doas: syntax error at line "***.  This is not a big issue though, use the below tricks to solve it:

1.  "su" to get root privileges.

2.  nano /etc/doas.conf. Now here are three things that we could do:

    1.  delete the file and recreate it using "permit :wheel" as its content.

    2.  or, add extra space between "permit" and ":wheel", save it, and then remove the space that you added, save it and test it.

    3.  or , modify the content as : "permit keepenv :wheel"

That should solve it.

Yay comes pre-installed into Peux OS but it uses "sudo" during its execution. Run the following command to force it to use "doas":

***yay --sudo doas --sudoflags -- --save***

\*\*
