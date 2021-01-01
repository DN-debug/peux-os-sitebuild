---
title: Home
hide_title: true
sections:
  - section_id: home
    type: section_hero
    title: 'PEUX OS -| [ POS ]'
    content: |+
      | Beautiful, minimal and highly customized Archlinux-distro

    actions:
      - label: Download
        url: 'https://sourceforge.net/projects/peux-os/files/'
        style: button
        new_window: true
  - section_id: features
    type: section_grid
    title: Features
    subtitle: ''
    col_number: three
    is_numbered: false
    grid_items:
      - title: Customized Environment
        content: >+
          POS uses customized XFCE as its default-version. BTRFS is the default
          filesystem with autosnap enabled. It uses Polybar as its default
          panel. Aiming to have a minimal desktop and yet beautiful.

      - title: Beautiful yet Secure
        content: >+
          POS doesn't only look good. Its tied with apps that will help you
          secure your data and privacy. You can sandbox your applications, do
          anonymous surfing among many other things.

          OH! btw "FISH" is the default shell.

      - title: Apps & Packages
        content: >+
          PACMAN is the default cli package manager along with yay and pamac as
          alternatives. For GUI, use Pamac-Manager, with Flatpak and AUR support
          options in its settings.

  - title: Versions
    section_id: versions
    subtitle: ''
    content: >+
      **POS - XFCE** is the flagship and it comes with a highly customized XFCE
      environment. Polybar is the default panel.


      Important: Polybar doesn't have the capability to auto-resize the fonts as
      far as we've tested. Hence on large scale resolutions, the fonts may
      appear to be rather small.



      **POS - Gnome**  is not as highly configured as XFCE, however has the
      default Peux settings are kept intact.


      **Note: All the downloads are currently in BETA. The aim is to keep it
      minimal rather than lightweight.**


    actions:
      - label: XFCE
        url: 'https://sourceforge.net/projects/peux-os/files/XFCE/'
        style: button
        icon_class: SV
        new_window: true
        type: action
      - label: lorem-ipsum
        url: lorem-ipsum
        style: button
        icon_class: GNOME
        new_window: false
        type: action
    type: section_content
    image: images/slide2.png
  - section_id: mini-notes
    type: section_posts
    title: Highlights from Mini-Notes
    subtitle: ''
    posts_number: 2
    col_number: two
    actions:
      - label: View Mini-Notes
        url: blog
        style: button
        icon_class: blog
        new_window: false
template: advanced
---
