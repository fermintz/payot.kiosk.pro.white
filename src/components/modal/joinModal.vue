<template>
  <div class="passwordModal">
    <v-dialog
      v-model="visible"
      width="100%"
      transition="dialog-bottom-transition"
      style="overflow:none"
      @input="onDismiss($event)"
      overlay-opacity="0.8"
      overlay-color="#000"
      persistent
    >
      <div class="modalBody" ref="body">
        <v-btn
          @click="modalClose"
          width="140px"
          height="140px"
          class="closeBtn"
          elevation="0"
          style="background:#fff"
        >
          <v-icon size="80">fas fa-times-circle</v-icon>
        </v-btn>
        <div class="head">
          <dl>
            <dt>
              <span>{{phone}}</span>님, 첫 방문을 환영합니다
            </dt>
          </dl>
          <p>첫 방문자는 비밀번호 생성이 필요합니다<br><span>사용하실 비밀번호 4자리</span>를 입력해주세요</p>
          <div class="aggreBox">
            <v-btn
              width="60px"
              height="60px"
              elevation="0"
              outlined
              v-bind:class="{active:isActive}"
              @click="isActive = !isActive"
            >
              <v-icon>fas fa-check</v-icon>
            </v-btn>
            <span>
              멤버쉽 회원가입을 위한<br>개인정보 수집 및 이용 및 제공에 동의합니다
            </span>
          </div>
        </div>

        <div class="bottom">
          <div class="passwordView">
            <div class="label">
              <v-icon color="#aaa" size="30">fas fa-unlock</v-icon>
              <span>비밀번호 생성</span>
            </div>
            <div class="password">
              <span
                v-for="num in 4"
                :key="num"
                :class="{ active: password.length >= num }"
              ></span>
            </div>
          </div>
          <div class="keypad">
            <div class="rowLine" v-for="row in 3" :key="row">
              <v-btn
                width="180px"
                height="90px"
                class="number"
                elevation="0"
                v-for="col in 3"
                :key="col"
                @click="inputPassword((row - 1) * 3 + col)"
                >{{ (row - 1) * 3 + col }}</v-btn
              >
            </div>
            <div class="rowLine">
              <v-btn
                width="180px"
                height="90px"
                class="number del"
                elevation="0"
                @click="removePassword"
              >
                <v-icon size="40">fa-backspace</v-icon>
              </v-btn>
              <v-btn
                width="180px"
                height="90px"
                class="number"
                elevation="0"
                @click="inputPassword(0)"
                >0</v-btn
              >
              <v-btn
                @click="clearPassword"
                width="180px"
                height="90px"
                class="number all"
                elevation="0"
                >다시입력</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['phone', 'title', 'messasge'],
  data() {
    return {
      visible: false,
      password: '',
      isActive:true
    };
  },
  watch: {
    password(newValue) {
      if (newValue.length === 4) {
        this.nextPage();
      }
    },
    visible(newValue) {
      this.onDismiss(newValue);
    }
  },
  methods: {
    open(state) {
      this.visible = state;
    },
    modalClose() {
      this.visible = !this.visible;
    },
    // 비밀번호 입력
    inputPassword(number) {
      this.password += number.toString();
    },
    // 비밀번호 하나 지우기
    removePassword() {
      if (this.password.length !== 0) {
        this.password = this.password.slice(0, -1);
      }
    },
    // 모달이 꺼질때
    onDismiss(state) {
      if (!state) {
        this.password = '';
      }
    },
    // 모두 지우기
    clearPassword() {
      this.password = '';
    },
    // 다음으로
    nextPage() {
      this.$router.push({ name: 'EqSelect' });
    },
  },
};
</script>

<style lang="scss" scoped>
.modalBody {
  border-radius: 60px 60px 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  position: relative;

  .closeBtn {
    position: absolute;
    background: #fff;
    border-radius: 70px;
    top: -70px;
    z-index: 10;
  }

  .head {
    width: 100%;
    padding: 120px 60px 60px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    dl{
      font-size:46px;
      font-weight:500;
      margin-bottom:30px;

      dt{
        span{
          color:#0085de;
          font-weight:600;
        }
      }
    }

    p {
      font-size: 32px;
      letter-spacing: -0.7px;
      word-break: keep-all;
      color: #888;
      span {
        color: #d22828;
      }
    }

    .aggreBox{
      display:flex;
      margin-top:30px;
      border-radius:10px;
      align-items:center;
      border:2px solid #e2e2e2;
      padding:20px 30px;

      .v-btn{background:#e2e2e2;border:0px;border-radius:50%;color:#292929;overflow:hidden;}
      .v-btn.active{background:#0085de;color:#fff;}

      span{font-size:24px;text-align:left;margin-left:30px;}
    }
  }

  .bottom {
    width: 100%;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 120px 0;

    .passwordView {
      width: 560px;
      height: 120px;
      border-bottom: 4px solid #0085de;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      .label {
        span {
          color: #292929;
          display: inline-block;
          margin-left: 20px;
          vertical-align: middle;
          font-size: 28px;
          font-family: 'SCDream';
        }
      }

      .password {
        span {
          display: inline-block;
          vertical-align: middle;
          width: 30px;
          height: 30px;
          line-height: 40px;
          background: #aaa;
          border-radius: 15px;
          margin-left: 15px;
        }

        span.active {
          background: #0085de;
        }
      }
    }

    .keypad {
      .rowLine {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .number {
          font-size: 42px;
          margin: 5px;
          border-radius: 10px;
          background: #fff;
          border: 2px solid #c2c2c2;
        }
        .number.all {
          font-size: 28px;
        }
      }
    }
  }
}

.v-dialog__content {
  align-items: flex-end;
}

.v-dialog {
  overflow-y: initial;
}
</style>
