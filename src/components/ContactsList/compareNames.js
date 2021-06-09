export const compareNames = (a, b) => {
  const lastNameA = a.last_name;
  const lastNameB = b.last_name;

  if (lastNameA < lastNameB) {
    return -1;
  }
  if (lastNameB > lastNameA) {
    return 1;
  }
  return 0;
};
