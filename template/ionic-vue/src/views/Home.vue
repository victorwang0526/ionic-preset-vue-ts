<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link :to="'/about'">
      <ion-button>About</ion-button>
    </router-link>
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
