<template>
  <div>
    <div class="wrapper activities">
      <div class="activity-card-list">
        <div class="top-title">
          <h4 class="latest">最新活动</h4>
          <div class="clearfix"></div>
        </div>
        <div class="activity-list">
          <ul class="activity">
            <li class="activity-item" v-for="(item,index) in items" :key="index">
              <div class="activity-inner">
                <a href="http://"></a>
                <div class="img">
                  <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
                </div>
                <div class="text">
                  <p class="title">{{item.name}}}</p>
                  <div class="fl goin">
                    <p>时间：{{item.startTime}}</p>
                    <p>城市：{{item.city}}</p>
                  </div>
                  <div class="fr btn">
                    <span class="sui-btn btn-bao">立即报名</span>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '~/assets/css/page-sj-activity-index.css'
  import axios from 'axios'
  export default {
    asyncData() {
      return axios.get('http://localhost:9012/gathering/gathering').then(
        res => {
           return {items: res.data.data}
        })
    }
  }
</script>

<style scoped>

</style>
