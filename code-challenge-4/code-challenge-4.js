'use strict'

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  const str = document.querySelector('textarea').value;
  console.log("========= INPUT =========");
  console.log(str);

  console.log("========= OUTPUT =========");
  const arr = str.split('\n');
  for (let [index, item] of arr.entries()) {
    const words = item.trim().toLowerCase().split('_');
    let output = '';
    output += words[0] + words[1].replace(words[1][0], words[1][0].toUpperCase());
    console.log(output.padEnd(30, '.') + '*'.repeat(index + 1));    
  }
})
