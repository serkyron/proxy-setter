const { execFile } = require('child_process');
const os = require('os');

module.exports.setProxy = function(state, value) {
	return new Promise((resolve, reject) => {
		if (os.platform() !== "win32") {
			reject(new Error("Platform not supported"));
		}

		if (!state) {
			reject(new Error("Proxy state is required"));
		}

		if (state === "on" && !value) {
			reject(new Error("Proxy value is required"));	
		}

		execFile(`./node_modules/proxy-setter/bin/win32/proxy.exe`, [state, value], {windowsHide: true}, (error, stdout, stderr) => {
			if (error) {
				reject(error);
			}

			resolve();
		});
	});
};