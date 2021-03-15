---
title: Trouble with Face-Recognition?
date: '2021-03-15'
excerpt: >-
  Is you login screen not initiating the face-recognition? Read this blog post
  to know more!
template: post
thumb_image: images/face_detection@2x.png
---
The face-recognition app on Peux OS KDE is known as HOWDY. It uses the inbuilt IR emitters and camera. If you have any external camera attached to your system, it'd still work with it. Peux OS automates the configuration for you, so you don't have to worry about it unless you change your cam during the process or do some manual interference. Changing your cam would require you to restart the desktop session before continuing with the configuration.

Now coming to the part where it does not initiate during the login screen. The problem doesn't lie with Howdy, rather with SDDM and KDE's lock screen. 

To initiate it during login and while attempting to unlock the screen lock, follow the below procedure:

1.  At your login screen, when the password field automatically adjusts for you to type your password, instead of typing it, press enter. This will fail the attempt in the background and will cause "HOWDY" to take over.

2.  When the screen lock appears, just move your mouse once and hit enter ( either immediately or wait for the password field to show up ). This will initiate "HOWDY" and it will unlock your screen.

The authentication speed usually depends upon your camera and the background light as well. Fast camera response would give you quick access. If due to some background light or camera issues your face is not properly identified, then HOWDY would wait for 10s before showing failed attempt.

One more important point to consider: you can implement system authentication using  HOWDY, to do that you will have to modify certain files in the /etc/pam.d/ folder. 

If you are using WiFi, the system will prompt you to enter the password right away after you log in to the desktop session, i.e, after sddm login. The reason is pretty simple, Peux OS will not configure HOWDY for system-level or so to say admin-level authentications. You can go to the path mentioned above to implement this feature. All you have to do is to add the below line at the beginning of the file that you want to modify:

##### auth sufficient pam_python.so /lib/security/howdy/pam.py



Few useful links:

[Howdy on Github](https://github.com/boltgolt/howdy)

[Archwiki reference](https://wiki.archlinux.org/index.php/Howdy)

######

###### photo credit: firebase
