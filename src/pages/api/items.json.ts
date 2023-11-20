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
    description: "Description 1",
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description 3",
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description 4",
  },
  {
    id: 5,
    name: "Item 5",
    description: "Description 5",
  },
];
