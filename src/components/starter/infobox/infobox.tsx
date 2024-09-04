import { Slot, component$, useStyles$ } from "@builder.io/qwik";

/* styles */
import styles from "./infobox.scss?inline";

// =======================================

export default component$(() => {
  useStyles$(styles)

	return (
		<div class="infobox">
			<h3>
				<Slot name="title" />
			</h3>
			<Slot />
		</div>
	);
});
