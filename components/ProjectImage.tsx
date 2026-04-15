export default function ProjectImage({
  title,
  domain,
  color,
  className = "",
}: {
  title: string;
  domain: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl flex items-end p-6 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, ${color}08 50%, ${color}20 100%)`,
        border: `1px solid ${color}15`,
      }}
    >
      <div>
        <span className="text-xs font-light text-muted uppercase tracking-wider block mb-1">{domain}</span>
        <span className="font-bold text-lg">{title}</span>
      </div>
      {/* Decorative elements */}
      <div
        className="absolute top-4 right-4 w-20 h-20 rounded-xl opacity-[0.07]"
        style={{ backgroundColor: color }}
      />
      <div
        className="absolute top-10 right-10 w-12 h-12 rounded-lg opacity-[0.05]"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
