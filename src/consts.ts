// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Alex Caza";
export const SITE_DESCRIPTION =
  "I'm a product engineer with over 15 years experience. I'm currently exploring building sustainable product processes, businesses and what it means to be a user-centred engineer.";

// TODO: There's probably a better way to make collections typesafe
export enum Collections {
  blog = "personal",
}

// TODO: There's probably a better way to make URLs typesafe or genertic
export const mkBlogLink = (slug?: string): string =>
  slug ? `/personal/${slug}` : "/personal";
export const mkHomeLink = (): string => "/";
export const mkResumeLink = (): string => "/resume";
export const mkNowLink = (): string => "/now";
export const mkLinksLink = (): string => "/links";
