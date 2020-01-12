<template>
  <div class="wrapper tag-item">
    <div class="job-intro">
      <div class="left-img">
        <img src="./img/widget-company.png" alt="" />
      </div>
      <div class="middle-intro">
        <div class="name">
          {{item.jobName}} &middot; {{enterprise_item.name}}
        </div>
        <div class="intro">
          {{item.salary}} / {{item.conditon1}} / {{item.education}} / {{item.type}}
        </div>
        <div class="tag">
          <li v-for="(jobLabel, index) in item.label.split(',')" :key="index">
            {{jobLabel}}
          </li>
        </div>
      </div>
      <div class="right-tool">
        <p class="throw"><button class="sui-btn btn-throw">投简历</button></p>
        <button class="sui-btn btn-collect">收藏</button>
        <span>100收藏</span>
        <span>291浏览</span>
      </div>
      <div style="clear:both"></div>
    </div>
    <div class="fl left-list ">
      <div class="tit">
        <span>职位描述</span>
      </div>
      <div class="content">
        {{item.content1}}
      </div>
      <div class="tit">
        <span>职位要求</span>
      </div>
      <div class="content">
        {{item.content2}}
      </div>
      <div class="time">
        发布于1小时前
      </div>
    </div>
    <div class="fl right-tag">
      <div class="company-job">
        <div class="intro">
          <img src="./img/widget-company.png" alt="" />
          <div class="title">
            {{enterprise_item.name}}
          </div>
          <div class="content">
            {{enterprise_item.summary}}
          </div>
        </div>
        <div class="tag">
          <li v-for="(label, index) in enterprise_item.labels.split(',')" :key="index">
            {{label}}
          </li>
        </div>
        <div class="btns">
          <a class="sui-btn btn-home" href="./recruit-company.html" target="_blank">企业主页</a>
          <a class="sui-btn btn-position" href="./recruit-job.html" target="_blank">{{enterprise_item.jobCount}}个职位</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import recruitApi from '@/api/recruit'
  import enterpriseApi from '@/api/enterprise'
  import '~/assets/css/page-sj-recruit-detail.css'
  import '~/assets/css/page-sj-enterprise-detail.css'
  export default {
    asyncData({params}) {
      return recruitApi.findById(params.id).then(res => {
        return enterpriseApi.findById(res.data.data.eid).then(res2 => {
          return {
            enterprise_item: res2.data.data,
            item: res.data.data
          }
        })
      })
    }
  }
</script>

<style scoped>

</style>
