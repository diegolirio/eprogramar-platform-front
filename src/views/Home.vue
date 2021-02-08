<template>

    <div>
        <AppBar :navigate="navigate"/>             
        <v-main>
          <v-container>
            <v-row>

              <v-col
                v-for="course in this.courses" :key="course.id"
                cols="4"
              >
                <CardCourse
                  v-on:play-course="playCourse"
                  :name="course.name"
                  :tumbnail="course.tumbnail"
                  :_id="course._id"
                />                
              </v-col>

            </v-row>
          </v-container>
        </v-main>        
    </div>
</template>

<script>
import AppBar from '../components/AppBar';
import storage from "../services/storage";
import Course from "../services/course";
import CardCourse from "@/components/CardCourse.vue";
export default {
  
  name: 'Home',
  components: {
    AppBar, CardCourse
  },
  data: () =>  ({
      courses: [],
      userName: "",
      userEmail: "",
  }), 
  beforeMount() {
    this.navigate = false; 
    this.getCourses();
  },
  created() {
    this.userName = storage.getCurrentUserName();
    this.userEmail = storage.getCurrentUser();
  },
  methods: {
    getCourses() {
      Course.getCoursesByUser(storage.getCurrentUser()).then((response) => {
        this.courses = response.data;
      });
    },
    playCourse(id) {
      Course.getCoursesById(id).then((response) => {
        this.currentCourse = response.data;
        this.currentSection = this.currentCourse.sections[0];
        const currentMovie = this.currentSection.contents[0].value;
        this.$router.push({
          path: "/classroom",
          query: {
            courseId: id,
            currentMovie: currentMovie,
          },
        });
      });
    },
  },  
}
</script>
