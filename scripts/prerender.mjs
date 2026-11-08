// Vloží předrenderované HTML aplikace do dist/index.html, aby vyhledávače
// viděly obsah stránky i bez spouštění JavaScriptu.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const indexPath = path.join(dist, 'index.html');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = fs.readFileSync(indexPath, 'utf-8');
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error('V dist/index.html chybí <div id="root"></div>');
}

fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('Prerender hotový: dist/index.html');
