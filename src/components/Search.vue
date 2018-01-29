<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="e1 > 1">Country</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="e1 > 2">Weight</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Size</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card height="350px" class="pt-4">
                <div class="display-2">Enter your destination</div>
                  <v-select
                    v-bind:items="selectItems"
                    v-model="selectEl"
                    label="Country"
                    single-line
                    bottom
                  ></v-select>
                <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card height="350px" class="pt-4">
                <div class="display-2">Weight</div>
                <v-form v-model="valid">
                  <v-text-field
                    label="Grams"
                    v-model="weight"
                    required
                  ></v-text-field>
                </v-form>
                <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                <v-btn flat @click.native="e1 = 1">Cancel</v-btn>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card height="350px" class="pt-4">
                <div class="display-2">Size</div>
                <v-form v-model="valid">
                  <v-text-field
                    label="Length (cm)"
                    v-model="length"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Width (cm)"
                    v-model="width"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Height (cm)"
                    v-model="height"
                    required
                  ></v-text-field>
                </v-form>
                <v-btn color="primary" @click.native="onSubmit">Continue</v-btn>
                <v-btn flat @click.native="e1 = 2">Cancel</v-btn>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Rate from './Rate.vue'

  export default {
    data () {
      return {
        // how its gonna be the database?
        // make a countries query here
        selectItems: [
          { text: 'BAHRAIN' },
          { text: 'BELARUS' },
          { text: 'BHUTAN' },
          { text: 'BARBADOS' }
        ],
        selectEl: null,
        e1: 0,
        valid: false,
        weight: '',
        length: '',
        width: '',
        height: ''
      }
    },
    components: {
      'rate': Rate
    },
    methods: {
      onSubmit () {
        const searchObj = {
          width: this.width,
          length: this.length,
          weight: this.weight,
          height: this.height,
          country: this.selectEl.text
        }
        this.$store.state.searchObj = searchObj
        this.$router.push('/rate')
      }
    }
  }
</script>
