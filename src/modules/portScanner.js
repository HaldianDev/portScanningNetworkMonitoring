import net from 'net';

export function scanPorts(host, range) {
  const [start, end] = range.split('-').map(Number);
  for (let port = start; port <= end; port++) {
    const socket = new net.Socket();
    socket.setTimeout(200);
    socket.connect(port, host, () => {
      console.log(`Port ${port} is open on ${host}`);
      socket.destroy();
    });
    socket.on('error', () => socket.destroy());
  }
}
