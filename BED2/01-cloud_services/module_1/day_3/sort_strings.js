function sortMiddle(s, srtAlg) {
  const sArr = s.split(" ");
  const outArr = [];
  for (let i = 0; i < sArr.length; i++) {
    let word = sArr[i];
    if (word.length < 4) {
      outArr.push(word);
      continue;
    }
    const first = word[0];
    const last = word[word.length - 1];
    const middle = [...word.slice(1, -1)].sort(srtAlg).join("");
    outArr.push(first + middle + last);
  }
  const out = outArr.join(" ")
  console.log(out);
}

function sortingAlg(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
}

sortMiddle("Hei på deg surrekopp", sortingAlg);
sortMiddle("Foruten en veldig god ferie ville det vært hardt å starte igjen", sortingAlg);