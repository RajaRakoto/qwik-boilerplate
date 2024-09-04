import {
	component$,
	useStylesScoped$,
	useOnWindow,
	useSignal,
	$,
} from "@builder.io/qwik";

/* constants */
import { GETTING_STARTED_STEPS } from "@/constants";

/* styles */
import styles from "./next-steps.scss?inline";

// =======================================

export default component$(() => {
	useStylesScoped$(styles);
	const gettingStartedStep = useSignal(0);

	useOnWindow(
		"keydown",
		$((e) => {
			if ((e as KeyboardEvent).key === "Alt") {
				gettingStartedStep.value = 1;
			}
		}),
	);

	return (
		<div class="container-purple container-center container">
			<h2>
				Time for a
				<br />
				<span class="highlight">qwik intro</span>?
			</h2>
			<div class="gettingstarted">
				<div
					class="intro"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: This is a trusted source
					dangerouslySetInnerHTML={
						GETTING_STARTED_STEPS[gettingStartedStep.value]?.message ?? ""
					}
				/>
				<span
					class="hint"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: This is a trusted source
					dangerouslySetInnerHTML={
						GETTING_STARTED_STEPS[gettingStartedStep.value]?.hint ?? ""
					}
				/>
			</div>
			{gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
				<button
					type="button"
					class="button-dark"
					onClick$={() => gettingStartedStep.value++}
				>
					Continue with Step {gettingStartedStep.value + 2} of{" "}
					{GETTING_STARTED_STEPS.length}
				</button>
			) : (
				<button
					type="button"
					class="button-dark"
					onClick$={() => {
						gettingStartedStep.value = 0;
					}}
				>
					Re-Start
				</button>
			)}
		</div>
	);
});
