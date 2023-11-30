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
      <h2 class="text-3xl title-font font-medium mb-2">Cap store - Items</h2>
      <section class="flex flex-wrap -m-4 text-gray-400 body-font mt-2">
        <For each={data()}>
          {(item) => (
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={item.imageUrl}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  PRICE: ${item.price}
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  {item.name}
                </h2>
                <p class="leading-relaxed text-base mb-4">{item.description}</p>
                <a class="underline" href={"/items/" + item.id}>
                  {item.name}
                </a>
              </div>
            </div>
          )}
        </For>
      </section>
    </>
  );
};
