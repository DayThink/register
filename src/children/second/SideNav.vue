<template>
    <div @scroll.prevent class="shadow-sidenav" :class="{ 'sidenav-show' : isShow}">
        <div class="lh-shadow" @scroll.prevent @click="closeSidenav"></div>
        <div class="lh-sidenav" @scroll.prevent>
            <div class="sidenav-head">
                <i class="ivu-icon ivu-icon-android-arrow-back" @click="closeSidenav"></i>
                <!--<span>{{ sidenavTitle }}</span>-->
            </div>
            <div class="sidenav-content">
              <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'side-bar',
        props: {
            isShow : Boolean,
            sidenavTitle : String
        },
        watch: {
            isShow : function (val) {
                console.log(val)
            }
        },
        methods : {
            closeSidenav() {
                this.$emit('closeSidenav',this.isShow);
                //this.isShow = !this.isShow
            }
        }

    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .shadow-sidenav{
        .lh-shadow {
            background-color: rgba(0,0,0,0.5);
            position: fixed;
            left: 0;
            right: 0;
            top:0;
            bottom: 0;
            z-index:1500;
            display: none;
        }
        .lh-sidenav{
            background-color: #fff;
            position:fixed;
            //box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12);
            right:-80%;
            top:0;
            bottom: 0;
            width:25%;
            z-index:3000;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            overflow: auto;
            height: 100%;
            .sidenav-head{
                position: absolute;
                left: 0;
                right: 0;
                top:0;
                height: 50px;
                background-color: #324053;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0 20px;
                color: #fff;
                z-index:100;
                font-size:16px;
                i{
                    padding: 5px 5px 5px 0;
                    cursor: pointer;
                    font-size: 20px;
                }
                span{
                    margin-left: 5px;
                }
            }
            .sidenav-content{
                padding: 24px;
                padding-top: 74px;
                overflow: auto;
                height: 100%;
            }
        }
    }
    .sidenav-show{
        .lh-shadow{
            display: block;
        }
        .lh-sidenav{
            right: 0;
        }
    }
</style>
