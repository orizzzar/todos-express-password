function capitalize(string) {
  if (!string) return string;
  return string[0].toUpperCase() + string.substring(1);
}

module.exports = {
  capitalize,
}