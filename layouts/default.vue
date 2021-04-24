<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-container class="py-0 fill-height">
        <v-btn
          v-for="link in links"
          :key=link.key
          :to=link.to
          text
        >
          {{ link.title }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          key: 'similarity',
          icon: 'mdi-domain',
          title: '類似度検索',
          to: '/similarity'
        }
      ],
    }
  }
}
</script>
