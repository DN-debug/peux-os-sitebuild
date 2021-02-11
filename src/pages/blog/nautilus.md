---
title: Gnome-Files on XFCE? Huh!
subtitle: What sort of mix is this?
date: '2021-02-11'
excerpt: lorem-ipsum
template: post
---
#### Gnome-FIles on XFCE? What type of madness is this?

I know right. 



**Then why? Isn't it the worst file-manager?**

Well, Nautilus ( I am going to refer Gnome-Files as Nautilus in this article ) is nowhere near worse. Let me explain. 

Nautilus uses something called "metatracker" ( now tracker for file-indexing ), which uses metadata to locate files throughout the system. You can add "tags" as well to the files, this would free you from organizing your folder list. 

People may say that strigi,recoll,baloo etc also use metadata. Well, I am not denying it. What they can't do is crawling through unorganized lists in a proper way. Nautilus' search indexing is fastest in the list of GUI File-Managers. 

**Need some more explanations? **

Nautilus uses something called GIO (gnome-input/output) to process the requests. Now, the speciality in this is, it uses single API calls for both remote and local files. Means no back-to-back calls to slow the system down. This not only increases the robustness of FTP connections using Nautilus, but SFTP/WebDAVE/Samba and etc., would be equally robust. 

In worst-case scenario, tracking the file would hardly take 5-7 MB of RAM, hence no pressure on system. 

While, I do believe that every piece of software has its pros-and-cons and the same goes for Nautilus. However, I don't support the idea of completely bashing a piece of software. The reason being, there's a lot of efforts in every piece of software that's out there, and community can only grow and attract more people when we'll stop being harsh towards each other.

Don't like it no problem, generously disagree and decline.

Peux OS does come with Thunar as well, no restrictions, it has good features too.  You can replace both thunar and nautilus with something else, after-all it's Linux and we have plenty of file-managers to choose from unlike WIndows ;)



**Side-Note**: Thunar uses "GVFS" which is a gnome-component to manage remote-fs/trash among few other things.





