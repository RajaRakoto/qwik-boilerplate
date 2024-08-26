import { Slot, component$ } from "@builder.io/qwik";
import styles from "./infobox.module.scss";

export default component$(() => {
	return (
		<div class={styles.infobox}>
			<h3>
				<Slot name="title" />
			</h3>
			<Slot />
		</div>
	);
});
