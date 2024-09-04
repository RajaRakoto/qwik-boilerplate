import { component$, useStylesScoped$ } from "@builder.io/qwik";

/* routes */
import { useServerTimeLoader } from "@/routes/layout";

/* styles */
import styles from "./footer.scss?inline";

// =======================================

export default component$(() => {
	useStylesScoped$(styles);
	const serverTime = useServerTimeLoader();

	return (
		<footer>
			<div class="container">
				<a
					href="https://www.builder.io/"
					target="_blank"
					class="anchor"
					rel="noreferrer"
				>
					<span>Made with ♡ by Builder.io</span>
					<span class="spacer">|</span>
					<span>{serverTime.value.date}</span>
				</a>
			</div>
		</footer>
	);
});
