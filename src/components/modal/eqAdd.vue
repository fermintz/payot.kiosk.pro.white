<template>
  <v-dialog
    v-model="visible"
    width="unset"
    style="overflow:none;"
    overlay-opacity="0.8"
    overlay-color="#000"
  >
    <div class="eqAdd">
      <h2>장비추가하기</h2>

      <div class="select">
        <v-menu>
          <template v-slot:activator="{attrs, on}">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
            >
              {{eqCate}}
            </v-btn>
          </template>
          <ul class="items">
            <li 
              v-for="item in ['세탁기','건조기','운동화세탁기']" 
              :key="item" 
              v-ripple
              @click="eqCate = item"
            >
              {{item}}
            </li>
          </ul>
        </v-menu>

        <v-menu>
          <template v-slot:activator="{attrs, on}">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
            >
              {{eqNumber}}
            </v-btn>
          </template>
          <ul class="items">
            <li 
              v-for="item in 20" 
              :key="item" 
              v-ripple
              @click="eqNumber = '장비 ' + item"
            >
              장비 {{item}}
            </li>
          </ul>
        </v-menu>

        <v-menu>
          <template v-slot:activator="{attrs, on}">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
            >
              {{eqPort}}
            </v-btn>
          </template>
          <ul class="items">
            <li 
              v-for="item in 20" 
              :key="item" 
              v-ripple
              @click="eqPort = '포트 ' + item"
            >
              포트 {{item}}
            </li>
          </ul>
        </v-menu>
      </div>

      <div class="btns">
        <v-btn text class="test">테스트</v-btn>
        <v-btn text class="finish">등록완료</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      eqCate:'장비카테고리 선택',
      eqNumber:'장비번호 선택',
      eqPort:'포트번호 선택',
    }
  }, 
  methods:{
    open(value){
      this.visible = value
    }
  } 
}
</script>

<style lang="scss" scoped>
.eqAdd{
  background:#fff;
  border-radius:20px;
  width:800px;
  padding:40px;

  h2{
    margin-bottom:45px;
    font-weight:500;
  }

  .select{
    .v-btn{
      width:100%;
      min-height:100px;
      font-size:36px;
      border-radius:15px;
      border:3px solid #d2d2d2;
      margin-bottom:30px;
    }
  }

  .btns{
    display:flex;
    margin-top:30px;
    border:3px solid #d2d2d2;
    border-radius:15px;

    .v-btn{
      flex:1;
      height:100px;
      font-size:32px;
    }

    .v-btn.finish{
      flex:1;
      background:#0085DE;
      color:#fff;
    }
  }
}

ul.items{
  margin:0;
  padding:0;
  background:#fff;
  z-index:10;
  max-height:700px;
  overflow-y:auto;
  border:3px solid #d2d2d2;

  li{
    display:flex;
    align-items: center;
    background:#fff;
    height:120px;
    border-bottom:3px solid #d2d2d2;
    font-size:33px;
    padding:0 30px;
  }

  li:nth-child(2n){
    background:#f8f8f8;
  }
  li:last-child{
    border-bottom:0px;
  }
}


</style>