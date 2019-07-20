<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <CategoryArticleList category="category1" />
    </v-flex>
  </v-layout>
</template>

<script>
import CategoryArticleList from '~/components/CategoryArticleList.vue'
export default {
  components: {
    CategoryArticleList
  }
}
</script>
