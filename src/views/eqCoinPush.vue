<template>
  <div class="eqCoinPush" id="container">
    <SubTitleBar title="장비 금액투입 설정" />
    <UserInfo />

    <div id="contents">
      <div class="coinPushBox">
        <dl class="headTitle">
          <dt><span>1번세탁기</span>를 선택하셨습니다</dt>
          <dd>투입할 금액을 입력해주세요</dd>
        </dl>
        <div class="numberView">
          <label>세탁기에<br />투입될금액</label>
          <div class="price">
            <strong>{{ priceText | numeral('0,0') }}</strong>
            <span>원</span>
          </div>
        </div>
        <div class="controlLine">
          <div class="btn">
            <v-btn
              width="100%"
              height="90px"
              elevation="0"
              class="coinBtn"
              outlined
              @click="push(500)"
              >500원 추가</v-btn
            >
          </div>
          <div class="btn">
            <v-btn
              width="100%"
              height="90px"
              elevation="0"
              class="coinBtn"
              outlined
              @click="push(1000)"
              >1,000원 추가</v-btn
            >
          </div>
          <v-btn
            width="200px"
            height="90px"
            elevation="0"
            class="clear"
            outlined
            @click="clear"
            >초기화</v-btn
          >
        </div>
        <v-btn
          class="completeBtn"
          width="100%"
          height="90px"
          elevation="0"
          color="#292929"
          @click="nextPage"
          >입력완료</v-btn
        >
      </div>

      <div class="priceTable">
        <h4>세탁가격표</h4>
        <ul>
          <li v-for="item in selectedMachine" :key="item">
            <label>{{ item.name }}</label>
            <div class="price">
              <span>{{ item.price | numeral('0,0') }}원</span>
              <strong>{{ Number(item.price) * (1 - Number(shopDiscount)) | numeral('0,0') }}원</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';

export default {
  components: {
    SubTitleBar,
    UserInfo,
  },
  data() {
    return {
      priceText: 0,
      shopDiscount: this.$store.state.company.discount,
      selectedMachine: this.$store.state.user.machine.services,
    };
  },
  methods: {
    push(amount) {
      this.priceText += amount;
    },
    clear() {
      this.priceText = 0;
    },
    nextPage() {
      this.$store.commit('setPayAmount', this.priceText);
      this.$router.push('Order');
    },
  },
};
</script>

<style lang="scss" scoped>
.coinPushBox {
  background: #fff;
  border-radius: 10px;
  padding: 40px;
  border:3px solid #e2e2e2;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

  .headTitle {
    dt {
      font-size: 48px;
      font-weight: 500;
      span {
        color: #0085de;
      }
    }
    dd {
      font-size: 32px;
      color: #888;
    }
  }

  .numberView {
    border-bottom: 4px solid #0085de;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    margin: 40px 0;

    label {
      width: 150px;
      color: #888;
    }

    .price {
      flex: 1;
      text-align: right;
      strong {
        font-size: 64px;
        font-weight: 700;
      }
      span {
        font-size: 32px;
        margin-left: 10px;
        font-weight: 500;
      }
    }
  }

  .controlLine {
    display: flex;
    align-items: center;

    .btn {
      flex: 1;
      margin-right: 20px;
      .coinBtn {
        font-size: 28px;
        border: 2px solid #0085de;
        color: #0085de;
        border-radius: 10px;
      }
    }

    .clear {
      font-size: 28px;
      border: 2px solid #c2c2c2;
      border-radius: 10px;
    }
  }
  .completeBtn {
    font-size: 28px;
    margin-top: 40px;
    color: #fff;
    border-radius: 10px;
  }
}

.priceTable {
  background: #fff;
  border-radius: 10px;
  margin-top: 30px;
  padding: 40px;
  border:3px solid #e2e2e2;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  ul {
    margin: 0px;
    padding: 0px;
    height: 450px;
    overflow: scroll;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f2f2f2;
      padding: 0 20px;
      height: 60px;
      font-size: 28px;
      margin-bottom: 20px;
    }
    .label {
      flex: 1;
    }
    .price {
      width: 320px;
      text-align: right;
      strong {
        font-weight: 600;
      }
      span {
        text-decoration: line-through;
        color: #666;
        margin-right: 20px;
        font-size: 24px;
      }
    }
  }
}
</style>
