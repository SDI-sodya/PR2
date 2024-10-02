function letterCount(letter, row) {
  if(typeof letter !== "string" || letter.length > 1)
    throw new TypeError('The format of the searched letter is incorrect');
  if(typeof row !== "string")
    throw new TypeError('The format of the sentence is incorrect');

  count = 0;
  i = 0;

  while (i < row.length) {
    if(row[i] === letter) count++;
    i++;
  }
  return count;
}

function getRow(firstRow, secondRow) {
  letter = prompt("Type the letter").toLowerCase();
  count1 = letterCount(letter, firstRow.toLowerCase());
  count2 = letterCount(letter, secondRow.toLowerCase());

  if(count1 >= count2) {
    alert(row1);
    return row1;
  } else if (count1 < count2 ) {
    alert(row2);
    return row2;
  }
}

row1 = prompt('Type first sentence');
row2 = prompt('Type second sentence');

console.log(getRow(row1, row2));