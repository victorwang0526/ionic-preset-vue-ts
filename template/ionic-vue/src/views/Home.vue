<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <router-link :to="'/about'">
        <ion-button>About</ion-button>
      </router-link>
    </div>
    <div>
      <router-link to="/about">
        <van-button type="primary">Vant Button</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  name: 'home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue{

}
</script>
