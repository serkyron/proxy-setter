# Proxy setter

This package currently only supports Windows OS, support for Linux will be added later.

**npm install -S proxy-setter**

## Basic usage

    const {setProxy} = require("proxy-setter");

    setProxy("on", "socks=dolphinfiber.ddns.net:11118")
      .then(() => {
        console.log("Proxy changed");
      });

  	setProxy("off")
      .then(() => {
        console.log("Proxy disabled");
      });
