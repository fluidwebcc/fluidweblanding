import { useEffect, useState } from "react";
import { teamMembers, type TeamMember } from "../data/team";

function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i];
    const b = next[j];
    if (a === undefined || b === undefined) continue;
    next[i] = b;
    next[j] = a;
  }
  return next;
}

function pickDistinct(count: number): TeamMember[] {
  return shuffle(teamMembers).slice(0, Math.max(0, Math.min(count, teamMembers.length)));
}

function pickReplacement(current: readonly TeamMember[]): TeamMember | null {
  const shown = new Set(current.map((person) => person.name));
  const pool = teamMembers.filter((person) => !shown.has(person.name));
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)] ?? null;
}

/** Random faces for a cluster of peek slots; swaps them while the section stays mounted. */
export function useCyclingPeekPeople(count: number): TeamMember[] {
  const [people, setPeople] = useState<TeamMember[]>(() => pickDistinct(count));
  const [peopleCount, setPeopleCount] = useState(count);

  if (peopleCount !== count) {
    setPeopleCount(count);
    setPeople(pickDistinct(count));
  }

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    for (let i = 0; i < count; i++) {
      const period = 4800 + i * 850 + Math.random() * 3200;
      const start = setTimeout(() => {
        intervals.push(
          setInterval(() => {
            setPeople((prev) => {
              const incoming = pickReplacement(prev);
              if (!incoming) return prev;
              const next = [...prev];
              next[i] = incoming;
              return next;
            });
          }, period),
        );
      }, 1600 + Math.random() * 2400 + i * 450);
      timeouts.push(start);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, [count]);

  return people;
}
