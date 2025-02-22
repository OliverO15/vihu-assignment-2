import fs from "fs";
import path from "path";

const ruleFiles = fs
    .readdirSync(__dirname)
    .filter((file) => file !== "index.js" && !file.endsWith("test.js"));

const rules = Object.fromEntries(
    await Promise.all(
        ruleFiles.map(async (file) => {
            const module = await import(`./${file}`);
            return [path.basename(file, ".js"), module];
        })
    )
);

export { rules };