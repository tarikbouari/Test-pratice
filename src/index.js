const countChar = (string) => {
  const str = string.split('');
  let count = 0;
  str.forEach(() => {
    count += 1;
  });

  if (!(count === 1 && count > 10)) return ' the condition does not meet';

  return count;
};

module.exports = countChar;
