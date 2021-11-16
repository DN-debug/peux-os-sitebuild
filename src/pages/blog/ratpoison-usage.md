---
title: How to use Peux OS Ratpoison/Sdorfehs?
date: '2021-11-16'
excerpt: >-
  This post will actually be more focused on Ratpoison. Sdorfehs, as a successor
  to Ratpoison, uses the same concept. Read to know more.
template: post
thumb_image: images/scrot_ratpoison-2021-10-22.png
---
Ratpoison is often considered as the 'King of WMs', modeled after GNU screen. If you would like to use a window manager which is keyboard-centric and you wouldn't have to rely on the mouse, then Ratpoison is the right choice. It has no fancy decorations and its beyond minimalist approach is its greatest strength.

The way to use Ratpoison is very simple, it uses EMACS notations for keyboard controls. The default modifier usually is 'C-t', however in case of Peux OS Ratpoison, it is 'Super_L'.  Once you press 'Super_L', wait for the cursor to change its shape like a box, which hints that you can now use the sequence key to perform the tasks specified in your Ratpoison's configuration, located in your home directory \[ ~/.ratpoisonrc ].

For example, to list the available keybindings, use 'Super_L', wait for the pointer to change to a box, then press '?'. You will get to see the list of available keybindings.

The keybinds that you'd specify using 'definekey' in your ~/.ratpoisonrc file, would not appear in the keybinding listings. To understand this, you'd need to understand the term 'keymap'.

When you press the modifier ( also known as escape-key ), you are accessing the 'root' keymap where all the commands are reserved by default. The 'Super_L ?' help list shows you the 'root' keymap entries.

However, there is another keymap entry, the top level keymap known as 'top'. When you'd use 'definekey' and attach the bindings to the 'top' keymap, it can be used without using the modifier/escape-key. I usually create aliases first, which makes it easy for me to call the command by the name defined in alias.

An example would be :

1.  create an alias for reboot

        alias reb exec systemctl reboot

2\. use the alias with keybinding

       definekey top C-M-r reb

It basically tells Ratpoison to reboot the system whenever  'Ctrl+Alt+r'  is pressed.

They way to progress through the Ratpoison environment is very simple once you get to know your keys, it is very productive and minimal. Once you get the hang of it, you'd most likely going to use it for a long long time.

Note: Sdorfehs is a successor of Ratpoison and is very handy for those who prefers to have a status bar. Sdorfehs is compatible with Ratpoison's configuration and all of the concepts of Ratpoison would be applicable to Sdorfehs as well.

For more details on Ratpoison: [check this doc](https://www.mankier.com/1/ratpoison#Synopsis)

For more details on Sdorfehs: [check this doc](https://github.com/jcs/sdorfehs)

Thanks for reading!
