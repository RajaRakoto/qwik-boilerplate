import {
	component$,
	useTask$,
	useStore,
	useStylesScoped$,
} from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";

/* styles */
import styles from "./flower.scss?inline";

// =======================================

export default component$(() => {
	useStylesScoped$(styles);
	const loc = useLocation();

	const state = useStore({
		count: 0,
		number: 20,
	});

	useTask$(({ cleanup }) => {
		const timeout = setTimeout(() => {
			state.count = 1;
		}, 500);
		cleanup(() => clearTimeout(timeout));

		const internal = setInterval(() => state.count++, 7000);
		cleanup(() => clearInterval(internal));
	});

	return (
		<div class="container-center container">
			<div role="presentation" class="ellipsis" />
			<h1>
				<span class="highlight">Generate</span> Flowers
			</h1>

			<input
				class="input"
				type="range"
				value={state.number}
				max={50}
				onInput$={(_ev, el) => {
					state.number = el.valueAsNumber;
				}}
			/>
			<div
				style={{
					"--state": `${state.count * 0.1}`,
				}}
				class={{
					host: true,
					pride: loc.url.searchParams.get("pride") === "true",
				}}
			>
				{Array.from({ length: state.number }, (_, i) => (
					<div
						key={i.toString()}
						class={{
							square: true,
							odd: i % 2 === 0,
						}}
						style={{ "--index": `${i + 1}` }}
					/>
				)).reverse()}
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Qwik Flower",
};
