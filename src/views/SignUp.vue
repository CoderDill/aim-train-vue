<template>
<div class="text-white text-2xl p-2 float-center">
  <h3 class="mb-3">Sign Up</h3>
     <div class="card-body">
        <form class="">
          <div class="form-group m-2">
            <label class="p-2">Username</label>
            <input
              name="username"
              class="form-control"
              placeholder="Username"
              autoComplete="username"
              required
            />
          </div>
          <div class="form-group m-2">
            <label class="p-2">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>
          <div class="form-group m-2">
            <label class="p-2">Email</label>
            <input
              type="email"
              name="email"
              
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

<script>
export default {};
</script>

<style>
</style>