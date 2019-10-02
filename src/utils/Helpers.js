/**
 * Immutably renames object keys
 * @param oldProp
 * @param newProp
 * @param old
 * @param others
 * https://medium.com/@yazeedb/immutably-rename-object-keys-in-javascript-5f6353c7b6dd
 */
export const renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => {
  debugger;
  return {
    [newProp]: old,
    ...others
  };
};
