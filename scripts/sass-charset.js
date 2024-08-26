/**
 * This script adds the `@charset "UTF-8";` declaration at the beginning of all SCSS files in the project.
 */

import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname, relative } from "node:path";

// recursively browse files in a directory
function traverseDirectory(dir) {
	const files = readdirSync(dir);
	for (const file of files) {
		const filePath = join(dir, file);
		const stat = statSync(filePath);

		if (stat.isDirectory()) {
			// ignore node_modules
			if (file !== "node_modules") {
				traverseDirectory(filePath);
			}
		} else {
			if (extname(file) === ".scss") {
				processSCSSFile(filePath);
			}
		}
	}
}

// add utf8 at the beginning of an SCSS file
function processSCSSFile(filePath) {
	const data = readFileSync(filePath, "utf8");
	const hasDoubleQuotes = data.startsWith('@charset "UTF-8";');
	const hasSingleQuotes = data.startsWith("@charset 'UTF-8';");

	if (!hasDoubleQuotes && !hasSingleQuotes) {
		const newData = `@charset "UTF-8";\n\n${data}`;
		writeFileSync(filePath, newData);
		console.log(`${relative(process.cwd(), filePath)} encoded ... [done]`);
	} else {
		console.log(
			`${relative(process.cwd(), filePath)} already encoded, skipping ...`,
		);
	}
}

// entry point
function startCharset() {
	const projectRoot = join(__dirname, "..");
	traverseDirectory(projectRoot);
}

startCharset();
