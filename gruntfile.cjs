/**
 * @description: gruntfile for qwik boilerplate
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress
 */
module.exports = (grunt) => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	require("load-grunt-tasks")(grunt);

	// all files destination (example)
	const backupsDestination = "./backups/";

	// node-glob syntax
	const includeAllFiles = ["**/*", ".*/**/*", "**/.*", "**/.*/**/*"];

	/**
	 * ~ ALL GRUNT PLUGINS CONFIG ~
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),
		/**
		 * Compress files and folders (incremental backups)
		 */
		compress: {
			main: {
				options: {
					archive: `${backupsDestination}main.tar.gz`,
				},
				files: [{ src: ["./*", "./.*"] }],
				filter: "isFile",
			},
			github: {
				options: {
					archive: `${backupsDestination}github.tar.gz`,
				},
				expand: true,
				cwd: "./.github/",
				src: includeAllFiles,
				dest: "github",
			},
			vscode: {
				options: {
					archive: `${backupsDestination}vscode.tar.gz`,
				},
				expand: true,
				cwd: "./.vscode/",
				src: includeAllFiles,
				dest: "vscode",
			},
			e2e: {
				options: {
					archive: `${backupsDestination}e2e.tar.gz`,
				},
				expand: true,
				cwd: "./e2e/",
				src: includeAllFiles,
				dest: "e2e",
			},
			public: {
				options: {
					archive: `${backupsDestination}public.tar.gz`,
				},
				expand: true,
				cwd: "./public/",
				src: includeAllFiles,
				dest: "public",
			},
			server: {
				options: {
					archive: `${backupsDestination}server.tar.gz`,
				},
				expand: true,
				cwd: "./server/",
				src: includeAllFiles,
				dest: "server",
			},
			scripts: {
				options: {
					archive: `${backupsDestination}scripts.tar.gz`,
				},
				expand: true,
				cwd: "./scripts/",
				src: includeAllFiles,
				dest: "scripts",
			},
			src: {
				options: {
					archive: `${backupsDestination}src.tar.gz`,
				},
				expand: true,
				cwd: "./src/",
				src: includeAllFiles,
				dest: "src",
			},
			tests: {
				options: {
					archive: `${backupsDestination}tests.tar.gz`,
				},
				expand: true,
				cwd: "./tests/",
				src: includeAllFiles,
				dest: "tests",
			},
			tmp: {
				options: {
					archive: `${backupsDestination}tmp.tar.gz`,
				},
				expand: true,
				cwd: "./tmp/",
				src: includeAllFiles,
				dest: "tmp",
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask("backups", [
		"compress:main",
		"compress:github",
		"compress:vscode",
		"compress:e2e",
		"compress:public",
		"compress:scripts",
		"compress:server",
		"compress:src",
		"compress:tests",
		"compress:tmp",
	]);

	// all tasks lists
	const myTasksNames = ["backups"];

	// tasks status (description)
	const myTasksStatus = [
		"compress: main | github | vscode | e2e | public | scripts | server | src | tests | tmp",
	];

	// default tasks
	grunt.registerTask("default", () => {
		console.log(
			"\nHere are the lists of plugins (tasks) you can run with grunt:".green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case "cyan":
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.cyan} -> ${taskStatus[index]}`);
					});
					break;
				case "magenta":
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.magenta} -> ${taskStatus[index]}`);
					});
					break;
				case "yellow":
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.yellow} -> ${taskStatus[index]}`);
					});
					break;
				case "blue":
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.blue} -> ${taskStatus[index]}`);
					});
					break;
				default:
					null;
					break;
			}
		}

		// task resume
		getTaskResume(
			"== QWIK BOILERPLATE TASKS ==",
			myTasksNames,
			myTasksStatus,
			"magenta",
		);
	});
};
