<template>
  <div>
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="tc-data-list">
          <div class="tc-list" v-infinite-scroll="loadMore">
            <ul class="detail-list">
              <li class="qa-item" v-if="(item, index) in items" :key="index">
                <div class="fl record">
                  <div class="number">
                    <div class="border useful">
                      <p class="usenum"><a href="#" class="zan"><i class="fa fa-thumbs-up " aria-hidden="true"></i></a></p>
                      <p class="zannum"> {{item.thumbup}} </p>
                    </div>
                    <div class="border answer">
                      <a href="#" class="star"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                <div class="info">
                  <p class="text"> <a :href="'/spit/'+item.id" target="_blank"> {{item.content}} </a> </p>
                  <div class="other">
                    <div class="fl date">
                      <span>{{item.publishTime}}</span>
                    </div>
                    <div class="fr remark">
                      <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i class="fa fa-share-alt" aria-hidden="true"></i> 分享</a>
                      <a href="#" data-toggle="modal" data-target="#remarkModal" class="comment"><i class="fa fa-commenting" aria-hidden="true"></i> 回复</a>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div> </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fl right-tag">
        <div class="block-btn">
          <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
          <a class="sui-btn btn-block btn-share" href="~/assets/spit-submit.html" target="_blank">发吐槽</a>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import '~/assets/css/page-sj-spit-index.css'
  import spitApi from '@/api/spit'
  export default {
    data() {
      return {
        pageNo: 1
      }
    },
    methods: {
      loadMore() {
        this.pageNo++
        spitApi.search(this.pageNo, 10, {state: '1'}).then(res => {
          this.items = this.items.concat(res.data.data.rows)
        })
      }
    },
    asyncData() {
      return spitApi.search(1, 10, {state: '1'}).then(res => {
        return {items: res.data.data.rows}
      })
    }
  }
</script>

<style scoped>

</style>
