<template>
  <div class="eqSetup">

    <EqAdd ref="eqAdd"/>

    <div class="title">
      <div class="logo"><img src="@/assets/img/logo_w.png"></div>
      <h2>장비설정</h2>
    </div>

    <div class="eqList">
      <ul>
        <li class="listHead">
          <label>장비카테고리</label>
          <label>장비번호</label>
          <label>포트번호</label>
          <label>삭제</label>
        </li>
        <li class="item" v-for="item in 15" :key="item">
          <span>세탁기</span>
          <span>{{item}}</span>
          <span>{{item}}</span>
          <span class="del">
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </span>
        </li>
      </ul>

      <div class="listBtns">
        <v-btn 
          text 
          class="add"
          @click="eqAddOpen"
        >
          <v-icon 
            size="50" 
            style="margin-right:15px;" 
            color="#2D239E"
          >mdi-plus-circle
          </v-icon>
          장비추가하기
        </v-btn>
        <v-btn text class="reset">초기화</v-btn>
      </div>
    </div>

    <v-btn class="next" text @click="$router.push('/')">
      건너뛰기
    </v-btn>
  </div>
</template>

<script>
import EqAdd from '@/components/modal/eqAdd.vue';

export default {
  components:{
    EqAdd,
  },
  methods:{
    eqAddOpen(){
      this.$refs.eqAdd.open(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.eqSetup{
  height:100%;
  background:#393939;
  padding:60px;

  .title{
    display:flex;
    align-items: center;
    margin-bottom:45px;
    .logo{
      img{
        display:block;
        height:80px;
      }
    }
    h2{
      font-size:42px;
      color:#fff;
      font-weight:400;
      margin-left:30px;
    }
  }

  .eqList{
    overflow:hidden;
    border-radius:15px;
    box-shadow: 30px 30px 90px rgba(0,0,0,0.5);

    ul{
      position: relative;
      background:#f8f8f8;;
      min-height:1300px;
      max-height:1300px;
      border-radius:0; 
      overflow-y:auto;
      padding:0;
      margin:0;

      li.listHead{
        position: sticky;
        z-index:3;
        width:100%;
        top:0px;
        display:flex;
        align-items: center;
        height:120px;
        text-align:center;
        background:#2D239E;
        color:#fff;
        border-bottom:3px solid #292929;

        label{
          flex:1;
          font-size:30px;
          font-weight:400;
        }
        label:first-child{
          flex:1.5;
        }
      }

      li.item{
        display:flex;
        align-items: center;
        text-align:center;        
        height:140px;
        border:0px;
        border-bottom:3px solid #e2e2e2;
        font-size:36px;
        background:#fff;

        span{
          flex:1;
        }

        span:first-child{
          flex:1.5;
        }

        span.del{
          .v-btn{
            width:70px;
            min-width:70px;
            height:70px;
            background:#d2d2d2;
            .v-icon{
              font-size:45px;
              color:#fff;
            }
          }
        }
      }
      li:last-child{border:0px;}
    }

    

    .listBtns{
      display:flex;
      border-top:3px solid #292929;

      .v-btn{
        flex:1;
        background:#fff;
        height:120px;
        font-size:36px;
        border-radius:0px;
      }

      .add{
        fleX:2;
        border-right:3px solid #e2e2e2;
      }
      .reset{
        flex:1;
        background:#f2f2f2;
      }
    }
  }

  .v-btn.next{
    position: absolute;
    bottom:60px;
    left:50%;
    transform: translateX(-50%);
    width:50%;
    height:120px;
    border-radius:60px;
    background:#EE2073;
    font-size:36px;
    color:#fff;
  }
}
</style>