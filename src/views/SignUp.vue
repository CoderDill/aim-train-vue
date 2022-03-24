<template>
  <div className="SignupForm">
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2 className="mb-3">Sign Up</h2>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
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