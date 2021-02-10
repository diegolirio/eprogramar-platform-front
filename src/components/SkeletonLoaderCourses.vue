<template>
  <div>
        <v-col 
            class="d-flex child-flex" 
            cols="12" xs="12" sm="6" md="4" lg="4" xl="4"
        >
            <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="image, article"
            ></v-skeleton-loader>
        </v-col>
  </div>  
</template>

<script>

export default {
    name: "SkeletonLoaderCourses",
    components: {
    },
    methods: {
    },     
    data: () => ({ 
    }),
}
</script>