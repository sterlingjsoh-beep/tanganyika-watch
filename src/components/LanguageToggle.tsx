import { useT } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, setLang, t } = useT();

  return (
    <div
      role="group"
      aria-label={t("langLabel")}
      className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-sm"
    >
      {(["fr", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
