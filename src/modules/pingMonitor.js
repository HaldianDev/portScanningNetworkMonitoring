export function pingHost(host) {
    exec(`ping -c 1 ${host}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`${host} is offline`);
      } else {
        console.log(`${host} is online`);
      }
    });
  }