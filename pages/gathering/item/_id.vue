<template>
  <div class="wrapper activities">
    <h1>{{item.name}}</h1>
    <div class="img-text">
      <div class="left-img">
        <img :src="'~/assets/img/'+item.image" alt="" />
      </div>
      <div class="right-txt">
        <p>开始时间： {{item.startTime}}</p>
        <p>结束时间： {{item.endTime}}</p>
        <p>举办地点： {{item.address}}</p>
        <p>主办方：infoQ</p>
        <p>报名截止： <span class="big">85</span>天 <span class="big">15</span>时 <span class="big">16</span>分 <span class="big">10</span>秒</p>
        <div class="join">
          <button class="sui-btn btn-danger">立即报名</button>
          <span class="will">报名即将开始</span>
        </div>
      </div>
    </div>
    <div class="simple-text">
      <div class="left-content">
        <div class="content-item">
          <div class="tit">
            <span>大会介绍</span>
          </div>
          <div class="text">
            <h4></h4>
            <p>{{item.summary}}</p>
          </div>
        </div>
        <div class="content-item">
          <div class="tit">
            <span>议题简介</span>
          </div>
          <div class="text">
            <h4></h4>
            <p>{{item.detail}}</p>
          </div>
        </div>
      </div>
      <div class="right-intro">
        <div class="content-item">
          <div class="tit">
            <span>活动组织者</span>
          </div>
          <div class="text">
            <p>主办方： {{item.sponsor}}</p>
          </div>
        </div>
        <div class="content-item">
          <div class="tit">
            <span>相关链接</span>
          </div>
          <div class="text">
            <p>活动官网： infoQ.com</p>
          </div>
        </div>
        <div class="content-item">
          <div class="tit">
            <span>分享扩散</span>
          </div>
          <div class="bshare-custom icon-medium-plus">
<!--            <a title="分享到" href="http://www.bShare.cn/" id="bshare-shareto" class="bshare-more">分享到</a>-->
            <a title="分享到QQ空间" class="bshare-qzone"></a>
            <a title="分享到新浪微博" class="bshare-sinaminiblog"></a>
            <a title="分享到人人网" class="bshare-renren"></a>
            <a title="分享到腾讯微博" class="bshare-qqmb"></a>
            <a title="分享到网易微博" class="bshare-neteasemb">
            </a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
<!--            <span class="BSHARE_COUNT bshare-share-count">0</span>-->
            <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script>
            <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gatheringApi from '@/api/gathering'
  import '~/assets/css/page-sj-activity-detail.css'
  export default {
    asyncData({params}) {
      return gatheringApi.findById(params.id).then(res => {
        return {item: res.data.data}
      })
    }
  }
</script>

<style scoped>

</style>
