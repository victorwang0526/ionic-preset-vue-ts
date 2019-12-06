<template>
    <ion-page
            class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Ionic4 VueJS: Tab 1</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <div>
                <ion-button @click="nextPage()">Ionic Button</ion-button>
            </div>

            <router-link to="/about">
                <van-button type="primary">Vant Button</van-button>
            </router-link>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'tab1',
  })
  export default class Tab1 extends Vue{

    nextPage() {
      this.$router.push("/tab1-details");
    }
  }
</script>
