<template>

    <div>
        <AppBar :navigate="navigate"/>             
        <v-main>
          <v-col cols="12"  v-if="loadingBeforeMount || loading" style="margin-top: -12px; width: 100%">
            <v-progress-linear
              indeterminate
              rounded
              :active="loadingBeforeMount || loading"
              background-opacity="0.42"
              buffer-value="100"
              height="7"
              value="0"
              color="light-blue"
            ></v-progress-linear>
          </v-col>          
          <v-container>
            <v-row>

              <v-col 
                v-if="loadingBeforeMount"            
                class="d-flex child-flex" 
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image, article"
                    ></v-skeleton-loader>
              </v-col>
              <v-col 
                v-if="loadingBeforeMount"            
                class="d-flex child-flex" 
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image, article"
                    ></v-skeleton-loader>
              </v-col>
              <v-col 
                v-if="loadingBeforeMount"            
                class="d-flex child-flex" 
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image, article"
                    ></v-skeleton-loader>
              </v-col>
              <v-col 
                v-if="loadingBeforeMount"            
                class="d-flex child-flex" 
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image, article"
                    ></v-skeleton-loader>
              </v-col>
              <v-col 
                v-if="loadingBeforeMount"            
                class="d-flex child-flex" 
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image, article"
                    ></v-skeleton-loader>
              </v-col>
              <v-col 
                v-if="loadingBeforeMount"            
                class="d-flex child-flex" 
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image, article"
                    ></v-skeleton-loader>
              </v-col>

              <v-col
                v-for="course in this.courses" :key="course.id"
                cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
              >
                <CardCourse
                  v-on:play-course="playCourse"
                  :name="course.name"
                  :tumbnail="course.tumbnail"
                  :_id="course._id"
                  :loading="loading"
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
      loadingBeforeMount: false,
      loading: false,
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
      this.loadingBeforeMount = true;
      Course.getCoursesByUser(storage.getCurrentUser()).then((response) => {
        this.courses = response.data;
        this.loadingBeforeMount = false;
      });
    },
    playCourse(id) {
      this.loading = true;
      Course.getCoursesById(id).then((response) => {
        this.currentCourse = response.data;
        this.currentSection = this.currentCourse.sections[0];
        const currentMovie = this.currentSection.contents[0].value;
        this.loading = false;
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
