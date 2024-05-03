---
title: "How to write tests that find bugs"
date: "2022-01-18T08:31:58+00:00"
updated: "2023-01-04T09:36:15+00:00"
status: publish
permalink: /tests-find-bugs
author: michaela
excerpt: "Learn how to write tests that find bugs with Dr. Mauricio Aniche, who explains how to systematic software testing."
type: post
id: 121748
thumbnail: ../uploads/2022/01/Mauricio_Aniche.jpg
category:
  - Testing
tag: []
post_format: []
audio: "https://cdn.simplecast.com/audio/aaca909a-e34f-49ae-a86f-f59e4fa807f0/episodes/53528752-3178-4d13-9b17-8285eeab471c/audio/f768b14a-56e4-4d9a-8ed2-d27b3b1342f5/default_tc.mp3"
---

<div class="episode-about">
Dr. Mauricio Aniche explains how developers can write tests that find bugs.
<br/> 
<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/XXXXF7pJbRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/>We also talk about:
<ul>
<li> the difference between effective and not effective test cases,</li>
<li> how domain-based testing helps to write good test cases,</li>
<li> how you can use coverage reports to find missing test scenarios,</li>
<li> how to write testable code</li>
<li> and about the importance of maintainable test code.</li>
</ul>
</div>
<div class=" episode-links">
<b>Episode Resources:</b><br/>
 For a chance to win the “Effective Software Testing” book, <a href="https://twitter.com/se_unlocked/status/1483359270997573633?s=20">like and retweet today’s episode</a><br/>
<a href="https://www.effective-software-testing.com/">Effective Software Testing – The Book</a><br/>
<a href="https://www.effective-software-testing.com/can-we-get-fully-rid-of-flaky-tests">Flaky Tests blog post by Mauricio</a><br/>
<a href="https://effectivesoftwaretesting.substack.com/">Mauricio’s newsletter</a><br/>
<a href="https://www.michaelagreiler.com/wp-content/uploads/2019/02/The-Art-of-Testing-Less-without-Sacrificing-Quality.pdf">The art of testing less – How Microsoft copes with flaky tests</a><br/>
<a href="https://www.codiga.io/?utm_source=podcast&utm_medium=social&utm_campaign=se_unlocked">Test Codiga, your coding assistant, for free today</a><br/>
</div>

<div class="row pt-2 align-items-center">
<div class="col-4 guest-picture">
<img src="../uploads/2022/01/Mauricio_Aniche.jpg" alt="Picture of Mauricio Aniche"/>
</div>
<div class="col-8 guest-about">
<b>About Mauricio Aniche</b><br/>
Dr. Mauricio Aniche writes a book called “Effective Software Testing” which shows practical approaches to systematically test software.
</div>
</div>

<div class="sponsorship">
Today’s episode is sponsored by <a href="https://www.codiga.io/?utm_source=podcast&utm_medium=social&utm_campaign=se_unlocked"><u>Codiga</u></a>, a smart coding assistant and automated code review platform. <a href="https://www.codiga.io/?utm_source=podcast&utm_medium=social&utm_campaign=se_unlocked"><u>Try Codiga for FREE</u></a>
</div> 
<br/>

<div>
  <h2>Other episodes you'll enjoy</h2>
    <div class="row-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0"><a href="https://www.software-engineering-unlocked.com/no-mocks-allowed/">No mocks allowed: A testing discussion with Kent C. Dodds</a></h3>
  <audio controls preload="none">
                <source src="https://cdn.simplecast.com/audio/aaca909a-e34f-49ae-a86f-f59e4fa807f0/episodes/af0c1508-d256-42cf-97a9-998234ae1186/audio/74614447-0817-41c0-a97f-02391f63ea48/default_tc.mp3" />
              </audio>
          </div>
        </div>
      </div>
    <div class="row-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0"><a href="https://www.software-engineering-unlocked.com/double-down-integration-tests-kent-dodds/">Why integration tests are better than unit tests</a></h3>
  <audio controls preload="none">
                <source src="https://cdn.simplecast.com/audio/aaca90/aaca909a-e34f-49ae-a86f-f59e4fa807f0/4eafdc01-56ad-4284-bf8f-3bb6a307a936/kent-c-dodds-ready_tc.mp3" />
              </audio>
          </div>
        </div>
      </div>
    <div class="row-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0"><a href="https://www.software-engineering-unlocked.com/high-quality-code/">The Secret To High-Quality Code</a></h3>
  <audio controls preload="none">
                <source src="https://cdn.simplecast.com/audio/aaca909a-e34f-49ae-a86f-f59e4fa807f0/episodes/47f883a9-4633-4c1b-9e5f-c673f3b0b280/audio/5497ed3e-ecfd-4df1-ac15-28738a2a08fd/default_tc.mp3" />
              </audio>
          </div>
        </div>
      </div> 
</div>
<br/>

## Read the whole episode "How to write tests that find bugs" (Transcript)

_\[If you want, you can help make the transcript better, and improve the podcast’s accessibility via_ [Github](https://github.com/mgreiler/se-unlocked/tree/master/Transcripts)_[.](https://github.com/mgreiler/se-unlocked/tree/master/Transcripts) I’m happy to lend a hand to help you get started with pull requests, and open source work.\]_
