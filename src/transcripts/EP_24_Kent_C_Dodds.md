---
episode: "Transcript Episode 24 Kent C. Dodds"
permalink: /double-down-integration-tests-kent-dodds
status: publish
type: transcript
---

**Michaela:** [00:00:00] Hello and welcome to the Software Engineering Unlocked
podcast. I'm your host, Doctor McKayla and today I have the pleasure to talk to
Kent C. Dodds. Kent is a software engineer and teacher. Before starting his
entrepreneurial journey Kent has been working for PayPal. He's a major open
source contributor and the creator and maintainer of the widely used open source
Testing Library. Code that he has written is used by millions of people around
the world and he also teaches thousands of engineers how to test the JavaScript
systems and how to work with React. So I'm super thrilled to have Kent here with
me today for this first expert episode in the Software Engineering Unlocked
podcast. But before we start, let me remind you of my upcoming Code Review
Workshops. In those workshops I helped you get to fast, yet effective code
reviews. Yes. Fast and effective. This means I show you techniques and best
practices that help you speed up the code review process while increasing the
value you get out of code reviews at the same time. My secret sauce, so to say,
evolves around three things: improved communication skills, reducing the
reviewer burden, and increasing the process speed. I will link a video in which
I go into more details on how to improve your code review experience in the show
notes. So if that sounds interesting, hop over to AwesomeCodeReviews.com and
book your bookshop, or hire me to give a corporate training just for your
engineered and tailored to your needs and tech stack.
But now let's get back to Kent and today's episode. So welcome Kent to my show.

**Kent:** [00:01:32] Thank you so much. I'm just so honored to be a part of your
show.

**Michaela:** [00:01:36] Yeah, I'm really happy that you're here. Well, I've
been following your journey for quite awhile and over the last year, we also
became friends and you helped me a lot with your knowledge about how to best do
remote workshops and work with engineers.
So I'm super excited that you are also the first expert guests that is here at
my show. So I normally have my guests that tell me about, you know, their
insight or knowledge in a different company, how to get hired, how their
software engineering practices are at a particular company, but today I really
want to talk about one specific topic and that is testing.
And I know that you're one of the domain experts and absolute expert in that
field. And so one of the things that I really wanted to talk with you is that
around 10 years ago, I conducted a study as part of my PhD work about how
engineers test their blogging systems. Right. And so in particular, I ask how
engineers of the Eclipse Platform that is not only used for the IDE, but it's
also used for, to create different other, other systems, very independent
systems, "How are you testing it?" And my hunch was that, well, if you are
building such systems, which are mainly composed of several smaller components,
right, and plugins and services that you have a high need for integration tests.
And I also was wondering how do you mock those systems? Right? And if you're
mocking a lot, that the confidence in your test actually goes down, right? So
this is how I set out and investigate it. And to my surprise, it was completely
different.
So people were telling me, the engineers would saying, well, we highly depend on
unit testing and we seldomly do integration tests. We almost never do end to end
tests. We are, we are not really doing a lot of UI tests, right? And all of
those tests have a lower priority. Really believe that unit testing is, you
know, the main strengths for our systems.
And so I was taking quite by surprise. I also wondered, you know, how, how can
you then test such a system if you apply it together, right? This is a little
bit testing in the field, but also over the last 10 years, right, I think a lot
has changed. And I recall also your blog post that says "write tests, not too
many, mostly integrations."
Can you explain a little bit, what is your sentiment? Have you seen that there
is a change and why do you think that change happened? And how do you, what's
your advice now for testing systems that we have today?

