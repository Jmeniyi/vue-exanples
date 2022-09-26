<template>
  <div id="app">
    <nav class="navbar navbar-expand text-center">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/app"
                class="btn btn-outline-secondary text-light"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/firstPrj"
                class="btn btn-outline-secondary text-light"
                aria-current="page"
                >First Project</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/secondPrj"
                class="btn btn-outline-secondary text-light"
                aria-current="page"
                >Second Project</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/third"
                class="btn btn-outline-secondary text-light"
                aria-current="page"
                >Third Project</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/FourthPrj"
                class="btn btn-outline-secondary text-light"
                aria-current="page"
                >Fourth2 Project</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    
  </div>
</template>

<script>
</script>

<style scoped>
.navbar {
  background: linear-gradient(45deg, rgb(42, 42, 58), rgba(255, 238, 0, 0.192));
  box-shadow: 4px 4px 9px rgba(198, 198, 198, 0.36);
  margin-bottom: 15px;
}
.btn {
  margin-left: 2em;
}
</style>