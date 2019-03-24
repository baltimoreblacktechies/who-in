import axios from 'axios';
import Bluebird from 'bluebird';

const getLoginUrl = () => `http://localhost:3000/auth/login`;
const getEventsUrl = () => `http://localhost:3000/events`;

export const axPostLogin = (email, password) => {
  return Bluebird.resolve(
    axios.post(getLoginUrl(), { email, password }).then(({ data }) => data)
  );
};

export const getEvents = () => {
  return Bluebird.resolve(axios.get(getEventsUrl()));
};
