<template>
    <div class="pagination"  v-if="total>=1">
        <ul class="page-list">
            <li @click="prepage">
                <span><</span>
            </li><li 
                v-for="(item, index) in list" 
                :key="index"
                :class="{'is-current':item.value === currentPage}"
                @click="changePageBar(item.option)"
            >
                <span>{{item.value}}</span>
            </li><li  @click="nextpage">
                <span>></span>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>

    @color: #5E6460;
    @import '~pcadmin-base/src/css/var.less';

    .paginationss {
        a {
            color: @color;
        }
        .page-list {
            text-align: right;
        }
        li {
            border: 1px solid @color;
            display: inline-block;
            cursor: pointer;
            min-width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            margin-left: 10px;
        }
        .is-current {
            color: #ffffff;
            background-color: @currentColor;
            border-color: @currentColor;
        }

    }
</style>
<script>
    export default{
        name: "pagination",
        props: {
            total: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            },
            current: {
                type: Number,
                default: 1
            },
            showNumber: {
                type: Number,
                default: 7
            },
        },
        data(){
            return{
                currentPage: this.current,
                // list: []
            }
        },
        watch: {
            'current': function () {
                this.currentPage = this.current;
            },
            'currentPage': function(newVal, oldVal){
                this.$emit('update:current', newVal)
                this.$emit('changePage',newVal);
            },

        },
        mounted() {
        },
        computed:{
            // 计算页码
            totalPage() {
                let total = this.total;
                let pageSize = this.pageSize;
                let totalPage = 1;
                if (total>0) {
                    totalPage = Math.ceil(total / pageSize);
                }
                return totalPage;
            },
            // 计算页码
            list: function() {
                const totalPage = Number(this.totalPage);
                const currentPage = Number(this.currentPage);
                let showNumber = this.showNumber > 7 ? this.showNumber : 7;

                let showPrevMore = false;
                let showNextMore = false;
                let currentPagePrev = 1;
                let currentPageNext = totalPage;
                if (showNumber < totalPage) {
                    let showNumberDiff = parseInt(showNumber / 2);
                    if (currentPage > showNumberDiff + 1 ) {
                        showPrevMore = true;
                        currentPagePrev = currentPage - showNumberDiff;
                        currentPagePrev = currentPagePrev < 1 ? '1' : currentPagePrev;
                    }

                    if (currentPage < totalPage - showNumberDiff) {
                        showNextMore = true;
                        currentPageNext = currentPage + showNumberDiff;
                        currentPageNext = currentPageNext > totalPage ? totalPage : currentPageNext;
                    }
                }
                let array = [];
                // 第一页
                totalPage >=1 && array.push({
                    value: 1,
                    option: 1,
                });
                // 1 ... 6 7 8 9 10
                if (showPrevMore && !showNextMore) {
                    const startPage = totalPage - (showNumber - 2) + 1;
                    array.push({
                        value: '...',
                        option: currentPagePrev,
                    });
                    for (let i = startPage; i < totalPage; i++) {
                        array.push({
                            value: i,
                            option: i,
                        });
                    }
                // 1 2 3 4 5 ... 10
                }
                else if (!showPrevMore && showNextMore) {
                    for (let i = 2; i < showNumber - 1; i++) {
                        array.push({
                            value: i,
                            option: i,
                        });
                    }
                    array.push({
                        value: '...',
                        option: currentPageNext,
                    });
                // 1 ... 4 5 6 ... 10
                }
                else if (showPrevMore && showNextMore) {
                    const offset = Math.floor(showNumber / 2) - 2;
                    array.push({
                        value: '...',
                        option: currentPagePrev,
                    });
                    for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
                        array.push({
                            value: i,
                            option: i,
                        });
                    }
                    array.push({
                        value: '...',
                        option: currentPageNext,
                    });
                // 1 2 3 4 5 6 7
                }
                else {
                    for (let i = 2; i < totalPage ; i++) {
                        array.push({
                            value: i,
                            option: i,
                        });
                    }
                }
                // 最后一页
                totalPage > 1 && array.push({
                    value: totalPage,
                    option: totalPage,
                })
                // this.list = array;
                return array;
            },
        },
        methods:{
            // 点击修改页码
            changePageBar(pageNum){
                this.currentPage = pageNum;
            },
            // 下一页
            nextpage(){
                let currentPage  = this.currentPage >= this.totalPage ? this.totalPage: this.currentPage + 1;
                this.currentPage = currentPage;
            },
            // 上一页
            prepage(){
                let currentPage  = this.currentPage <= 1 ? 1 : this.currentPage - 1;
                this.currentPage = currentPage;
            }

        }
    }
</script>
