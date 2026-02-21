export type Subcategory = {
  id: string;
  name: string;
  subcategories?: { id: string; name: string }[];
};

export type Department = {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories: Subcategory[];
};

export const departments: Department[] = [
  {
    id: "tools",
    name: "Tools",
    icon: "wrench",
    description: "Power tools, hand tools, and measuring equipment for every project",
    subcategories: [
      { id: "power-tools", name: "Power Tools", subcategories: [
        { id: "drills", name: "Drills" },
        { id: "saws", name: "Saws" },
        { id: "sanders", name: "Sanders" },
      ]},
      { id: "hand-tools", name: "Hand Tools", subcategories: [
        { id: "hammers", name: "Hammers" },
        { id: "screwdrivers", name: "Screwdrivers" },
        { id: "pliers", name: "Pliers" },
      ]},
      { id: "measuring", name: "Measuring", subcategories: [
        { id: "tape-measures", name: "Tape Measures" },
        { id: "levels", name: "Levels" },
        { id: "squares", name: "Squares" },
      ]},
    ],
  },
  {
    id: "lumber",
    name: "Lumber",
    icon: "layers",
    description: "Dimensional lumber, plywood, and trim for construction and woodworking",
    subcategories: [
      { id: "dimensional", name: "Dimensional Lumber", subcategories: [
        { id: "2x4", name: "2x4" },
        { id: "2x6", name: "2x6" },
        { id: "4x4", name: "4x4" },
      ]},
      { id: "plywood", name: "Plywood & Sheets" },
      { id: "trim", name: "Trim & Molding" },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: "droplets",
    description: "Pipes, fittings, faucets, and repair parts for plumbing projects",
    subcategories: [
      { id: "pipes-fittings", name: "Pipes & Fittings" },
      { id: "faucets", name: "Faucets & Fixtures" },
      { id: "water-heaters", name: "Water Heaters" },
      { id: "repair-parts", name: "Repair Parts" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: "zap",
    description: "Wiring, outlets, switches, and lighting for electrical work",
    subcategories: [
      { id: "wiring", name: "Wiring" },
      { id: "outlets-switches", name: "Outlets & Switches" },
      { id: "lighting", name: "Lighting" },
      { id: "ceiling-fans", name: "Ceiling Fans" },
    ],
  },
  {
    id: "paint",
    name: "Paint",
    icon: "paintbrush",
    description: "Interior and exterior paints, stains, primers, and supplies",
    subcategories: [
      { id: "interior-paint", name: "Interior Paint" },
      { id: "exterior-paint", name: "Exterior Paint" },
      { id: "stains", name: "Stains & Finishes" },
      { id: "brushes-rollers", name: "Brushes & Rollers" },
      { id: "primers", name: "Primers" },
    ],
  },
  {
    id: "hardware",
    name: "Hardware",
    icon: "settings",
    description: "Fasteners, hinges, brackets, adhesives, and general hardware",
    subcategories: [
      { id: "fasteners", name: "Fasteners", subcategories: [
        { id: "screws", name: "Screws" },
        { id: "nails", name: "Nails" },
        { id: "bolts", name: "Bolts" },
      ]},
      { id: "hinges-brackets", name: "Hinges & Brackets" },
      { id: "adhesives", name: "Adhesives" },
      { id: "chains-rope", name: "Chains & Rope" },
    ],
  },
];
