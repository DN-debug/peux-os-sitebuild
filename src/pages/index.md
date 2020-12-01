---
title: Home
hide_title: true
sections:
  - section_id: home
    type: section_hero
    title: 'PEUX OS -| [ POS ]'
    content: |+
      | Beautiful, lightweight and minimal Archlinux-distro

    actions:
      - label: Let's talk
        url: /contact
        style: button
  - section_id: features
    type: section_grid
    title: Features
    subtitle: ''
    col_number: three
    is_numbered: false
    grid_items:
      - title: Customized Environment
        content: >+
          POS uses customized lightweight XFCE as its session-manager. It
          doesn't implement XFCE panel, rather Polybar and Tint2 as its default
          panel. The resulting product is a beautiful GUI.

      - title: Beautiful yet Secure
        content: >+
          POS doesn't only look good. We tied it with apps that will help you
          secure your data and privacy.


          OH! btw "FISH" is the default shell.

      - title: Apps & Packages
        content: >+
          PACMAN is the default cli package manager along with yay and pamac as
          alternatives. For GUI, you may also use Pamac-Manager, along with
          Flatpak and AUR support enabled in its settings.

  - title: Versions
    section_id: versions
    subtitle: Peux OS comes with two different versions
    content: >+
      **POS - Standard Version** comes with two different tags. LR is for larger
      resolutions, such as 1920x1080 SR is for standard resolutions, such as
      1366x720


      The reason behind this is that Polybar doesn't have the capability to
      auto-resize the fonts. Hence on large scale resolutions, the fonts appears
      to be very small.


      **Teletypewriter** ( TTY acronym ) is the vanilla-arch with net-installer
      provided. We know that there are other vanilla-arch installers available.
      It's not an attempt to reinvent the wheel, rather providing mutiple paths
      towards the same approach.


      End-users would be able to configure it as per their choice.

    actions:
      - label: lorem-ipsum
        url: lorem-ipsum
        style: link
        icon_class: lorem-ipsum
        new_window: false
        type: action
      - label: lorem-ipsum
        url: lorem-ipsum
        style: link
        icon_class: lorem-ipsum
        new_window: false
        type: action
    type: section_content
    image: images/4120254.jpg
  - section_id: latest-posts
    type: section_posts
    title: Latest from the Blog
    subtitle: An optional subtitle of the section
    posts_number: 3
    col_number: three
    actions:
      - label: View Blog
        url: blog
        style: button
template: advanced
---
