<template>
    <div>
      活动详情
      {{item.id}}
      <hr>
      {{item.name}}
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        asyncData({params}) {
            return axios.get(`http://localhost:3000/mock/11/gathering/${params.id}`).then(
                res => {
                    return {item: res.data.data}
                }
            )
        }
    }
</script>

<style scoped>

</style>
