<script setup lang="ts">
function sendRequest() {
  console.log('Sending request...');
}
</script>

<template>
  <div class="p-3">
    <h1 class="font-bold">
      Http Client
    </h1>
    <div>
      <form @submit.prevent="sendRequest" class="flex gap-2">
        <n-select class="flex-1" />
        <n-input placeholder="Enter URL" class="flex-1/2" />
      </form>
    </div>
  </div>
</template>