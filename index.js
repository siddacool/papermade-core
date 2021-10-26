import sass from "sass";
import { promisify } from "util";
import { writeFile } from "fs";
const writeFilePromise = promisify(writeFile);

async function main() {
  const styleResult = await sass.renderSync({
    file: `${process.cwd()}/src/scss/index.scss`,
    outFile: "styles.css",
    outputStyle: "compressed",
  });

  await writeFilePromise("styles.css", styleResult.css, "utf8");
}

main();
