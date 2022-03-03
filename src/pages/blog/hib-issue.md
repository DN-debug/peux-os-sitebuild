---
title: Installer fails -- swap issue
date: '2022-03-03'
excerpt: lorem-ipsum
template: post
---
This has been a known issue for sometime and I didn't get time to address this properly. So what is the issue that I'm talking about?

Brief:

During the installation, when "swap with hibernate" option is selected, the installer fails to complete the installation, only a handful of such cases are known to me atm. 

I am currently not aware of the cause behind this, it could very well be a "Calamares" issue, or could be some "dependency" issue, as there's no configuration changes done yet hence can't call it a configuration issue either, but I am not sure at this point as I didn't test it.

Solution ( alternative ):

There are two alternatives to this problem, that too, if you really want to use hibernation:

1.  Use "swap to file" 

2.  Manual partition with swap enabled.

Hope that works.

Cheers!

