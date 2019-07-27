<template>
  <div>
    <p>time:{{ data.time.updated }}</p>
    <p>chartName:{{ data.chartName }}</p>
    <p>USD:{{ data.bpi.USD.rate }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
    return {
      data: response
    }
  }
}
</script>
