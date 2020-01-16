<template>
  <div>
    <div class="tab-nav ">
      <div class="wrapper">
        <ul class="fl sui-nav nav-tabs navbar-dark">
          <router-link  tag="li" to="/qa" actice-class="active" exact><a>首页</a></router-link>
          <router-link tag="li" :to="'/qa/label/'+item.id" active-class="active" v-for="(item,index) in labelList" :key="index">
            <a>{{item.labelName}}</a>
          </router-link>
        </ul>
        <span class="fr more"><a href="~/assets/qa-allTag.html" target="_blank">更多</a></span>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--两列布局-->
    <nuxt-child/>
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
