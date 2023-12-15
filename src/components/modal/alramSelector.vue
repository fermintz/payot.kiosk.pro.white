<template>
  <v-dialog v-model="visible" width="800px" transition="slide-y-transition" overlay-opacity="0.8" overlay-color="#000">
    <div class="paymentModal">
      
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
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
.paymentModal {
  width: 100%;
  background: #fff;
  padding: 60px;
  border-radius: 10px;
  position: relative;
}
</style>