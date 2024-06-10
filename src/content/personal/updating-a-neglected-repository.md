---
title: "Updating a Neglected Repository"
created_date: "2023-10-17"
description: "A short tale about moving my small but minorly popular javascript library called export-to-csv to Bun and heavily refactoring it after many years."
---
I maintain a small and minorly popular javascript library called [export-to-csv](https://github.com/alexcaza/export-to-csv). I originally forked it from [this repository](https://github.com/javiertelioz/angular2-csv), as we were using it at Sportlogiq but needed to fix a bug upstream. When I originally forked it, I also wanted to clean-up the coupling to Angular and refactor the code. Looking at the commit history you can see that the refactor never really happened. I just made the fix, published the package to npm and moved on with my life.

<figure>
<img src="https://s.alexcaza.com/Screen-Shot-2023-10-17-16-52-51.29-1697575976.png" alt="Code change history for the export-to-csv repository">
<figcaption>
Code change history for the export-to-csv repository. You can clearly see there wasn't much activity until recently over the last 7 years.
</figcaption>
</figure>

As time went on, more and more people would open issues, and even a few PRs. Because I wasn't focusing on the library—I had started building my company, Firstbloom, at the time—those issues and PRs were mostly ignored.

Every time I'd open Github, I'd be reminded of the library's existence. "I should really make the time to answer these issues and refactor the library" I'd tell myself. Then I'd get busy with other things and forget about it.

Fast-forward to September 2023. I started feeling a renewed energy towards programming and I felt it was time to capture that and turn `export-to-csv` into something more maintainable with stronger boundaries around what it will and won't do as a library.

This started by fixing a few issues (retaining header order, removing unused/unnecessary code and updating dependencies), and releasing `v0.2.2` ([diff here](https://github.com/alexcaza/export-to-csv/compare/06ed4d7d50af51ca42962620adb5f24050ee719f..f29aa3a669a964459aba3411c6fe65b80e0c8ba9)).

With those fixes in-place for people with `^0.2.1` in their `package.json` files, I set about doing the major refactor and releasing `v1.0.0`. The gist of it is I went from a class-based architecture to something a lot more functional in style. Being inspired heavily by how we work at Unsplash, but without bringing in external libraries for ultimate type-safety. One of the core tenants of `export-to-csv` being that it's a library with zero dependencies itself. In the spirit of keeping things light and small, I want to keep it that way. If you're curious about the shift from class based to functional, you can look at the [pull request](https://github.com/alexcaza/export-to-csv/pull/52) for more details.

With the library in a much more maintainable state, I wanted to keep going down the path of making it fun to keep alive.

At the time of writing this, there's been a lot of chatter about [Bun](https://bun.sh/) in the Javascript community. A few features caught my eye, and this library felt like the perfect test bed for Bun. I'd be able to use it as a build tool (almost replacing `tsc`), a test runner (replacing `jest`) and having faster script execution—not that this library _really_ needs it.

I was curious how the switch from `npm` and `jest` was going to go. Honestly, I was pretty impressed at how seamless things were. A total of 13 files changed and 5 commits to get everything up and running using Bun ([pull request here](https://github.com/alexcaza/export-to-csv/pull/54)). This small change-set may not be applicable to all situations, but I'd highly recommend giving Bun a try. Especially if you've got a smaller library and are using `jest` and/or `rollup` and want to drop some dependencies.

