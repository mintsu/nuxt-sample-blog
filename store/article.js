import { contentsMap } from '~/contents/contentsMap.json'

export const state = () => ({
  articleList: contentsMap
})

export const getters = {
  findArticlesByCategory: state => (category) => {
    return Object.values(state.articleList).filter(a => a.category === category)
  }
}
