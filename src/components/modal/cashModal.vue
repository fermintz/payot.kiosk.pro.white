<template>
  <v-dialog 
    v-model="visible" 
    width="800px" 
    transition="slide-y-transition"
    overlay-opacity="0.8"
    overlay-color="#000"
  >
    <div class="paymentModal">
      <div class="paymentImg">
        <img src="@/assets/img/paymentCash.gif">
      </div>
      <div class="priceInfo">
        <dl>
          <dt>결제금액</dt>
          <dd>4,500원</dd>
        </dl>
        <dl class="nowPrice">
          <dt>투입금액</dt>
          <dd>0원</dd>
        </dl>
      </div>
      <div class="guide">
        <strong>결제금액 만큼 현금을 투입해주세요</strong>
        <p>결제금액 보다 초과투입시 나머지 금액은 포인트로 적립됩니다</p>
      </div>
      <div class="counter">
        <span>{{counter}}</span>
      </div>

      <V-btn class="closeBtn" width="120px" height="120px" outlined @click="close">
        <v-icon>fa-times</v-icon>
      </V-btn>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props:['counter'],
  data() {
    return {
      visible: false,
    };
  },
  mounted(){
  },

  computed:{},
  
  methods: {
    open(value) {
      this.visible = value;
    },
    close() {
      this.visible = !this.visible;
    },


  },
};
</script>

<style lang="scss" scoped>

.paymentModal{
  width:100%;
  background:#fff;
  padding:60px;
  padding-top:120px;
  border-radius:10px;
  position:relative;

  .paymentImg{
    background:#e2e2e2;
    text-align:center;
    padding:40px;
    border-radius:10px;
  }

  .priceInfo{
    margin-top:60px;

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:20px;

      dt{font-size:36px;font-weight:500;color:#888}
      dd{font-size:36px;font-weight:700}
    }

    dl.nowPrice{
      dd{color:#ee2073}
    }

    dl:last-child{margin-bottom:0px;}
  }

  .guide{
    text-align:center;
    margin-top:40px;
    border-top:2px solid #e2e2e2;
    padding-top:40px;

    strong{font-size:36px;letter-spacing:-1px;font-weight:500}
    p{margin-top:20px;font-size:28px;color:#ee2073;word-break:keep-all}
  }

  .counter{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:40px;

    span{
      display:inline-block;
      width:120px;height:120px;
      border-radius:60px;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background:#f2f2f2;
      font-size:42px;
      font-weight:600;
    }
  }

  .closeBtn{
    position:absolute;
    top:0;
    left:50%;
    width:120px;
    height:120px;
    border-radius:50%;
    margin-left:-60px;
    margin-top:-60px;
    background:#0085DE;
    color:#fff;
    border:0px;

    .v-icon{
      font-size:52px
    }
  }
}

</style>
