import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

/* components */
import Counter from "@/components/starter/counter/counter";
import Hero from "@/components/starter/hero/hero";
import Infobox from "@/components/starter/infobox/infobox";
import Starter from "@/components/starter/next-steps/next-steps";

// =======================================

export default component$(() => {
	return (
		<>
			<Hero />
			<Starter />

			<div role="presentation" class="ellipsis" />
			<div role="presentation" class="ellipsis ellipsis-purple" />

			<div class="container-center container-spacing-xl container">
				<h3>
					You can <span class="highlight">count</span>
					<br /> on me
				</h3>
				<Counter />
			</div>

			<div class="container-flex container">
				<Infobox>
					<div q:slot="title" class="icon icon-cli">
						CLI Commands
					</div>
					<>
						<p>
							<code>npm run dev</code>
							<br />
							Starts the development server and watches for changes
						</p>
						<p>
							<code>npm run preview</code>
							<br />
							Creates production build and starts a server to preview it
						</p>
						<p>
							<code>npm run build</code>
							<br />
							Creates production build
						</p>
						<p>
							<code>npm run qwik add</code>
							<br />
							Runs the qwik CLI to add integrations
						</p>
					</>
				</Infobox>

				<div>
					<Infobox>
						<div q:slot="title" class="icon icon-apps">
							Example Apps
						</div>
						<p>
							Have a look at the <a href="/demo/flower">Flower App</a> or the{" "}
							<a href="/demo/todolist">Todo App</a>.
						</p>
					</Infobox>

					<Infobox>
						<div q:slot="title" class="icon icon-community">
							Community
						</div>
						<ul>
							<li>
								<span>Questions or just want to say hi? </span>
								<a
									href="https://qwik.dev/chat"
									target="_blank"
									rel="noreferrer"
								>
									Chat on discord!
								</a>
							</li>
							<li>
								<span>Follow </span>
								<a
									href="https://twitter.com/QwikDev"
									target="_blank"
									rel="noreferrer"
								>
									@QwikDev
								</a>
								<span> on Twitter</span>
							</li>
							<li>
								<span>Open issues and contribute on </span>
								<a
									href="https://github.com/QwikDev/qwik"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</li>
							<li>
								<span>Watch </span>
								<a
									href="https://qwik.dev/media/"
									target="_blank"
									rel="noreferrer"
								>
									Presentations, Podcasts, Videos, etc.
								</a>
							</li>
						</ul>
					</Infobox>
				</div>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Qwik Boilerplate 🚀",
	meta: [
		{
			name: "description",
			content:
				"Minimalistic fullstack boilerplate for developing Qwik + QwikCity applications in TypeScript, optimized for blazing-fast performance using Bun & Vite 🚀",
		},
	],
};
