---
title: "How I use Notion to manage my life"
created_date: "2022-02-20"
description: "I set out to create something simple that works well enough for me, without over complicating my life with layers of processes I won’t stick to. It started with me trying to clearly define my intentions, and the guardrails I need in place for myself to succeed."
---

There are loads of posts like this out there. Everyone and their Mom has a way of using Notion to manage their life now. It makes sense. It’s flexible and robust. However, that strength is also it’s greatest weakness in my opinion. At least for someone like me who gets so caught up in [building the bike shed](https://en.wikipedia.org/wiki/Law_of_triviality), instead of the actual task at hand.

That’s why, this year, I set out to create something simple that works _well enough for me_, without over complicating my life with layers of processes I won’t stick to. It started with me trying to clearly define my intentions, and the guardrails I need in place for myself to succeed.

I started by journalling out what I needed and the typically things I fail that I needed to safeguard against. Something I wanted to be sure I’d let myself do this time around, is only systematize what needed to be systematized, when it needed to be systematized. No premature optimisations. This is the list I came up with:

1. Adding a new item should be quick and painless
2. Getting the info I need, when I need it, should be easy
3. Allow me to review when things were accomplished
4. Properly setup my daily, weekly, monthly and yearly goals
5. Be reminded of those goals when selecting my tasks for the day
6. Be flexible enough to evolve with my needs as they change

Out of the methods I’d tried in the past the one that stuck with me the most is the Getting Things Done (GTD) methodology. Particularly, the review process. If you’re unfamiliar with the GTD methodology, I highly recommend this pragmatic 15 minute intro guide: [https://hamberg.no/gtd](https://hamberg.no/gtd).

My one failing has been keeping up with the weekly review. So far it’s been a few weeks and I haven’t missed it yet but I can tell it’s not lodged deeply into any weekly routine I have yet. And, I tend to struggle with routines outside of a daily schedule, so I’m hoping to figure that one out soon. If anyone reading this has advice on setting up routines outside of a 24 hour period, I’d love to learn more!

Though GTD covers the core principles of what I’m after, I decided against using the entire system for simplicity sake. I also found that with GTD, the greater context of my tasks get lost. I have a hard time seeing the forest for the trees when I’m hyper focused on daily todos. It makes losing the _why_ behind certain tasks a little too easy for me. That’s why I only kept a few core parts:

1. The idea of an “Inbox” or “In” list
2. The “Next Actions” list
3. Weekly Reviews

Adding to these 3 points, I want to make reviewing on monthly and yearly time scales easier. This is where Notion really shines with it’s databases. Being able to create goals on a longer time scale and referencing them within tasks lets me create a graph of where my time is being spent, and how effective I’m being at accomplishing those goals. Which, I’ll talk about how that’s setup in the next sections.

## What’s the setup?

I have 3 main pages with 2 databases setup. That’s it. The rest of the pages have to do with writing longer form content like blog ideas, journal entries or meeting notes. Though, most of my journal entries or meeting notes end up living in GoodNotes or Nebo on my iPad now, so I don’t use it for much long-form content other than blog posts.

I’ve blocked out some task & goal titles using black bars since they contain sensitive information.

I’ll start with the Databases since each page is built based on them.

### Goals

![Goals___Board_view__Doing_.png](/assets/personal/simplicity-in-life-management/Goals___Board_view__Doing_.png)

Goals are “end states” I’d like to achieve. The way I define goals isn’t unique, but what having them defined in this way lets me do is associate each one to other tasks and goals. This heirarchy lets me understand what each component is building towards. I’ve tried to set a limit for myself by only allowing 3 goals in each time horizon and domain (work or personal). This constraint will reduce the chances I have too much on my plate at a given time. It forces me to prioritize based on what’s most important in my life. My goals are allowed to change at any time. After all, I’m human, and our needs have to adapt. If I finish a goal _before_ the time limit, I **will not** add a new one. That just means I have more time to focus on the other things. The same goes for removing a goal if I decide it no longer serves a purpose.

Each year, month, and week I’ll sit down to review what I’d like to accomplish, and break it out into smaller components.

Let’s take my “Yearly” goal of “52 Weeks of Creation” for example. Every month, I’ll sit down and perform a monthly goal review and see if there are month-level goals I want to achieve for the yearly creation goal I’ve set. If there are, I’ll break it down into a monthly component. Then every week, I’ll look at each monthly, or yearly goal without monthly components, and define week-level achievements.

**Anatomy of a goal**

![Goals___All.png](/assets/personal/simplicity-in-life-management/Goals___All.png)

The properties are fairly simple, with most of the complexity happening in the “Time Left” property, which is just a formula to calculate how many days are between “To Accomplish By” and today’s date. “Actions” is a “Relation” property type that will point to any tasks assigned to this goal directly. Parent Goal & Child Goals are any goals of a different “Time Horizon” that relate to the goal I’m looking at.

“Completed on Time” is a check-mark I manually tick off if I complete a goal _before_ I reach the deadline set. This way I can go back and analyze what types of goals I drag ass on. I’d love to automate checking that box when a goal “Status” is marked as “Done” but unfortunately Notion’s feature set doesn’t allow for side-effects based on interactions. I’d probably have to reach for something like Zapier to accomplish that. If anyone has any tips, I’d love to know!

### Action Items

![Action_items.png](/assets/personal/simplicity-in-life-management/Action_items.png)

The “Action Items” database is just that, a list of every task I’ve added. Each of the pages (Inbox, Next Actions and Today at a Glance) use a Linked Database filtered by different criteria to ensure each of those pages keeps a specific focus.

**The anatomy of a task**

![Action_items.png](/assets/personal/simplicity-in-life-management/Action_items%201.png)

A task itself is pretty simple. The title of the task is the action I need to perform, and the content of the page, if required, contains any extra context I might need.

You might notice I have “Domain” listed three times. The first “Domain” is the domain that’s pulled from the goal, the other property “Domain (Today)” is for tasks that don’t fit a specific goal but still belong to one of the Domains. As you’ll see below in the filtered views of the “Next Actions” database, I group tasks by “Domain (Group)” which is a formula that takes the text from the ones that’s filled so I can group the tasks properly.

The 3 pages are:

1. Inbox
2. Next Actions
3. Today at a Glance


## Inbox

![Inbox.png](/assets/personal/simplicity-in-life-management/Inbox.png)

My Inbox is the “In list” in the GTD methodology. It’s where I dump any unprocessed action item I need to get done. Sometimes it’ll contain ideas as well. Basically, anything that I want to remember to process but at a later date. A good example of that is sometimes, when I’m in bed, I’ll get an idea for a blog post, product, etc. I want a place I can quickly add something and know that tomorrow morning I’ll deal with whether or not it’s actually important. It lets me offload any mental processing to when I’m in a state to actually do it.

The setup is pretty simple. It contains reminders of the intent behind this phase of the process, a link to the next step of processing my “Next Actions”, then a list of my goals grouped by domain.

Having my goals always visible help me triage my inbox items with a more critical eye. If a task doesn’t fit into those goals, do I _really_ need to do it? Unfortunately, most times they do still need to be done, but it’s always nice to call the things you’re doing into question. Why waste time on unimportant things if you don’t have to?

Processing an inbox item typically goes as follows:

1. Open the page and rename the title to [something more “actionable”](https://hamberg.no/gtd#processing-the-in-list)
2. Set the progress to “Next Action”
3. Change “Review State” to “Action”
4. Attach a goal (if applicable) and set the “Domain” if no goal is selected
5. Add any extra context to the body of the page that the action might require

Like in the GTD method, something I do my best to hold to is, if the item can be done in ~2 minutes, then do it immediately. I often have tasks to contact someone about the status of something, or reach out to a friend I haven’t spoken to in a while. Those types of tasks typically get knocked out during processing. In which case, I immediately set them to “Done” and set the “Marked Done” date to today.

Once my inbox is empty, I move on to the “Next Actions” list.

## Next Actions

![Next_Actions.png](/assets/personal/simplicity-in-life-management/Next_Actions.png)

The setup is almost identical, except that I’m now looking at things in a card view split by domain. This gives me a glance at what my backlog is like for tasks. This is where priority & time start to play a part in my planning for the week.

I tend to ping-pong between this page and the “Today at a Glance” page to make sure I’m not over-committing what I can do in the day.

I’ve internalized the [Eisenhower Matrix](https://www.eisenhower.me/eisenhower-matrix/) when it comes to organizing my tasks. I’ll typically asses a task based on how long ago it was added, and if it’s been over 2 days that I haven’t touched it, I’ll strongly re-consider its value. Those tasks might fall into the “Don’t Do” bucket of the matrix. If it’s a task I’ve been dragging my feet on but is still important—this mostly happens with personal home tasks—I’ll do my best to kick my ass into gear and get it done today. After using time, I’ll asses the goal the task is attached to. Is it a goal with a deadline coming up? I’ll try to complete items that fit that criteria first.

Tasks that should be done today get marked as “Doing Today” which get moved to my “Today at a Glance” board. Tasks that don’t get moved stay here so that tomorrow I can go back and look through them again to re-prioritize.

## Today at a Glance

![Today_at_a_Glance.png](/assets/personal/simplicity-in-life-management/Today_at_a_Glance.png)

This page is where my focus lands for the rest of the day. I try to keep this open on my iPad at all times so I can quickly glance at what I should be working on _right now_. I haven’t been diagnosed, but I strongly suspect I have some form of attention deficit, since I can get sidetracked _incredibly_ easily.

This page forces me to reassess where I’m spending my time during the day, and gently remind me that there’s a task I have “In Progress” that I should be crossing off my list.

For the most part it works. There have been times this past week where meetings run long or I’m a little more tired/scattered, so I lose sight of this page. I haven’t yet figured out the optimal way to keep this list top-of-mind while working.

## What can be improved?

I still don’t have a great review system setup. This project is ongoing, so I didn’t expect to have one _until_ I needed one. Outside of weekly reviews, I’ve yet to hit my first month using this system, so I’m sure it’ll evolve as time goes on.

I’d love to be able to sit down and create a productivity/focus chart with the data from these databases. It’ll help me understand where my time was spent month over month, and the distribution of tasks with and without a goal. I might even be able to see how long tasks take me to complete on average, and by looking at the titles, be able to start classifying tasks by “type” of work. Do I drag on admin work? Engineering work? Product work? What seems to excite me vs drain me?

Part of what I plan on refining over the next few months is a proper retrospective for myself. I’ll be sure to write about the journey, since I think it would be fun, and meta, to reflect on a retrospective.

As I said throughout this post, if you’re reading this and you’re screaming at your screen with ideas, feedback or questions, feel free to email me: alex [at] alexcaza [dot] com.
