<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from './api/client';

type User = {
  id: string;
  name: string;
};

const user = ref<User | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const loadUser = async () => {
  loading.value = true;
  error.value = null;
  try {
    const data = await api.user.getUser({
      params: { id: 'u-1' },
    });
    user.value = data as User;
  } catch (err: any) {
    error.value = err?.message || String(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  void loadUser();
});
</script>

<template>
  <main style="font-family: sans-serif; padding: 24px; line-height: 1.5">
    <h1>Midway Functional API + Vue</h1>
    <p>
      Current User:
      {{ user ? `${user.name} (${user.id})` : loading ? 'Loading...' : 'N/A' }}
    </p>
    <p v-if="error" style="color: crimson">Request Error: {{ error }}</p>
  </main>
</template>
