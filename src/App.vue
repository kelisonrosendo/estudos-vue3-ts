<template>
  <header class="fixed top-0 w-full">
    <NavigationMenu />
  </header>
  <main class="bg-slate-100">
    <ScrollArea class="h-[calc(100vh-60px)] mt-[60px] p-10 rounded-md">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive>
              <Suspense>
                <component :is="Component" />
                <template #fallback> <Loader /> </template>
              </Suspense>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
    </ScrollArea>
  </main>
</template>

<script setup lang="ts">
import { NavigationMenu, Loader } from '@/components'
import { ScrollArea } from '@/components/ui/scroll-area'
</script>
