export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.contacts;

export const getFilteredContacts = state => {
  // const contacts = getContacts(state);
  // return contacts;
  const normalizeFilter = getFilter(state).toLowerCase();
  const contacts = getContacts(state);
  console.log(contacts);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
