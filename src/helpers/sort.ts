/**
 * Helper functions to help for sorting arrays
 */

/**
 *
 * @param array array to sort
 * @param field field to sort with
 * @returns a sorted array alphabetically
 */
export const sortObjectArrayAlphabetically = (
  array: Record<string, any>[],
  field: string
) => {
  return array.sort((a, b) => a[field].localeCompare(b[field]));
};
