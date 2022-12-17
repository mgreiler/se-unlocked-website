---
title: "No mocks allowed: A testing discussion with Kent C. Dodds"
date: "2020-10-27T09:34:21+00:00"
status: publish
permalink: /no-mocks-allowed
author: michaela
excerpt: "Kent C. Dodds, creator of the widely used open-source testing-library, explains why using mocks during testing is dangerous. "
type: post
id: 1395
thumbnail_alt: "Picture of podcast guest Kent C. Dodds"
thumbnail: ../uploads/2020/08/Kent.jpg
category:
  - "Open Source"
  - Testing
tag: []
post_format: []
_yoast_wpseo_primary_category:
  - "20"
audio: https://cdn.simplecast.com/audio/aaca909a-e34f-49ae-a86f-f59e4fa807f0/episodes/af0c1508-d256-42cf-97a9-998234ae1186/audio/74614447-0817-41c0-a97f-02391f63ea48/default_tc.mp3
secondline_themes_disable_img:
  - "on"
secondline_themes_header_image_id:
  - "1234"
post_header_image: ../uploads/2020/08/Kent-Doods-Bg.jpg
---

<div class="episode-about">
Kent C. Dodds, creator of the widely used open-source testing-library, explains why using mocks during testing is dangerous.
<br/> <br/>We also talk about:
<ul>
<li> Why you should not mock your software system during testing,</li>
<li> how “testing library” helps create more meaningful and maintainable tests,</li>
<li> if and how manual testing is still needed to increase your confidence in the software system.</li>
</ul>
</div>
<div class=" episode-links">
<b>Episode Resources:</b><br/>
<a href="https://www.software-engineering-unlocked.com/double-down-integration-tests-kent-dodds/">The previous episode with Kent</a><br/>
<a href="https://twitter.com/kentcdodds">Kent C. Dodds’ Twitter</a><br/>
<a href="https://testingjavascript.com/">Testing Javascript</a><br/>
<a href="https://testing-library.com/">Testing Library</a><br/>
<a href="https://www.deque.com/axe/">Accessibility Tool: Axe</a><br/>
<a href="https://applitools.com/">Applitools: Functional and Visual Testing</a><br/>
<a href="https://www.cypress.io/">Cypress testing tool</a><br/>
</div>

<div class="row pt-2 align-items-center">
<div class="col-4 guest-picture">
<img src="../uploads/2020/08/Kent.jpg" alt="Picture of Kent C. Dodds"/>
</div>
<div class="col-8 guest-about">
<b>About Kent C. Dodds</b><br/>
Kent C. Dodds, is a creator of the widely used open-source testing-library. Before starting his entrepreneurial journey, Kent has been working for PayPal. He is a major open source contributor and also the creator and maintainer of the widely used open-source testing-library.
Code that he writes is used by millions of people around the world, and he also teaches thousands of engineers how to test their JavaScript systems, and how to work with React.
</div>
</div>


<div class="sponsorship">Become <a href="https://www.software-engineering-unlocked.com/sponsorship/">a sponsor of the show</a> and reach thousands of quality driven software Engineers ❤.</div>
<br/>

<div>
  <h2>Other episodes you'll enjoy</h2>
    <div class="row-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0"><a href="https://www.software-engineering-unlocked.com/intern-ceo-agile-testing/">From intern to CEO with agile testing expert Alex Schladebeck</a></h3>
  <audio controls preload="none">
                <source src="https://cdn.simplecast.com/audio/aaca909a-e34f-49ae-a86f-f59e4fa807f0/episodes/79768797-91b9-4d4b-8088-35b4c3f705a5/audio/1f5fb905-dcfb-45cc-a057-d9635532cbee/default_tc.mp3" />
              </audio>
          </div>
        </div>
      </div>
    <div class="row-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0"><a href="https://www.software-engineering-unlocked.com/tests-find-bugs/">How to write tests that find bugs</a></h3>
  <audio controls preload="none">
                <source src="https://cdn.simplecast.com/audio/aaca909a-e34f-49ae-a86f-f59e4fa807f0/episodes/53528752-3178-4d13-9b17-8285eeab471c/audio/f768b14a-56e4-4d9a-8ed2-d27b3b1342f5/default_tc.mp3" />
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

## Read the whole episode "No mocks allowed: A testing discussion with Kent C. Dodds" (Transcript)

_\[This transcripts is the result of a community effort. You can help make it better, and improve the podcast’s accessibility via_ [Github*.*](https://github.com/mgreiler/se-unlocked/tree/master/Transcripts) _I’m happy to lend a hand to help you get started with pull requests, and open source work._  
_Special thanks to_ [_Tia Nadya_](https://github.com/tiana30) _for helping improve this transcript.\]_

