import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
	type DocumentHead,
	routeLoader$,
	routeAction$,
	zod$,
	z,
	Form,
} from "@builder.io/qwik-city";

/* types */
import type { I_ListItem } from "@/@types";

/* styles */
import styles from "./todolist.scss?inline";

// =======================================

export const list: I_ListItem[] = [];

export const useListLoader = routeLoader$(() => {
	return list;
});

export const useAddToListAction = routeAction$(
	(item) => {
		list.push(item);
		return {
			success: true,
		};
	},
	zod$({
		text: z.string().trim().min(1),
	}),
);

export default component$(() => {
	useStylesScoped$(styles);
	const list = useListLoader();
	const action = useAddToListAction();

	return (
		<>
			<div class="container-center container">
				<h1>
					<span class="highlight">TODO</span> List
				</h1>
			</div>

			<div role="presentation" class="ellipsis" />

			<div class="container-center container">
				{list.value.length === 0 ? (
					<span class="empty">No items found</span>
				) : (
					<ul class="list">
						{list.value.map((item, index) => (
							<li key={`items-${index.toString()}`}>{item.text}</li>
						))}
					</ul>
				)}
			</div>

			<div class="container-center container">
				<Form action={action} spaReset>
					<input type="text" name="text" required class="input" />{" "}
					<button type="submit" class="button-dark">
						Add item
					</button>
				</Form>

				<p class="hint">
					PS: This little app works even when JavaScript is disabled.
				</p>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Qwik Todo List",
};
