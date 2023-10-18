<template>
  <header class="fixed top-0 w-full shadow-md">
    <NavigationMenu class="h-[60px] max-w-[1230px] m-auto" />
  </header>
  <main class="bg-slate-100">
    <ScrollArea class="h-[calc(100vh-60px)] mt-[60px] p-10 rounded-md">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive>
              <Suspense>
                <component class="max-w-[1230px] m-auto" :is="Component" />
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
import { Loader, NavigationMenu } from '@/components'
import { ScrollArea } from '@/components/ui/scroll-area'
</script>
