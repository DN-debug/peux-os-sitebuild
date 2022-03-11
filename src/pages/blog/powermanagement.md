---
title: How to enable power-management on WMs?
date: '2022-03-11'
template: post
excerpt: Learn how to enable lxqt-powermangement on WMs
thumb_image: images/power-management-icon.jpg
---
If you are running an operating system on a battery-based device, then power-management plays a big role in the long run. Window managers doesn't have the capabilty to manage power or monitor your device's battery on its own.

In the previous version of WMs, 'cbatticon' was present to monitor the device's battery, however I find 'lxqt-powermanagement' to be more handy because it doesn't only provides a batter-watcher but also provides idle-watcher and lid-watcher, which is very handy, especially in the case of laptops.

By default, none of this is active, which makes sense, since not every device is going to be a laptop or battery-based device. In order to run this, follow the below mentioned steps:

1.  Run "power-management" from app-launcher or the equivalent command "lxqt-config-powermanagement" from the terminal.

2.  Enable the functions that you'd like to have and then close the window.

3.  Add "lxqt-powermanagement" as a startup process to the configuration file of whatever WM that you are running. That's it.

4.  Reload the WM or restart the session for it to take effect.

It runs as a daemon and will send the relative desktop notifications based on the events that it receives from monitoring.
