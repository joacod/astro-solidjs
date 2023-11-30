import type { Item } from "@/models/item";

export async function GET({ request }: { request: string }) {
  return new Response(JSON.stringify({ items }), {
    headers: { "content-type": "application/json" },
  });
}

const items: Item[] = [
  {
    id: 1,
    name: "Item 1",
    price: 5.5,
    description:
      "Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/items/item1.png",
  },
  {
    id: 2,
    name: "Item 2",
    price: 4.2,
    description:
      "Description 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/items/item2.png",
  },
  {
    id: 3,
    name: "Item 3",
    price: 3.8,
    description:
      "Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/items/item3.png",
  },
  {
    id: 4,
    name: "Item 4",
    price: 4.5,
    description:
      "Description 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/items/item4.png",
  },
  {
    id: 5,
    name: "Item 5",
    price: 3.5,
    description:
      "Description 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/items/item5.png",
  },
  {
    id: 6,
    name: "Item 6",
    price: 4.2,
    description:
      "Description 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/items/item6.png",
  },
];
