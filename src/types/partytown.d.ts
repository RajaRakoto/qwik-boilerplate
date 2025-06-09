declare module "@builder.io/partytown/integration" {
	export interface PartytownConfig {
		debug?: boolean;
		lib?: string;
		logCalls?: boolean;
		logGetters?: boolean;
		logSetters?: boolean;
		logImageRequests?: boolean;
		logSendBeaconRequests?: boolean;
		logStackTraces?: boolean;
		maxTimeout?: number;
		nonce?: string;
		resolveUrl?: (
			url: URL,
			el: Element,
			type: string,
		) => URL | undefined | null;
		sandboxParent?: string;
		swPath?: string;
		forward?: (string | [string, { preserveBehavior?: boolean }])[];
		loadScriptsOnMainThread?: (string | RegExp)[];
	}

	export function partytownSnippet(config?: PartytownConfig): string;
	export const SCRIPT_TYPE: string;
}
