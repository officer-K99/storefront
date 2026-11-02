import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description?: string;
  tone?: "default" | "error";
};

export function StateMessage({
  icon: Icon,
  title,
  description,
  tone = "default",
}: Props) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-zinc-800 px-6 py-16 text-center">
      <Icon
        className={`size-10 ${tone === "error" ? "text-red-400" : "text-zinc-500"}`}
        aria-hidden
      />
      <h2 className="text-lg font-medium">{title}</h2>
      {description && (
        <p className="max-w-sm text-sm text-zinc-400">{description}</p>
      )}
    </div>
  );
}
