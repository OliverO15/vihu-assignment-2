import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all rule files except index.js and test files
const ruleFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && !file.endsWith('.test.js'));

// Dynamically import all rules
const assignment2Rules = Object.fromEntries(
  await Promise.all(
    ruleFiles.map(async (file) => {
      const module = await import(`file://${path.join(__dirname, file)}`);
      return [path.basename(file, '.js'), module.default]; // Ensure exporting default from rule files
    }),
  ),
);

export default assignment2Rules;
