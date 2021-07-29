/**
 * Capitalize a string given its delimiter.
 *
 * @param input the string you want to capitalize
 * @param delimiter the delimiter between words @default ' '
 * @param outputDelimiter the delimiter between the output @default ' '
 * @returns capitalized version of a given string
 */
export function capitalize(input: string, delimiter = ' ', outputDelimiter = ' '): string {
  const words = input.split(delimiter);
  const _capitalize = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  return words.reduce((acc, word) =>
    `${acc}${_capitalize(word)}${outputDelimiter}`, '').slice(-1 * outputDelimiter.length);
}

/**
 * Turn any input into kebab-case.
 *
 * @param input The input to kebabify
 * @param delimiter The delimiter that we want to replace (by default is space)
 * @returns kebab-case version of an input string
 */
export function kebabify(input: string, delimiter = ' '): string {
  const regex = new RegExp(delimiter, 'g');
  return input.toLowerCase().replace(regex, '-');
}
