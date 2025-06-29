<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
const methods = [
  { label: 'GET', value: 'get' },
  { label: 'POST', value: 'post' },
  { label: 'PUT', value: 'put' },
  { label: 'DELETE', value: 'delete' },
];

async function sendRequest() {
  const result = await invoke('send_http_request', {
    method: 'GET', // Replace with selected method
    url: 'https://example.com', // Replace with input URL
  });
  console.log('Request sent!', result);
}
</script>

<template>
  <div class="p-3">
    <!-- <h1 class="font-bold">
      Http Client
    </h1> -->
    <div>
      <form @submit.prevent="sendRequest" class="flex gap-2">
        <n-select class="w-24" :options="methods" />
        <n-input placeholder="Enter URL" class="w-full" />
      </form>
    </div>
  </div>
</template>