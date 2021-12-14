---
title: "Making Git faster with Derrick Stolee"
date: "2019-11-04T21:00:58+00:00"
status: publish
permalink: /episode-6-derrick-stolee
author: michaela
excerpt: "Derrick Stolee, a principal software engineer at Microsoft, tells us how to make the Git version control system lightning fast."
type: post
id: 62
thumbnail: ../uploads/2019/11/Derrick.jpg
category: ["Company Culture", "Open Source"]
tag: []
post_format: []
_yoast_wpseo_content_score:
  - "60"
audio: http://dts.podtrac.com/redirect.mp3/cdn.simplecast.com/audio/aaca90/aaca909a-e34f-49ae-a86f-f59e4fa807f0/24a6aef5-fc1a-48a1-9bd9-f6d59ae1ac86/derrick-stolee-ready_tc.mp3
post_header_image: ../uploads/2019/11/derrick_bg.jpg
---

In this episode, I talk to Derrick Stolee, a principal software engineer at Microsoft who makes sure the Git version control system is lightning fast.

**We talk about:**

- his career switch from being a professor to become a software engineer at Microsoft,
- what it means to contribute to open-source during your worktime for Microsoft,
- how he improves the speed and performance of such a widely-used and mature software system as Git,
- how to do code reviews via mailing lists,
- and what it takes to become an open-source maintainer.

![](../uploads/2019/11/Derrick.jpg)

### Subscribe on [iTunes](https://podcasts.apple.com/at/podcast/software-engineering-unlocked/id1477527378?l=en), [Spotify](https://open.spotify.com/show/2wz1OneBIDXpbBYeuyIsJL?si=2I0R0HuaTLK6RT0f7lDIFg), [Google](https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg%3D%3D), [Deezer](https://www.deezer.com/show/465682), or via [RSS](https://www.software-engineering-unlocked.com/subscribe/).

<iframe frameborder="no" height="200px" scrolling="no" seamless="" src="https://player.simplecast.com/24a6aef5-fc1a-48a1-9bd9-f6d59ae1ac86?dark=false" width="100%"></iframe>

Links:

- [Derrick’s Twitter account](https://twitter.com/stolee)
- [Website of the Git project](https://git-scm.com/community)
- [Website of GitGitGadget](https://gitgitgadget.github.io/)
- Linus [appoints Junio Hamano as the Git maintainer](https://lwn.net/Articles/145123/)
- Brian Harry’s [post about the largest Git repository](https://devblogs.microsoft.com/bharry/the-largest-git-repo-on-the-planet/)

**Show notes:**

First, we talk about how it comes that Derrick, as a former professor, is now working for Microsoft as a principal software engineer. (0:10)

Derrick explains to me that even though he wasn’t a “sophisticated” programmer when he applied for the Microsoft role, he has decent experience building tools to solve his own problems. (2:40)

During the interview process, Derrick stayed humble, curious and open-minded, he explained. (4:19)

When I wondered how his work as a former professor for theoretical mathematicians shaped his mindset as an engineer, he explains how he breaks down problems, similar to solving a mathematical theorem. (5:55)

Even though Derrick was a professor when he applied, he went through quite a typical interview process (for that time), including live coding, whiteboarding, and some “higher-order” questions, such as what has your biggest success been? (7:33)

I ask what was the first project Derrick was asked to contribute to when joining Microsoft. And he explains that his team was/is responsible to help the Windows team be able to use Git. And for that, Git must be made faster. (10:29)

Well, if he makes Git faster to work with Windows, I wonder if there are other projects out there that are large enough to also benefit from, for example, the Virtual File System for Git. Or is this improvement really specific to Windows? (13:37)

Derrick explains to me how his work for Microsoft and his contributions to the open-source system Git interconnect and also how they differ. (16:27)

Derrick seems to be in a very interesting position. Because, he works for Microsoft, but not solely on projects that Microsoft owns. In contrast, he works on Git. An independent open-source system, Microsoft has no authority over. This means that Derrick always has to look out for win-win-win situations for every enhancement or change he wants to introduce to Git. Also, he has to show why a change to Git is beneficial for both, for Microsoft and for the open-source community. (19:13)

Well, Derricks’s Twitter profile says that he makes Git faster, and after talking to him, I now understand that he actually works on algorithmic changes to the underlying Git system to make that happen. So, I ask him what other changes he introduces when he sets out to speed up Git. (21:28)

Another thing that I want to know is whether such a mature and widely-used system can even be still improved. Derrick assures me that there is still plenty to work on. (23:49)

But, he also explains that changing such a system must be taken one step at a time. Maybe things are interconnected, and many side-effects must be considered. They are working collectively on a new version that will increase the performance substantially. But, as this changes fundamentally how Git works, things need time to cook. (25:44)

Because all the problems Derrick explains to me sound so exciting, I wonder how outsiders, like you and me, could contribute to this open-source system. (26:49)

Derrick explains that quite a few people contribute to Git, and fills me in who is contributing to this open-source project. (28:40)

Now, we start talking about software development processes. Derrick already mentioned code reviews before, but now he explains how code is reviewed through the mailing list. (29:50)

After that, Derrick explains how they mainly use end-to-end tests when testing Git. (33:03)

I ask Derrick if there are differences in the way he develops software at Microsoft and the way he develops software for Git. And yes, surely there are differences. The biggest one is that if you work on something internal, it’s already decided that the feature is relevant and anticipated. So, you just have to work on making this feature the best it can be. In open-source it’s different. Here, everything starts with the need to justify even the smallest change to the community. (35:50)

Derrick explains that there is no roadmap for the development of Git, and that at any given moment, the community and the maintainer of Git decide whether or not a new feature or a bug fix is implemented in Git. (37:55)

Even though the mailing list is actually THE place to be when you want to contribute to this project, there exist smaller sub-communities around Git that communicate also off the mailing list. (40:09)

But, the main decision power lies in the mailing list and the community there.(42:16)

Well, Derrick fills me in how that works at Git. He also explains that no single patch is ever merged without the maintainer (or in seldom situations like vacation a representative of the maintainer) having reviewed the patch. The merge is also always done by the maintainer. (44:34)

I’m curious about how to become an open-source maintainer, and how much authority such a maintainer has. Is an open-source maintainer elected, or selected? How much say does a maintainer have? (46:06)

Well, it seems a maintainer is like a founder of a company or the captain on a pirate ship. Quite some authority, and no election process. The best way to become a maintainer, therefore, Derrick says, is to start your own open-source project including a community. (48:09)

Well, I learned a lot, so I thank Derrick for his time, and he lets me know that if people want to start contributing to Git, they can send him a message. Because, starting to contribute to Git can be difficult and daunting, so he is there to help ease the start for new ones. (49:37)
