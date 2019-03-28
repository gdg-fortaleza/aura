<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-2 mb-0">
      <v-layout wrap align-start justify-center row fill-height class="my-0">
        <v-flex xs12 md8 class="mb-0">
          
          <center><p class="google-font mb-0 mt-3" style="font-size:200%;color:#616161">Emissão de Certificados</p></center>
          <v-divider></v-divider>
          <center><p class="google-font mt-3" style="font-size:110%">Informe seu email no formulário abaixo e faça a emissão do(s) seu(s) certificado(s).</p></center>

            <v-form v-model="valid" ref="form" lazy-validation @submit="validate">
                <v-container>
                    <v-layout>
                        <v-flex
                        xs12
                        md8
                        >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
            lazy-validation
            :disabled="requesting"
          ></v-text-field>

           <v-btn
            color="primary"
            style="margin:0;"
            :loading="requesting"
            :disabled="requesting"
            @click="validate"
            >
            Emitir Certificado
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


      <!-- dialog -->

      <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Yeah :)</v-card-title>
        <v-card-text>Um e-mail com informações sobre os certificados foi enviado para <strong>{{ email }}</strong>.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" flat @click="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
        ChapterDetails: ChapterDetails,
        email: '',
        dialog: false,
        requesting: false,
        valid: false,
        rules: {
          required: value => !!value || 'Obrigatório.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'E-mail inválido.'
          }
        }
      }
    },

    methods: {
      validate(event) {
        event.preventDefault();
        if (!this.$refs.form.validate()) return;
        this.requesting = true;
        setTimeout(() => {
          this.requesting = false;
          this.dialog=true;
        }, 3000);
      }
    }
  }

</script>
