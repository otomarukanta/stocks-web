<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          類似度検索
        </v-card-title>
        <v-card-text>
          <v-autocomplete v-model="inputCode" :items="codes" :search-input.sync="search">
          </v-autocomplete>
          <v-data-table
            :headers="headers"
            :items="simCodes"
            :items-per-page="5"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data () {
    return {
      codes: [],
      headers: [{text : 'code', value: 'code'}, {text: '類似度', value: 'sim'}],
      inputCode: null,
      simCodes: [],
      search: null,
    }
  },
  watch: {
    search (val) {
      if (this.codes.length > 0) return
      if (this.isLoading) return

      this.isLoading = true

      fetch('/api/codes.json')
        .then(res => res.json())
        .then(res => {
          this.codes = res.codes
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
    inputCode (val) {
      fetch('/api/similarities/' + val + '.json')
        .then(res => res.json())
        .then(res => {
          this.simCodes = res.codes
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>
