<template>
  <div class="text-white text-2xl p-2 float-center">
    <h3 class="mb-3">Sign Up</h3>
    <div class="card-body">
      <form @submit.prevent="handleFormData">
        <div class="form-group m-2">
          <label class="p-2">Username</label>
          <input
            v-model="username"
            name="username"
            class="form-control text-black"
            placeholder="Username"
            autoComplete="username"
            required
          />
        </div>
        <div class="form-group m-2">
          <label class="p-2">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            class="form-control text-black"
            placeholder="Password"
            autoComplete="current-password"
            required
          />
        </div>
        <div class="form-group m-2">
          <label class="p-2">Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            class="form-control text-black"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>
        <button class="btn btn-success mt-1 float-center">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AimApi from "@/api/AimApi";
import {useStore} from 'vuex'

const store = useStore()
const username = ref(null);
const password = ref(null);
const email = ref(null);

async function handleFormData() {
  const res = await AimApi.signup({username: username.value, password: password.value, email: email.value})
  store.state.username = username.value
  store.state.token = res
}
</script>

<style>
</style>