/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
  return array.filter((num) => num >= threshold);
  
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here
  return array.filter((stringlength) => stringlength.length >= minLength  && stringlength.length <= maxLength)
  
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
  return string.replace(/[0-9-A-Z]/g, "")
}
