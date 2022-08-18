const reverse = (string) => {
  const str = string.split('');
  str.reverse();
  let result = '';
  str.forEach((char) => {
    result += char;
  });

  return result;
};

module.exports = reverse;
