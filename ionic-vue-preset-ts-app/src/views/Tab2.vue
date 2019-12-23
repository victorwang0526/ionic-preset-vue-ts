<template>
    <ion-page class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Ionic4 VueJS: Tab 2</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-item>
                THIS IS TAB 2
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'tab2',
  })
  export default class Tab2 extends Vue{

  }
</script>
