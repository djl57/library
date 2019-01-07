<template>
  <div>
    <div @click="maskShow">选择</div>
    <transition name="mask">
      <div class="pick_mask" v-show="isMaskShow" @click="maskShow"></div>
    </transition>
    <transition name="mask">
      <div class="pick_wrap" v-show="isMaskShow">
        <div class="pick_hd flex_between">
          <div class="d_cancel pick_cancel">取消</div>
          <div class="d_success pick_success">确定</div>
        </div>
        <div class="pick_bd">
          <div class="pick_bd_mask">
            <div class="pick_bd_items">
              <div v-for="(item, index) in pickers" :key="index">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    // pickers: Array,
  },
  data () {
    return {
      isMaskShow: false,
      pickers: [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' },
        { name: '选项四' },
        { name: '选项五' },
        { name: '选项六' },
        { name: '选项七' },
        { name: '选项八' },
      ]
    }
  },
  methods: {
    maskShow () {
      this.isMaskShow = !this.isMaskShow;
    },
  }
}
</script>

<style>
.pick_mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
}
.pick_wrap {
  position: absolute;
  top: 60%;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 10;
}
.pick_hd {
  height: 20px;
  line-height: 20px;
  padding: 15px 0;
  position: relative;
}
.pick_hd::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #E5E5E5;
  color: #E5E5E5;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.pick_cancel {
  padding-left: 15px;
}
.pick_success {
  padding-right: 15px;
}
.pick_bd {
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  bottom: 10px;
  line-height: 30px;
  overflow: hidden;
  text-align: center;
}
.pick_bd_mask {
  width: 100%;
  height: 100%;
  
}
.pick_bd_items {
  background-color: rgba(255, 255, 255, 0.6);
}
.mask-enter-active, .mask-leave-active {
  transition: all .5s;
}
.mask-enter, .mask-leave-to {
  opacity: 0;
}
</style>
