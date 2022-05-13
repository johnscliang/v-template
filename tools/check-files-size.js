const fs = require("fs");
const filesize = require("filesize");
const files = process.argv.slice(2);

const SIZE_LIMIT = 500 * 1024;
const filesOverLimit = [];

for (const file of files) {
  const { size } = fs.statSync(file);
  if (size > SIZE_LIMIT) {
    filesOverLimit.push({ name: file, size });
  }
}

if (filesOverLimit.length > 0) {
  console.error(
    `The following files are over the size limit (${filesize(SIZE_LIMIT)}):`
  );
  filesOverLimit.forEach(file =>
    console.error(`\t* ${filesize(file.size)} ${file.name}`)
  );
  console.error("Please optimize the assets using https://imageoptim.com/mac");

  process.exit(1);
}