<template>
  <div class="wrapper qa-content">
    <div class="fl left-list">
      <div class="tab-content">
        <div id="index" class="tab-pane active">
          <div class="tab-bottom-line">
            <ul class="sui-nav nav-tabs">
              <li :class="type=='new' ? 'active' : ''"><a @click="type='new'" data-toggle="tab">最新回答</a></li>
              <li :class="type=='hot' ? 'active' : ''"><a @click="type='hot'" data-toggle="tab">热门回答</a></li>
              <li :class="type=='hot' ? 'active' : ''"><a @click="type='hot'" data-toggle="tab">等待回答</a></li>
            </ul>
            <div class="qa-list" v-infinite-scroll="loadMore">
              <div class="tab-content">
                <div id="new" :class="'tab-pane ' + (type=='new' ? 'active' : '')">
                  <ul class="detail-list">
                    <li class="qa-item" v-for="(item, index) in newList" :key="index">
                      <div class="fl record">
                        <div class="number">
                          <div class="border useful">
                            <p class="usenum">{{item.thumbUp}}</p>
                            <p>有用</p>
                          </div>
                          <div class="border answer">
                            <p class="ansnum">{{item.reply}}</p>
                            <p>回答</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl info">
                        <div class="question">
                          <p class="author"><span class="name">{{item.replyName}}</span><span>3</span>分钟前回答</p>
                          <p class="title"><a href="~/assets/qa-detail.html" target="_blank">{{item.title}}</a></p>
                        </div>
                        <div class="other">
                          <ul class="fl sui-tag">
                            <li>Php</li>
                            <li>Javascript</li>
                          </ul>
                          <div class="fr brower">
                            <p>浏览量 {{item.visits}} | {{item.createTime}} 来自 <a href="#">{{item.nickName}} </a></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div> </li>
                  </ul>
                </div>
                <div id="hot" :class="'tab-pane ' + (type=='hot' ? 'active' : '')">
                  <ul class="detail-list">
                    <li class="qa-item" v-for="(item, index) in hotList" :key="index">
                      <div class="fl record">
                        <div class="number">
                          <div class="border useful">
                            <p class="usenum">{{item.thumbUp}}</p>
                            <p>有用</p>
                          </div>
                          <div class="border answer">
                            <p class="ansnum">{{item.reply}}</p>
                            <p>回答</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl info">
                        <div class="question">
                          <p class="author"><span class="name">{{item.replyName}}</span><span>3</span>分钟前回答</p>
                          <p class="title"><a href="~/assets/qa-detail.html" target="_blank">{{item.title}}</a></p>
                        </div>
                        <div class="other">
                          <ul class="fl sui-tag">
                            <li>Php</li>
                            <li>Javascript</li>
                          </ul>
                          <div class="fr brower">
                            <p>浏览量 {{item.visits}} | {{item.createTime}} 来自 <a href="#">{{item.nickName}} </a></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div> </li>
                  </ul>
                </div>
                <div id="wait" :class="'tab-pane ' + (type=='wait' ? 'active' : '')">
                  <ul class="detail-list">
                    <li class="qa-item" v-for="(item, index) in waitList" :key="index">
                      <div class="fl record">
                        <div class="number">
                          <div class="border useful">
                            <p class="usenum">{{item.thumbUp}}</p>
                            <p>有用</p>
                          </div>
                          <div class="border answer">
                            <p class="ansnum">{{item.reply}}</p>
                            <p>回答</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl info">
                        <div class="question">
                          <p class="author"><span class="name">{{item.replyName}}</span><span>3</span>分钟前回答</p>
                          <p class="title"><a href="~/assets/qa-detail.html" target="_blank">{{item.title}}</a></p>
                        </div>
                        <div class="other">
                          <ul class="fl sui-tag">
                            <li>Php</li>
                            <li>Javascript</li>
                          </ul>
                          <div class="fr brower">
                            <p>浏览量 {{item.visits}} | {{item.createTime}} 来自 <a href="#">{{item.nickName}} </a></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="php" class="tab-pane">
          php
        </div>
        <div id="js" class="tab-pane">
          Javascript
        </div>
        <div id="python" class="tab-pane">
          python
        </div>
        <div id="java" class="tab-pane">
          java
        </div>
      </div>
    </div>
    <div class="fl right-tag">
      <div class="block-btn">
        <p>今天，有什么好东西要和大家分享么?</p>
        <a class="sui-btn btn-block btn-share" href="~/assets/qa-submit.html" target="_blank">发布问题</a>
      </div>
      <div class="hot-tags">
        <div class="head">
          <h3 class="title">热门标签</h3>
        </div>
        <div class="tags">
          <ul class="sui-tag">
            <li>Php</li>
            <li>Javascript</li>
            <li>Gif</li>
            <li>Java</li>
            <li>C#</li>
            <li>iOS</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import '~/assets/css/page-sj-qa-logined.css'
  import problemApi from '@/api/problem'
  import axios from 'axios'
  export default {
      data() {
        return{
            type: 'new',
            page_new: 1,
            page_hot: 1,
            page_wait: 1,
            label: 0
        }
      },
      asyncData({params}) {
          axios.all([problemApi.list('newList', params.label, 1, 10),
              problemApi.list('hotList', params.label, 1, 10),
              problemApi.list('waitList', params.label, 1, 10)]).then(axios.spread(function (newList, hotList, waitList) {
                  this.label = params.label
                  return {
                      newList: newList.data.data.rows,
                      hotList: hotList.data.data.rows,
                      waitList: waitList.data.data.rows
                  }
          }))
      },
      methods: {
          loadMore() {
              if (this.type === 'new') {
                  this.page_new++
                  problemApi.list('newList', this.label, this.page_new, 10).then(res => {
                      this.newList = res.data.data.rows
                  })
              }
              if (this.type === 'hot') {
                  this.page_hot++
                  problemApi.list('hotList', this.label, this.page_hot, 10).then(res => {
                      this.hotList = res.data.data.rows
                  })
              }
              if (this.type === 'wait') {
                  this.page_wait++
                  problemApi.list('waitList', this.label, this.page_wait, 10).then(res => {
                      this.waitList = res.data.data.rows
                  })
              }
          }
      },
  }
</script>

<style scoped>

</style>
