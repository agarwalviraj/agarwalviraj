import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/global.css";
import a from "../node_modules/swiper/swiper-bundle.min.css";
import b from "../node_modules/swiper/modules/pagination.min.css";
import MainContentProvider from "./store/MainStore";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: a },
  { rel: "stylesheet", href: b },
  // {
  //   rel: "stylesheet",
  //   href: "https://cdn.jsdelivr.net/npm/swiper@11.0.4/swiper-bundle.min.css",
  // },
  {
    rel: "icon",
    href: "/Logo.png",
    type: "image/png",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Viraj Agarwal | Portfolio" },
    {
      property: "og:title",
      content: "Portfolio of Viraj Agarwal",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainContentProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MainContentProvider>
      </body>
    </html>
  );
}
