<template>
  <div id="container">
    <SubTitleBar title="장비선택" />
    <UserInfo />

    <div id="contents">
      <dl class="visualTitle">
        <dt>사용하실 장비를 선택해주세요</dt>
        <dd>아래 버튼을 터치해주세요</dd>
      </dl>

      <div class="divider" />

      <div class="eqCateList">
        <div class="btn" @click="nextPage('Product')" v-ripple>
          <dl>
            <dt>
              <img src="@/assets/img/washer-icon.png">
            </dt>
            <dd>
              <strong>세탁기</strong>
              <span>WASHER</span>
            </dd>
          </dl>
          <div class="arrow-icon">
            <v-icon>mdi-chevron-right-circle-outline</v-icon>
          </div>
        </div>

        <div class="btn" @click="nextPage('Product')" v-ripple>
          <dl>
            <dt>
              <img src="@/assets/img/dryer-icon.png">
            </dt>
            <dd>
              <strong>건조기</strong>
              <span>DRYER</span>
            </dd>
          </dl>
          <div class="arrow-icon">
            <v-icon>mdi-chevron-right-circle-outline</v-icon>
          </div>
        </div>

        <div class="btn" @click="nextPage('Product')" v-ripple>
          <dl>
            <dt>
              <v-icon>mdi-cube-outline</v-icon>
            </dt>
            <dd>
              <strong>기타장비</strong>
              <span>ETC EQUIPMENT</span>
            </dd>
          </dl>
          <div class="arrow-icon">
            <v-icon>mdi-chevron-right-circle-outline</v-icon>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';

export default {
  components:{
    SubTitleBar, UserInfo
  },

  methods:{
    nextPage(value){
      this.$router.push({name:value})
    }
  }
}
</script>

<style lang="scss" scoped>

.visualTitle{ 
  color:#0085DE;
  dt{font-size:64px;font-weight:500;word-break: keep-all;}
  dd{font-size:36px;margin-top:20px;color:#888}
}

.divider{height:3px;background:#e2e2e2;margin:60px 0}

.eqCateList{
  flex:1;
  overflow-y:auto;
  max-height:900px;

  .btn{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border:3px solid #d2d2d2;
    border-radius:15px;
    min-height:200px;
    margin-bottom:30px;

    dl{
      display:flex;
      align-items: center;
      
      dt{
        width:180px;
        text-align:center;

        .v-icon{
          font-size:80px;
        }
      }
      dd{
        strong{
          display:block;
          font-size:56px;
          line-height:56px;
          font-weight:500;
        }
        span{
          display:block;
          font-size:27px;
          color:#888;
          letter-spacing: 0px;
          font-family:'Roboto';
          font-weight:500;
          margin-top:10px;
        }
      }
    }

    .arrow-icon{
      margin-right:45px;
      .v-icon{
        font-size:70px;
        color:#EE2073
      }
    }

  }
}

.eqCateList::-webkit-scrollbar{
  display:none;
}


</style>