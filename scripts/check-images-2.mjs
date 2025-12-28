import fs from 'fs';
import path from 'path';
const contents = fs.readFileSync('constants.ts','utf8');
const imgs = [...contents.matchAll(/image:\s*'([^']+)'/g)].map(m=>m[1]);
imgs.forEach(i=>{
  if (i.startsWith('/')){
    const p = path.join('public', i.replace(/^\//,''));
    console.log(i, '->', fs.existsSync(p) ? 'OK' : `MISSING (${p})`);
  } else if (i.startsWith('http')){
    console.log(i, '->', 'remote');
  } else {
    console.log(i, '->', fs.existsSync(i) ? 'OK' : `MISSING (${i})`);
  }
});
