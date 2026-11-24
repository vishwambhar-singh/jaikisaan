import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

function run(cmd, cwd = rootDir) {
  console.log(`> ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

console.log('--- Step 1: Building project for GitHub Pages ---');
run('npm run build');

// Ensure .nojekyll exists in dist
const nojekyllPath = path.join(distDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
}

console.log('--- Step 2: Preparing dist directory for deployment ---');
const distGit = path.join(distDir, '.git');
if (fs.existsSync(distGit)) {
  fs.rmSync(distGit, { recursive: true, force: true });
}

console.log('--- Step 3: Deploying dist to gh-pages branch ---');
run('git init', distDir);
run('git checkout -b gh-pages', distDir);
run('git add -A', distDir);
run('git commit -m "deploy: update live site with proper assets structure and .nojekyll"', distDir);

const remoteUrl = execSync('git config --get remote.origin.url', { cwd: rootDir }).toString().trim();
console.log(`Using remote: ${remoteUrl}`);
run(`git remote add origin ${remoteUrl}`, distDir);
run('git push -f origin gh-pages', distDir);

if (fs.existsSync(distGit)) {
  fs.rmSync(distGit, { recursive: true, force: true });
}

console.log('--- Deployment to gh-pages successfully completed! ---');