**Kent:** [00:04:05] Oh, that that's a great lead in, and, and your experience
with those engineers is very typical of lots of the engineers who have been
doing testing for a long time.
It really was all about unit tests years ago and I think that a big reason was
because the tools that we had for any other type of test were not very great.
They were difficult to use. And the, a big part of a testing tool's
responsibility is helping you identify why a failure occurred. And so if you
have a, a tool that's not very good at telling, giving you that information,
when it's your test, it's covering a wide range of different systems or
different functions or whatever, then all that the tool can tell you is that
there was a failure that occurred, but it can't tell you where it happened. And
so it's really difficult if the tool is not, not good at telling you where it
happened, it's really difficult to triage that, that failure.
And so naturally people would go into a more focused unit tests because if the
tool is not good at telling you where the failure happened, it's no big deal
because it's a unit test, and you know exactly what failed it was the unit that
you're testing. Luckily for us in the last 10 years, the tools have gotten so
much better that even, um, at an end to end test level, we're able to get a
really good idea of what part of this test resulted in the failure.
So we can, uh, triage those, those failures much easier. And so we kind of
stepped up our, our level on testing and like where we focus our tests. So the,
the blog post "Write tests. Not too many. Mostly integration.", um, that phrase
actually comes from, I'm quoting Guillermo Rauch, who is the CEO and founder of
Vercel, formerly Zeit, and just a brilliant engineer.
He he's done a lot of really awesome open source work and, and has some really
good ideas around testing. And the idea is that thanks to the, the tools that we
have now, integration tests are a great way to get confidence that your
application is working properly. It gives you the most bang for your buck.
So, to take a little bit of a step back on testing as a philosophy, and in
general, the purpose of testing is to make sure that your software works, right?
So if we just forget about automated testing for a moment, just think if we're
writing a product, like we're creating a product, before we send it to our
users, we want to do some testing.
So we're going to, you know, click around and, and try to do what our users
would do to make sure that when our users do those things, that things will work
for them. And so, uh, we're clicking around and things and yeah, then we release
our software. Things are great. We add some new features. And so now we have to
click around for those new features and, and then we want to make sure we don't
regress on our previous feature.
So now we're clicking around and eventually we find out that, you know, this
takes a lot of time. And we, we want to develop software and I worked at a
company where that's, how we did stuff. And this was not that long ago, like six
years ago, we were clicking around on, on our app every time we wanted to
release stuff and, and even six years ago, like that was not a great idea. We
had better tools even six years ago, but what ends up happening is like humans
are really bad at that kind of thing. Like for me, I just want to get back to my
software development work and so I'd see a failure of one of these use cases
that we were supposed to go through and I just chalk it up to a fluke like I did
the test wrong or, or, you know, something, I I'd say it passed when it really,
it failed. And so humans are really bad at this. So we make computers do it
because the computer's not going to, you know, just say that it was a fluke or
something. They're going to say it failed. And that's not the only reason it's
also much faster and everything too. And so if, if our goal is to make sure that
that we're confident in our application shipping and not breaking anything, then
our tests should try to do exactly what the user is doing, right? The closer
that we can get our test doing what the user's doing the more confidence that we
will get that when the user does that it'll work.
And this is actually a guiding principle of the Testing Library, which to be
clear is a library called Testing Library. But the guiding principle is the more
your test resemble the way your software is used, the more confidence they can
give you. And so like, even before we had automation, we would use our stuff
software in the way that our users are gonna use it to make sure that when they
do it works.
And now that we have automation software, we want to continue to do that as much
as possible. Now, of course, the end user is not going to be able to click the
buttons or, or navigate around as fast as our software does, but that's probably
okay. You know, like we're, we're making a little bit of a trade off there by
separating our tests from the way that the users use the software by going way
faster than the user would, but I think that's reasonable. And then every step
of the way as we go along the spectrum of automating our test, rather than using
it exactly as a user would, is making different trade offs and the more that
we're conscious of what those trade offs are and make sure that we're not
missing out on confidence the better we'll be.
Now, just talking about that kind of makes it sound like we should just do end
to end tests for everything and just, you know, use these clicking softwares to,
you know, to automate the browser or whatever it is we're testing. And that's
not necessarily a bad idea, but I've got a lot more thoughts on the different
levels of testing.
But I can tell that I'm already spending a lot of time talking, talking. So I'm
going to wrap up here in just a sec. But anyway, one thing that I want to make
sure is clear is that there's a spectrum of testing our software as closely to
the way that our users use the software and the closer that we get to the way
that users use the software, the more confidence that we get, but there are good
reasons to kind of divert away from, um, the way our users use the software
adjust to, yeah, for, for various reasons that we can, we can get into a little
bit later. So there is a spectrum and you don't just do everything with end to
end tests, but also by going all in on unit tests, you're exactly right. You
wind up with situations where you're you miss out on getting confidence that
your system works together and that's actually really, really critical.
So, yeah.

**Michaela:** [00:10:39] Yeah. You're, you're touched on so many things that I
want to talk with you about one of the things that I think you mentioned at the
very, very beginning already is like manual testing versus automated testing,
right? So we are clicking around and, and we are seeing those use cases as test
cases that we are going through and we can actually automate a lot of that.
And I recall 10 years ago, it wasn't that easy to create tests that actually,
for example, walk through the DOM, right? I know that for example Crawljax, I
don't know if I've heard of that, but it was developed at the university that I
was doing my PhD. And Crawljax was one of those, it's also open source tool and
it was one of those really advanced tools that could use walk you through the
whole DOM tree and click.
And you could automate in a, in a more, in an easier way than, than with the
other tools, right? So it was possible, but it was very cumbersome to do that,
right? And so you're also talking a lot about, you know, you're emulating
actually the behavior of the user, right? So you're, you're looking at, but
there is also two different, two different levels, right?
So you could, as you said, well, it's maybe not even you're clicking the button,
but you're, you're activating that method that clicks the button, right? So
there's actually one step below, I guess, for most of those tests that you're
talking about below the user level, where would you say, well, I'm actually on
this screen and I'm pressing right here, right? Which is different input. And I
think it's, it's even harder to automate that still today. What do you think
about that? What about UI tests? Do you do them and what's the state of art of
the tools today? Do you think it's, it's easy and, and also from the, from the,
are they a brittle, right?
So when I talk to the engineers the reasons why they didn't do them is because
they were saying, well, they are breaking, right? Every time I'm changing
something they're breaking really easily. So I'm spending a lot of time writing
those automated tests just to change them again, whatever, you know, we are
running the test suite again.

