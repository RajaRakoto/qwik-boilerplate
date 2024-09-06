import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { LuRocket } from "@qwikest/icons/lucide";

/* assets */
import ImgThunder from "@/assets/images/thunder.png?jsx";
import ViteLogo from "@/assets/images/vite.svg";
import QwikLogo from "@/assets/images/qwik.svg";
import BunLogo from "@/assets/images/bun.svg";

/* styles */
import styles from "./hero.scss?inline";

// =======================================

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="hero container">
			<ImgThunder class="hero-image" alt="Image thunder" />
			<div class="logos">
				<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
					<img
						src={ViteLogo}
						class="logo vite"
						alt="Vite.js logo"
						width="128"
						height="128"
					/>
				</a>
				<a href="https://qwik.dev" target="_blank" rel="noopener noreferrer">
					<img
						src={QwikLogo}
						class="logo qwik"
						alt="Qwik logo"
						width="128"
						height="128"
					/>
				</a>
				<a href="https://bun.sh/" target="_blank" rel="noopener noreferrer">
					<img
						src={BunLogo}
						class="logo bun"
						alt="Bun.js logo"
						width="128"
						height="128"
					/>
				</a>
			</div>
			<h1>
				So <span class="highlight">fantastic</span>
				<br />
				to have <span class="highlight">you</span> here
			</h1>
			<p>Have fun building your App with Qwik.</p>
			<div>
				<LuRocket
					class="animated animatedFadeInUp fadeInUp"
					style={{ color: "#eee", fontSize: "48px" }}
				/>
			</div>
			<div class="button-group">
				<button
					type="button"
					onClick$={async () => {
						const defaults = {
							spread: 360,
							ticks: 70,
							gravity: 0,
							decay: 0.95,
							startVelocity: 30,
							colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
							origin: {
								x: 0.5,
								y: 0.35,
							},
						};

						function loadConfetti() {
							return new Promise<(opts: any) => void>((resolve, reject) => {
								if ((globalThis as any).confetti) {
									return resolve((globalThis as any).confetti as any);
								}
								const script = document.createElement("script");
								script.src =
									"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
								script.onload = () =>
									resolve((globalThis as any).confetti as any);
								script.onerror = reject;
								document.head.appendChild(script);
								script.remove();
							});
						}

						const confetti = await loadConfetti();

						function shoot() {
							confetti({
								...defaults,
								particleCount: 80,
								scalar: 1.2,
							});

							confetti({
								...defaults,
								particleCount: 60,
								scalar: 0.75,
							});
						}

						setTimeout(shoot, 0);
						setTimeout(shoot, 100);
						setTimeout(shoot, 200);
						setTimeout(shoot, 300);
						setTimeout(shoot, 400);
					}}
				>
					Time to celebrate
				</button>
				<a
					href="https://qwik.dev/docs"
					target="_blank"
					class="button button-dark"
					rel="noreferrer"
				>
					Explore the docs
				</a>
			</div>
		</div>
	);
});
