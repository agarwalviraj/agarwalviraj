import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useSearchParams,
} from "@remix-run/react";
import styles from "./styles/global.css";
import swiper_1 from "../node_modules/swiper/swiper-bundle.min.css";
import swiper_2 from "../node_modules/swiper/modules/pagination.min.css";
import MainContentProvider from "./store/MainStore";
import posthog from "posthog-js";
import { useEffect, useState } from "react";

export const loader: LoaderFunction = ({ context }) => {
  return {
    env: {
      POSTHOG_KEY: (process.env as any)?.POSTHOG_KEY,
      POSTHOG_HOST: (process.env as any)?.POSTHOG_HOST,
    },
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: swiper_1 },
  { rel: "stylesheet", href: swiper_2 },
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
  const data = useLoaderData<any | null>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [posthogLoaded, setPosthogLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (data && data?.env?.POSTHOG_KEY && data?.env?.POSTHOG_HOST) {
      posthog.init(data.env.POSTHOG_KEY, {
        api_host: data.env.POSTHOG_HOST,
        autocapture: true,
        loaded: () => {
          posthog.debug();
          setPosthogLoaded(true);
        },
      });
    }
  }, [location]);

  useEffect(() => {
    console.log({ posthogLoaded });

    if (posthogLoaded) {
      posthog.capture("$pageview");
    }
  }, [posthogLoaded, location.pathname, searchParams.get("apps")?.toString()]);

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
