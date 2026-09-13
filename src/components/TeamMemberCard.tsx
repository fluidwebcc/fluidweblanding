import type { TeamMember } from "../data/team";

export function TeamMemberCard({ person }: { person: TeamMember }) {
  return (
    <div className="glow-card group overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition hover:border-white/25 hover:bg-white/6">
      <div className="aspect-square bg-[#16194E]/80">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-semibold">{person.name}</div>
        <div className="mt-0.5 text-sm text-white/50">{person.role}</div>
      </div>
    </div>
  );
}
