<template>
    <div id="login">
        <p id="slogan">I DU,读书使我快乐！</p>
        <div id="login-form">
            <input type="text" placeholder="账号">
            <input type="text" placeholder="密码">
            <button>登 录</button>
        </div>
    </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style lang="stylus" scoped>
    #login{
        width 100%
        height 100vh
        display flex
        flex-direction column
        justify-content center
        align-items center
        background-color #efecec
        #slogan{
            text-align center
            font-size 2rem
            margin-bottom 80px
            color #666
        }
        #login-form{
            width 60%
            input{
                display block
                height 35px
                border 1px solid #ddd
                background-color #fff
                width 100%
                margin-bottom 15px
                border-radius 3px
                text-indent 1rem
                font-size 1.5rem
                outline none
                color #999
            }
            input:focus{
                color #c78d5e
                box-shadow 0 0 3px #c78d5e
            }
            button{
                width 100%
                height 37px
                background-color #c78d5e
                border none
                border-radius 3px
                color #fff
            }
        }
    }
</style>