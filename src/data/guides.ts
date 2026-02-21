export type GuideStep = {
  title: string;
  instruction: string;
  tip?: string;
  warning?: string;
};

export type GuideMaterial = {
  productId?: string;
  name: string;
  quantity: number;
  unit: string;
  estimatedCost: number;
};

export type Guide = {
  id: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  estimatedTime: number;
  description: string;
  materials: GuideMaterial[];
  tools: string[];
  steps: GuideStep[];
  calculatorType?: "paint" | "lumber";
  updatedAt: string;
};

export const guides: Guide[] = [
  {
    id: "build-floating-shelf",
    title: "Build a Floating Shelf",
    difficulty: "beginner",
    category: "Woodworking",
    estimatedTime: 2,
    description: "Create a sleek, modern floating shelf that appears to hang on the wall with no visible supports. Perfect for displaying books, plants, or decorative items. This project uses a simple French cleat system for secure mounting.",
    materials: [
      { name: "1x10 Pine Board", quantity: 1, unit: "piece", estimatedCost: 12.99, productId: "pine-2x4-8" },
      { name: '3/4" Plywood Strip', quantity: 1, unit: "piece", estimatedCost: 8.50, productId: "plywood-4x8" },
      { name: "#8 Wood Screws", quantity: 8, unit: "pieces", estimatedCost: 0.60, productId: "wood-screws-100" },
      { name: "Wood Glue", quantity: 1, unit: "bottle", estimatedCost: 5.99, productId: "gorilla-glue-8oz" },
      { name: "Sandpaper (120/220 grit)", quantity: 2, unit: "sheets", estimatedCost: 2.50 },
      { name: "Wood Stain or Paint", quantity: 1, unit: "can", estimatedCost: 12.98, productId: "rustoleum-poly" },
    ],
    tools: ["Drill", "Level", "Stud Finder", "Tape Measure", "Circular Saw or Miter Saw", "Clamps"],
    steps: [
      { title: "Measure and Plan", instruction: "Determine the desired shelf length and location on your wall. Use a stud finder to locate wall studs and mark their positions. The shelf should span at least two studs for secure mounting.", tip: "Standard stud spacing is 16 inches on center. Plan your shelf length to align with studs." },
      { title: "Cut the Shelf Board", instruction: "Cut your 1x10 pine board to the desired length. Sand all surfaces starting with 120-grit sandpaper, then finish with 220-grit for a smooth surface.", tip: "For the cleanest cut, use a miter saw with a fine-tooth blade and cut on the waste side of your mark." },
      { title: "Build the French Cleat", instruction: "Cut a strip of 3/4-inch plywood to 3 inches wide and the length of your shelf minus 1 inch. Rip this strip at a 45-degree angle along its length to create two interlocking pieces.", warning: "Always use a push stick when ripping narrow pieces on a table saw." },
      { title: "Mount the Wall Cleat", instruction: "Attach one cleat piece to the wall with the angled edge pointing up and away from the wall. Drive screws directly into wall studs. Use a level to ensure it is perfectly horizontal." },
      { title: "Attach the Shelf Cleat", instruction: "Glue and screw the matching cleat piece to the back of your shelf board, with the angled edge pointing down and toward the wall. Allow the glue to dry completely." },
      { title: "Finish and Hang", instruction: "Apply your chosen stain or paint finish to the shelf. Allow it to dry according to the manufacturer's instructions. Hang the shelf by interlocking the two cleat pieces.", tip: "Apply at least two coats of polyurethane for durability if using a clear finish." },
    ],
    calculatorType: "lumber",
    updatedAt: "2025-12-01",
  },
  {
    id: "fix-leaky-faucet",
    title: "Fix a Leaky Faucet",
    difficulty: "beginner",
    category: "Plumbing",
    estimatedTime: 1,
    description: "Stop that annoying drip and save water by fixing a leaky single-handle kitchen or bathroom faucet. Most leaks are caused by worn O-rings or cartridges that are inexpensive and easy to replace.",
    materials: [
      { name: "Replacement O-Ring Kit", quantity: 1, unit: "kit", estimatedCost: 4.99 },
      { name: "Replacement Cartridge", quantity: 1, unit: "piece", estimatedCost: 12.99 },
      { name: "Plumber's Grease", quantity: 1, unit: "tube", estimatedCost: 3.49 },
      { name: "PTFE Tape", quantity: 1, unit: "roll", estimatedCost: 2.49, productId: "teflon-tape" },
    ],
    tools: ["Adjustable Wrench", "Allen Wrench Set", "Flathead Screwdriver", "Phillips Screwdriver", "Pliers"],
    steps: [
      { title: "Turn Off the Water", instruction: "Locate the shut-off valves under the sink and turn them clockwise to close. Turn on the faucet to release any remaining water pressure and verify the water is off.", warning: "Always turn off the water supply before disassembling any faucet. Failure to do so will result in flooding." },
      { title: "Remove the Handle", instruction: "Look for a set screw on the handle, usually hidden under a decorative cap. Remove the cap with a flathead screwdriver, then use an Allen wrench to remove the set screw. Pull the handle straight up to remove it." },
      { title: "Remove the Cartridge", instruction: "Use pliers to remove the retaining clip or nut that holds the cartridge in place. Pull the cartridge straight out. Note its orientation for reinstallation.", tip: "Take a photo of the cartridge before removing it so you remember the correct orientation." },
      { title: "Replace Worn Parts", instruction: "Inspect the O-rings and cartridge for wear, cracks, or mineral buildup. Replace any damaged parts with new ones from your replacement kit. Apply plumber's grease to new O-rings before installing.", tip: "Bring the old cartridge to the hardware store to ensure you get an exact match." },
      { title: "Reassemble and Test", instruction: "Reinstall the cartridge in the correct orientation, replace the retaining clip, and reattach the handle. Turn the water supply back on slowly and check for leaks." },
    ],
    updatedAt: "2025-11-15",
  },
  {
    id: "paint-a-room",
    title: "Paint a Room Like a Pro",
    difficulty: "beginner",
    category: "Painting",
    estimatedTime: 4,
    description: "Transform any room with a fresh coat of paint. Learn professional techniques for preparation, cutting in, and rolling to achieve a smooth, even finish without drips or brush marks.",
    materials: [
      { name: "Interior Paint", quantity: 2, unit: "gallons", estimatedCost: 69.96, productId: "behr-premium-gal" },
      { name: "Primer", quantity: 1, unit: "gallon", estimatedCost: 22.98, productId: "primer-kilz-gal" },
      { name: "Painter's Tape", quantity: 2, unit: "rolls", estimatedCost: 11.98 },
      { name: "Drop Cloths", quantity: 2, unit: "pieces", estimatedCost: 9.98 },
      { name: "3-Inch Angled Brush", quantity: 1, unit: "piece", estimatedCost: 16.49, productId: "purdy-brush-3" },
      { name: "9-Inch Roller Cover", quantity: 2, unit: "pieces", estimatedCost: 17.98, productId: "wooster-roller-9" },
      { name: "Roller Frame and Tray", quantity: 1, unit: "set", estimatedCost: 8.99 },
    ],
    tools: ["Step Ladder", "Paint Can Opener", "Stir Stick", "Rags"],
    steps: [
      { title: "Prepare the Room", instruction: "Remove or cover furniture with drop cloths. Take down outlet covers and light switch plates. Fill any nail holes or cracks with spackle and sand smooth once dry. Clean walls with a damp cloth to remove dust and cobwebs." },
      { title: "Apply Painter's Tape", instruction: "Apply painter's tape along trim, ceiling edges, window frames, and any areas you want to protect. Press the tape firmly with a putty knife to prevent paint from bleeding underneath.", tip: "For the sharpest lines, apply a thin coat of the existing wall color over the tape edge first. This seals the tape before the new color goes on." },
      { title: "Prime if Needed", instruction: "Apply primer to bare drywall, repaired areas, or if making a dramatic color change. Use the angled brush to cut in around edges first, then roll the open wall areas. Allow the primer to dry completely.", warning: "Ensure adequate ventilation when using oil-based primers. Open windows and use fans." },
      { title: "Cut In the Edges", instruction: "Using the angled brush, paint a 2-3 inch band along all edges where the roller cannot reach: ceiling line, corners, around trim, outlets, and windows. Work in 3-4 foot sections.", tip: "Load the brush about one-third of the way up the bristles and tap off excess. This prevents drips while maintaining enough paint for smooth coverage." },
      { title: "Roll the Walls", instruction: "Load the roller by rolling it in the paint tray until evenly coated. Start in an upper corner and roll in a W or M pattern to distribute paint, then fill in with even, parallel strokes. Overlap each section slightly while the paint is still wet.", tip: "Maintain a wet edge by working quickly and painting one full wall at a time. This prevents visible lap marks." },
      { title: "Apply Second Coat", instruction: "Allow the first coat to dry completely according to the paint manufacturer's instructions, usually 2-4 hours. Apply the second coat using the same technique: cut in first, then roll. Remove painter's tape while the final coat is still slightly tacky for the cleanest lines." },
    ],
    calculatorType: "paint",
    updatedAt: "2025-12-10",
  },
  {
    id: "install-ceiling-fan",
    title: "Install a Ceiling Fan",
    difficulty: "intermediate",
    category: "Electrical",
    estimatedTime: 3,
    description: "Replace an existing ceiling light fixture with a new ceiling fan. This guide covers the full installation process including mounting bracket, wiring connections, and blade assembly.",
    materials: [
      { name: "Ceiling Fan (with mounting hardware)", quantity: 1, unit: "piece", estimatedCost: 149.99, productId: "hunter-fan-52" },
      { name: "Wire Nuts", quantity: 4, unit: "pieces", estimatedCost: 1.50 },
      { name: "Electrical Tape", quantity: 1, unit: "roll", estimatedCost: 2.99 },
      { name: "Fan-Rated Ceiling Box", quantity: 1, unit: "piece", estimatedCost: 9.99 },
    ],
    tools: ["Voltage Tester", "Wire Strippers", "Screwdrivers (Phillips and Flat)", "Adjustable Wrench", "Step Ladder", "Pliers"],
    steps: [
      { title: "Turn Off Power", instruction: "Turn off the circuit breaker that controls the ceiling fixture. Verify the power is off by testing with a non-contact voltage tester at the existing fixture.", warning: "Never work on electrical wiring with the power on. Always verify with a voltage tester, even if you turned off the breaker. Electrical shock can be fatal." },
      { title: "Remove the Old Fixture", instruction: "Remove the existing light fixture by unscrewing the mounting hardware and disconnecting the wire connections. Support the fixture while disconnecting to prevent it from falling." },
      { title: "Install Fan-Rated Box", instruction: "Check if the existing ceiling box is fan-rated (it should say on the box or be made of metal with a brace). If not, replace it with a fan-rated ceiling box that can support the weight and vibration of a ceiling fan.", warning: "A standard light fixture box CANNOT support a ceiling fan. Using one is a serious safety hazard. The fan could fall." },
      { title: "Mount the Bracket", instruction: "Attach the ceiling fan mounting bracket to the fan-rated box using the hardware provided with your fan. Make sure the bracket is level and securely fastened." },
      { title: "Wire the Fan", instruction: "Connect the fan wires to the house wires: black to black (hot), white to white (neutral), and green or bare to the ground wire. If the fan has a blue wire for the light kit, connect it to the black hot wire as well. Secure each connection with wire nuts and wrap with electrical tape.", tip: "If your house has a red wire, it is likely a switched wire for a separate light control. Connect the fan blue wire to red and the fan black wire to black for independent control." },
      { title: "Assemble and Test", instruction: "Attach the fan blades to the motor using the provided hardware. Install the light kit if included. Restore power at the breaker and test all fan speeds and the light." },
    ],
    updatedAt: "2025-11-20",
  },
  {
    id: "build-deck-planter",
    title: "Build a Deck Planter Box",
    difficulty: "intermediate",
    category: "Woodworking",
    estimatedTime: 5,
    description: "Build a beautiful and durable cedar planter box for your deck or patio. This sturdy design features drainage holes, a waterproof liner, and a classic Craftsman style that complements any outdoor space.",
    materials: [
      { name: "1x6 Cedar Boards (6ft)", quantity: 8, unit: "pieces", estimatedCost: 31.84, productId: "cedar-fence-picket" },
      { name: "2x2 Cedar Posts (24in)", quantity: 4, unit: "pieces", estimatedCost: 11.96 },
      { name: "Exterior Wood Screws", quantity: 50, unit: "pieces", estimatedCost: 7.49, productId: "wood-screws-100" },
      { name: "Wood Glue (waterproof)", quantity: 1, unit: "bottle", estimatedCost: 5.99, productId: "gorilla-glue-8oz" },
      { name: "Exterior Wood Stain", quantity: 1, unit: "quart", estimatedCost: 14.99, productId: "exterior-stain-gal" },
      { name: "Landscape Fabric", quantity: 1, unit: "piece", estimatedCost: 4.99 },
    ],
    tools: ["Circular Saw or Miter Saw", "Drill/Driver", "Tape Measure", "Speed Square", "Clamps", "Sandpaper (80/120 grit)"],
    steps: [
      { title: "Cut the Side Panels", instruction: "Cut the 1x6 cedar boards to create four identical side panels. For a 24-inch long by 12-inch tall planter, cut 8 boards at 24 inches for the long sides and 8 boards at 10.5 inches for the short sides (accounting for the board overlap)." },
      { title: "Cut the Corner Posts", instruction: "Cut four 2x2 cedar posts to 12 inches each. These will serve as the internal corner supports that hold the side panels together.", tip: "Cedar is naturally rot-resistant, making it ideal for outdoor planter boxes. Avoid pressure-treated wood as the chemicals can leach into soil." },
      { title: "Assemble the Sides", instruction: "Pre-drill pilot holes to prevent splitting. Attach the side boards to the corner posts using exterior wood screws and wood glue. Stack three boards per side, alternating the joints for strength." },
      { title: "Attach the Bottom", instruction: "Cut bottom boards to fit inside the box. Attach them with screws, leaving 1/4-inch gaps between boards for drainage. Drill additional drainage holes if needed.", tip: "The gaps between bottom boards provide essential drainage. Plants will rot if water cannot escape." },
      { title: "Sand and Finish", instruction: "Sand all surfaces starting with 80-grit, then 120-grit. Apply two coats of exterior wood stain, allowing full drying time between coats. Pay extra attention to end grain, which absorbs more stain." },
      { title: "Add Liner and Plant", instruction: "Line the inside with landscape fabric to retain soil while allowing drainage. Fill with potting soil and plant your chosen flowers, herbs, or vegetables.", warning: "Do not use plastic sheeting as a liner. It traps water and causes root rot. Landscape fabric allows proper drainage." },
    ],
    calculatorType: "lumber",
    updatedAt: "2025-12-15",
  },
];
