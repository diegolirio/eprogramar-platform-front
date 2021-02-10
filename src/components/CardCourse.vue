<template>
  <v-card>
    <v-img
      :src="tumbnail"
      height="200px"
      class="grey lighten-2"
    ></v-img>

    <v-card-title>
      {{ name }}
    </v-card-title>

    <v-card-subtitle>
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="success"
        style="width: 100%;"
        v-on:click="$emit('play-course', _id)"
        :loading="loading"
      >
        Assistir Curso
      </v-btn>
    </v-card-actions>

  </v-card>

</template>

<style lang="scss" scoped>
%truncate_placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
}

//truncate
@mixin truncate($mx: 250px) {
  @media (min-width: 768px) {
    max-width: $mx;
  }
  justify-content: space-between;
  align-items: center;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  @extend %truncate_placeholder;
}

.card {
  @media (min-width: 768px) {
    height: 200px;
  }

  & > div {
    height: 100%;
  }

  &__text {
    @include truncate;
    -webkit-line-clamp: 2;
  }

  &__image {
    height: 100%;
    max-height: 200px;
  }

  &__title {
    @include truncate;
    -webkit-line-clamp: 2;

    @media (min-width: 768px) {
      height: 2.5em;
    }
  }

  &__button {
    @include truncate;
    -webkit-line-clamp: 1;
  }
}
</style>

<script>
export default {
  name: "CardCourse",
  components: {},
  props: ['tumbnail', 'name', '_id', 'loading' ],
};
</script>