import { program } from 'commander';
import { scanPorts } from './modules/portScanner.js';
import { pingHost } from './modules/pingMonitor.js';
import net from 'net';
import { exec } from 'child_process';

program
  .command('scan <host>')
  .description('Scan open ports on a given host')
  .option('-p, --ports <range>', 'Port range to scan (e.g., 20-80)', '1-65535')
  .action((host, options) => {
    scanPorts(host, options.ports);
  });

program
  .command('ping <host>')
  .description('Check if a host is online')
  .action((host) => {
    pingHost(host);
  });

program.parse(process.argv);