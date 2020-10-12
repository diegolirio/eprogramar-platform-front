import { http } from './config';

export default {
  getAllCourses: async () => {
    return await http.get('courses');
  },
};
