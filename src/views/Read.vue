<template>
  <div id="read">
        <div id="content">
            <h3>第一章 序言</h3>
            <p>我通过一个PageView组件把页面公共的部分写到里边，如aside（左侧菜单栏）、pageHeader（右侧页面标题栏）、pageContent（右侧正文部分）和pageFooter（右侧页面脚部），然后整个页面只有pageContent设置了slot插槽，通过router去填充这里面的内容。可是无论我怎么弄，我发现页面都是全局渲染的，而不是只局部渲染pageContent这个div，网上找了很多方法，都不行，不知道为什么，求大牛指教！我通过一个PageView组件把页面公共的部分写到里边，如aside（左侧菜单栏）、pageHeader（右侧页面标题栏）、pageContent（右侧正文部分）和pageFooter（右侧页面脚部），然后整个页面只有pageContent设置了slot插槽，通过router去填充这里面的内容。可是无论我怎么弄，我发现页面都是全局渲染的，而不是只局部渲染pageContent这个div，网上找了很多方法，都不行，不知道为什么，求大牛指教！</p>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Read',
  components: {

  }
}
</script>

<style scoped lang="stylus">
    #read{
        background-color #e3c3a9
        height 100vh
        #content{
            padding 10px
            color #333
            h3{
                font-size 1.7rem
                margin 10px 0
                text-align center
            }
            p{
                font-size 1.4rem
                line-height 2.2rem
                word-break break-all
                letter-spacing 2px
                font-family '微软雅黑'
            }
        }
    }
</style>
