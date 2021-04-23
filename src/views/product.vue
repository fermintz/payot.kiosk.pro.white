<template>
  <div class="product" id="container">
    <SubTitleBar title="장비 및 상품선택" />
    <UserInfo />

    <div class="productTab">

      <div class="listWrap">
        <div class="eqList" :class="eqListMove">
          <div class="listTitle">
            <v-icon>fa-washer</v-icon>사용하실 장비를 선택해주세요
          </div>
          <div class="itemList">
            <v-list flat three-line>
              <v-list-item-group>
                <v-list-item
                  v-for="item in machines"
                  :key="item"
                  @click="nextList(item)"
                >
                  <div class="eqItem">
                    <dl>
                      <dt>{{ item.name }}</dt>
                      <dd>용량 {{ item.size }}</dd>
                    </dl>
                    <v-icon size="50">mdi-chevron-right</v-icon>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
        <!-- eqList -->

        <div class="goodsList" :class="goodsListMove">
          <div class="listTitle">
            <v-btn
              width="100px"
              height="100px"
              elevation="0"
              class="backBtn"
              @click="backList"
            >
              <v-icon size="45">mdi-arrow-left</v-icon>
            </v-btn>
            <dl>
              <dt><span>{{ selectedMachine.name }}</span>(을)/를 선택하셨습니다</dt>
              <dd>상품을 선택해주세요</dd>
            </dl>
          </div>
          <div class="itemList">
            <v-list flat three-line>
              <v-list-item-group>
                <v-list-item
                  v-for="item in selectedMachine.services"
                  :key="item"
                  @click="nextPage(item)"
                >
                  <div class="goodsItem">
                    <dl>
                      <dt>{{ item.name }}</dt>
                      <dd>{{ item.notice }}</dd>
                    </dl>
                    <strong>{{ item.price | numeral('0,0') }}원</strong>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
        <!-- goodsList -->
      </div>
      <!--listWrap -->
    </div>
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';

export default {
  name: 'userLogin',
  components: {
    SubTitleBar,
    UserInfo,
  },
  data() {
    return {
      tab: null,
      tabs: 3,
      eqListMove: '',
      goodsListMove: '',
      machines: [],
      selectedMachine: {},
    };
  },
  mounted() {
    this.getMachineList();
  },
  methods: {
    getMachineList() {
      const self = this;
      this.$axios.get('/company/18/machines').then(response => {
        self.machines = response.data;
        self.selectedMachine = response.data[0];
        console.log(response.data);
      });
    },
    nextList(machine) {
      this.selectedMachine = machine;
      this.eqListMove = 'off';
      this.goodsListMove = 'on';
    },
    backList() {
      this.eqListMove = 'on';
      this.goodsListMove = 'off';
    },
    nextPage(product) {
      this.$store.commit('setMachine', this.selectedMachine);
      this.$store.commit('setProduct', product);
      this.$router.push({ name: 'EqCoinPush' });
    },
  },
};
</script>

<style lang="scss" scoped>
.productTab {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding:60px;
}

.listWrap {
  position: relative;
  flex:1;
  width: 100%;
  border: 2px solid #d2d2d2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

  .eqList {
    position: absolute;
    width: 100%;
    top: 0px;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    z-index: 10;
    border-right: 1px solid #e2e2e2;

    .listTitle {
      display: flex;
      font-size: 36px;
      height: 160px;
      background: #0085de;
      color: #fff;
      justify-content: center;
      align-items: center;
    }

    .itemList {
      display: flex;
      flex: 1;
      flex-direction: column;
      background: #f2f2f2;
      overflow-y: scroll;

      .eqItem {
        display: flex;
        justify-content: space-between;
        width: 100%;

        dl {
          dt {
            font-size: 36px;
          }
          dd {
            font-size: 28px;
            color: #888;
          }
        }
      }
    }
  }

  .goodsList {
    position: absolute;
    width: 100%;
    top: 0px;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;

    .itemList {
      display: flex;
      flex: 1;
      flex-direction: column;
      background: #f2f2f2;
      overflow-y: scroll;
    }

    .listTitle {
      padding: 30px;
      height: 160px;
      display: flex;
      background: #0085de;
      color: #fff;
      align-items: center;

      dl {
        margin-left: 40px;

        dt {
          font-size: 42px;
          span {
            color: #fff500;
          }
        }
        dd {
          font-size: 26px;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .v-btn.backBtn{
        background:#fff;
        border-radius:15px;

        .v-icon{
          color:#292929;
        }
      }
    }

    .goodsItem {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      dl {
        display: flex;
        flex-direction: column;
        flex: 1;
        dt {
          font-size: 36px;
        }
        dd {
          font-size: 28px;
          color: #888;
        }
      }
      strong {
        display: block;
        width: 200px;
        text-align: right;
        font-size: 34px;
        font-weight: 600;
        color: #ee2073;
      }
    }
  }
}


.v-list {
  padding: 0px;
}
.v-list-item {
  flex: 1;
  border-bottom: 2px solid #d2d2d2;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.v-overlay__content {
  width: 100%;
}

.eqList.on {
  animation: eqListMoveOn 0.3s forwards;
}
.eqList.off {
  animation: eqListMoveOff 0.3s forwards;
}
.goodsList.on {
  animation: goodsListMoveOn 0.3s forwards;
}
.goodsList.off {
  animation: goodsListMoveOff 0.3s forwards;
}

@keyframes eqListMoveOn {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}

@keyframes eqListMoveOff {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}

@keyframes goodsListMoveOn {
  0% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}

@keyframes goodsListMoveOff {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>
