<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-2 mb-0">
      <v-layout wrap align-start justify-center row fill-height class="my-0">
        <v-flex xs12 md8 class="mb-0">
          
          <p class="google-font mb-0 mt-3" style="font-size:200%;color:#616161">Emissão de Certificados</p>
          <v-divider></v-divider>
          <p class="google-font mt-3" style="font-size:110%">Informe seu email no formulário abaixo e faça a emissão do(s) seu(s) certificado(s).</p>

            <v-form v-model="valid">
                <v-container>
                    <v-layout>
                        <v-flex
                        xs12
                        md8
                        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

           <v-btn
            color="success"
            @click="validate"
            >
            Enviar
            </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>


            <p class="google-font mb-0" style="font-size:120%">Questões? Por favor entre em contato <a href="javascript:void(0)">{{ChapterDetails.ChapterEmail}}</a>.</p>
        </v-flex>
        <v-flex xs12 md2 lg2 class="pa-2">
          <v-img
              :src="require('@/assets/img/svg/contact2.svg')"
              :lazy-src="require('@/assets/img/svg/contact2.svg')"
              width="70%"
              style="float:right"
              >
              <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0
              >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    



  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'

  export default {
    components: {
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
