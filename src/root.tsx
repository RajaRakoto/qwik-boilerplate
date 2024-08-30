import { component$ } from "@builder.io/qwik";
import { isDev } from "@builder.io/qwik/build";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";

/* components */
import { RouterHead } from "@/components/router-head/router-head";

// =======================================

/**
 * The root of a QwikCity site always start with the <QwikCityProvider> component,
 * immediately followed by the document's <head> and <body>.
 *
 * Don't remove the `<head>` and `<body>` elements.
 */
export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charset="utf-8" />
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				<RouterHead />
				{!isDev && <ServiceWorkerRegister />}
			</head>
			<body lang="en">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
