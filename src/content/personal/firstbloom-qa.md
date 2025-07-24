---
title: "Your Questions About Firstbloom, Answered."
created_date: "2025-07-24"
description: "
I've been receiving a surprising amount of inbound questions about Firstbloom lately. This year, there seems to be more interest in starting a project like Firstbloom than before. So, I figured I'd take the time to write an FAQ to direct people to and to put out there as a condensed post about trying to build this company.
"
---
I've been receiving a surprising amount of inbound questions about Firstbloom lately. The emails and DMs normally hovered around one or two a year, but for whatever reason, this year there seems to be more interest in starting a project like Firstbloom. So, I figured I'd take the time to write an FAQ based on the conversations I've had with people asking about Firstbloom, and hopefully also give a bit of insight into what trying to build that business was like for me.

## What was Firstbloom?
Firstbloom was an app, much like [ Vivino ](https://www.vivino.com/CA/en/) or [ Untappd ](https://untappd.com/), but for specialty coffee. When I started it as a hobby project in 2017, there were a few other apps that allowed you to track what coffees you were drinking, but they were all focused on private logging. I wanted something that had more of a social element and was also responsible for collecting all the origin data about the coffee I was drinking for me. The vision I had in my head was: an app you could open, find the coffee you brewed, add your recipe, tasting notes, and learn more about the origins, varieties, and cleaning/drying processes of the seed. It would also act as a brewing starting point for you, as people would leave reviews and add recipes of their own.

## What was the goal?
My "secret" mission for Firstbloom was pretty simple: to build the biggest, most reliable database of coffee origins. If you're someone who's gone somewhat deep into coffee, you'll know how _fucking hard_ it is to get reliable information about the producers behind the coffee. Coffee roasters are often the third or fourth hands to touch the green beans, and by the time the information gets to them, it's gone through a heavy amount of broken telephone. Oftentimes, producer names will be misspelled, or attribution will be given to the wrong farm or cooperative. This is _especially_ true for any of the washing stations in Ethiopia.

The vision I had was that you could, as a consumer or roaster, click on the name of a coffee producer and see information about the coffees they've produced, which roasters have roasted coffees from them, which importers worked with them, etc. The same goes for every other piece of coffee information: the varieties, the origins, the cleaning/drying processes. I wanted it to be _as clean and accurate as possible._

Though we only got a very small percentage of the absolutely never-ending amount of coffee information out there, I'm super stoked with what we did manage to get and with how clean it was. But I think this level of accuracy was also why Firstbloom ended up shutting down. If you're curious about the coffee data we gathered, you can check it out on [ GitHub ](https://github.com/alexcaza/firstbloom-data).

## How far did you get?
We reached a few thousand registered users, with a few hundred reviews. Not huge numbers, I know. But I think the main reason we struggled to grow was for two reasons:
1. We didn't put much towards marketing. It was pretty much all organic, with a total of $500 towards marketing of any kind. Had we put more effort into marketing, I'm sure those numbers would have been bigger. Usage and retention probably would have still struggled, though.
2. Because of our rigidity in how the coffee data was stored, we weren't able to keep up with how many coffees exist in the world. People would download the app, try to find a coffee, but wouldn't be able to locate it. We did introduce the concept of a "private" coffee, which would only be visible to you until we added it ourselves, but we just didn't have the bandwidth to keep up with the number of coffees.

I'll go into more detail in the [What was the biggest challenge?](#what-was-the-biggest-challenge) section.

## What was the biggest challenge?
Hands down, the rigidity with which I thought the coffee data should be organized held us back in so many ways. If it were less rigid, and I cared less about it being so relational and normalized, we probably could have grown the database _way more quickly_ and satisfied more of the global user base who wanted to use Firstbloom.

At the time, I was working for Sportlogiq—which is a sports analytics company—and seeing how __painful__ it was to wrangle data after it had been collected turned me off from pushing that down the road. However, I think I overcorrected _just a touch too far._ We did have volunteers helping us out, but it was a very small group of friends who were in the coffee industry that didn't need much onboarding. We could have opened it up, but I don't think we would have been able to onboard the, likely hundreds, of people required to help us out. The idea of letting anonymous, though vetted, people manage the data also felt like too much of a risk for me.

Allowing our user base to self-manage with a guiding hand would have allowed us to grow _so much more quickly._ And, as AI has gotten so much better, we could have __absolutely__ leveraged it to help us clean up our data. There is still a part of me that worries about people adding their Starbucks or Dunkin' Donuts reviews to the app. I don't know how I'd handle that now, other than a heavy-handed moderation approach. I know when I'd speak to people in the coffee community about that problem, a lot of them had concerns about "shutting people down" by denying their Starbucks reviews. But I think there are ways around it, like having private coffees for instances like that. Anyway, implementation details.

If you do decide to build an app like Firstbloom, expect this to be one of your biggest challenges.

## Why did the app shut down?
We kept it around until mid-2020. It wasn't growing quite like we wanted it to—for the reasons mentioned above—and we wanted to try to take a swing at a "venture scale" idea. At this point, we had both left our jobs and were trying to make this work full-time. Looking back, that probably wasn't the best idea. But you live and you learn. Waiting until we had generated some revenue instead of living off our savings probably would have been a better idea.

## What did you do after the app shut down?
My co-founder and I took a step back and started from scratch. We began interviewing people who were curious about specialty coffee and started asking them: what's your biggest challenge?

This led us to realize a few key things:
1. People didn't know how to dial in a bag of coffee. This led to them feeling like they wasted time and money. Their last few cups would be the best, then the coffee would be gone.
2. People felt like their palates were "too stupid" to taste what was written on the bag.
3. People didn't want to spend $16–$25 per bag to gamble on whether they would actually like the flavor or not.

This led us to an idea: we'd offer a subscription service that was tailored to your tastes and also act as on-call coffee concierges. You buy your coffee through us, then for the duration of your subscription, you could message us on WhatsApp for questions and dial-in support. We'd also do video calls with you and run you through a few exercises to help you learn how to brew and taste coffee. Essentially, we'd give you all the tools and variables you could use to tweak your coffee to your liking.

Our business model was simple: customers would go through a quiz we set up online, and we'd recommend different coffees based on their results. We used the data we had gathered with the app version of Firstbloom to help us with recommendations. We partnered with a handful of Canadian roasters who were willing to ship coffees on our behalf directly to the customers. We baked shipping and concierge costs into the subscription price. So, depending on which roaster and how many bags of coffee they got per shipment, our margins would shift. All of the payments were done manually to each roaster at the end of the month, and I'd run a little command line utility I wrote to generate receipts for each roaster.

This found some pretty decent success. The goal was for this to be more of an app-like experience and something we could flesh out with written content, videos, and in-app experiences instead of being so hands-on. Otherwise, the costs just wouldn't make sense. For us, this high-touch approach was a way for us to stay close to the users and make sure we were learning as much as possible from them.

Sadly, this wasn't great for my mental health. The constant on-call nature, dwindling personal budget, and trying to fundraise all at the same time—while being isolated during the pandemic—fucked me up. I burnt out extremely hard and had to step away. My co-founder kept Firstbloom going for about half a year afterward, which I'll always commend him for. It wasn't easy. But, him being much more extroverted as a person, I think he was in a better position for that kind of role than I was.

## Did you make any money?
We did! But only after we pivoted to a coffee subscription + education model. We reached about $2k MRR via word of mouth in a few months once we pivoted. The unit economics weren't the _best_, but we were making something like $6–$10 per subscription, depending on which roaster we shipped from and how many bags of coffee they got a month.

## Did you try to raise any capital?
Yes! No luck. I tried a little bit while it was still an app, but no one would bite. It was a hard vision to sell, especially as something that would be venture scale. After we pivoted to a coffee subscription + education model, we tried again. We got meetings, but people still weren't convinced, despite us reaching just under $2k MRR via word of mouth in a few months once we pivoted.

We did _almost_ have a meeting with Techstars, but I had my burnout _right before_ we got a message saying they were interested in us. So, sadly, we never followed through on that.

## What would you do differently if you tried to build Firstbloom today?
To summarize all of the above points:
1. Be _way less precious_ about the data. Spend more time collecting and worry less about mistakes here and there. Fix as you go, and leverage AI to help you clean up the data.
2. Spend more on marketing. Even if it was localized to Canada only, that would have helped. Create TikToks, Reels, YouTube videos. Spend on social ads, especially places like Reddit and Instagram.
3. Don't go full-time so early. Stick with the app version with the changes above, and stay part-time. Maybe take on contract work to supplement your income while building. Even if it means less income and slightly less focus on Firstbloom, it's better than no income and full focus.
4. Forget venture capital for something like this. Bootstrap all the way! Only _consider_ venture if they're looking at you. Don't go looking for them. Not for an idea like this.
5. Be kinder to yourself. Perfection doesn't exist, and looking for it will only make building less fun and way more stressful.

# Have a question not answered here?
Don't hesitate to reach out to me! I'll happily answer your questions. Just know that what you ask me will _probably_ end up here afterward :)

You can use this Google Form to contact me: https://docs.google.com/forms/d/e/1FAIpQLSebqPsSAVct_8kyqfEIMNDxwy1ifYAYBbFmgT1ih3dUOfU-gQ/viewform?pli=1