**Kent:** [00:12:37] Yeah. Yeah. So that is a really common attitude and it is
legitimate. So what, when you are making a change to the way that your software
is implemented, your tests should be there as a kind of a stop gap or, or some
sort of, a notification to you that you've actually broken some expected
behavior. And so like your test should actually help you in the refactoring
process.
Now, refactoring is you, you change nothing about the behavior, just the way
it's implemented. Okay. And so if the behavior doesn't change, then the user
shouldn't be able to observe any of the changes that you've made. You know,
maybe it's faster or something there's less janky or whatever, but as far as the
way that the user uses it should be totally unchanged.
And so, given that if your tests are resembling the way your software is used,
then your test should not fail when you've done a refactor. And therefore your
test will help you in the refactor process; it ensures that you didn't break
something. What inevitably happens though, is people will write tests that do
not test in the way that the software is used.
And so therefore, it's testing the implementation details. And so when the
implementation detail changes, then the test is going to break. And so therefore
the test is not helping you with the refactor process. In fact, it's getting in
the way of the refactor process and therefore becomes really frustrating and
annoying to deal with.
And therefore people don't like testing and if I were testing implementation
details then I also wouldn't like testing because it's not providing any value.
In fact, it's, it's worse than not having any tests at all, because it's just
getting in my way. And so, the, the reason that UI tests are typically very
brittle is because they often test implementation details.
So a really common scenario is with these tools that like help you navigate
around based on the DOM is you do some sort of CSS selector that will select the
button. And it's very specific to the way the DOM is structured. Well, the user
doesn't know anything about how the DOM is structured. In fact, the user doesn't
even know anything about the DOM.
All they know is that this button says, "Sign up," and if they fill in the
username and email or the email address in the password fields, you know, those
things that are labeled email and password, and then click on the button that
says, "Sign up," then they're going to, uh, get signed up for this. They don't
know anything about the DOM.
And so if your tests know something about the DOM, if you've encoded into your
test some knowledge about that DOM, whether it be a CSS selector or X path or
anything else, then your tests are not doing what the user's doing. And so this
is actually where Testing Library came from and with Testing Library rather than
like navigating around the DOM or whatever the UI is trying to find these, these
elements and saying, okay, well, find me all the inputs on the page and it
happens to be the second input on the page and now we'll fill in the username
and then there's like a hidden check box or something. So the fourth input on
the page is going to be our password. Well, now you change the order of the
inputs or you remove that hidden input or whatever and now your tests are
breaking. The user doesn't do that. They don't look for the fourth input on the
page to type in their password. They look for the input, that's a labeled
password.
And so Testing Library allows you to look for the input that is labeled password
or input that's labeled email and then you can interact with that input, so your
tests are resembling exactly how the user's using your software. And then you
can say, okay, now go find me the button that it is labeled, or that has the
text "Sign up" and then click on that button.
And so what's cool about that method of navigating and interacting with your
application is that even if you make refactors, the only time your test is going
to break is if you change from email to username. So now the, like the thing has
changed, the user's expectation is going to change, and so of course your test
is going to fail.
Like you want your test to fail because now the user's expectation, expectation
has changed. And so therefore your test should probably change to reflect that.
Um, that changing. That's not a refactor, that's like a change in behavior. And
so, yes, it's very, it makes a lot of sense. And I can empathize really strongly
with people who don't like the higher forms of testing, like end to end or
integration, or like these UI test, uh, because typically the tools that you're
using are very implementation detail focused.
But if you find a tool that allows you to not do that then, and to make your
test resemble the way your users using your software, then you're much better
off and refactorings are actually aided by tests, not inhibited.

**Michaela:** [00:17:27] Yeah, it's really nice because there is now another
layer of abstraction, right? So you're going away from this, well, I think most
of the testing frameworks and the test tools, they are created by engineers. So
we are very, very often, very close to our implementation, right? So the easiest
way is to say, "Well, I want to press the button. So let's look for the for the
button, right?" So how do we select something like that, as you said, right?
So you're having a query element, for example, that we are, that we are going
through and now we are going one step further away and thinking, well, how can
we actually make it more abstract so that it's, it's less brittle and more
robust to different changes that we are doing with the underlying
implementation.
I really liked that.

**Kent:** [00:18:12] Yeah. And you asked me, sorry to interrupt you. You asked
me about the different tools that are like state-of-the-art and I just wanted to
address that really quickly. So there, and hopefully we'll get to this later,
but I have this thing called the testing trophy. Many people have heard of the
testing pyramid - that is dated.
The testing trophy is where it's at now and the trophy has various levels of
types of tests that you write, but the two main testing tools that you're going
to be using is Cypress for your end to end test. Now, this is for web. If you're
doing like native or something like that, you'll have different tools, but for
web, it is Cypress for your end to end tests.
And Jest for your unit and integration. And then we also have the static testing
level. That'll be TypeScript and ESLint and Prettier are your tools for static
testing. And yeah. So those are the tools. I just wanted to make sure I answered
that little question there before we moved on.

**Michaela:** [00:19:06] Yeah, right. So, maybe for our listeners also to
explain a little bit more about this pyramid, right?
The testing pyramid, which is really like a pyramid. So the bottom is the
widest, right? And then it goes, it goes together, right? It gets a narrower and
on the top, right? It's like a pyramid. And on the bottom you have like unit
testing, right? Then, then you have like integration testing and then you have
like your functional end to end test right at the very top. So this is also
somehow representing that the most efforts are spent in unit testing. Then, you
know, a little bit less in integration and the least effort is spent in end to
end test, right? So this is also very much resembles what the engineers are
thinking when I interviewed them, right?
So I think a lot of the literature back then was also about that, right? There
was like, there was like unit tests or JUnit just, you know, it didn't just came
out, but it was that time that people were really focusing on that and using
that to, to run their unit tests. And I think a lot of the thought leader at
that time, really propagated that idea, right?
And as you said, a lot of the things we probably are driven by the tools that we
had at hand, right? So a lot of the time tools and practices go hand in hand,
right? So our tools shape the way we are working obviously, and this is the same
for code reviews, for example. Anyway, so I found that really, really
interesting.
One of the things, let me say differently, so if you compared it now with the
trophy and there you are an expert, I'm just quickly telling what I saw is it
has a different shape, right? The biggest bottom, more or less, it's like a
trophy, right? So this is the big, biggest triangle, if I have to explain it, is
like static testing and then you have just a little bit and a narrow focus on
unit testing and then wider things are somehow integration tests. And then the
trophy somehow is like, I understood this metaphor metaphor a little bit. Like,
well, if you really reach to the end, right? So it's like a little bit like the
cherry on top or the end to end tests. But I think that, how would you describe
this trophy? How would you describe the efforts that you do if you're following
the testing trophy methodology?

