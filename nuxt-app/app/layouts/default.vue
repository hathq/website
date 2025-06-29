<script setup lang="ts">
</script>
<template>

  <div class="flex flex-col h-full">
    <Header />
    <main class="grow overflow-y-auto bg-gray-50">
      <slot />
    </main>
    <Footer />
  </div>
</template>
