// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!π©') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents β¨';
}

function closeFile(fileName: string) {
  console.log(`closed!`);
}

function run() {
  const fileName = 'not exist!π©';
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // catchμμ  return λμ΄λ μ€ν λ³΄μ₯
    closeFile(fileName);
  }
}

run();
