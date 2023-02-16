---
episode: "Episode 53 - Mauricio Aniche Systematic Software Testing"
permalink: /tests-find-bugs
status: publish
type: transcript
---

[00:00:00] **Michaela:** Hello, and welcome to the software engineering
unlocked podcast. I'm your host, Dr. Michaela, and today I have the pleasure to
welcome Dr. Mauricio Aniche to talk about systematic software testing.

But before I start, let me tell you about an amazing start-up that is sponsoring
today's episode: Codiga. Codiga is a code analysis platform that automates
the boring part of code reviews and lets you merge with confidence on GitHub,
GitLab and Bitbucket. I’ve worked with Codiga for around one year now, and I
love how it guides me in discovering and improving, well, the “not so nice
parts” of my codebase.

But there is more, Codiga also has a coding assistant
that helps you write better code faster. Find and share safe and reusable blocks
of code within your favorite IDE on-demand while you are coding.
Learn more at [codiga.io](https://www.codiga.io/?utm_source=podcast&utm_medium=social&utm_campaign=se_unlocked) - that is Codiga.io.

But now, back to Mauricio.

Mauricio
is currently setting up the internal tech academy of Adyen to better onboard
developers and help them grow and upscale their skills.

In addition, Mauricio is also an assistant professor at the Delft University of
Technology. The reason why I invited Mauricio here with me today is that
Mauricio writes a super exciting and very practical book about software
testing. And he agreed even to give away one digital copy of his upcoming
Manning book to one of our listeners.

So, you ask, what do we have to do for that, right? Well, there's the chance
to win this book. If you like and retweet this episode's tweet, I will put it in
the show notes, or you can find it on se_unlocked on Twitter. For an extra
chance to win the book, you can add a comment of your personal best testing
practice. But now let's welcome Mauricio. Mauricio, welcome to the show.

[00:01:56] **Mauricio:** Hi Michaela. Thank you so much for the invitation. It's
a pleasure to be here.

[00:02:00] **Michaela:** Yeah, I'm super, super excited. I'm so excited
to learn about this book. I have a copy already here with me, right? So, I'm
following you actually, while you're writing it and you're really far away.

And so, I have a lot of questions and I think we can, you know, look at
systematic and effective testing throughout this episode and we can really deep dive
and yeah, I can learn a lot and my listeners can learn a lot. So maybe the first
question that I have is what does "writing tests in a systematic way" actually
mean to you?

What is that? What is systematic software testing?

[00:02:37] **Mauricio:** That's a super good question. Michaela and I think that's
what makes my book different from the others. So, I think we are now
super good at writing tests and we're super familiar with tools like JUnit and
et cetera. But when it comes to writing test cases themselves, a lot of times we
just follow our gut feelings.

Now, our experience of course is super nice, we you know, learn a lot about
what crashes a lot. So, we write tests for this, but this is not really
systematic. So, what my book tries to do is to discuss techniques where you can
try to create those test cases in a systematic way, kind of, if you follow this
recipe, maybe the recipe will help you to come up with the interesting test
cases that you need.

So, this is more or less the whole story of the book.

[00:03:30] **Michaela:** So when you say systematic and you know that we
have to learn it, I'm thinking back at university and the first thing that pops
into my mind is fuzzy testing and, you know, and maybe verification and all of
that, which you know, is scary and a lot of developers don't do it and maybe it's not
that practical, it's not that scalable.

Are we talking about those kinds of things or are we more thinking about edge cases,
for example, and you know, what is exactly the systematic way to write test cases? Is it hard?

[00:04:03] **Mauricio:** It is not, and I think it's closer to the thinking of edge
cases, as you mentioned, so really close to the way developers write tests
nowadays.

So, that's not a big jump from what you're doing now to what I'm trying to
propose in the book.

And so think of, you know, you have this method to test, this method
receives two or three parameters. My book basically says, you know, look to the
first parameter. What is it? Is it an integer? Is it a string? If it's an
integer, maybe you have these cases to think about, then go to the second
parameter, go to the third parameter, then try to see how those three
parameters interact together.

So, it's again, super similar to the unit test you write. But now in a more
systematic way.

[00:04:42] **Michaela:** So, is it a little bit like a checklist for me
that sounds like a checklist or, you know even in code reviews, you
know, we know that the most effective code reviewers are actually the ones that
have a checklist, right?

Even if they are experienced developers, because it helps your brain to go
systematically through the code and think about, oh, did I think about this,
about that? And normally people don't even read the code review checklist
anymore. They just look at it and you know, oh, I forgot actually about that
part over here.

Can I think about it that way?

[00:05:12] **Mauricio:** Yeah, definitely. And to be honest, at some moment
when I was writing the book, I considered a lot creating a checklist where
people could, you know, just try to follow and these ideas are not fully mine,
right? So I learned a lot from what is in there. And so the domain testing
techniques that are there may be super popular in academia, a bit less popular
in industry. They are doing these checklists without calling them checklists.

Right? Yeah.

[00:05:38] **Michaela:** In the book you described quite a few different
types of testing, right? Domain testing, which I would really briefly describe
as breaking down the requirements, right? So what the program should do and
looking at that, then you talk about structural testing, which is looking at the
code coverage.

Then you talk about example-based testing, property-based testing and you talk
about contracts. Can you explain each one of those a little bit more in detail
and maybe the first one is, what is the most important one? Is there, do we have to
know all kinds of ... this kind of different testing types? Or is it enough if
I, you know, do domain testing? Are they exclusive or how does the, you know,
how do they integrate with each other?

[00:06:22] **Mauricio:**

Yeah, good question. I think, you know, if you're a busy person and you cannot
read all the chapters, if you read the domain testing one, and then the
structural testing one, you kind of grasp the main ideas there. And my suggestion is
usually; you implemented some feature, right? I'm not really focusing on
test-driven development here.

So just imagine you wrote your feature, maybe you did test-driven development,
maybe not. And now it's time that, [00:06:44] you know, for systematic testing,
you want to explore all the possible edge cases to look for bugs. My first
suggestion is for you to do domain testing, meaning you look at the requirements.
You know what the program needs to do, and this is the requirements.

It doesn't have to be UML or a user story, whatever you like. And then you
systematically apply domain testing techniques there to come up with test cases.
So, you know, those are the inputs of my program. These are the outputs of my
program. Let's explore them. After you do this, you create lots of test cases.

Are you done? Almost. The next step is let's now look at the source code and try
to get some hints from the source code, because you know, sometimes there are
small differences between what you envision the program to do and how you
implement it, right? Maybe, I don't know, you're doing some crazy optimization
there that requires some extra testing.

Whatever. And then you look at the source code, maybe use some code coverage
tool to help you on doing this. And you then augment the test suites you created
with domain testing. And this is kind of the main loop that I see when it
comes to create test cases. Then of course, after that, my book dives into
different techniques you can do to, to make your tests better.

Like property-based testing, design-by-contracts so on and so forth. But, the two
techniques are the ones that I consider core for someone that wants to create
good tests.

[00:08:10] **Michaela:** So domain testing, I have to see a little bit as,
it's not, it's not black box testing because I know the code. But it's
a little bit more about the use cases, right?

So maybe I'm looking at the JIRA ticket or, you know, some, some story in,
on GitHub or something. Then I'm reading down what this, you know, what this
code change actually should do and then I'm developing my test for that. And
then I should complement that with structural testing, where i actually go at the
code and see, you know, how it, how is it actually implemented. And do I ...

Because code coverage for me would be not only about [00:08:46] how is that
implemented, but also like line coverage. Do I, you know, do I hit every line,
even, you know, the exception and you know, if they are like, if there's a
switch statement, do I go through each of the cases and so on? Right. Is that,
and then I go back to domain testing again, what should this actually do?

And loop through that.

[00:09:05] **Mauricio:** That's a super good point. And I think this is one of
the things my book does differently from the others. And I'm super curious to
see how the community will react. So when we talk about domain testing, we usually
have this black box perspective where we don't care so much about the
implementation.

What I'm trying to say in my book is that maybe you can use those same
techniques, but now looking at small units that you kind of know how they work.
You know, you don't have to test the whole program using domain testing. Why
not also applying the same things for small methods or a class, and of course you can then
start going up in the test level.

So maybe you test the unit using these and then you're satisfied. Then you go a
little bit bigger and you test the whole component using domain testing. Why
not? So, I discuss the different test levels as well in the book, but so I want
to first thing convince people that domain testing can be done at any levels.

Those techniques apply there as well. That is the first thing. And then the
second thing is about code coverage because there, we are then usually focused on
unit testing. And I also want to say that maybe it can help you in other levels
as well. And, but I think the main difference from, from what I seen there is
that code coverage for me is not there for us to see a number.

And, you know, did we reach our magical number code coverage for, for the CI to
pass? No, it's more like it's a tool to augment the tests you created using
domain testing. So, they don't care about the number anymore. You care about
looking at a line that is not covered and reflecting about it. If in the end
you achieve a hundred percent, I don't care.

I just care that you reflected about things you didn't test. You know what I mean?

[00:10:40] **Michaela:** And so, yeah, I know what you mean, but so one
of the biggest criticisms for code coverage is [00:10:47] that we are, we are
counting or most of the programs actually look at "Has this code been executed or
not?" But we are not looking for, you know,

Assertions for example, or like preconditions, post conditions. So for me, they
always go hand in hand somehow. Right. So when I think about testing and
especially if I hear code coverage and coverage reports and this number, right?
The question is always okay, well, did I hit every line, but did I even check,
you know, what's happening here? Or do I just execute the program, right?

Because well, if, if you know, a smoke test (_laugh_) could also execute a
lot of the code base. Actually just, you know, make sure that the code runs
somehow without verifying that, you know, the inputs and outputs are
matching and so on. What's your take on that? And what is your advice?
Is it something that you, you know, that you talk about in your book
and the developers should be worried about?

[00:11:41] **Mauricio:** No, I think that's, that's common sense in industry. A
lot of developers really hate code coverage. And in fact, I have an entire
section on the book called something like, why do developers hate coverage?
Something like that. And to me, I think if you're looking at code coverage as a
number only, and then you decide whether you should go up or down, that's,
that's not useful, right?

Because the number hides a lot of information. So for me, the first way you
should use code coverage is to again, augment the test cases you created before. So
your test should always come from requirements because you should test what the
program should do, of course, and then code coverage as a way to augment your
test cases.

And if you're using this tool to see if you missed the test case, then code
coverage becomes always relevant, right? Because you're not only looking at, did
I cover this or not, but it's more like I didn't cover this line. Why is that?
Why did I miss this test when I was looking at the requirements, right?

So it's more of a reflection exercise in my opinion. This doesn't mean though that
the number is completely useless. I like the code coverage number to give
you an overall impression of [00:12:46] how tested your system is because
achieving 100% coverage doesn't mean much because you still can have bad tests. But
having like 10% code coverage means something.

It means you're not really testing anything there. So if you're there to
prioritize where to start, you're testing the process right now say you're in a
legacy without tests. The code coverage can be a nice guidance for you. So that
is the tip. Don't use code coverage as a number that you blindly try to achieve.

That's not going to work for you.

[00:13:16] **Michaela:** Yeah, I like that very much and it reminds me
of you know, a study that I did during my PhD. And, and the tool that I
developed it was actually called TestHound. And it used static and dynamic
analysis, right? To go through the code and to help developers understand their
test cases, right?

So again, it was a comprehension tool which I think you're, you're using, you
know, code coverage and those tools that are out there a little bit to help
people comprehend what's actually happening in my test suite. How much of my
code is actually covered. And then you go in right into for me what I did at
that point.

It wasn't looking at unit, but I was more looking at integrations. And I want to
talk about integration testing with you anyway. And so what, what this tool did
is it was showing how, how good integrations were covered or which ones were not
covered, right? So again, so a little bit showing the blind spots.

And for that, I was really comparing. Dynamic execution, you know, and, and
static execution, because then you could overlay that and say, well, actually,
in the dynamic setting through testing, we didn't cover that part. Right. So
yeah, I like that very much. How do you, how do you think about integration
tests and system tests and, and unit tests and, you know, there's this th the
testing pyramid, which I think is very, very common and very well known, but is
it still valid nowadays the pyramid has like biggest part is the base, right?
And then the higher we go up the [00:14:43] perimeter a little bit, you know,
reduces its size until, it's just a little, (_laugh_) a little spot at the beginning. So
and then each of the levels for testing is actually reflected in this pyramid.

So, it more or less says that we should do focus on unit testing the most,
then a little bit less on integration testing, a little bit less than system
testing, UI testing and so on. Is that something that you recommend?
Is that a, is that a view that you share?

[00:15:10] **Mauricio:** You are only asking me the tricky questions Michaela,
I love that. Before I answer the test pyramid, let me make a remark about tools, because you
mentioned you developed the tool and et cetera.

And I feel it is about time for us to take the next step when it comes to code
coverage tools. Because right now I feel most of them are super interested in
reporting a code coverage number. But they are less interested in using coverage to
help guide developers. What is the next test I should write? And i feel, the
first company person that does this will have the code coverage tool that will
be used in uh, in the market.

And then, you mentioned about the testing pyramid indeed. So, the base of the
pyramid is the unit testing and the base of the pyramid is a bit larger because
you should do more of these, right? That's the idea of the testing pyramids and
you see out there, some people love the testing pyramid.

Some people prefer not to focus on unit tests, but focus more on integration and
system tests. I belong to the team unit testing. So, in my book, I do recommend
people to try to focus on unit testing as much as possible, the reason being I
believe that if you design your code, well, the core of your system, the
important parts of your system will be just a bunch of for loops and if's
and data structures being manipulated.

And those can be easily tested with unit testing and by easily, I mean,
it's super easy and fast to write a test, they run super fast.
You can quickly explore different corner cases.
You know, it's super easy to just instantiate a class, put some values in
column methods.

That is why I prefer unit [00:16:43] testing. But that requires though,
that you develop your system with this, you know, unit testing,
the stability in mind, and this is not always easy. Why do some people prefer integration testing? and they
have a point there because, you know, in lots of types of systems we do, a lot
of the bugs only happen when you put components together.

Right? So think of a distributed architecture, maybe microservices, whatever
those components are, exchanging messages. And then maybe, you know, a crash
will only happen with certain combination of things. And if you're really
mocking out components, you know, when testing one component, you kind of mock
the rest, maybe you're going to miss the cool stuff, right?

So that's why some people like integration testing. And to be honest, I think we
should do all of them. My suggestion is focus a lot on unit testing, ensure that
your small units, small components are super well tested via unit tests, and then
go for integration testing, maybe even system testing to explore things you cannot
explore with unit tests.

Those are more expensive. So maybe you have to prioritize a little bit more,
which test cases you're going to write with all the levels are important. Then
the challenge is to find when to write which type of tests.

[00:18:03] **Michaela:** And is your book going into that a little bit?
Is it giving some guidance for developers on when to write which tests? And
do we get some examples?

[00:18:12] **Mauricio:** Yeah, it does. Right in chapter one already, I have a huge
discussion on the testing pyramids. And then I say, you know, based on my experience,
when I go for unit testing, when I go for integration testing. And then in
chapter nine. So, one before the last chapter of my book, is all dedicated to
integration and system testing.

[00:18:32] **Michaela:** Yeah, that's good.

[00:18:33] **Mauricio:** That is a bit tricky, right? Because when it comes to
integration testing and system testing, it's then, to me, highly contextual.
So, if we're developing a microservices type of application, you may
have some best practices there.
If we're developing a mobile [00:18:46] application, maybe you have
another set of practices.

So I tried to make a more generic discussion, you know, on integration testing.

[00:18:54] **Michaela:** So, you were also talking about something that I
want to explore a little bit and that's testability, right?
So, you were saying, well, it's a little bit harder to make things
testable and, and, you know, you have to have testability in, in mind.

What does testability even mean and what do design principles, software design
principles help us make software system more testable on different levels?
Right? So, is there a difference in making unit tests more testable versus
integration and system tests or ...

[00:19:24] **Mauricio:** Yeah, a good question. I think, he testability rules,
if I can call them like that, are not so complicated, but it's super hard to
apply them once you start to develop more complex software,
because your mind is just full of other things to think about.

But a testable system is just a system that is
super easy for you to control. So I want to test this specific class or a
specific component of my system, it's super easy for me to tell the component
what I want it to do.

And it's also easy to observe what this component is doing. So, after the
component is done, it's easy for me to assert that the component behaves as I
expected. So, those are the two things that you should always have in mind to
design testable systems. Now when it comes to source code and implementation, if
we think of Java code for example, I think rule number one, when it comes to
testability of Java code is your classes depend on other classes.

You should be able to test your class without really depending, too much on the
dependency. So we want to be able to mock some dependencies maybe, so that you,
you gain some control. And so I feel like the most common anti-pattern I see
there when it comes to testability is, you know, you're creating a class.

You just make this class to depend on five other classes, but you don't give
a way for the testing codes to control these things.
And this starts to accumulate, and this becomes like a snowball and
[00:20:47] it's super easy to lose control and then
to never be able to write unit tests anymore. So that is rule number one.

There are many others. I discussed in the book, so I'm a big fan of the ports and
adapter, hexagonal architecture. I feel like they all go in line with the way I
see design for testability. So, it's not super complicated, but I feel we need
to put a lot of efforts in making sure we are never forgetting to do these
things.

Does that make sense to you?

[00:21:18] **Michaela:** Yeah, it makes sense. The question is a little bit, okay. We
can create mocks. We can stop things. But first of all, it, it, it takes a lot
of effort right. To do it. And, and then if we do it, like, for example, I am
writing a lot of data intensive applications, right? Where, you have like a lot
of, a lot of large data, you know, inputs that are done somehow processed.

And if you want to mock that, or, you know, Parts of it. It really gets very
tedious and it gets hard to control. And especially if you're, you know, like,
let's say we are mining data from GitHub, right. One of the things that I love
to do, so we are, we are, we are connecting to the GitHub API. And now we want to
make our test cases, obviously independent of that, because we don't actually
want to query, you know, those large data sets for every test that we're
running.

So, we have some version of that locally. And it gets really complicated. Like
not complicated in, it's hard to do way, but it's very tedious to do it. It's
error prone. And then, you know, the API changes or the format of how they
present, you know, the XML structure and so on changes. And then you have to go
to your test code and to your marks and your stops and your, you know, dummy data.

And, and change all of that. What can we do to, you know, make our lives a
little bit easier here? Is there something, or is it we have to deal with it?

[00:22:43] **Mauricio:** Yeah. Good question. So, I feel like if it's becoming
boring for you to mock stuff, this is just the code telling you that
there's something wrong, right?

It shouldn't be hard to. So, usually my decision-making process is, if things
are hard to mock, are there, is there any other way for me to redesign things,
you know, maybe move some responsibility there, some other responsibility here
so that the design of classes make mocking a little bit easier.

That's number one. Number two is I feel like sometimes we have this idea that if
we're using mocking, we should only test one class and then mock the rest. And that's
not really true, right? Maybe you can test a bunch of classes together and just mock
the classes that are, you know, super hard to use the concrete ones.

So, you can test higher components and some classes are the, you know, the
concrete implementation during the test, some other classes you just mock.
So, I feel like you can also try to, you know, go one level up and look at,
you know, classes together rather than one single class. That being said, some
domains just are not unit testing friendly.

And the domain you mentioned, mining repositories is it's one that is super close to my
heart as well as a researcher. And so, when I'm doing these type of tools,
where I extract data from git repositories, or I parse source code to come up
with code metrics I don't write unit tests so much. So, I have a, I have a
project in my github called CK, which is a code metric tool.

It looks at the Java class and tells you the complexity, coupling and et cetera.
I don't mock stuff. Because it just makes no sense. It was super hard for me.

So, 90% of the tests there are integration tests. So, there's also, you know,
these type of domains where you should go for integration tests because they
will pay better.

[00:24:24] **Michaela:** Yeah. Yeah. I think that's a very pragmatic
answer. I like it very much (_laugh_). I also, in this, in this kind of situations I
heavily rely on integration tests, but I actually also write a lot of unit tests
for things that are easier to unit tests.

But if I see that it's really hard now, I change my method and do something that
I feel, is a little bit [00:24:48] more meaningful also from a maintenance
perspective, right? So, maintainenance, I think is also something and maybe
something that I want to talk with you about. Maintainenance, I think goes hand in hand
with test code because we have to maintain test code, right?

If you don't maintain it, and if it's really hard to do it, you are not doing it.
You are disabling the tests (_laugh_). I know it. I did it right (_laugh_). At one point, you're
just giving up on it and to say, okay, do i comment it out, do I delete it, or
the worst thing is commenting it out right?

So, I think maintainable tests are so important.
Do you have some tips for us how to get to maintainable tests?

[00:25:18] **Mauricio:** My book proposes 10 guidelines. I of course don't know
them all by heart, but the, they are all about readability, maintainability of
test code because in practice you're going to write lots and lots of them.

So, my generic advice there that encapsulates those 10 recommendations in the
book is you should pay as much attention to the test code. As you pay to
production codes. We love to refactor. We love to create abstractions. We love
to isolate duplicated code. The same techniques you can apply in your test code and
that will pay off for sure.

Finally, Michaela, you mentioned you mentioned flaky tests, those really happen.
And we should try to avoid them as much as possible. Although I just wrote a
blog posts on the website of my book saying that I don't believe we can ever get
fully rid of them, because if we're in a super large and complex system they
will happen.

And sometimes for reasons you can't control, for reasons you don't fully
understand. So, I feel our job is to not only avoid them when possible,
but also to keep them under control.

[00:26:27] **Michaela:** One thing that comes to my mind is when I was
working at Microsoft what we did, like windows had a flaky test, right?
Especially because the integration tests and the functional tests where we
really try, you know, under different settings, the systems and so on, drivers.

Blah, blah, blah. right? So, it gets really complicated. It's really, you know,
a lot [00:26:46] of configuration, so you're running a lot of tests and some of
them just fail. And so what we did here is we, instead of, you know, said, well,
let's, let's disable all the flaky tests or, you know, it wasn't even possible
to fix all of them, right.

Because it was sometimes not even clear why they are, you know, why they're flaky
sometimes. What we did is we measured their effectiveness. So, how often is a
flaky tests actually finding a thing? And how often is it giving a false
positive? And we had like a cost benefit analysis where we said,

Well, every time it fails for no good reason. It's a cost that we incur because
we have to go and investigate and find out actually nothing happened. And then
for every time it actually finds it back. We tried to estimate. You know, how
much did that actually help us now? Right? So, how much how much did we save
and so for each of those tests, we had a profile on, you know, from past runs
and we looked at that, I mean, it was again, obviously an automatic approach.

But again, test case comprehension. So, what we provided office, for example,
with, and we worked with windows was these are your test suites, right? These
are the test cases. And this test, you know, is more red than green, more red
than green means, but it's failing really often. So, you have to investigate
really often and, you know, you just realize nothing happened.

And it actually doesn't really find anything, right? Or the other thing is,
well, it fails quite a bit, but it also finds quite a lot of things. So, we
still think you should keep it or, you know, go and improve it and so on.
So yeah, this is something that came up from my mind when you were talking
about flaky tests. Is that something that you have ever looked at?

[00:28:27] **Mauricio:** Yeah. So, all big software has flaky tests, right? And
Adyen is not different. So, there are some flaky tests there. And the approach
that the engineers have is super smart in my opinion. So, they first detect the
flaky tests. If the test is flaky, the first thing that happens is we move
this to a separate [00:28:43] suites.

Right because we want to keep, you know, one test suite free of flaky test. So
this one we can run and we can trust. And then we have a second test suite where
we, we have the flaky tests there, and we keep trying them more than once.
If they pass, we are somewhat okay, and we tell the developer, you know, this is
flaky, but it sometimes passes, please review it.

We try to see how often it is flaky, right? So, the developer has more
information to understand it. But what I think is super smart is the separation,
right? So, we don't want to, because if you have flaky tests and then you break
the build because of a flaky test, you're breaking the entire organization.

Right? And you don't want to do this. So, separating them from, from the tests
that are not flaky is something super smart that Adyen does. Yeah. That's very
cool. Yeah. Yeah. So, I feel like as soon as your software gets that big,
you're not going to be able to avoid flaky tests. So, you have to learn how to
live with them.

And I wrote a blog post about some smart stuff I saw not only at Adyen, but in
industry in general, we have to get used to them. The more complex we do
software, the more we're going to see.

[00:29:54] **Michaela:** . I will link that in the show notes. So
Mauricio maybe the last thing that we want to let our listeners know again, is
that if they go to , se_unlocked on Twitter and retweet this
episode, and then you have a chance to win this awesome book from Mauricio about
systematic software testing.

And if you add a comment about your best practice in testing software, then, you know,
you're a double in the pot, right? So, there are two entries of you in the pot,
so you have double the chance to win the book. And so, yeah, with that thank
you so much Mauricio. I think it was a super great interview. I learned so much,
I heard so much from you.

And I think my listeners as well, so thank you so much for being on my show.

[00:30:34] **Mauricio:** Thank you, Michaela again for the invitation. I
loved it.

[00:30:38] **Michaela:** Yeah, it was really great. Okay. Bye. Bye.

[00:30:41] **Mauricio:** Bye.
