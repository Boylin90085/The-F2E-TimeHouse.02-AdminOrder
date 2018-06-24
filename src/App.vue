<template lang="pug">
  #app
    .navbar
      .nav-content
        h1 Shoptime
        .link-box
          a.active(href="") HOME
          a(href="") ORDERS
          a(href="") PRODUCT
        .user ADMIN
    .dashboard-body
      .content
        .content-title
          h2 OVERVIEW
          .date-filter
            span 2018/6/6
            i.fas.fa-caret-right
            span 2018/6/13
            // span Weekly
            // i.fas.fa-caret-down
            el-select(v-model="value" placeholder="請選擇")
              el-option(
                v-for="item in dateOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              )
        .content-body
          .info-box
            .info-item.revenue
              .title
                i.fas.fa-hand-holding-usd
                span TOTAL REVENUE
              .num 54,540
            .info-item.cost
              .title
                i.fas.fa-boxes
                span TOTAL COST
              .num 12,660
            .info-item.income
              .title
                i.fas.fa-money-bill
                span NET INCOME
              .num 41,880

          .chart-box
            h2 Activity
            .activity
              router-view
          .rank-box
            .rank-item.website
              h2 Transaction Website
              .website-item
                .web-name
                  i.fab.fa-facebook
                  span Facebook.com
                .web-num 45,836
                .web-change.up
                  i.fas.fa-arrow-up
                  span 20%
              .website-item
                .web-name
                  i.fab.fa-google
                  span Google.com
                .web-num 23,582
                .web-change.up
                  i.fas.fa-arrow-up
                  span 20%
              .website-item
                .web-name
                  i.fab.fa-steam
                  span Steampowered.com
                .web-num 2,489
                .web-change.down
                  i.fas.fa-arrow-down
                  span 20%
              .website-item
                .web-name
                  i.fab.fa-wordpress
                  span Wordpress.com
                .web-num 1,057
                .web-change.down
                  i.fas.fa-arrow-down
                  span 20%

            .rank-item.orders
              h2 Latest Orders
              .orders-item
                img(src="https://static.gap.hk/media/catalog/product/cache/1/image/375x502.5/9df78eab33525d08d6e5fb8d27136e95/3/0/305177multi_clr_eagle_m_1500_1_180516_1.jpg", alt="")
                .orders-info
                  h3 Vintage T-shirt
                  .orders-info-time
                    i.fas.fa-clock
                    span 2018/6/13  13:42
                  .orders-info-name
                    i.fas.fa-user
                    span Belle Willis
                .orders-total
                  p.total Total
                  p.num 3,200
              .orders-item
                img(src="https://s1.lativ.com.tw/i/28574/28574_D_01.jpg", alt="")
                .orders-info
                  h3 Cowboy Jacket
                  .orders-info-time
                    i.fas.fa-clock
                    span 2018/6/13  10:45
                  .orders-info-name
                    i.fas.fa-user
                    span Adrian Cummings
                .orders-total
                  p.total Total
                  p.num 2,800
              .orders-item
                img(src="https://s2.lativ.com.tw/i/32809/32809_D_52.jpg", alt="")
                .orders-info
                  h3 Coach Coat
                  .orders-info-time
                    i.fas.fa-clock
                    span 2018/6/13  8:26
                  .orders-info-name
                    i.fas.fa-user
                    span Lura Holland
                .orders-total
                  p.total Total
                  p.num 1,600

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      dateOptions: [{
        value: '1',
        label: 'Daily'
      }, {
        value: '2',
        label: 'Weekly'
      }, {
        value: '3',
        label: 'Monthly'
      }, {
        value: '4',
        label: 'Yearly'
      }],
      value: 'Weekly'
    }
  }
}
</script>

