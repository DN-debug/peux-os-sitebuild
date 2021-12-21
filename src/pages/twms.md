---
title: Peux OS - WM Editions
hide_title: false
excerpt: tiling-window-managers
sections:
  - section_id: twms
    col_number: two
    is_numbered: false
    grid_items:
      - content: >
          i3wm is considered to be the most popular in the TWM family. Peux OS
          i3wm is actually using i3-gaps, which is a fork of the original i3wm
          with gapping between the tiled windows.
        actions:
          - label: SourceForge
            style: button
            new_window: true
            type: action
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/i3wm/'
          - label: FOSSTorrents
            url: 'https://fosstorrents.com/distributions/peux-os/'
            style: button
            new_window: true
            type: action
          - label: OSDN
            url: >-
              https://osdn.net/projects/peux-os/storage/TWM/i3/peux_os_i3wm-stable_21.05-x86_64.iso
            style: button
            icon_class: lorem-ipsum
            new_window: true
            type: action
        type: grid_item
        title: i3WM
        image: images/beige-lime.png
      - title: BSPWM
        content: >
          Bspwm is another amazing tiling window manager that represents windows
          as the leaves of a full binary tree. Peux OS Bspwm comes with similar
          rich features that one would find on Peux i3wm flavor.
        actions:
          - label: SourceForge
            style: button
            new_window: true
            type: action
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/bspwm/'
          - label: FOSSTorrents
            url: 'https://fosstorrents.com/distributions/peux-os/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
            type: action
          - label: OSDN
            style: button
            icon_class: lorem-ipsum
            new_window: true
            type: action
            url: >-
              https://osdn.net/projects/peux-os/storage/TWM/bspwm/peux_os_bspwm-stable_21.05-x86_64.iso
        type: grid_item
        image: images/interesting-parsley.png
      - title: XMONAD
        content: >
          Xmonad is not just another tiling window manager, it stands out
          because of its extensibility. It is written and configured in Haskell
          which means you can extend the libraries to adjust your requirements. 
        actions:
          - label: SourceForge
            style: button
            new_window: true
            type: action
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/xmonad/'
          - label: FOSSTorrents
            style: button
            new_window: true
            type: action
            url: 'https://fosstorrents.com/distributions/peux-os/'
          - label: OSDN
            style: button
            icon_class: lorem-ipsum
            new_window: true
            type: action
            url: >-
              https://osdn.net/projects/peux-os/storage/TWM/xmonad/peux_os_xmonad-stable_21.05-x86_64.iso
        type: grid_item
        image: images/xm.png
      - content: >
          Often called " *the tiling window manager for adventurers* ", is
          written in Rust and aims to be stable and performant. It follows the
          Unix philosophy very well and could easily become the TWM of choice
          for many people.
        actions:
          - label: SourceForge
            style: button
            new_window: true
            type: action
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/leftwm/'
          - label: FOSSTorrents
            style: button
            new_window: true
            type: action
            url: 'https://fosstorrents.com/distributions/peux-os/'
          - style: button
            new_window: true
            type: action
            label: OSDN
            url: >-
              https://osdn.net/projects/peux-os/storage/TWM/leftwm/peux_os_leftwm-stable_21.05-x86_64.iso
        type: grid_item
        title: LEFTWM
        image: images/lftwm.png
      - title: RATPOISON
        content: >
          Ratpoison is a very unusual window manager, that has a tag-line of
          "Say good-bye to the rodent". Often considered as the 'King of WMs',
          is being around since year 2000. It is written in C and the
          keybindings follow a similar trend to that of Emacs, and is inspired
          by the GNU Screen terminal multiplexer.
        actions:
          - label: SourceForge
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/ratpoison/'
            style: button
            new_window: true
          - label: FOSSTorrents
            url: 'https://fosstorrents.com/distributions/peux-os/'
            style: button
            new_window: true
          - label: OSDN
            url: 'https://osdn.net/projects/peux-os/storage/TWM/ratpoison'
            style: button
            icon_class: lorem-ipsum
            new_window: true
        image: images/scrot_ratpoison-2021-10-22.png
      - title: 'SDORFEHS [Starfish]'
        content: >
          Sdorfehs ( pronounced as 'Starfish' ), is a descendent of RatpoisonWM,
          created by Joshua Stein. I call it - Enhanced Successor of
          RatpoisonWM. It has all the goodies of Ratpoison, along with some
          enhancements, such as virtual-screens, a bar and window gaps. Those
          who prefer Ratpoison, would easily fall in love with Starfish.
        actions:
          - label: SourceForge
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/sdorfehs/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
          - label: FOSSTorrents
            url: 'https://fosstorrents.com/distributions/peux-os/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
          - label: OSDN
            url: 'https://osdn.net/projects/peux-os/storage/TWM/sdorfehs'
            style: button
            icon_class: lorem-ipsum
            new_window: true
        image: images/scrot_sdorfehs-2021-10-20_000.png
      - title: 'SWAY [BETA]'
        content: >
          Sway is a wayland compositor based on wlroots and comes with SwayWM.
          Sway is a drop-in replacement for the i3 window manager for X11.
          i3WM's configuration is compatible with Sway.
        actions:
          - label: SourceForge
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/swaywm/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
          - label: OSDN
            url: 'https://osdn.net/projects/peux-os/storage/TWM/sway/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
        image: images/swayPost.png
      - title: 'WAYFIRE [BETA]'
        actions:
          - label: SourceForge
            url: 'https://sourceforge.net/projects/peux-os/files/WAYFIRE/'
            style: button
            new_window: true
          - label: OSDN
            url: 'https://osdn.net/projects/peux-os/storage/WAYFIRE/'
            style: button
            new_window: true
        content: >
          Wayfire is another Wayland Compositor that is based on wlroots and
          comes with WayfireWM. The 3D floating compositor has some great
          Unity-like effects, it is both lightweight and customizable. 
        image: images/wayfire_easyL.png
      - title: 'RIVER [BETA]'
        content: >
          River is a dynamic tiling Wayland compositor, written 90% in Zig. It
          is simple, supports scriptable configuration and is currently one of
          the fastest growing tiling Wayland compositor based on wlroots.
        actions:
          - label: SourceForge
            url: 'https://sourceforge.net/projects/peux-os/files/TWM/river/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
          - label: OSDN
            url: 'https://osdn.net/projects/peux-os/storage/TWM/river/'
            style: button
            icon_class: lorem-ipsum
            new_window: true
        image: images/postRiver.png
    type: section_grid
template: advanced
---
