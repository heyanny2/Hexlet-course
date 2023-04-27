/*Протестируйте функцию, которая форматирует и изменяет указанный HTML-файл.

// содержимое до форматирования
// <div><p>hello <b>world</b></p></div>
await prettifyHTMLFile('/path/to/file');
 
// содержимое после форматирования:
// <div>
//     <p>hello <b>world</b></p>
// </div>*/

import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import getFunction from '../functions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prettifyHTMLFile = getFunction();

//solution
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filename = 'before.html';
const dest = path.join(os.tmpdir(), filename);
const filepath = getFixturePath(filename);

let expected;

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('after.html'), 'utf-8');
});

beforeEach(async () => {
  await fs.copyFile(filepath, dest);
});

test('prettifyHTMLFile', async () => {
  await prettifyHTMLFile(dest);
  const result = await fs.readFile(dest, 'utf-8');
  expect(result).toBe(expected);
});
