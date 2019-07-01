<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd">Eventos do {{ChapterDetails.ChapterName}}</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Questões? Entre em contato! Email: <a href="mailto:gdgfortaleza@gmail.com" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:110%">{{ChapterDetails.ChapterEmail}}</a>.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <upcommingEvents/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <pastEvents/>
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>

</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import upcommingEvents from '@/components/events/upcomingEvents'
import pastEvents from '@/components/events/pastEvents'
  export default {
    components: {
      upcommingEvents,
      pastEvents
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
