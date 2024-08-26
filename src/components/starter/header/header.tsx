import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "~/icons/qwik";
import styles from "./header.module.scss";

export default component$(() => {
	return (
		<header class={styles.header}>
			<div class={["container", styles.wrapper]}>
				<div class={styles.logo}>
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
