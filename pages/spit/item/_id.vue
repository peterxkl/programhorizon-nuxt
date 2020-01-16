<template xmlns:v-quill="http://www.w3.org/1999/xhtml">
  <div class="wrapper tc-detail">
    <div class="fl left-list">
      <div class="tc-detail">
        <!-- 标题区 -->
        <div class="detail-tit">
          <div class="detail-author">
            <a href="javascript:;">{{item.nickname}}</a> 发布
          </div>
          <div class="detail-content">
            <p>{{item.content}}</p>
            <img src="~/assets/img/widget-tc-detail.png" alt="" />
          </div>
          <div class="detail-tool">
            <ul>
              <li><span class="star"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.thumbup}}</span></li>
              <li><a href="#" data-toggle="modal" data-target="#shareModal"><i class="fa fa-share-alt" aria-hidden="true"></i> {{item.share}}</a></li>
              <li><a data-toggle="modal" data-target="#remarkModal" @click="dialogVisible=true;content=''"><i class="fa fa-commenting" aria-hidden="true"></i> {{item.comment}}</a></li>
            </ul>
          </div>
        </div>
        <!-- 评论区 -->
        <div class="comment-area">
          <div class="comment-tit">
            <span>评论</span>
          </div>
          <ul class="comment-list" v-infinite-scroll="loadMore">
            <li v-if="(comment_item, index) in commentList" :key="index">
              <div class="item-photo">
                <img src="~/assets/img/widget-widget-photo.png" alt="" />
              </div>
              <div class="item-content">
                <p class="author"><a href="javascript:;">{{comment_item.nickname}}</a> 发布</p>
                <p class="content">{{comment_item.content}}</p>
              </div>
              <div class="item-thumb">
                <div>
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{comment_item.thumbup}}
                </div>
              </div> </li>
          </ul>
        </div>

        <el-dialog
          title="评论"
          :visible.sync="dialogVisible"
          width="40%">
          <div class="quill-editor"
               :content="content"
               @change="onEditorChange($event)"
               v-quill:myQuillEditor="editorOption">
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible=false">取消</el-button>
            <el-button @click="dialogVisible = false;save" type="primary">确定</el-button>
          </span>
        </el-dialog>
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
</template>

<script>
  import '~/assets/css/page-sj-spit-detail.css'
  import spitApi from '@/api/spit'
  import axios from 'axios'
  export default {
    data() {
      return {
        pageNo: 1,
        dialogVisible: false
      }
    },
    methods: {
      loadMore() {
        this.pageNo++
        spitApi.search(this.pageNo, 10, {state: '1'}).then(res => {
          this.items = this.items.concat(res.data.data.rows)
        })
      },
      save() {
        spitApi.save({content: this.content,parentId: this.item.id}).then(res => {
          this.$message({
            message: res.data.message,
            type: (res.data.flag ? 'success' : 'error')
          })
          if (res.data.flag) {
            this.dialogVisible = false
            spitApi.commentList(this.item.id, 1, 10).then(res => {
              this.commentList = res.data.data.rows  //todo
            })
          }
        })
      }
    },
    asyncData({params}) {
      return axios.all([spitApi.findById(params.id), spitApi.commentList(params.id, 1, 10)]).then(
        axios.spread(function (res1, res2) {
          return {
            item: res1.data.data,
            commentList: res2.data.data.rows
          }
        })
      )
    },
  }
</script>

<style scoped>
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
