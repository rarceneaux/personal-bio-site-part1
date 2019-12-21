import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      console.log(response.data);
      const daProjects = response.data;
      const projects = [];
      Object.keys(daProjects).forEach((fbId) => {
        daProjects[fbId].id = fbId;
        projects.push(daProjects[fbId]);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { getProjects };
