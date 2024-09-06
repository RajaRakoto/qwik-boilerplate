import { component$, useStylesScoped$ } from "@builder.io/qwik";

/* icons */
import { QwikLogo } from "@/common/qwik-logo";

/* styles */
import styles from "./header.scss?inline";

// =======================================

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<header class="header">
			<div class="wrapper container">
				<div class="logo">
					<a href="/" title="qwik">
						<QwikLogo height={50} width={143} />
					</a>
				</div>
				<ul>
					<li>
						<a
							href="https://qwik.dev/docs/components/overview/"
							target="_blank"
							rel="noreferrer"
						>
							Docs
						</a>
					</li>
					<li>
						<a
							href="https://qwik.dev/examples/introduction/hello-world/"
							target="_blank"
							rel="noreferrer"
						>
							Examples
						</a>
					</li>
					<li>
						<a
							href="https://qwik.dev/tutorial/welcome/overview/"
							target="_blank"
							rel="noreferrer"
						>
							Tutorials
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
});
