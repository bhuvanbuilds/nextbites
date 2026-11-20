export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil"],
    steps: [
      "Heat the oven as high as it will go.",
      "Stretch the dough into a round base.",
      "Spread the sauce and add torn mozzarella.",
      "Bake until the crust blisters, then top with basil and olive oil.",
    ],
  },
  {
    id: "veggie-tacos",
    title: "Veggie Tacos",
    emoji: "🌮",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Corn tortillas", "Black beans", "Bell pepper", "Avocado", "Lime", "Cilantro"],
    steps: [
      "Saute the sliced bell pepper until soft.",
      "Warm the black beans and the tortillas.",
      "Fill the tortillas with beans and peppers.",
      "Top with avocado, cilantro and a squeeze of lime.",
    ],
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    emoji: "🍛",
    minutes: 75,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: ["Basmati rice", "Chicken", "Yogurt", "Onions", "Biryani masala", "Saffron milk"],
    steps: [
      "Marinate the chicken in yogurt and masala for an hour.",
      "Fry the onions until deep golden.",
      "Par-boil the rice with whole spices.",
      "Layer chicken, rice and onions, drizzle saffron milk, and steam on low heat.",
    ],
  },
  {
    id: "salmon-sushi",
    title: "Salmon Sushi",
    emoji: "🍣",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: ["Sushi rice", "Rice vinegar", "Fresh salmon", "Nori", "Soy sauce", "Wasabi"],
    steps: [
      "Cook the rice and season it with rice vinegar.",
      "Slice the salmon into thin strips.",
      "Spread rice on nori and add salmon.",
      "Roll tightly, slice, and serve with soy sauce and wasabi.",
    ],
  },
  {
    id: "caesar-salad",
    title: "Caesar Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Romaine lettuce", "Parmesan", "Croutons", "Caesar dressing", "Lemon"],
    steps: [
      "Chop the romaine and add it to a large bowl.",
      "Toss with the dressing and a squeeze of lemon.",
      "Top with croutons and shaved parmesan.",
    ],
  },
  {
    id: "beef-burger",
    title: "Classic Beef Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Ground beef", "Burger buns", "Cheddar", "Lettuce", "Tomato", "Pickles"],
    steps: [
      "Shape the beef into patties and season well.",
      "Grill the patties for about 4 minutes per side.",
      "Melt the cheddar on top and toast the buns.",
      "Assemble with lettuce, tomato and pickles.",
    ],
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Thai",
    ingredients: ["Rice noodles", "Shrimp", "Eggs", "Bean sprouts", "Tamarind paste", "Peanuts"],
    steps: [
      "Soak the rice noodles until pliable.",
      "Stir-fry the shrimp, then push aside and scramble the eggs.",
      "Add noodles and tamarind sauce and toss on high heat.",
      "Finish with bean sprouts and crushed peanuts.",
    ],
  },
  {
    id: "chocolate-pancakes",
    title: "Chocolate Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "French",
    ingredients: ["Flour", "Cocoa powder", "Milk", "Eggs", "Sugar", "Butter"],
    steps: [
      "Whisk the flour, cocoa and sugar together.",
      "Mix in the milk and eggs until smooth.",
      "Cook ladlefuls in buttered pan until bubbles form, then flip.",
      "Stack and serve warm.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
