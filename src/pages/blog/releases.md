---
date: '2021-03-05'
excerpt: No repositories! How is the end-user going to apply Peux specific updates?
template: post
title: Releases - Explained!
thumb_image: images/update.jpg
---
In this post, let's take a deep dive into how the release would work and how the existing users are going to apply the changes.

It is true that Peux OS doesn't have its own repository. A repository is not hard to maintain, however as I mentioned before: " The release cycle would teach people to make changes to their underlying system".

These changes could be:

1.  System-Level Changes

2.  User Interface Changes

Now, this is definitely not for everyone. Most people would not love it.

That's why I will tell you about the disadvantages first: " You will have to move your muscles to perform the changes and it can be time-consuming".  -\_-

Then, what's the advantage? Your fingers' muscle flexibility would increase.

Poor jokes aside, here comes the list:

1.  Since it's a rolling release, it's on you to decide whether you want to amend the changes to your current system or not! No hard-and-fast rules here.

2.  You will get to select the changes. For example, install a new polybar layout or install grub changes or blah blah blah! It won't be similar to those custom system upgrades where you run a command and whoops, on the very next reboot, things break because of a single bug in the code, only to report that to the developer team and wait for the bug-fix next update or release cycle.

3.  You will get to review the code or learn from it, make changes as per your liking, and then amend it. It's similar to applying "dotfiles", where sometimes you get a bash script. Recommendation: review it before you run it.

4.  There would be a single repository on Github from where everyone can download the release code - version-by-version.

Oh btw! You won't be able to blame the OS Developer anymore ;)

Of course, new ISOs would be out every time a release is made public for new end-users and for those who want to install the wholesome system again. You would get to experience Peux OS - the arch-way. You would not only learn to tweak the system but also open up to new concepts of implementing things. Module-type changes would be available for implementation anytime. Instead of reviewing the whole bunch of code for one specific bug in an occurrence of a program, you would self-review the modular codes. Of course, to review a whole bunch of code, you would analyze it, debug it with breakpoints, but the shorter it is, the faster and quicker it becomes to resolve issues. Pretty logical, innit?

I know that if things would go wrong, you can revert the changes easily using the snapshots present in the grub-menu. However, this is just an added layer of prevention ( by not breaking your system with buggy updates ) to your usual BTRFS-SNAPSHOTS along with a slight learning curve involved ( for me and for the end-users ) as well.

If you are someone who is expecting everyone that uses Linux to have a good knowledge of the Linux systems, or so to say NIX system ( for a wide-coverage ), then I have no comments for you. During my time at big corporations, I learned one simple thing: "If you are learning something, then subdue your thoughts on that topic during that time, even if you know something about it. Empty your mind first or you will only get to keep the half-knowledge".

If you don't like something, suggest changes. I will do a poll and get the votes before implementing the changes. Be open, don't take it wrong if for some reason your part of the idea is not implemented.

Enjoy and don't forget to smile! ;)
