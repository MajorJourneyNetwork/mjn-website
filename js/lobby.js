
/* Nexveil Concord — Reception NPC System */

const receptionNPCs = [
  { id: "elio", name: "Elio", weight: 1 },
  { id: "velina", name: "Velina", weight: 1 },
  { id: "rosvain", name: "Rosvain", weight: 1 }
];

const STORAGE_KEY = "nexveil_reception_npc";

function getReceptionNPC() {
  const savedId = sessionStorage.getItem(STORAGE_KEY);

  const existing = receptionNPCs.find(
    npc => npc.id === savedId
  );

  if (existing) return existing;

  const totalWeight = receptionNPCs.reduce(
    (sum, npc) => sum + npc.weight, 0
  );

  let random = Math.random() * totalWeight;

  for (const npc of receptionNPCs) {
    random -= npc.weight;

    if (random < 0) {
      sessionStorage.setItem(STORAGE_KEY, npc.id);
      return npc;
    }
  }
}
