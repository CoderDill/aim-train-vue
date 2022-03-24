<template>
  <div className="LoginForm">
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h3 className="mb-3">Log In</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                className="form-control"
                placeholder="Username"
                autoComplete="username"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </div>
            <button className="btn btn-success float-right">Submit</button>
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