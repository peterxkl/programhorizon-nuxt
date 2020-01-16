<template>
  <div>
    这里是问答列表
  </div>
</template>

<script>
  import '~/assets/css/page-sj-qa-logined.css'
  import labelApi from '@/api/label'
  export default {
    created() {
      this.$router.push('/qa/label/0')
    },
    asyncData() {
      return labelApi.topList(res => {
        return {labelList: res.data.data}
      })

    }
  }
</script>

<style scoped>

</style>
