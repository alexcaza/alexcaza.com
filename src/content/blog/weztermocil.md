---
title: "Releasing Weztermocil"
created_date: "2024-03-27"
description: "After switching to Wezterm from iTerm2, I greatly missed iTermocil. So, I built Weztermocil to fill that void!"
---
_Tl;DR: I created [Weztermocil](https://github.com/alexcaza/weztermocil) after switching to [Wezterm](https://wezfurlong.org/wezterm/index.html) from [iTerm2](https://iterm2.com/index.html) and was sorely missing [iTermocil](https://github.com/TomAnthony/itermocil) after the switch._

I was a fan and user of [iTerm2](https://iterm2.com/index.html) for _years_. It was one of the first pieces of software I installed when I got a new Mac. However, more recently, I've felt it feelsg more slugglish than it used to. Like most software that's been around for a long time, it grows and grows, sprouting complexity and inefficiencies, which may contribute to it's bulkier feeling. As someone who spends a decent chunk of time in his terminal, having a snappy experience is kind of important.


iTerm2 plus iTermocil was great for a while, but after I switched from VSCode to Neovim (and now [Helix](https://helix-editor.com/)), the sluggishness of iTerm2 became even more apparent. Long running build and type-checking processes combined with a text editor led to some less desirable behaviours. I'd often find Neovim would have issues refreshing the buffer after switching tabs, and would sometimes just outright hang, forcing me to close the tab.

During the search for a new terminal emulator, I came across [Wezterm](https://wezfurlong.org/wezterm/index.html). It was well regarded, offered configuration through Lua, and seemed to be considered _very snappy_ by the community. It wasn't long after trying it that I was sold. Neovim no longer had visual issues, it felt _super_ responsive in comparison and the portable config made it easy to share setups between my work and personal Macs. The one thing it was missing, though, was iTermocil.

One thing I love about Wezterm, is that it exposes a cli for window and pane manipulation (among other things). In an effort to get _something_ like iTermocil, I hacked together a shell script that would read a JSON file and used the Wezterm cli to build panes (you can find that script on [Github](https://github.com/alexcaza/wezterm-config/blob/main/weztermocil/weztermocil.sh), if you're curious).

That shell script was _Good Enough™️_ but I couldn't help but crave something more robust that was compatible with iTermocil/Teamocil config files.

At the end of 2023 I set out to build a proper version of Weztermocil—mostly as an excuse to learn Rust. 6 months later of on and off hacking, I'm happy to say v0.1.2 has been released!

It's not perfect—I'm _positive_ there are edge cases—and the Rust code behind it will probably make real Rustaceans cringe, but hey, it's a hell of a lot more robust than the shell script I hacked together originally!

You can find the code for Weztermocil on [Github](https://github.com/alexcaza/weztermocil). The repo's readme also contains install instructions and details about it's API.
<figure>
  <video width="600" height="388" controls muted>
    <source src="/assets/personal/weztermocil/weztermocil-showcase.mp4" type="video/mp4">
  </video>
  <figcaption>Here's a quick video showing it in action.</figcaption>
</figure>

A huge thanks to [Rémi Prévost](https://exomel.com/) for [Teamocil](https://github.com/remi/teamocil) and [Tom Anthony](https://www.tomanthony.co.uk/) for [iTermocil](https://github.com/TomAnthony/itermocil) as I wouldn't have the strong foundation or idea to build Weztermocil without their work!
