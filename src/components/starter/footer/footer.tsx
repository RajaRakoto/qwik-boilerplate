import { component$ } from "@builder.io/qwik";

/* routes */
import { useServerTimeLoader } from "@/routes/layout";

/* styles */
import styles from "./footer.module.scss";

// =======================================

export default component$(() => {
	const serverTime = useServerTimeLoader();

	return (
		<footer>
			<div class="container">
				<a
					href="https://www.builder.io/"
					target="_blank"
					class={styles.anchor}
					rel="noreferrer"
				>
					<span>Made with ♡ by Builder.io</span>
					<span class={styles.spacer}>|</span>
					<span>{serverTime.value.date}</span>
				</a>
			</div>
		</footer>
	);
});