**Kent:** [00:21:21] Yeah. So I'm excited to talk about this and I want to just
touch on the testing pyramid really briefly. And this, the testing pyramid was
like created forever ago. Let me see if I can find there. There's an article
from Martin Fowler on the 1st of May, 2012. And I think this is where the
testing pyramid came from. And it's, he describes the, what the testing pyramid
is all about and to here at the very, uh, bottom, he has some notes in this blog
post, maybe I'll, uh, I give you a link to this.
Yeah. You just look, "Martin Fowler test pyramid," you'll find it, but here it
says, "the pyramid is based on the assumption that broad stack tests are
expensive, slow, and brittle compared to more focused tests such as a unit test.
While, this is usually true, there are exceptions. If my high level tests are
fast, reliable, and cheap to modify, then lower, lower level tests aren't
needed."
And this is kind of the foundation of the testing trophy is the fact that maybe
back in 2012, the tools for the broader stack, higher level tests were, were
expensive, slow, and brittle, but they're not that way anymore. And so the
testing pyramid is based on an assumption that is longer the case.
And so that's where that testing trophy came from was when I was thinking about
this write tests, mostly integration or not too many, mostly integration, I was
thinking, you know, the pyramid does not resemble that the pyramid suggests
mostly lower level tests. And then not only that, but the pyramid also doesn't
address static testing.
And the reason for that most likely is because the pyramid was written for
developers who are using statically typed languages. So it was just like, why
would anybody talk about that? That's just part of the language, but in the
JavaScript ecosystem where I live and contribute, static testing is not
necessarily a thing that people do.
And in fact, the idea of static testing doesn't really compute. You have to
explain it. So static testing is using tools that can statically analyze your
program and tell you problems that you have with it. So ESLint has been around
for many years and it's a tool to, to lint to your code. And there are lent
rules that are, are kind of ridiculous, like ordering the property names of your
objects.
That, hmm, doesn't ever matter, like what order your properties come in, in your
object in the way that you write your code. But then there's things that really
do matter, like people may writing your syn- your if statements in this way is a
really common way to make a mistake so you might be making a mistake here and
kind of correcting for that.
So there are lots of different, uh, rules that ESLint can, can give you that
will just take a look at your code without even running it and tell you that you
probably have some problems. And then TypeScript on top of that gives you some
static type checking to make sure that your, your types are all in there, right
place. You don't have as many runtime errors when you're using TypeScript.
Uh, and so this gives you a really enormous amount of value without even having
to run your software. So it doesn't, it's not going to tell you whether your,
your business logic is correct. It can't do that for you (like whether you meet
the requirements), but it can tell you whether you're making some, some silly
mistakes, basically.
So that's, that's, the base of the pyramid and the relative size for that is
kind of irrelevant. Cause you, you really just apply it to your entire code base
and then, and then you leave it. And then there's, I also mentioned Prettier.
That's a code formatter. And it actually, I use Prettier as a static testing
tool because if you mistype your code in some way, then Prettier is actually
going to reformat it and it will look kind of strange to you when it does that.
And so then you can see, "Oh, I missed a semicolon in this important place" or
something like that. So that's like the base of the trophy. And then the next
level above that is like the start where it, it expands out, you know, like,
you'd have to look at a picture.

**Michaela:** [00:25:14] I tried to explain it.

**Kent:** [00:25:15] That's kind of hard to explain. Yeah. But the, the unit
testing portion is a little bit smaller and I'll actually talk about unit
testing toward the very end. So let's, let's go up to the top with end to end
testing. This is kind of where everything comes together. Um, it is, the the
relative size is actually less important to me than what type of things you're
testing with these different levels.
So, end to end is more of like, let's, let's just pretend we're a real user
using the application. We're going to go through a typical user flow and we're
going to assume the happy path for these types of tests. Sometimes you can, if
you have something that's really important and kind of hard to simulate in lower
level tests, then you can go through some edge cases or error cases with those
types of tests.
But most of the time it's like, okay, I'm going to register. Then I'm going to
go to the product page. I'm going to add this to my products. Increase the
quantity by one. Then I'm going to go check my, my cart and make sure that that
is in there. And then I'm going to go to this other related products and I'm
going to add that.
And then I'm going to go to the checkout. I'm going to remove this product. So
you're going through a typical user flow and you're covering an enormous amount
of your software, uh, with this single test. And thanks to the tools that we
have now, it's actually relatively easy to write these types of tests and to
know what broke when they do break.
Now, it's, it's not as easy to know what broke it as when a unit test fails, but
you'd have to have thousands of unit tests to compensate for this one end to end
test. So I'm okay with taking a little bit more time figuring out what works
part of my system broke when an end to end test fails because of the amount of
value that I get out of even just one of those tests.
So the end to end test is kind of more of a, like, "I'm an actual user and I
have a use case and I'm going to go through from beginning to end on that use
case." Now, one thing you want to avoid with the end to end test is over
testing. So you'd maybe have one test that, that handles the whole registration
process.
And then the rest of them just kind of pick up from there and they don't go
through the registration process again. And I teach strategies on how to do this
in TestingJavascript.com if people want to dive deeper into that. Okay, so,
then, that's an end to end test. Right below that you have the integration and
that's the thickest layer of the trophy, because this is where you spend most of
your time.
This is where you're going to do like some happy path stuff, some sad path
stuff, and, and like just general testing at the, um, highest level of your
application code. I typically am doing a UI stuff, but this applies also to your
backend stuff too. This is where I I'm testing the integration of all of the
parts of my system and isolated from other systems that I interact with.
So end to end testing covers all of the systems put together. Integration
testing is let's just take one system and test it as a black box from all the
other systems. And so what you're testing is the integration of all of the
different functions and classes and components and whatever it is that your
system is composed of - integrating all of those things to make a single system.
And that is what an integration test is in, in regard to the testing trophy. I
know that lots of people define these terms differently. That's how I define
integration in this regard. So, you test your one system as a black box, inputs
and outputs. Um, and then unit testing is the, like smaller section of the
trophy and that is all about focusing your efforts on the like little edge cases
or, or the typically pure functions that have lots of complicated logic. You're
not doing your business cases like the, the use cases that an end user would
have, uh, the user of the, the units, the testing is typically other developers
who are calling those functions.
And so you think about this function from the perspective of a developer, who's
using that. And so you have this complicated format currency where it takes the
currency type and then a number and it formats it with the, you know, currency
symbol or whatever. So you'd have a bunch of unit tests to, to handle like,
okay, what's the precision, the yen doesn't have a decimal at the dollar does,
and the precision is two whatever. And so that's typically for your algorithms,
your, your lower level functions.
The way that I think is a really good way to think about all of this and why
it's important to have each aspect of these rather than just focusing a hundred
percent on on one form is that you can think of it as painting a wall.
Um, and I actually have a conversation on TestingJavascript.com, where I have
several of my own interviews with experts. And one of the experts that I
interview is J.B. Rainsberger, who is just a brilliant software developer. And
he gives this illustration like this mind game illustration of let's assume that
you're trying to paint a wall.
And you have like a paintbrush and you have a bucket of paint and you have like
a smaller paint brush. And on this wall is like a really important picture that
you can't remove that was drawn by your grandmother and, you know, you don't
want to get paint on it. And so, like, maybe there's a big section of the wall
that you can cover by just taking your paint bucket and throwing it up against
the wall.
And you're okay with that, but you're not going to use that method around that
really important painting, right? There's this little edge case that you just,
you want to make sure you cover it. And then even like, if you don't want to get
the ceiling, then you're probably not going to use that method on the corner uh,
you know, up around the ceiling and stuff.
So you're going to be using these different tools. You'll throw, paint up
against the wall for some, you'll use the big paint brush for other areas, and
then maybe the small little paint brush around that picture. And so this is the
same way I think about these different levels of testing is you have these
different tools to cover these different types of, um, situations that you have
in your application, most of your code is going to be really well covered by the
end to end and integration tests. And this is why I spend most of my time with
integration tests. They run the fastest, they are the easiest to get set up and,
and when they fail, those are the easiest ones to debug the problem.
So that's why I focus most of my efforts around integration tests. Maybe one day
in the future our end to end test software will just get so much better that we
can just focus a hundred percent on end to end test. But today our, our software
is at the point where integration test is where you spend most of your time, dnd
to end test is a great place to hang out for like the happy path stuff, unit
test is really great for the complicated algorithms, and a static test should
just be applied to everywhere in your application.

