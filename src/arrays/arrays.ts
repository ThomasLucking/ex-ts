/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */
/*
 TODO: REMIND BASTIEN FOR INTRUCTIONS FRIDAY
 Write a function that takes an array of numbers and a threshold number as parameters, then returns a new array containing only the numbers that are greater than or equal to the threshold (removing any numbers below the threshold). For example, given [4, 1, 2] with threshold 2, it should return [4, 2] because 1 is below the threshold.
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
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
}
