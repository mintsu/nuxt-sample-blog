<template>
  <v-layout row wrap>
    <v-flex x12 sm12 md12>
      <h3 class="headline">{{ category }} カテゴリの記事</h3>
    </v-flex>
    <v-flex v-for="(article, idx) in articleList" :key="idx" xs12 sm12 md12>
      <v-card style="width: 100%">
        <v-card-text>
          <p>{{ article.title }}</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    articleList() {
      return this.$store.getters[
        'article/findArticlesByCategory'
      ](this.category)
    }
  }
}
</script>