**Michaela:** [00:31:59] That was a really good summary. Thank you so much.
There are a couple of things that, you know, triggered some of some thoughts for
me, especially when we were talking about the end to end tests.
And somehow you said, well, you know, maybe some of those tests go through the
whole registration and then other tests pick up on that. And I also recall that,
you know, this somehow seems like in the old days, right, like an anti-pattern.
Where you say, well, all tests should always be very isolated, right? It should
be stateless.
And so it was really a faux pas, more or less to have like a state that picks up
from where other state, other tests left off. And also it can create like flaky
tests. Flaky tests are tested are sometimes, you know, failing and sometimes not
failing. And you're also cannot, again, it makes it a little bit harder to have
this root cause analysis, right?
What was actually the trigger? Maybe one of those tests left the system in this
state. You know, brought the other tests to fail, and it's hard to find out
something like that. What are you thoughts about that? How do you, how do you
handle that nowadays? How is that done? Is that still a problem? And things like
that.

**Kent:** [00:33:08] Yes. Yes. I'm glad that you brought this up so I can
clarify that. So when I said that, what I mean is a common problem with end to
end test, and, and one of the reasons why people don't like them is because they
are very slow because you have to go through the whole, like let's, let's say
I'm just trying to test the, you know, my cart or something to make sure that
items are added and removed from that cart.
If I have to go through that whole login process for every single one of my
tests. So the one for the cart, the one for the settings, the one for the, you
know, send this tweet or whatever it is. Then, I'm adding, maybe let's say that
the login process takes five seconds. I'm adding five seconds to every single
one of my tests.
What that is, and I'm not getting any confidence from those five seconds, I've
done it once. I'm confident that it works. I don't need to do it anymore. So I'm
adding five seconds for no benefit, no additional confidence. It's just a waste.
And so, uh, what I mean when I say that is let's take the things that are common
across all of these tests and we'll take that portion we'll isolate it into its
own test.
And then for the rest of them, we'll skip all of the stuff that test does. And
instead we'll just hit the API directly and we'll say, okay, log me in that,
that takes just a split second. So you don't have to actually navigate and fill
things out. This is actually one, one place where you're kind of excused for
testing or for including implementation details because it's something that
you're going to put into like a helper function and if the implementation ever
changes, you just fix that up, helper function. Everything's fine. And, and you
have confidence that the, the thing you're kind of skipping around is tested
because you already have a test it to handle that case.
So this is, this is one exception for this type of problem where, um, you hit
the API directly, here's, here's a username and password, or maybe you have a
special, a service that's just sitting around that interacts with the database.
You just say, "Hey service, go give me a, get me a user." And that service,
which is technically a test service, this wouldn't be something you'd have in
production, it just updates the database, takes care of everything to create you
a, a test user, gives you that test user back, and then you can, you can go
through your test. So that's test isolation is still a good practice. It's, it
has always been and it will always be a good practice because otherwise all of
the problems that you enumerated are still problems today.
And it's really important that like, You should be able to run the one test all
by itself or all of the tests together and all the time in any order. And if you
can't do that, then your tests are not isolated and you need to do proper
cleanup of the state that your tests are performing or whatever it is to make
sure that your tests will work in isolation.
Otherwise it just becomes really difficult to debug when your tests are failing.
Like, "Oh, this test started failing because I deleted that other test that we
don't need anymore." Yeah, that that becomes really a challenge.

