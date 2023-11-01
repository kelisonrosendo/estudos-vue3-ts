<template>
  <div class="flex flex-col items-center justify-center w-full">
    <img src="@/assets/logo.png" alt="Rick And Morty Logo" class="w-[550px]" />

    <h4 class="text-lg text-slate-800 text-center my-5 max-w-[800px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam nam fugit ea ipsam
      cum suscipit ullam dolore autem rerum, tempora, odit beatae vitae optio laudantium tenetur
      nisi fuga eligendi!
    </h4>

    <div class="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-4">
      <div v-for="card in cards" :key="card.id">
        <Card class="h-full">
          <CardContent class="h-full p-4 flex items-center gap-4">
            <div class="flex flex-shrink-0 items-center justify-center rounded-full w-14">
              <img :src="getLogoImage(card.logo)" :alt="card.title" />
            </div>
            <div>
              <CardTitle> {{ card.title }} </CardTitle>
              <CardDescription>{{ card.description }}</CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const cards = [
  {
    id: 1,
    logo: 'logo-vue.svg',
    title: 'Vue 3',
    description: 'Typescript, Composition API, Suspense, KeepAlive',
    url: 'https://vuejs.org/'
  },
  {
    id: 2,
    logo: 'logo-shadcn.svg',
    title: 'Shadcn UI',
    description: 'Copy and paste components into your apps',
    url: 'https://www.shadcn-vue.com/'
  },
  {
    id: 2,
    logo: 'logo-tailwind.svg',
    title: 'Tailwind CSS',
    description: 'A utility CSS framework packed with classes',
    url: 'https://tailwindcss.com/'
  },
  {
    id: 4,
    logo: 'logo-pinia.svg',
    title: 'Pinia',
    description: 'The intuitive and organized stores for Vue',
    url: 'https://pinia.vuejs.org/'
  }
]

const getLogoImage = (logo: string): string => {
  return new URL(`../assets/${logo}`, import.meta.url).pathname
}
</script>
