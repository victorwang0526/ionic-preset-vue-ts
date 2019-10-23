<template>
    <!-- Listen to before and after tab change events -->
    <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange">
        <ion-tab tab="tab1">
            <Tab1 />
        </ion-tab>

        <!-- Match by "app.speakers" route name -->
        <ion-tab tab="tab2">
            <Tab2 />
        </ion-tab>

        <!-- Use v-slot:bottom with Vue ^2.6.0 -->
        <template slot="bottom">
            <ion-tab-bar>
                <ion-tab-button tab="tab1">
                    <ion-icon name="home"></ion-icon>
                    <ion-label>tab1</ion-label>
                    <ion-badge>6</ion-badge>
                </ion-tab-button>

                <!-- Provide a custom route to navigate to -->
                <ion-tab-button tab="tab2" :to="{ name: 'tab2' }">
                    <ion-icon name="construct"></ion-icon>
                    <ion-label>Speakers</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </template>
    </ion-tabs>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import Tab1 from "@/views/Tab1";
import Tab2 from "@/views/Tab2";


@Component({
  name: 'home',
    components: {
      Tab1,
      Tab2
    }
})
export default class Home extends Vue{

    mounted() {
    }

    beforeTabChange() {
        console.log('beforeTabChange...')
    }

    afterTabChange() {
        console.log('afterTabChange...')
    }
}
</script>