**Michaela:** [00:36:00] So I'm really glad to hear that because I actually
worked on the tooling and also a study, it's back then, about test smells.
And one of those tests smells that, and my tool also detected that, right?
Detected if you're to tests haven't been isolated and things like that. And so,
yeah, it pointed that error out. So another thing that I wanted to talk about
that you mentioned was that nowadays with the new tools, we are getting much
more information to debug, or to find the root cause of our things.
So I imagine there's some telemetry in that. How, how has that actually? So how
can I imagine that? How is that implemented? How would I write a test case? If
I'm thinking back on, you know, writing unit tests, you would have like one
assertion in one test case, right?
There was also like this role that you should have like 10 assertion in one test
case. But you know, if you have more assertions, you're actually getting more
telemetry somehow. So how do you handle that for integration tests? For a end to
end test? Where do you get the data from? How do we know that? You know where
to, if the system failed, why do we have more information at hand right now?

**Kent:** [00:37:06] Yeah. Yeah. It was really common years ago to say one
assertion per test. And the, the reason that people would say that is because
when your test failed, you'd only get the title of the test, and it said it
failed and you would get nothing else. And then eventually the tools would say
it failed and here's the expected and here's the result.
And, and those things are not the same right. Or whatever it is. And so you
didn't get a lot of information about that. And if you included multiple
assertions, you often wouldn't know which one of the assertions failed just that
the test itself failed. And so, because of the limitations of our tools, we
would say, okay, one assertion per test.
That way you always know which assertion failed. And what ended up happening is
you'd have a test that do the same thing and each one would just assert on
something else. And so you're like way over testing, your tests take longer.
And, and it just becomes a, another reason to not like testing. So these days,
not only do you get like which assertion failed, but you actually also get
what's called a code frame in the output.
So it'll show you the code where that assertion lives or, or where that error
was thrown. So even if, even if the source code throws an error and that's what
triggers a test failure, you'll get like literally the code with the number
lines and everything in the output that says here's where that error was thrown.
Here's what the error was. And here's like, really useful information about that
error, like the stack trace and all like everything that you could ever hope to
have for that type of error.
So you get really great insight. And so, I say, throw as many assertions in
there as you possibly can. In fact, I haven't mentioned this a lot, but I have a
blog with like several dozen blog posts about everything that we've talked about
around testing and that people can find at KentCDodds.com.
And one of my blog posts is I suggest that you write fewer longer tests, so not
fewer longer tests, but write fewer tests. And the tests that you do right
should be longer. And the reason for this is because our tools are really, um,
really great at showing us what part of our test failed. And so it's just easier
to say, have even a unit test go through a, well, typically a unit test it's you
just call function.
So like those ones are a little, a little special, but our integration tests,
for sure. It's like, go through the typical steps that a developer user or even
the end user or a combination of the two would go through to make this a typical
use case happened. And so, yeah, so we'll put as many assertions in there as you
want.
And even like, there's the common, you know, arrange, art, assert process for
your test. I put several of those even in a single test. So arrange this, do
some action, assert on stuff. And now that, that like, Tweet has been created,
now let's go ahead and try to edit it and verify that, that you can't edit
tweets and then like, so there's another arrange, act, assert and then further
on down the line.
So that, that addresses kind of one, one side of your question and. I had some
other thoughts around this, but they're like slowly fading away from me. Did you
have something else that I didn't address there?

**Michaela:** [00:40:26] Well, one thing that you mentioned very often and which
is a real problem, and, you know, counter point against tests, or, you know,
some of the things that really balanced the benefits that you're getting from,
from the tests is the slowness, right?
So you're spending time doing your tests. So you're running your tasks, right?
Not doing running your test. Now, if you have automated tests, right? So, um,
it's not for free. And I actually worked for Microsoft. We worked on, on
Windows, for example, and I mean, this is huge software system, right? So it's
not, probably not typical for your, you know, for any other Microsoft system.
But the test cases would run several hours, right, up to days, especially the
integration tasks or the system, the functional test, right? So the higher up
you're going the slower the whole test. And there's a lot of repetition, as you
said. And so what we did, we were thinking about, you know, are all of the tests
actually, as useful and which one could be removed, but not now removed from a
coverage perspective where you say, well, is this going through the statements,
for example, is it covering the parts of your, of your code, but more on the
level of, is it actually finding something, right?
So a test, right, like you have like this idea of when you're refactoring, you
have all these tests and it's a safety net and actually you should never be red,
right? So it's always green. But somehow then if you're, if you're getting to
the extreme that your tests are actually always green, but always take days to,
to run, right?
Maybe that's not the best thing, right? So maybe some of those tests should
actually find something. So, and this is, this is the idea that we played a lot
around a little bit like where we build a cost model where we said, "Well, it
has this actually only good if it also find something," right? So if it doesn't,
if it never finds anything, maybe we can skip it more often.
We didn't completely delete those tasks, but we said, well, maybe we don't have
to run it every time. And then we also found out that for certain changes to the
system, right, maybe some parts of the systems are changed or some typical
actions are changed, this was all empirical, and it'd also adapted itself.
So, it could learn. The system could learn that, you know, if I'm working on
this part of the system, this tests are more effective than yours, right? So
they would ask. But what I wanted to say is that this idea of, or this pain
point, I call it pain point, tests are actually slow, is a real thing.
It's still a real thing, even though we are having those tools today, especially
if you're thinking about, well, what kind of test do I run, right? So when we're
going back to this idea of, we have a lot of unit tests and only a few
integration test, then typically for engineer, it would look like I'm
implementing my functionality, right?
A feature I'm working on that. And I'm locally running the unit test, right? So
bomb, bomb, bomb. They're really fast. And then I only, when I'm committing the
code, right, I'm putting it out there, then I, it will be picked up and I'm
running the integration and the end to end test, right? So how does that work?
What do you think? Or what do you advise people how did should work today? When
I'm working on my, on my feature, what should I run locally on my machine? Do I
run the integration test? Do I run the end to end test? Do I run them every time
I save? Do I run them, you know, every hour? what's the right time? When do I
run those tests?

