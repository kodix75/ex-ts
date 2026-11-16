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
  const new_array = array.filter((x) => {
    return x >= threshold;
});
  return new_array;
  }


export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  const new_array = array.filter((a) => a.length >= minLength && a.length <= maxLength)
  return new_array;
  }


export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  const stringLow = String(string.match(/[a-z]/g) ?? null);
  return stringLow.split(",").join("");
}
