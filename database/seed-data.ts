interface seedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createAt: number;
}

export const seedData = {
  entries: [
    {
      description:
        "Pendiente: Laborum qui laboris enim tempor. Culpa esse tempor amet do reprehenderit laborum ex irure laborum tempor. Proident est laboris incididunt nostrud veniam elit eu. Laborum occaecat occaecat fugiat ut laborum et dolore ullamco sint proident. Amet incididunt irure tempor Lorem nisi qui ipsum culpa adipisicing enim ex ad proident. Veniam Lorem nisi magna et ex voluptate aute ex mollit adipisicing.",
      status: "pending",
      createAt: Date.now(),
    },
    {
      description:
        "En-Progreso: Nisi nostrud do ex occaecat commodo occaecat duis.",
      status: "in-progress",
      createAt: Date.now() - 1000000,
    },
    {
      description: "Terminadas: Nostrud nulla ad aute eiusmod cillum id.",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};
