---
title: Wifi isn't working
subtitle: ''
date: '2020-12-02'
excerpt: >-
  Wifi issues are very common for Linux Systems. Though over years, this has
  been improved and Linux now supports most of the drivers, that either comes
  patched in with the System or you've to explicitly download the respective
  drivers.
template: post
thumb_image: images/amazing-amaranth.jpg
---
Wifi issues are very common for Linux Systems. Though over years, this has improved and Linux now supports most of the drivers, that either come patched in with the System or you've to explicitly download the respective drivers.

This article is focused on the aspect where Linux would already identify your Wifi but the connection establishment gives an error. We are going to follow a simple procedure.

Follow the steps below:

1.  Ctrl+Alt+T would fire-up your terminal. Type lspci to identify the controller present.
2.  If you are able to see the wireless controller present, then the System has identified it properly.
3.  We will now restart the NetworkManager using the command: systemctl restart NetworkManager
4.  Next, type nmtui, and use your arrow keys to select the options.
5.  We are interested in the option that says : Activate a connection.
6.  Once you hit enter, you should be able to see the listed Wifi connections. You can select the appropriate option and enter your password to establish the connection.

**Note**:

Right-click on the Network-icon in the taskbar will also open up the Network-Connection-Manager for you. However, NMTUI is preferable, as it identifies the connection immediately. This will work for LXQt as well as for Gnome. However, on Gnome, wi-fi connection would be listed in the system-tray.
