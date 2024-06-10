---
title: "There's no money in open source"
created_date: "2024-03-29"
description: "An essay that explores the future of monetizing open source, why I think venture capital should get into the space more, and how I believe the future will be led by open source-first companies."
---
If you've worked in tech for a while, you've probably heard the phrase "There's no money in open source work." Hundreds of millions—if not billions—of open source libraries, frameworks, tools, operating systems, etc. exist in the world, and _very few of them_ earn enough to make a living or pay a team [^1]. That's been the status quo for pretty much as long as I've been in tech. Over the last few years, however, there seems to be a shift towards more companies opening up their offerings as open source tools or raising money for their open source projects: [Posthog](https://posthog.com/) and [Effect-TS](https://effect.website/) to name a couple. There's even a list of open source software investors in an "awesome" list on [Github](https://github.com/CrowdDotDev/awesome-oss-investors), along with many of the projects they've invested in and their preferred company stage.

This shift in thinking around open source doesn't come as a huge surprise to me if I sit and think about it. There's a growing appetite for privacy as we digitize further [^2], and one of the easiest ways to bake privacy into your product is to open source it and allow for self-hosting; returning ownership of the data back into the hands of the consumer.

Larger market conditions are also probably going to push this trend further. Operational costs of digital businesses are growing [^3] and throw higher-than-normal inflation into the mix—especially in the U.S. where most popular SaaS/PaaS companies live—and those costs continue to rise as each piece of software in your stack goes up in price.

When you're a young company, solo founder or hobby hacker, the trade-off between spending time vs money is always top of mind [^4]. Typically you want to throw money at problems around critical systems that aren't your core product—think project/product management, operations, scaling, etc.—so you can invest time into solving the core "job to be done" you've decided to tackle. But, the overarching trends of higher costs are making that trade-off harder to swallow. As free plans become less valuable—or non-existent—and SaaS subscriptions reign supreme [^5], you might start biasing towards building in-house or self-hosting where you can, to cut costs.

# Monetization in open source

Open source has traditionally been dominated by two archetypes:
1. The benevolent dictator for life (BDFL)
2. The internal tool that goes open source by a major company

In the last few years, we've seen a 3rd archetype start to emerge: the open-source-first company.

While thinking of this third archetype, I couldn't help but wonder what the business model would be for them. Three models came to mind:
1. The giant company donors model
2. The managed model
3. The consulting model

## The giant company donors model
This is the oldest model of the three and has been around for quite a while. Basically, you release open source software, and it gains enough notoriety that huge companies with massive budgets start relying on it. To keep the BDFL around for as long as possible, and encourage them to grow a team to keep the project alive, they inject thousands of dollars into the project.

A large handful of projects succeed through this model, but it's definitely the hardest one on the list to achieve. Though, once you've got the big company reliance, it seems pretty hard to mess up.

## The managed model
After the giant company donor model, the managed model is the most frequently used. Typically the company/people behind the open source project offer a paid, hosted-by-them, version of their software for you to use. It's the SaaS arm of their business. You can see this pretty much everywhere. Posthog, MongoDB, GitLab, and Apollo are all examples of this model.

## The consulting model
The consulting model borrows from older B2B software sales. Except in this model, you build the software and the company only pays for support or on-premises training. While I haven't come across this model as the _sole_ revenue generating aspect of an open source project, it's often part of the deal with the giant company donor model.

The growth of these models feels apparent. I don't have hard data to back it up, but it seems like more companies with open source self-hosted options that monzetize in one of these ways is on the rise. If I were an investor, I'd probably make my focus on open source software with a model similar to these. The exits are likely to be smaller, and fewer, but the impact is likely to be much greater.

# Where this could go
Looking at the software I've listed, a lot of it is related to developer or product tooling. But, I can see it expanding much further beyond. If anything, I think the model extending beyond developer tooling would be a disruption to the way we currently think about software systems. We're so used to monopolistic systems in our digital lives—Google, Apple, Meta—that there's an increasing want for distributed or federated software or services. Another form of [unbundling](https://stratechery.com/concept/business-models/bundling-and-unbundling/), if you will.

I think it's also fair to say that software development _is becoming more mainstream._ Some people are attracted to problem-solving, others to the financial aspects. Whatever the case, the interest in programming is increasing [^6], and I suspect many people will be interested in having the choice to participate in the creation, evolution and hosting of the software they use daily.

If I were a venture capitalist, I'd probably make my investment thesis a spin-off of this document. There's a lot of power behind open-source—it already powers so much of what we use daily [^7]— and I think the future will be a more open one. Well, I hope it will be, and I'd want to be a part of making that true.

# The ethical side
I'd be remiss to not bring up the ethical side of monetizing open source work, or using open source work in monetized projects.

As I said above, _a lot_ of the web is built on open source work. While this is perfectly fine legally—assuming you're paying attention to the licenses of the open source software you're using—you're often taking advantage of many people's unpaid work.

As someone with a [very mildly popular open source library](https://alexcaza.com/export-to-csv), it can feel not-so-great to have to deal with people opening issues or asking questions without any form of compensation. That's not to say there isn't joy in building and releasing something for free--I wouldn't have done it otherwise. However, it can feel like a chore to maintain (which is why there was a 7-year gap between updates from me). It's easy to pause work on your project when there's no monetary incentive to do so. Burnout in open source is also super common (so common that Github made a guide on managing burnout [^8]; thanks, late-stage capitalism).

I bring this up because as the monetization of open source projects expands, a new form of value extraction and concentration presents itself. Core-maintainers will likely—hopefully—be compensated well, but there will probably be a push for consumers to contribute back to the project, oftentimes for free.

That's not to say consumers who contribute heavily may never be rewarded—it could turn into a hiring funnel as well—but if my history within a capitalist-leaning society has shown me anything, it's that an opportunity for value extraction rarely goes unexploited. So, I'd hope that we'd be mindful of this as open source continues to grow and monetize itself, but I won't hold my breath.

If your company is in a financial position to contribute financially to open source projects you use, please consider doing so! It's a win-win for everyone involved and can ease the maintenance burden for the creators/contributors of the software.

[^1]: [https://staltz.com/software-below-the-poverty-line.html](https://staltz.com/software-below-the-poverty-line.html) 
[^2]: [https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/the-consumer-data-opportunity-and-the-privacy-imperative](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/the-consumer-data-opportunity-and-the-privacy-imperative)
[^3]: [https://www.forbes.com/sites/davidprosser/2023/09/22/revealed-the-hidden-cost-of-the-saas-revolution-for-businesses/?sh=48aeb0a36694](https://www.forbes.com/sites/davidprosser/2023/09/22/revealed-the-hidden-cost-of-the-saas-revolution-for-businesses/?sh=48aeb0a36694)
[^4]: [https://marcbarros.com/the-value-of-a-founders-time/](https://marcbarros.com/the-value-of-a-founders-time/)
[^5]: [https://explodingtopics.com/blog/number-of-saas-companies#new-saas-startups-launched](https://explodingtopics.com/blog/number-of-saas-companies#new-saas-startups-launched)
[^6]: [https://www.forbes.com/sites/forbestechcouncil/2023/03/29/the-software-developer-is-dead-long-live-the-software-developer](https://www.forbes.com/sites/forbestechcouncil/2023/03/29/the-software-developer-is-dead-long-live-the-software-developer)
[^7]: [https://www.linuxfoundation.org/blog/blog/a-summary-of-census-ii-open-source-software-application-libraries-the-world-depends-on](https://www.linuxfoundation.org/blog/blog/a-summary-of-census-ii-open-source-software-application-libraries-the-world-depends-on)
[^8]: [https://opensource.guide/maintaining-balance-for-open-source-maintainers](https://opensource.guide/maintaining-balance-for-open-source-maintainers)
