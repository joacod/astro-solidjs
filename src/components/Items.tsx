import type { Item } from "@/models/item";
import { createSignal, createEffect, onCleanup, For } from "solid-js";

export const Items = () => {
  const [data, setData] = createSignal<Item[]>([]);

  createEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      const response = await fetch("/api/items.json", { signal });
      const jsonData = await response.json();
      setData(jsonData.items);
    })();

    onCleanup(() => {
      controller.abort();
    });
  });

  return (
    <>
      <h2 class="text-lg font-bold">Items</h2>
      <ul>
        <For each={data()}>
          {(item) => (
            <li>
              <a class="underline" href={"/items/" + item.id}>
                {item.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};
