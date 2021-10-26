import sass from "sass";
import { promisify } from "util";
import { writeFile, existsSync, mkdirSync } from "fs";
const writeFilePromise = promisify(writeFile);

async function main() {
  if (!existsSync("build")) {
    mkdirSync("build");
  }

  const styleResult = await sass.renderSync({
    file: `${process.cwd()}/src/scss/index.scss`,
    outFile: `${process.cwd()}/build/styles.css`,
    outputStyle: "compressed",
  });

  await writeFilePromise("build/styles.css", styleResult.css, "utf8");
}

main();
