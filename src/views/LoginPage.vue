<template>
  <div class="LoginForm text-white text-xl p-2 float-center">
    <h3 class="mb-3">Log In</h3>
    <div class="card align-middle">
      <div class="card-body">
        <form>
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
          <button class="btn btn-success mt-2 float-center">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>