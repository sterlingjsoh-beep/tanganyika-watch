import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AlertTriangle, Satellite, Plane, Send, FileText, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanganyika Mining Watch" },
      {
        name: "description",
        content:
          "Satellite + AI monitoring of illegal gold mining in Tanganyika province. Bilingual FR/EN dashboard.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useT();

  return (
    <div className="min-h-screen bg-background text-foreground" lang={lang}>
      {/* Top bar */}
      <header className="border-b border-border/60 bg-card/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Satellite className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">{t("brand")}</h1>
              <p className="text-xs text-muted-foreground">{t("tagline")}</p>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.2fr_1fr]">
        {/* LEFT: map mock */}
        <section
          aria-label={t("mapIllegalSites")}
          className="relative min-h-[460px] overflow-hidden rounded-2xl border border-border bg-[radial-gradient(ellipse_at_top,oklch(0.32_0.06_150),oklch(0.2_0.03_230))] p-6 shadow-xl"
        >
          {/* Satellite labels */}
          <div className="absolute left-4 top-4 flex flex-col gap-2 text-xs">
            <Pill icon={<Satellite className="h-3 w-3" />} label={t("satPlanet")} tone="cyan" />
            <Pill icon={<Satellite className="h-3 w-3" />} label={t("satIceye")} tone="cyan" />
            <Pill label={t("satAcquisition")} tone="muted" />
          </div>

          {/* Lake label */}
          <div className="absolute right-6 top-1/3">
            <Pill icon={<MapPin className="h-3 w-3" />} label={t("mapLake")} tone="blue" />
          </div>

          {/* Map annotations */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 text-center">
            <Pill label={t("mapIllegalSites")} tone="red" pulse />
            <Pill label={t("mapIllegalRoads")} tone="ochre" />
            <Pill label={t("mapLegalConcessions")} tone="green" />
          </div>

          {/* Drone feed bottom-left */}
          <div className="absolute bottom-4 left-4">
            <Pill icon={<Plane className="h-3 w-3" />} label={t("droneFeed")} tone="ochre" />
          </div>

          {/* Field team bottom-right */}
          <div className="absolute bottom-4 right-4 max-w-[14rem] rounded-md bg-background/70 px-3 py-2 text-right text-xs text-foreground backdrop-blur">
            {t("fieldTeam")}
          </div>
        </section>

        {/* RIGHT: dashboard mock */}
        <section
          aria-label={t("dashboardTitle")}
          className="rounded-2xl border border-primary/40 bg-card shadow-xl"
        >
          <div className="flex items-center justify-between rounded-t-2xl border-b border-border bg-background/60 px-4 py-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
              {t("dashboardTitle")}
            </h2>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
            </div>
          </div>

          <div className="space-y-4 p-4">
            {/* Change detection */}
            <Panel title={t("changeDetectionTitle")}>
              <div className="grid grid-cols-2 gap-3">
                <Thumb label={t("before")} variant="before" />
                <Thumb label={t("after")} variant="after" />
              </div>
            </Panel>

            <div className="grid grid-cols-2 gap-3">
              {/* Chart */}
              <Panel title={t("chartTitle")}>
                <div className="flex h-24 items-end gap-4 px-2">
                  <Bar label={t("chartMining")} heightPct={88} tone="destructive" />
                  <Bar label={t("chartAgriculture")} heightPct={28} tone="secondary" />
                </div>
              </Panel>

              {/* Geofencing alert */}
              <Panel title={t("geofencingTitle")}>
                <div className="flex gap-2 rounded-md border border-destructive/60 bg-destructive/15 p-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
                  <div className="text-xs leading-snug">
                    <p className="font-bold text-destructive-foreground">{t("alertHeader")}</p>
                    <p className="text-foreground/90">{t("alertLine1")}</p>
                    <p className="text-foreground/90">{t("alertLine2")}</p>
                    <p className="text-muted-foreground">{t("alertLine3")}</p>
                  </div>
                </div>
              </Panel>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Send className="h-3.5 w-3.5" />
                {t("btnSendAlert")}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                <FileText className="h-3.5 w-3.5" />
                {t("btnGenerateReport")}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom bands */}
      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-2 px-6 py-4 text-xs text-muted-foreground sm:grid-cols-2">
          <p>
            <span className="font-bold text-primary">{t("acquisitionBand").split(":")[0]}:</span>
            {t("acquisitionBand").split(":").slice(1).join(":")}
          </p>
          <p className="sm:text-right">
            <span className="font-bold text-primary">{t("analysisBand").split(":")[0]}:</span>
            {t("analysisBand").split(":").slice(1).join(":")}
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Local presentational helpers ---------- */

function Pill({
  icon,
  label,
  tone = "muted",
  pulse = false,
}: {
  icon?: React.ReactNode;
  label: string;
  tone?: "red" | "ochre" | "green" | "blue" | "cyan" | "muted";
  pulse?: boolean;
}) {
  const toneClass = {
    red: "bg-destructive/85 text-destructive-foreground border-destructive",
    ochre: "bg-accent/85 text-accent-foreground border-accent",
    green: "bg-secondary/85 text-secondary-foreground border-secondary",
    blue: "bg-[oklch(0.35_0.08_240)] text-foreground border-[oklch(0.55_0.12_240)]",
    cyan: "bg-card/80 text-primary border-primary/60",
    muted: "bg-card/70 text-foreground border-border",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${toneClass} ${
        pulse ? "animate-pulse" : ""
      }`}
    >
      {icon}
      {label}
    </span>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border/70 bg-background/60 p-3">
      <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary/90">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Thumb({ label, variant }: { label: string; variant: "before" | "after" }) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div
        className={`relative h-20 ${
          variant === "before"
            ? "bg-[radial-gradient(circle_at_30%_40%,oklch(0.45_0.1_150),oklch(0.28_0.06_150))]"
            : "bg-[radial-gradient(circle_at_60%_50%,oklch(0.5_0.18_30),oklch(0.3_0.08_150))]"
        }`}
      >
        {variant === "after" &&
          [15, 35, 55, 70, 80].map((x, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-destructive"
              style={{ left: `${x}%`, top: `${20 + (i % 3) * 20}%` }}
            />
          ))}
      </div>
      <p className="bg-card px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
        {label}
      </p>
    </div>
  );
}

function Bar({
  label,
  heightPct,
  tone,
}: {
  label: string;
  heightPct: number;
  tone: "destructive" | "secondary";
}) {
  const bg = tone === "destructive" ? "bg-destructive" : "bg-secondary";
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div className="flex h-full w-full items-end">
        <div className={`w-full rounded-t-sm ${bg}`} style={{ height: `${heightPct}%` }} />
      </div>
      <span className="text-[10px] font-semibold text-muted-foreground">{label}</span>
    </div>
  );
}
