export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "veggie-tacos", title: "Veggie Tacos", emoji: "🌮", minutes: 20, difficulty: "Easy", cuisine: "Mexican" },
  { id: "chicken-biryani", title: "Chicken Biryani", emoji: "🍛", minutes: 75, difficulty: "Hard", cuisine: "Indian" },
  { id: "salmon-sushi", title: "Salmon Sushi", emoji: "🍣", minutes: 50, difficulty: "Hard", cuisine: "Japanese" },
  { id: "caesar-salad", title: "Caesar Salad", emoji: "🥗", minutes: 15, difficulty: "Easy", cuisine: "American" },
  { id: "beef-burger", title: "Classic Beef Burger", emoji: "🍔", minutes: 25, difficulty: "Easy", cuisine: "American" },
  { id: "pad-thai", title: "Pad Thai", emoji: "🍜", minutes: 30, difficulty: "Medium", cuisine: "Thai" },
  { id: "chocolate-pancakes", title: "Chocolate Pancakes", emoji: "🥞", minutes: 20, difficulty: "Easy", cuisine: "French" },
];
