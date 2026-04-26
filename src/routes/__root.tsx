import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Tanganyika Watch is a satellite and AI system that monitors illegal gold mining in the Democratic Republic of Congo." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Tanganyika Watch is a satellite and AI system that monitors illegal gold mining in the Democratic Republic of Congo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Tanganyika Watch is a satellite and AI system that monitors illegal gold mining in the Democratic Republic of Congo." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8c5ff2c-ffe3-4300-be85-8a9b00e0cb13/id-preview-8a34d963--35eabe43-bcde-4357-850a-2688d9ce6de4.lovable.app-1777197105017.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8c5ff2c-ffe3-4300-be85-8a9b00e0cb13/id-preview-8a34d963--35eabe43-bcde-4357-850a-2688d9ce6de4.lovable.app-1777197105017.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider defaultLang="fr">
      <Outlet />
    </LanguageProvider>
  );
}
