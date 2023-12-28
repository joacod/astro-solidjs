import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(0);

  return (
    <div>
      <h2 class="text-3xl font-title font-medium mt-3 mb-2">Counter</h2>
      <p>Value: {counter()}</p>
      <div class="flex space-x-1">
        <button
          class="px-4 py-2 rounded bg-accent text-primary hover:bg-accent-focus active:bg-accent-active"
          onClick={() => {
            setCounter(counter() + 1);
          }}
        >
          +
        </button>
        <button
          class="px-4 py-2 rounded bg-accent text-primary hover:bg-accent-focus active:bg-accent-active"
          onClick={() => {
            setCounter(counter() - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
