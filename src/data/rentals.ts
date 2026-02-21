export type RentalEquipment = {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  rates: {
    fourHour: number;
    daily: number;
    weekly: number;
    monthly: number;
  };
  availability: "available" | "reserved" | "maintenance";
  reservedDates: string[];
  safetyNotes?: string;
  includedAccessories: string[];
};

export const rentalEquipment: RentalEquipment[] = [
  {
    id: "concrete-mixer",
    name: "Concrete Mixer (6 cu ft)",
    category: "Concrete",
    description: "Heavy-duty portable concrete mixer perfect for mixing concrete, mortar, and stucco on job sites. Electric-powered with a steel drum and adjustable mixing angle.",
    specs: { "Capacity": "6 cu ft", "Motor": "3/4 HP Electric", "Drum Material": "Steel", "Weight": "225 lbs" },
    rates: { fourHour: 45, daily: 75, weekly: 250, monthly: 600 },
    availability: "available",
    reservedDates: ["2026-03-05", "2026-03-06"],
    safetyNotes: "Wear safety glasses and gloves when operating. Do not reach into the drum while rotating.",
    includedAccessories: ["Power cord", "Mixing paddles"],
  },
  {
    id: "plate-compactor",
    name: "Plate Compactor (5,500 lbs)",
    category: "Concrete",
    description: "Gas-powered vibratory plate compactor for compacting soil, gravel, and asphalt. Essential for paver installations, driveway repairs, and foundation preparation.",
    specs: { "Force": "5,500 lbs", "Plate Size": '20" x 22"', "Engine": "Honda GX160", "Weight": "198 lbs" },
    rates: { fourHour: 55, daily: 85, weekly: 300, monthly: 700 },
    availability: "available",
    reservedDates: [],
    safetyNotes: "Wear hearing protection, steel-toe boots, and vibration-dampening gloves.",
    includedAccessories: ["Water tank for asphalt", "Transport wheels"],
  },
  {
    id: "miter-saw-12",
    name: '12" Sliding Compound Miter Saw',
    category: "Saws",
    description: "Professional-grade sliding compound miter saw for precise crosscuts and miter cuts in lumber, trim, and molding. Dual-bevel capability eliminates the need to flip workpieces.",
    specs: { "Blade": '12"', "Bevel": "Dual 0-48 degrees", "Miter": "0-60 degrees", "Motor": "15 Amp" },
    rates: { fourHour: 40, daily: 65, weekly: 220, monthly: 500 },
    availability: "available",
    reservedDates: ["2026-03-10"],
    includedAccessories: ["Carbide blade", "Dust bag", "Work clamp", "Stand"],
  },
  {
    id: "table-saw-10",
    name: '10" Portable Table Saw',
    category: "Saws",
    description: "Powerful portable table saw with rolling stand for ripping plywood, lumber, and sheet goods. Features a rack-and-pinion fence system for fast, accurate cuts.",
    specs: { "Blade": '10"', "Motor": "15 Amp", "Rip Capacity": '25"', "Cut Depth": '3-1/8" at 90 degrees' },
    rates: { fourHour: 45, daily: 70, weekly: 240, monthly: 550 },
    availability: "reserved",
    reservedDates: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"],
    safetyNotes: "Always use the blade guard, riving knife, and push stick. Never reach over or behind the blade.",
    includedAccessories: ["Carbide blade", "Rolling stand", "Push stick", "Miter gauge"],
  },
  {
    id: "pressure-washer",
    name: "Pressure Washer (3,200 PSI)",
    category: "Lawn & Garden",
    description: "Gas-powered pressure washer for cleaning driveways, decks, siding, and vehicles. Multiple spray tips for different cleaning applications from gentle rinse to powerful blast.",
    specs: { "PSI": "3,200", "GPM": "2.5", "Engine": "Honda GCV190", "Hose Length": "25 ft" },
    rates: { fourHour: 50, daily: 80, weekly: 275, monthly: 650 },
    availability: "available",
    reservedDates: [],
    safetyNotes: "Never point at people or animals. Wear safety glasses. Use appropriate tip for the surface being cleaned.",
    includedAccessories: ["5 spray tips", "25ft hose", "Detergent bottle", "Gun and wand"],
  },
  {
    id: "floor-sander",
    name: "Drum Floor Sander",
    category: "Sanders",
    description: "Professional drum sander for refinishing hardwood floors. Removes old finish and levels uneven boards. Pairs with an edge sander for complete floor refinishing.",
    specs: { "Drum Width": '8"', "Motor": "1.5 HP", "Dust Collection": "Bag system", "Weight": "135 lbs" },
    rates: { fourHour: 40, daily: 65, weekly: 225, monthly: 500 },
    availability: "available",
    reservedDates: ["2026-03-15", "2026-03-16"],
    safetyNotes: "Wear a dust mask and hearing protection. Keep the sander moving to avoid gouging the floor.",
    includedAccessories: ["Dust bag", "36/60/80 grit paper (3 each)", "Wrench set"],
  },
  {
    id: "rototiller",
    name: "Rear-Tine Rototiller",
    category: "Lawn & Garden",
    description: "Counter-rotating rear-tine tiller for breaking new ground and preparing garden beds. Self-propelled with adjustable tilling depth up to 10 inches.",
    specs: { "Tilling Width": '18"', "Tilling Depth": '10"', "Engine": "208cc", "Drive": "Self-Propelled" },
    rates: { fourHour: 45, daily: 70, weekly: 240, monthly: 550 },
    availability: "available",
    reservedDates: [],
    includedAccessories: ["Drag bar", "Depth stake"],
  },
  {
    id: "generator-3500",
    name: "Portable Generator (3,500W)",
    category: "Generators",
    description: "Reliable portable generator for powering tools on remote job sites or providing emergency backup power. Quiet operation with GFCI-protected outlets.",
    specs: { "Running Watts": "3,500", "Starting Watts": "4,375", "Runtime": "12 hrs at 50% load", "Fuel": "Gasoline" },
    rates: { fourHour: 35, daily: 55, weekly: 190, monthly: 450 },
    availability: "available",
    reservedDates: [],
    safetyNotes: "Never operate indoors or in enclosed spaces. Carbon monoxide is deadly. Keep away from windows and vents.",
    includedAccessories: ["Power cord", "Oil funnel", "Tool kit"],
  },
  {
    id: "generator-7500",
    name: "Portable Generator (7,500W)",
    category: "Generators",
    description: "High-output portable generator capable of powering multiple tools simultaneously or providing whole-house backup. Electric start with idle control for fuel efficiency.",
    specs: { "Running Watts": "7,500", "Starting Watts": "9,375", "Runtime": "10 hrs at 50% load", "Fuel": "Gasoline" },
    rates: { fourHour: 55, daily: 90, weekly: 320, monthly: 750 },
    availability: "maintenance",
    reservedDates: [],
    safetyNotes: "Never operate indoors. Use heavy-gauge extension cords rated for the wattage being drawn.",
    includedAccessories: ["Transfer switch adapter", "Wheel kit", "Oil funnel"],
  },
  {
    id: "chainsaw-18",
    name: '18" Gas Chainsaw',
    category: "Lawn & Garden",
    description: "Professional-grade gas chainsaw for cutting firewood, removing trees, and storm cleanup. Anti-vibration system reduces fatigue during extended use.",
    specs: { "Bar Length": '18"', "Engine": "50.2cc", "Weight": "12.3 lbs", "Chain": "Low kickback" },
    rates: { fourHour: 40, daily: 65, weekly: 220, monthly: 500 },
    availability: "available",
    reservedDates: ["2026-03-01"],
    safetyNotes: "Wear chaps, helmet with face screen, hearing protection, and steel-toe boots. Never cut above shoulder height.",
    includedAccessories: ["Carrying case", "Bar cover", "Sharpening file", "Extra chain"],
  },
  {
    id: "drywall-lift",
    name: "Drywall Panel Lift (11ft)",
    category: "Drills",
    description: "Cradle-style panel lift for installing drywall sheets on ceilings and walls. Raises 4x16 foot panels up to 11 feet. One-person operation saves time and prevents injury.",
    specs: { "Max Height": "11 ft", "Max Panel": "4x16 ft", "Capacity": "150 lbs", "Tilt": "Horizontal and vertical" },
    rates: { fourHour: 30, daily: 50, weekly: 175, monthly: 400 },
    availability: "available",
    reservedDates: [],
    includedAccessories: ["Extension bars", "Cradle pads"],
  },
  {
    id: "reciprocating-saw",
    name: "Reciprocating Saw (15 Amp)",
    category: "Saws",
    description: "Powerful demolition saw for cutting through wood, metal, PVC, and other materials. Variable speed trigger and tool-free blade change for quick work.",
    specs: { "Motor": "15 Amp", "Stroke Length": '1-1/8"', "SPM": "0-3,000", "Weight": "7.5 lbs" },
    rates: { fourHour: 25, daily: 40, weekly: 140, monthly: 320 },
    availability: "available",
    reservedDates: [],
    includedAccessories: ["Wood blade", "Metal blade", "Carrying case"],
  },
];