**Kent:** [00:43:42] Oh, you said so many good things. And I, I have so many
thoughts on this, so this is absolutely the case. And I would say that
over-testing is, is a huge reason that that tests take so long. So I have so
many thoughts. First off, so, over-testing is, is a huge pain point. The
assertion that some tests are, are more useful than others given some scenarios
is another really big and important point.
So one of the really cool things about Jest as a testing framework is that it
has a really advanced watch mode. So it's running as you're making changes. And
it runs the test when you save. Now, if you have a really big software system
and it's running all of the tests, every time you hit the save key, then your
machine's just constantly going to be running these tests and not really
providing you a huge amount of value.
And so what Jest does is that actually is aware of the module system. And when
you say one module, it will track all of the tests that are related to that
module and just run the tests that are impacted by that module being changed.
Now, if it's a really highly used module in your application, then that maybe
that will be a lot of tests, but you can also scope down the specific tests that
you are interested in.
Maybe the unit test for the specific thing. So that you get faster feedback. And
on top of that, Jest will also identify the test that failed on the last test
run, and it will run those ones first so that you can see, oh, those failed last
time. I just made a change. And it runs some first and, you know, right away
that your change worked or it didn't work while it runs the rest of it, of those
tests that, that had passed previously.
So Jest does a lot of really cool things for you to make that workflow really
fast. For me, I don't run, I don't typically run my end to end tests as I'm
making changes. Now, if I'm addressing a specific end to end test that failed
and I'm fixing the bug that it caught or something, then yeah, I'll probably
have that run on save.
Or, or if it's a really long test, then maybe I'll, I'll run it explicitly when
I feel like I've fixed the problem. But yeah, normally, when I'm doing my
regular workflow, I'm going to just run the tests that are relevant to the file
that I changed with Jest watch mode. Um, um, I have a pre commit hook that will
actually take a look at all of the files that I'm changing.
And it will only run the tests that are relevant to the files that I'm changing.
So if I have thousands or tens of thousands of tests in my project, I might only
run like 35 of those tests when I commit my code. And then when I push it up to
CI, if my CI, if my end to end test only take maybe 10 or 15 minutes, then I'm,
I'm fine with running those for every pull requests that I make and run that in
CI, as part of that pull request process, that's not a big deal to me.
Remember that we're we're trading. What we're getting is confidence. And to get
that same amount of confidence without these tests would take hours of you like
clicking around. And so, as long as these tests are actually checking for things
that could break, and that do matter for your products, then you're way better
off even if they take a little while, you know, and, and there are ways that you
can speed them up. You can parallelize them, you know, it's, it's like going
from one test, one manual tester to two testers or maybe 20 testers.
You're, you know, as long as you've orchestrated things properly so they're not
doing the same thing then you can get things running pretty fast and, and all of
the tools, Cypress and Jest (Jest actually does this automatically; that
parallelize your tests). Cypress, you are, you have the ability to say, okay,
this box is going to do these tests and this one's going to do those. Um, so
that, that capability is there for Cypress as well.
And so there, there are different strategies that you can take to speed up your
tests. But just one mistake that I see people make is they say, well, this
testing strategy, uh, takes longer than this other testing strategy. Therefore,
therefore I will do the faster one, but that is the speed of your test is only
one metric of what's important about a test and it's arguably the least
important. The most important metric for your test is how much confidence does
it give you and how valuable is the confidence? So like not all tests are
created equal either. Even if they give you 100% confidence that a thing works,
I'm more interested in my checkout working than my save user settings working,
right? Like those two things. My checkout is really important. My user settings
page is still important, but not as important. And so if it's taking you a huge
amount of effort and time to make sure that your settings page is working, then
maybe you can rethink some of those tasks and maybe trade off a little bit of
confidence for speed on that, or the amount of time taken to maintain those
tests or something.
But yeah, like I don't care how long it takes for my, for me to be confident my
checkout works. I need to make sure that works cause if I ship something that's
broken, I'm losing lots of money and that, or my company is losing lots of it.
So, like its, I, my, my brain has a jumble of thoughts around, around all of
this.
But yeah, it's, like avoid over-testing, focus on the tests that are really
important. If you have a test suite that takes an enormous amount of time, like
hours, like you were saying then I think that approach that you took is
absolutely awesome. It's a fantastic approach. Now, if - Oh, this is another
thing that I was thinking.
Every test that you write should go to the source code and try and break it. See
how you can break that test because sometimes you might not actually be testing
what you think you are. And therefore the test is not giving you the value you
think it is, and should probably be deleted. And so like, that's just adding
time to your tests, the amount of time it takes for your test to run for no
actual value.
So you want to make sure that you can break the test by, by breaking something
in the user's experience, because a lot of tests actually don't test what you
think they are. And so, yeah, if it can't, or if it's very difficult to break,
then maybe you don't need to run it all the time. Maybe you don't have to delete
it, but don't run it all the time.
Have it like run every night on a separate suite of tests. Yeah. Cause you can
absolutely chunk your different tests. You know, if there's a feature that is
long living people aren't working on it actively you'll want to have tests
around that, but you don't need to run those tests every single time somebody
makes a change to this other half of the system because that half isn't going to
impact this one.
Maybe just run it every night or every week or something. It really like testing
is just a world of trade offs.

**Michaela:** [00:50:11] Yeah. Yeah. So there were a couple of things that I
heard you say you were talking about risk based testing. So at least that's how
I understand it, right? So if we are thinking about the risks that are involved
with the certain functionality, but just certain part of the system and when
there's higher risk, we are also doing more testing, which is very similar to
code reviews, right?
When I have a system I'm writing or changing parts of system that is more risky,
right? It has a bigger impact if something goes wrong. Well, my code review
should be different than, you know, if I'm doing something else right? When I'm
just doing refactoring and we can actually show that it's maybe proof of
refactoring.
So, this is one thing that I heard you say you were also talking about coverage
based test executions. That's what I heard, right? So you were talking about
Jest and that it actually knows what parts of this system are covered. And then
you're running only kind of the test cases, which I think is really, really
helpful, especially for, you know, you don't have to execute all the tests that
aren't, that have nothing to do with the system that you're, that you've
changed, right?
So why should they, I would, I should change, right? Because this doesn't make
sense. So it's really cool that the tools can already do that a little bit more.
I know it'd be running a little bit out of time, so I don't know. I have so many
things to talk with you. I want to talk about mocks.

