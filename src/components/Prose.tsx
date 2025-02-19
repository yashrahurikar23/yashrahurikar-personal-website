import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-md prose-blue max-w-none prose-p:text-primary prose-headings:text-primary"
      )}
    >
      {children}
    </div>
  );
}
