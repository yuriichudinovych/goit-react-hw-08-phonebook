import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.authorization = '';
  },
};

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async objData => {
  const { data } = await axios.post('/contacts', objData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const sigupUser = async user => {
  const { data } = await axios.post('/users/signup', user);
  token.set(data.token);
  return data;
};

export const login = async user => {
  const { data } = await axios.post('/users/login', user);
  token.set(data.token);
  return data;
};

export const getCurrentUser = async persistedToken => {
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
};
