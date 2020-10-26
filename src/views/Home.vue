<template>
  <div class="home fill-height">
    <span class="triangleBox-top" />
    <span class="triangleBox-bottom" />
    <span class="wave wave-1" />
    <span class="wave wave-2" />
    <div class="inner">
      <div class="notice">
        <label>
          NEWS
        </label>
        <div class="slide-text">
          텍스트가 돌아가요~
        </div>
      </div>
      <div class="slide-view">
        <v-carousel
          v-model="carousel"
          :ontinuous="false"
          :cycle="true"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          hide-delimiters
          height="750"
          interval="4000"
        >
          <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
            :src="item.src"
          >
            <div class="display-3">
              {{slide}}
            </div>
          </v-carousel-item>
        </v-carousel>
        <div class="delimiter">
          <span 
            v-for="(item, index) in slides"
            :key="index"
            :class="{active:index === carousel}"
            @click="()=> carousel = index"
          />
        </div>
      </div>
      <div class="mainTitle">
        <div class="title">
          <strong>24시 셀프빨래방(삼호한마음)</strong>
        </div>
        <div class="subTitle">
          <span>키오스크로 편리하게</span>
          <span>세탁을 시작하세요</span>
        </div>
      </div>
      <div class="mainBtns">
        <div class="chage btn" v-ripple @click="()=> $router.push('/userLogin')">
          <dl>
            <dt>충전하기</dt>
            <dd>미리 금액 충전하고 보너스 받기</dd>
          </dl>
          <v-icon>
            mdi-arrow-right-circle
          </v-icon>
        </div>
      
        <div class="bottom">
          <div class="use btn" v-ripple @click="()=> $router.push('/userLogin')">
            <dl>
              <dt>이용하기</dt>
              <dd>충전금액 사용하기 (충전없이 사용가능)</dd>
            </dl>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </div>
          <div class="search btn"  v-ripple @click="()=> $router.push('/userHistory')">
            <dl>
              <dt>조회하기</dt>
              <dd>나의 포인트 및 사용내역 조회하기</dd>
            </dl>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </div>
        </div>
      </div>
    </div>
    <CustomFooter />
  </div>
</template>

<script>
import CustomFooter from '@/components/CustomFooter.vue'

export default {
  components:{
    CustomFooter,
  },
  data(){
    return{
      carousel:0,
      slides: [
        {
          src:'https://www.efnews.co.kr/news/photo/201912/82572_53524_499.jpg'
        },
        {
          src:'https://www.shinailbo.co.kr/news/photo/201902/1139617_417918_118.jpg'
        },
        {
          src:'https://pgnqdrjultom1827145.cdn.ntruss.com/img/dd/c9/ddc96db89f72dc2401069e4e3455ea32962293f9087d6e37881f71b1c9246c82_v1.jpg'
        },
      ],
    }
  }
};
</script>

<style lang="scss">
.home{
  display:flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .inner{
    position: relative;
    flex:1;
    padding:60px;
    z-index:2;
  }

  .notice{
    display:flex;
    align-items: center;
    width:100%;
    background:#fff;
    height:100px;
    border-radius:50px;
    overflow: hidden;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.08);
    
    label{
      width:180px;
      text-align: center;
      font-size:28px;
      color:#0085DE;
      font-weight:500;
      border-right:3px solid #e2e2e2;
      letter-spacing: 1px;
    }
    .slide-text{
      flex:1;
      font-size:32px;
      color:#292929;
      overflow:hidden;
      padding:0 30px;
    }
  }

  .slide-view{
    position: relative;
    width:960px;
    height:740px;
    background:#fff;
    margin-top:60px;
    border-radius:30px;
    overflow:hidden;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.12);

    .delimiter{
      position:absolute;
      width:100%;
      text-align:center;
      top:30px;
      left:0px;
      z-index:3;

      span{
        display:inline-block;
        width:70px;
        height:12px;
        border-radius:6px;
        background:#595959;
        margin:0 10px;
      }

      span.active{
        background:#0085DE
      }

    }
  }

  .mainTitle{
    max-width:500px;
    margin-top:100px;
    margin-left:30px;
    word-break: break-all;

    .title{
      strong{
        font-size:60px;
        line-height:76px;
        font-weight:600;
        margin-bottom:20px;
        display:block;
        letter-spacing: -0.7px;
        color:#0085DE;
      }
      span{
        font-size:60px;
        line-height:60px;
        display:block;
        letter-spacing: -0.7px;
      }      
    }
    
    .subTitle{
      margin-top:45px;
      span{
        font-size:30px;
        display:block;
        line-height:30px;
        margin-bottom:20px;
        color:#888;
      }
    }
  }

  .mainBtns{
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width:100%;
    position: absolute;
    bottom:60px;
    right:60px;
    
    .bottom{
      display:flex;
      align-items: center;
      margin-top:30px;
    }

    .btn{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width:360px;
      height:360px;
      border-radius:30px;
      background:#fff;
      margin-left:30px;
      padding:36px;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.10);

      dl{
        dt{
          font-size:38px;
          font-weight:500;
        }
        dd{
          font-size:28px;
          word-break: keep-all;
          margin-top:15px;
          color:#888;
        }
      }

      .v-icon{
        font-size:60px;
        color:#292929;
      }
    }

    .btn.chage{
      background: rgb(0,133,222);
      background: linear-gradient(138deg, rgba(0,133,222,1) 30%, rgba(0,53,222,1) 100%);
      color:#fff;
      dl{
        dd{color:rgba(255,255,255,0.8)}
      }
      .v-icon{color:#fff;}
    }
    .btn.use{
      background: rgb(238,32,115);
      background: linear-gradient(138deg, rgba(238,32,115,1) 0%, rgba(230,20,209,1) 100%);
      color:#fff;
      dl{
        dd{color:rgba(255,255,255,0.8)}
      }
      .v-icon{color:#fff;}
    }
    .btn.search{
      border:3px solid #d2d2d2;
    }
  }

  .triangleBox-top{
    position:absolute;
    top:0;
    left:0;
    width:0px;
    height:0px;
    border-bottom:700px solid transparent;
    border-left:700px solid #0085DE;
    z-index:1;
    display:none;
  }
  .triangleBox-bottom{
    position:absolute;
    bottom:0;
    left:0;
    width:0px;
    height:0px;
    border-top:1400px solid transparent;
    border-left:1400px solid rgba(0,133,222,0.1);
    z-index:1;
    display:none; 
  }
  .wave{
    position:absolute;
    bottom:0;
    right:0;
    border-radius:43%; 
  }
  .wave-1{
    top:-600px;
    left:-600px;
    bottom:unset;
    right:unset;
    width:1000px;
    height:1000px;
    background: rgb(61,177,255);
    background: linear-gradient(140deg, rgba(61,177,255,1) 0%, rgba(0,133,222,1) 100%);
    animation:wave 16s infinite linear;
  }
  .wave-2{
    width:1800px;
    height:1800px;
    right:-900px;
    bottom:-800px;
    background: #E5F3FC;
    animation:wave2 13s infinite linear;
  }

  @keyframes wave {
    from{transform:rotate(0deg)}
    from{transform:rotate(-360deg)}
  }

  @keyframes wave2 {
    from{transform:rotate(0deg)}
    from{transform:rotate(360deg)}
  }
}

</style>
