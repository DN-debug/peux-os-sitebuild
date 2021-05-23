---
title: Peux Fetcher
hide_title: false
excerpt: tiling-window-managers
sections:
  - content: >
      Peux Fetcher serves the purpose of the Peux OS mantra, i.e stick with
      Archlinux as much as possible, which being the sole reason for not
      maintaining a repository. I did mention that we would be delivering the
      configurations via Github repositories. Peux Fetcher would allow you to,
      not only fetch the configurations but also to read the code on Github as
      it is all public. In the upcoming releases, it'd be pre-installed, those
      who are in the previous builds can download the package in any of the
      below formats \[ we have Debian format as well because few might want to
      fetch the configurations on Debian systems as well, and I see no harm in
      keeping an additional format. However, the configurations that require
      installation of components would not work on the Debian systems ].


      Note: This is the first version of Peux Fetcher, released as a beta to
      test the crowd and weirdness in the application. The package in itself is
      stable and ready to use. Even we have not discovered any weirdness in the
      application, but over time, only after extensive usage, we would be able
      to uncover the loopholes within the app.
    actions:
      - label: .appimage
        url: >-
          https://github.com/peux-os/peuxfetcher-executables/releases/download/v1.0.0/Peux.Fetcher-1.0.0.AppImage
        style: button
        new_window: true
        type: action
      - style: button
        new_window: true
        type: action
        label: .deb
        url: >-
          https://github.com/peux-os/peuxfetcher-executables/releases/download/v1.0.0/peuxfetcher_1.0.0_amd64.deb
      - label: .pkg.tar.zst
        style: button
        icon_class: lorem-ipsum
        new_window: true
        type: action
        url: >-
          https://github.com/peux-os/peuxfetcher-executables/releases/download/v1.0.0/peuxfetcher-1.0.0-1-x86_64.pkg.tar.zst
    type: section_content
    image: images/pf.png
template: advanced
---
