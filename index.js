const { exec } = require('child_process');
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

		exec(`cd node_modules/proxy-setter && python proxy.py ${state} ${value}`, {windowsHide: true}, (error, stdout, stderr) => {
			if (error) {
				reject(error);
			}

			resolve();
		});
	});
};