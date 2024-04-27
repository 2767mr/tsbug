import * as fs from "fs";
import * as path from "path";

let outputPath = "src/app/services/";

(async () => {
  console.log("Going to generate code");

  if (fs.existsSync(path.resolve(outputPath, "generated"))) {
    await fs.promises.rm(path.resolve(outputPath, "generated"), {
      recursive: true,
      force: true,
    });
    console.log("directory deleted: ", outputPath);
  }

  await new Promise((resolve) => setTimeout(resolve, 1000)); //We need a minimum timeout for ts to realize something has changed to trigger the bug. Can be anything above a certain threshold.

  await fs.promises.cp("test/generated", "src/app/services/generated", {
    recursive: true,
  });
})();
