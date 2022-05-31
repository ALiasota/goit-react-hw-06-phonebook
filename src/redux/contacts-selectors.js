export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
  const normalizeFilter = getFilter(state).toLowerCase();
  const contacts = getContacts(state);
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