<style lang="sass">
  @import '/assets/helper/variables.sass'
  #app
    .navbar
      background-color: black
      display: flex
      justify-content: center
      width: 100%
      height: 70px
      .nav-content
        max-width: 1024px
        width: 80%
        height: 100%
        display: flex
        align-items: center
        h1
          color: white
          margin: 0
        .link-box
          margin-left: 80px
          display: flex
          height: 100%
          >a:not(:first-child)
            margin-left: 40px
          a
            display: flex
            align-items: center
            position: relative
            color: $color_grey_3
            text-decoration: none
            width: 100%
            height: 100%
            &:hover
              &:after
                content: ''
                position: absolute
                width: calc( 100% + 30px )
                height: 4px
                background-color: #fff
                bottom: 0
                left: -15px
            &.active
              color: white
              &:after
                content: ''
                position: absolute
                width: calc( 100% + 30px )
                height: 4px
                background-color: #fff
                bottom: 0
                left: -15px
        .user
          margin-left: auto
          color: white

    .dashboard-body
      width: 100%
      display: flex
      justify-content: center
      background-color: $color_grey_1

      .content
        max-width: 1024px
        width: 80%
        padding: 30px 0px

        .content-title
          width: 100%
          display: flex
          justify-content: space-between
          margin-bottom: 20px
          h2
            margin: 0
          .date-filter
            > *:not(:first-child)
              margin-left: 8px
            .el-select
              .el-input
                input
                  width: 100px
                  background-color: transparent
                  color: black
                  border: none

        .content-body
          width: 100%
          .info-box
            width: 100%
            display: flex
            justify-content: space-between
            margin-bottom: 18px
            .info-item
              width: calc((100% - 40px) / 3)
              height: 138px
              background-color: #fff
              display: flex
              flex-direction: column
              justify-content: center
              align-items: center
              .title
                margin-bottom: 16px
                i
                  font-size: 25px
                  margin-right: 8px
                span
                  font-size: 16px
                  font-weight: bold
              .num
                font-size: 36px
                font-weight: bold
              &.revenue
                .num
                  color: $color_green
              &.cost
                .num
                  color: $color_red
              &.income
                .num
                  color: $color_blue
          .chart-box
            width: 100%
            background-color: #fff
            padding: 30px 40px
            margin-bottom: 20px
            h2
              margin: 0
            .activity
              width: 100%
              height: calc( 100% - 40px)
          .rank-box
            width: 100%
            display: flex
            justify-content: space-between
            .rank-item
              width: calc((100% - 20px) / 2)
              height: 456px
              background-color: #fff
              padding: 30px 40px
              h2
                margin: 0
                margin-bottom: 30px
            .rank-item.website
              > .website-item:not(:nth-child(2))
                margin-top: 24px
              > .website-item:not(:last-child)
                padding-bottom: 24px
                border-bottom: 1px solid $color_grey_2
              .website-item
                width: 100%
                display: flex
                align-items: center
                justify-content: space-between
                .web-name
                  flex: 5
                  display: flex
                  align-items: center
                  i
                    font-size: 45px
                    margin-right: 20px
                  span
                    color: $color_grey_3
                .web-num
                  flex: 2
                  font-size: 20px
                  font-weight: bold
                .web-change
                  flex: 1
                  i
                    margin-right: 5px
                  &.up
                    color: $color_green
                  &.down
                    color: $color_red

          .rank-item.orders
            > .orders-item:not(:nth-child(2))
              margin-top: 8px
            > .orders-item:not(:last-child)
              padding-bottom: 8px
              border-bottom: 1px solid $color_grey_2
            .orders-item
              display: flex
              img
                width: 100px
                height: 100px
                margin-right: 21px
              .orders-info
                display: flex
                flex-direction: column
                justify-content: center
                flex: 2
                > *:not(:last-child)
                  margin-bottom: 8px
                h3
                  margin: 0
                .orders-info-time
                  display: flex
                  i
                    margin-right: 8px
                    font-size: 15px
                  span
                    font-size: 14px
                .orders-info-name
                  display: flex
                  i
                    margin-right: 8px
                    font-size: 15px
                  span
                    flex: 3
                    font-size: 14px
              .orders-total
                margin-left: auto
                align-self: flex-end
                h4
                  margin: 0
                p
                  margin: 0
                .total
                  font-size: 14px
                  text-align: right
                .num
                  font-size: 20px
                  font-weight: bold

</style>
