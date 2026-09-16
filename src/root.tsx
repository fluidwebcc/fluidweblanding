import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./index.css";
import NotFoundPage from "./pages/NotFoundPage";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/favicon.png?v=2" },
  { rel: "apple-touch-icon", href: "/favicon.png?v=2" },
  {
    rel: "preload",
    as: "image",
    href: "/videos/hero-waves.webp",
    type: "image/webp",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  let message = "Something went wrong";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.statusText;
    details = error.data || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-16 text-white">
      <h1 className="text-3xl font-bold">{message}</h1>
      <p className="mt-3 text-white/70">{details}</p>
    </main>
  );
}
