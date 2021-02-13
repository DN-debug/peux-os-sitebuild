---
title: Autologin Issue
subtitle: ''
date: '2021-01-24'
excerpt: Calamares fails to setup the autologin for newly created users
template: post
thumb_image: images/sddm.PNG
---
Autologin is a feature that is not recommended from a security perspective. However, this feature can still be enabled in the Display Manager settings. Calamares handles this setting by changing the display manager's configuration file in the final stage of installation. However, recent versions of calamares is failing to do so and there always have been such problems with Calamares. You can check the "issues" in the Calamares' Github site.

I'd still not recommend enabling this feature unless you are testing the distro quite often. Peux OS XFCE and LXQt use SDDM because of its flexibility and continuous development as compared to LightDM and it relies less on dependencies as compared to GDM (which is really a good display-manager).  There's always a good side and bad side to everything, but this is not the place to discuss it.

Ok, so to enable autologin for SDDM, modify "/etc/sddm.conf" with the below lines:

*   User = username

*   Relogin =   // enable this only if you want to autologin into sessions when it exits

With GDM, I am not seeing any issues. If it does not work, then you might have to modify "/etc/gdm/custom.conf" with the below lines:

*   AutomaticLogin = username

*   AutomaticLoginEnable= true / false

That's it. Enjoy!