**Kent:** [00:51:24] Ah.

**Michaela:** [00:51:25] talk about, you know, how agnostic is that actually to
the language and things like that.
So I would say I, I'm inviting you again and continue our conversation about so
many other things that I have still on my, on my mind that I would like to get
your input on. And so maybe as a very final thing, I want you to imagine, you
know, a developer that's already doing some testing, right? So let's imagine
they're, they're not new to testing and they're, they're doing a good job, but
mainly at hoc, right?
In, in, in a way when, whenever I'm writing a feature I'm thinking, well, this
is the most important functionality here. Maybe I should write a test for the
that, right? That that's what comes up to my mind. So I'm writing a test case.
I'm turning that into an automated test and I run it as part of my CI and CD.
What are some other steps that I could improve if that's my practice? Are there
some things that you think well, this is what you should improve. Maybe should
you get some code coverage there? Should I have a more systematic way of looking
at my features and thinking about what is actually the risk involved here and
what parts should I test?
Are there some things that you think, well, this person right, which I think is
very, fairly difficult, right? You're writing some code and then you think,
well, this is maybe we should create the test for that. Are there some things
that we can improve from this state? Or are we already done? Is that pretty
good?

**Kent:** [00:52:51] Yeah. Yeah, that's a great question. Great to end on here.
So I have a blog post, like I have many blog posts about testing, but there's
one, one blog post in particular about how to get started with testing and like
how, how to add test to an existing project. And, and then another one about
what, how to know what to test. Those two blog posts I would recommend people go
take a look at.
But the general idea is if you're just starting to add a test to your project,
then think about the types of tests that you could write that would make the
biggest impact would give you the biggest bang for your buck. And in that blog
post, I suggest adding static typing or static typing takes a lot of, of effort,
but I mean, static testing, so like adding ESLint. That doesn't take a lot of
effort and you install a package, you configure some rules, maybe at the start,
a lot of rules are breaking, so you just turn those to warnings and then you can
fix those things over time, time, and then switch them over to errors.
And then the, once you've finished with that, that actually gives you quite a
bit of bang for your buck because the buck is very small. Like it doesn't take a
lot of effort and you get quite a bit of, of benefit from that. And then you go
to the opposite end of the testing trophy, and you write a single end to end
test.
That takes a little bit more effort, but you probably have some way to run the,
the application in CI or at least to run it locally. And so if you, if you don't
have it running in CI yet, at least you could run these end to end tests locally
when you, like, as you're writing your code. And so just right.
Set up the tooling and write one end to end and test that even, even if you can
only run it locally and that will give you an enormous amount of value. Um, so
that's kind of where I would start as you're just getting into things. The the
hardest part for, for getting into testing is getting that tooling set up.
So once the tooling is there, then, then your team will start testing more. And
you'll just feel more natural as, as a tester. And then how to know what to test
that blog post will kind of help you get an idea of, of where to focus your time
and energy. It's not just about code coverage. It's more about this thing I call
use case coverage.
Um, so you can go read the blog posts for more about that. And I talk about all
of this stuff in TestingJavascript.com. So if people really want to get into
testing, then TestingJavascript.com is the place to go. Outside of that, I think
that, you know, it's, it's really great to think of the software tests as any
other software that you write and it should be prioritized exactly the same as
any feature.
So when you are looking at the things that you have to do this week, or maybe
the things that the product manager asks you to do versus things, you know, you
need to do. Sometimes they don't always tell you to do the things, you know, you
need to do like refactor this really confusing code or something, but think of
tests, just exactly the way you think about feature development.
You have feature A and you have a lack of confidence in feature B, which one of
those things should you be focusing your time on? Um, what's more important for
the user? Is it more important that you make sure you don't break feature B or
is it more important that you add feature A and the answer is going to be
different?
I don't just say always test because I'm a testing guy. I say let's, let's be
practical about this and spending time getting confidence in one feature may be
more important, but might not be more important than getting this other feature.
I actually have another blog post about this as well. So seriously, go check out
the blog posts.
So anyway, I would love to come back and talk more. I can be a little long
winded. So yeah, I have lots of thoughts about this.

**Michaela:** [00:56:19] It was really awesome. I learned a lot. I hope my
listeners learned also a lot, and I know that you, I get your newsletter and I
know that every week you are producing a new blog post, so you have a lot of
blog post out there and that I also recommend people to, to look at.
I, I read a lot of them even though I'm not a React or JavaScript, mainly
JavaScript developer, but yeah, it's, it's always interesting. So, I thank you
so much for, for being here, talking with me about, about testing, testing
JavaScript, and I hope that we will do it again. I'm sure we will do it again.
I will definitely invite you again. And so I will link everything in the show
notes, your Testing JavaScript course. You also have a bunch of other courses
and workshops and um, so I will link your whole website there so people can
check out, uh, what you're doing and yeah. Thank you so much for being on my
show, Kent.

**Kent:** [00:57:13] Oh, thank you very much. It's just such a pleasure. I look
forward to coming back.

**Michaela:** [00:57:16] Yeah, thank you. Okay, bye bye.

**Kent:** [00:57:18] Bye!

**Michaela:** [00:57:19] Hey, so when do you think, did you like this new type
of expert episode focusing on just one topic? Would you like me to invite more
experts in the software engineering field? Let me know your thoughts on Twitter
via se_unlocked, or write me an email via mckayla@se-unlocked.com.
And I hope to see you at one of my code review workshops. Bye bye.
