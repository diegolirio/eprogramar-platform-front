import { http } from './config';
import storage from './storage';

export default {
  getAllCourses: async () => {
    const options = {
      headers: {
        Authorization: storage.getTokenBearer(),
      },
    };
    return await http.get('courses', options);
  },
  getCoursesByUser: async (email) => {
    const options = {
      headers: {
        Authorization: storage.getTokenBearer(),
      },
    };
    return await http.get(`users/${email}/courses`, options);
  },
  getCoursesById: async (id) => {
    const options = {
      headers: {
        Authorization: storage.getTokenBearer(),
      },
    };
    return await http.get(`courses/${id}`, options);
  },
};
