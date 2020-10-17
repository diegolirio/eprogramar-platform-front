import { http } from './config';

export default {
  getAllCourses: async () => {
    return await http.get('courses');
  },
  getCoursesByUser: async (email) => {
    console.log(`getCoursesByUser(${email})...`);
    return await http.get(`users/${email}/courses`);
  },
};
