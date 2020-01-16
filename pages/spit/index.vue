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
                      <p class="usenum" @click="thumbup(index)"><a href="#" class="zan"><i :class="'fa fa-thumbs-up'+item.zan " aria-hidden="true"></i></a></p>
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
          <router-link class="sui-btn btn-block btn-share" to="/spit/submit"></router-link>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import '~/assets/css/page-sj-spit-index.css'
  import spitApi from '@/api/spit'
  import {getUser} from "../../utils/auth";

  export default {
    data() {
      return {
        pageNo: 1,
        dialogVisible: false,
        content: '',
        editorOption: {
          modules: {
            toolbar: [
              [{'size': ['small', false, 'large']}],
              ['bold', 'italic'],
              [{'list': 'ordered'},  {'list': 'bullet'}],
              ['link','image']
            ]
          }
        }
      }
    },
    methods: {
      loadMore() {
        this.pageNo++
        spitApi.search(this.pageNo, 10, {state: '1'}).then(res => {
          let tmp = res.data.data.rows.map(item => {
            return {
              ...item,    //注意此处的高级写法
              zan: ''
            }
          })
          this.items = this.items.concat(tmp)
        })
      },
      thumbup(index) {
        if (getUser().name === undefined) {
          this.$message({
            message: '必须登录才能点赞',
            type: 'warning'
          })
          return
        }
        if (this.items[index].zan === 'color') {
          this.$message({
            message: '不能重复点赞',
            type: 'warning'
          })
          return
        }
        this.items[index].zan = 'color'
        spitApi.thumbup(this.items[index].id).then(res => {
          if (res.data.flag) {
            this.items[index].thumbup++
          }
        })
      },
      onEditorChange({editor, html, text}) {
        console.log('editor change', editor, html, text)
        this.content = html
      },
    },
    asyncData() {
      return spitApi.search(1, 10, {state: '1'}).then(res => {
        let tmp = res.data.data.rows.map(item => {
          return {
            ...item,    //注意此处的高级写法
            zan: ''
          }
        })
        return {items: tmp}
      })
    }
  }
</script>

<style scoped>

</style>
