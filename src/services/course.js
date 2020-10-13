import { http } from './config';

export default {
  getAllCourses: () => {
    return http.get('courses');
  },
};
