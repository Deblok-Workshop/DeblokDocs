import { pageTree } from "./source";
import type { DocsLayoutProps } from "fumadocs-ui/layout";
import Link from "fumadocs-core/link";
const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/docs",
    label: "Docs",
  },
];
export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    title: (
      <>
        <span className="ml-3 font-semibold max-md:hidden text-lg text-nowrap">
          Deblok
        </span>
      </>
    ),
    children: (
      <>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-foreground text-muted-foreground text-sm duration-300"
          >
            {link.label}
          </Link>
        ))}
      </>
    ),
    transparentMode: "top",
    githubUrl: "https://deblok.link/github",
  },
};