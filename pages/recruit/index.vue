<template>
  <div>
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="job-position">
          <div class="job-type reco-job">
            <div class="head">
              <h4 class="title pull-left">推荐职位</h4>
              <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
              <div class="clearfix"></div>
            </div>
            <ul class="yui3-g job-list" style="display:block;">
              <li class="yui3-u-1-2 job-item" v-for="(item,index) in recommendItems" :key="index">
                <p>
                  <span class="name"><a :href="'/recruit/item/'+item.id" target="_blank">{{item.jobName}}</a></span>
                  <span class="city"><i class="fa fa-map-marker"></i> {{item.address}}</span></p> <p class="need">
                  <span class="money">{{item.salary}}</span>/{{item.conditon1}}/{{item.education}}/{{item.type}}</p> <p>
                  <span class="company">{{item.eid}} &middot; {{item.createDate}}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="job-type latest-job">
            <div class="head">
              <h4 class="title pull-left">最新职位</h4>
              <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
              <div class="clearfix"></div>
            </div>
            <ul class="yui3-g job-list" style="display:block;">
              <li class="yui3-u-1-2 job-item" v-for="(item,index) in newListItems" :key="index">
                <p>
                  <span class="name"> <a :href="'/recruit/item/'+item.id" target="_blank">{{item.jobName}}</a></span>
                  <span class="city"><i class="fa fa-map-marker"></i> {{item.address}}</span></p> <p class="need">
                  <span class="money">{{item.salary}}</span>/{{item.conditon1}}/{{item.education}}/{{item.type}}</p> <p>
                  <span class="company">{{item.eid}} &middot; {{item.createDate}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fl right-tag">
        <div class="hot-company">
          <p class="mail">提交收录请发邮件至18711345569@163.com</p>
          <div class="company">
            <div class="head">
              <h4>热门企业</h4>
            </div>
            <ul class="yui3-g company" style="display:block;">
              <li class="yui3-u-1-3 company-item" v-for="(item, index) in hotListItems" :key="index">
                <p><img src="~/assets/img/widget-baidu.png" alt="" /></p>
                <p class="title">{{item.name}}</p>
                <p class="position"><a href="~/assets/recruit-company.html" target="_blank">{{item.jobCount}}个职位</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import '~/assets/css/page-sj-recruit-index.css'
  import recruitApi from '@/api/recruit'
  import enterpriseApi from '@/api/enterprise'
  import axios from 'axios'
  export default {
    asyncData() {
      return axios.all([recruitApi.searchRecommend(),recruitApi.searchNewList(),enterpriseApi.searchHotList()]).then(
        axios.spread(function (recommendList, newList, hotList) {
          return {
            recommendItems: recommendList.data.data,
            newListItems: newList.data.data,
            hotListItems: hotList.data.data
          }
        })
      )
    }
  }
</script>

<style scoped>

</style>
