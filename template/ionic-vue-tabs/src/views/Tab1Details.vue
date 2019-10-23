<template>
    <ion-page
            class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Ionic4 VueJS: Tab 1 Details</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-label>This is the details page</ion-label>
        </ion-content>
    </ion-page>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'tab1-detail',
})
export default class Tabs extends Vue{
    nextPage() {

    }
}
</script>

<style>
</style>
