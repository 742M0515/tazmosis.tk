---
title: restore windows backups
pubDate: 04/09/2024 16:20
author: "tazmosis"
tags:
  - windows
  - data
  - recovery
  - restore
imgUrl: "../../assets/astro.jpeg"
description: workaround for restoring backups of deceased windows systems.
layout: "../../layouts/BlogPost.astro"
---

I found the following suggestion posted elsewhere by "TECHCANDY". It solved my problem.

1. Create a new Folder in the root of your USB drive Call it Back up or whatever you like.
   `D:\Backup`
2. Copy your MediaID.bin into the Backup folder `D:\Backup\MediaID.bin`
3. Create a second folder inside the first with the name of your computer. `D:\Backup\HomeComputer`
4. Copy all your backup sets into the second folder `D:\Backup\HomeComputer\Backup Set 2009-10-11 040019`

Your full backup tree should now look like this. `D:\Backup\HomeComputer\Backup Set 2009-10-11 040019\Backup Files 2009-10-11 040019`

Now you should be able to use the advanced restore option.

1. Open Backup and Restore Center by clicking the Start button, clicking Control Panel, clicking System and Maintenance, and then clicking Backup and Restore Center.
2. Click Advanced restore. If you are prompted for an administrator password or confirmation, type the password or provide confirmation.
3. Click Files from a backup made on a different computer, and then follow the steps.
4. A new window will ask you to select the source drive/network share where the backup is located.
5. Select the first option and select your partition/removable media where the backup is located and click Next .
6. After searching through the selected drive, a list of backups present on your drive will be presented to you. Select the most relevant one and click Next.
7. Here you would be asked to select Files/Folders that you want to be restored. If you want to perform complete restore, select “Restore everything in this backup” and click Next.
8. Next you would be asked to choose the destination drive/folder where you want to restore your backup. Select one and click continue.
