import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";

/* components */
import Gauge from "@/components/starter/gauge";

/* styles */
import styles from "./counter.scss?inline";

// =======================================

export default component$(() => {
  useStyles$(styles);
	const count = useSignal(70);

	const setCount = $((newValue: number) => {
		if (newValue < 0 || newValue > 100) {
			return;
		}
		count.value = newValue;
	});

	return (
		<div class="counter-wrapper">
			<button
				type="button"
				class="button-dark button-small"
				onClick$={() => setCount(count.value - 1)}
			>
				-
			</button>
			<Gauge value={count.value} />
			<button
				type="button"
				class="button-dark button-small"
				onClick$={() => setCount(count.value + 1)}
			>
				+
			</button>
		</div>
	);
});
