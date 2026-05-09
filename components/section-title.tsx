export function SectionTitle({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-center gap-4 text-3xl font-black tracking-[0.15em] md:text-5xl">
      <span aria-hidden="true">{icon}</span>
      <span>{children}</span>
    </h2>
  );
}
