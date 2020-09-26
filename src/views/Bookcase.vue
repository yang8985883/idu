<template>
    <div id="bookcase">
        <div><router-link to="/"><img src="../assets/img/九转狂神.jpg" alt=""><p>九转狂神</p></router-link></div>
        <div><img src="../assets/img/绝品神医.jpg" alt=""  title="111111"><p>绝品神医</p></div>
        <div><img src="../assets/img/九转狂神.jpg" alt=""><p>九转狂神</p></div>
        <div><img src="../assets/img/绝品神医.jpg" alt=""><p>绝品神医</p></div>
        <div><img src="../assets/img/九转狂神.jpg" alt=""><p>九转狂神</p></div>
        <div><img src="../assets/img/绝品神医.jpg" alt=""><p>绝品神医</p></div>
        <div><img src="../assets/img/九转狂神.jpg" alt=""><p>九转狂神</p></div>
    </div>
</template>

<script>
export default {
    name: "Bookcase"
}
</script>

<style lang="stylus" scoped>
    #bookcase{
        display flex
        flex-wrap wrap
        align-content start
        height 100vh
        background-color #efecec
        div{
            width 33.33333%
            background-color #efefee
            border 2px solid #fff
            box-sizing border-box
            overflow hidden
            position relative
            box-shadow 0 0 2px #c78d5e
            img{
                width 86%
                position absolute
                margin-left 7%
                margin-top 5%
                height 80%
            }
            p{
                width 100%
                position absolute
                bottom 5px
                text-align center
                font-size 1.4rem
                color #666
            }
        }
        div::after{
            content:''
            display block
            padding-top 135%
        }
    }
</style>