---
title: How to use Peux OS Ratpoison?
date: '2021-11-16'
excerpt: lorem-ipsum
template: post
---
Ratpoison is often considered as the 'King of WMs', modeled after GNU screen. If you would like to use a window manager which is keyboard-centric and you wouldn't have to rely on the mouse, then Ratpoison is the right choice. It has no fancy decorations and its beyond minimalist approach is its greatest strength.

The way to use Ratpoison is very simple, it uses EMACS notations for keyboard controls. The default modifier usually is 'C-t', however in case of Peux OS Ratpoison, it is 'Super_L'.  Once you press 'Super_L', wait for the cursor to change its shape like a box, which hints that you can now use the sequence key to perform the tasks specified in your Ratpoison's configuration, located in your home directory \[ ~/.ratpoisonrc ].

For example, to list the available keybindings, use 'Super_L', wait for the pointer to change to a box, then press '?'. You will get to see the list of available keybindings.

The keybinds that you'd specify using 'definekey' in your ~/.ratpoisonrc file, would not appear in the keybinding listings. To understand this, you'd need to understand the term 'KEY MAP'. 

When you press the modifier ( also known as escape-key ), you are accessing the 'root' keymap where all the commands are reserved by default. The 'Super_L ?' help list shows you the 'root' keymap entries. 

However, there is another keymap entry, the top level keymap known as 'top'. When you'd use 'definekey' and attach the bindings to the 'top' keymap, it can be used without using the modifier/escape-key.

An example would be :

\#create an alias to reboot

alias reb exec systemctl reboot



\#use the alias with keybinding

definekey top C-M-r reb



