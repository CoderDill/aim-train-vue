<template>
  <div class="SignupForm">
    <div class="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2 class="mb-3">Sign Up</h2>
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Username</label>
              <input
                name="username"
                class="form-control"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <button class="btn btn-success float-right">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>