<template>
  <div>
    <div v-show="loginType === 0">
      <div class="home_tab d_flex" @click="selectTerm">
        <div class="home_tab_hd">学期：</div>
        <div class="home_tab_bd">
          <select v-model='year5' class="select">
            <option v-for='one in years[0]' :value='one.value' :key="one.value" class="option">{{one.name}}</option>
          </select>
        </div>
      </div>
      <div class="home_tab d_flex" @click="selectClass">
        <div class="home_tab_hd">班级：</div>
        <div class="home_tab_bd">{{ clazz[0] }}</div>
      </div>
    </div>

    <!-- <picker :data='years' v-model='year1' @on-change='change'></picker> -->


    <div>
      <ul class="stuLists_items">
        <li v-for="(item, index) in stuLists" :key="index" class="stuLists_item" @click="intoAlbum">
          <img src="./imgs/album.png" alt="" width="80px">
          <p>{{ item.stuName }}</p>
        </li>
      </ul>
    </div>
    <transition name="mask">
      <div v-show="isMaskShow">
        <div class="home_mask" @click="clickMask"></div>
        <div class="home_picker">
          <div class="pick_hd">
            <div class="d_cancel pick_cancel" @click="cancel">取消</div>
            <div class="d_success pick_success" @click="comfirm">确定</div>
          </div>
          <picker :data='years' v-model='year3' @on-change='change3'></picker>
          <!-- <picker v-if="selectType===0" :data="pickTerms" v-model='term' @on-change='change'></picker>
          <picker v-else :data="pickClazzes" v-model='clazz' @on-change='change'></picker> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Picker } from 'vux'
// let years = []
// for (var i = 2000; i <= 2030; i++) {
//   years.push({
//     name: i + '年',
//     value: i + ''
//   })
// }
export default {
  data () {
    return {
      years: [years],
      year3: ['1'],
      year5: '1',
      year1: [''],

      isMaskShow: false,
      selectType: 0,
      stuLists: [],
      loginType: Number(window.localStorage.getItem('loginType'))
    }
  },


  watch: {
    year5: {
      handler (val) {
        this.year3[0] = val
        // this.year3.$set(0, val)
        this.$set(this.year3, 0, val)
      },
      deep: true
    },
    change3 (value) {
      this.year5 = value[0]
    }
  },



  components: {
    Picker
  },
  created () {
    this.getTerms();
    this.getClazzes();
  },
  methods: {


    change3 (value) {
      this.year5 = value[0]
    },
    change (value) {
      console.log('new Value', value)
    },


    selectTerm () {
      this.isMaskShow = true;
    },
    selectClass () {
      this.isMaskShow = true;
      this.selectType = 1;
    },
    getTerms () {
      this.pickTerms = [[]];
      let res = [
        { name: '2017-2018上半学期1', value: '1' },
        { name: '学期2', value: '2' },
        { name: '学期3', value: '3' },
        { name: '学期4', value: '4' },
      ]
      res.forEach(el => {
        this.pickTerms[0].push({
          name: el.name,
          value: el.value
        })
      })
      this.term = [this.pickTerms[0][0].name];
    },
    getClazzes () {
      this.pickClazzes = [[]];
      let res = [
        { name: '402班', value: '1' },
        { name: '班级2', value: '2' },
        { name: '班级3', value: '3' },
        { name: '班级4', value: '4' },
      ]
      res.forEach(el => {
        this.pickClazzes[0].push({
          name: el.name,
          value: el.value
        })
      })
      this.clazz = [this.pickClazzes[0][0].name];
      this.getStuLists();
    },
    clickMask () {
      this.isMaskShow = false;
    },
    cancel () {
      this.isMaskShow = false;
    },
    comfirm () {
      this.isMaskShow = false;
    },
    getStuLists () {
      this.stuLists = [];
      let res = [
        { stuName: '学生1', albumImg: '' },
        { stuName: '学生2', albumImg: '' },
        { stuName: '学生3', albumImg: '' },
        { stuName: '学生4', albumImg: '' },
        { stuName: '学生5', albumImg: '' },
        { stuName: '学生6', albumImg: '' },
        { stuName: '学生7', albumImg: '' },
        { stuName: '学生8', albumImg: '' },
        { stuName: '学生9', albumImg: '' },
        { stuName: '学生10', albumImg: '' },
        { stuName: '学生11', albumImg: '' },
        { stuName: '学生12', albumImg: '' },
      ]
      res.forEach(el => {
        this.stuLists.push(el)
      })
    },
    intoAlbum () {
      this.$router.push({
        path: '/growing',
      })
    }
  }
}
</script>

<style>
.home_tab {
  height: 40px;
  line-height: 40px;
  position: relative;
  padding: 0 10%;
  font-size: 14px;
}
.home_tab::after {
  content: '  ';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  border-bottom: 1px solid #cccccc;
  color: #cccccc;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.home_tab_hd {
  width: 30%;
  text-align: center;
}
.home_tab_bd {
  width: 70%;
  text-align: center;
}
.home_mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.home_picker {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #ffffff;
}
.pick_hd {
  height: 35px;
  line-height: 35px;
  position: relative;
  display: flex;
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
  width: 50%;
  text-align: left;
}
.pick_success {
  padding-right: 15px;
  width: 50%;
  text-align: right;
}
.stuLists_items {
  padding-top: 10px;
}
.stuLists_item {
  width: 50%;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}



.select {
  border: none;
  background-color: #ffffff;
  outline: none;
  appearance: none;
}
.option {
  display: none;
}

</style>
