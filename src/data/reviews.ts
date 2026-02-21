export type Review = {
  id: string;
  productId: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  helpful: number;
};

export const reviews: Review[] = [
  { id: "r1", productId: "dewalt-dcd771", author: "Mike T.", date: "2025-12-15", rating: 5, title: "Best drill for the price", text: "Bought this for a bathroom renovation and it handled everything I threw at it. Great battery life and plenty of power for drilling through studs.", helpful: 24 },
  { id: "r2", productId: "dewalt-dcd771", author: "Sarah K.", date: "2025-11-28", rating: 4, title: "Solid everyday drill", text: "Does everything well but nothing exceptional. The compact size is nice for working in tight spaces. Battery charges quickly.", helpful: 12 },
  { id: "r3", productId: "dewalt-dcd771", author: "James R.", date: "2025-10-03", rating: 5, title: "Professional quality", text: "I use this on job sites daily. It holds up well to heavy use and the 20V battery system is compatible with my other DeWalt tools.", helpful: 31 },
  { id: "r4", productId: "stanley-tape-25", author: "Tom W.", date: "2025-11-10", rating: 5, title: "The only tape measure you need", text: "I have owned several Stanley tape measures over the years and they never disappoint. The blade is sturdy, the lock is reliable, and it is easy to read.", helpful: 18 },
  { id: "r5", productId: "stanley-tape-25", author: "Linda M.", date: "2025-09-22", rating: 5, title: "Built to last", text: "Dropped this off a ladder twice and it still works perfectly. The standout reach is impressive for a 25-foot tape.", helpful: 9 },
  { id: "r6", productId: "milwaukee-circ-saw", author: "Dave P.", date: "2025-12-01", rating: 5, title: "Cuts like a corded saw", text: "I was skeptical about cordless circular saws but this Milwaukee changed my mind. Clean cuts through 2x material all day on one battery.", helpful: 27 },
  { id: "r7", productId: "milwaukee-circ-saw", author: "Chris B.", date: "2025-10-15", rating: 4, title: "Great saw, heavy though", text: "The cutting power is fantastic and the blade guard is well designed. It is a bit heavier than I expected but the trade-off for power is worth it.", helpful: 14 },
  { id: "r8", productId: "moen-adler-faucet", author: "Jennifer L.", date: "2025-11-20", rating: 5, title: "Beautiful and easy to install", text: "Installed this myself in about 45 minutes. The pull-out sprayer is powerful and the chrome finish looks great in my kitchen.", helpful: 22 },
  { id: "r9", productId: "moen-adler-faucet", author: "Robert H.", date: "2025-10-08", rating: 4, title: "Good value for the price", text: "Solid faucet at a reasonable price point. The single-handle design is convenient and the flow rate is adequate.", helpful: 8 },
  { id: "r10", productId: "behr-premium-gal", author: "Karen S.", date: "2025-12-10", rating: 4, title: "Excellent coverage", text: "Covered dark walls in two coats. The low odor formula was a huge plus since I was painting with the windows closed in winter.", helpful: 15 },
  { id: "r11", productId: "behr-premium-gal", author: "Paul D.", date: "2025-11-05", rating: 5, title: "Professional results", text: "As a painter, I have used many brands. Behr Premium Plus gives a smooth, durable finish that holds up well to cleaning. Great for high-traffic areas.", helpful: 33 },
  { id: "r12", productId: "behr-premium-gal", author: "Amy W.", date: "2025-09-18", rating: 4, title: "Good paint, many colors", text: "The color selection is incredible. The eggshell finish hides wall imperfections well. It took a bit longer to dry than expected.", helpful: 7 },
  { id: "r13", productId: "estwing-hammer", author: "Mark J.", date: "2025-12-05", rating: 5, title: "Indestructible", text: "I have had this hammer for 15 years and it is still going strong. The steel construction means it will never break. The grip reduces vibration better than any wooden handle.", helpful: 45 },
  { id: "r14", productId: "estwing-hammer", author: "Steve N.", date: "2025-11-12", rating: 5, title: "The last hammer you will buy", text: "There is a reason every carpenter I know uses Estwing. The balance is perfect, the claw pulls nails effortlessly, and it feels indestructible.", helpful: 38 },
  { id: "r15", productId: "wood-screws-100", author: "Brian C.", date: "2025-10-25", rating: 5, title: "Star drive is the way", text: "Once you use star drive screws, you never go back to Phillips. These grip perfectly and the coating prevents rust. Great value for 100 screws.", helpful: 19 },
  { id: "r16", productId: "pine-2x4-8", author: "Dan F.", date: "2025-12-18", rating: 4, title: "Straight and clean", text: "Much better quality than the cheaper studs. These were straight, had minimal knots, and were easy to work with for my shelving project.", helpful: 11 },
  { id: "r17", productId: "hunter-fan-52", author: "Maria G.", date: "2025-11-30", rating: 4, title: "Quiet and stylish", text: "The WhisperWind motor truly is whisper-quiet. Installation took about 2 hours. The remote control is a nice touch. LED light is bright enough for a medium room.", helpful: 16 },
  { id: "r18", productId: "ge-led-4pack", author: "Nancy P.", date: "2025-10-14", rating: 5, title: "Great light, great price", text: "Replaced all the bulbs in my house with these GE LEDs. The soft white color is warm and inviting. Cannot beat the price for a 4-pack.", helpful: 21 },
];
