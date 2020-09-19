<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <div class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </div>
    <div class="nav-item">
      <router-link class="nav-link" to="/classroom">Classroom</router-link>
    </div>
    <div class="nav-item">
      <router-link class="nav-link" to="/Login">Login</router-link>
    </div>

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
        <AlertNotifyMenu />
      </li>

      <!-- Nav Item - Messages -->
      <li class="nav-item dropdown no-arrow mx-1">
        <MessageNotifyMenu />
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <UserContextMenu />
      </li>
    </ul>
  </nav>
</template>

<script>
import UserContextMenu from './UserContextMenu';
import MessageNotifyMenu from './MessageNotifyMenu';
import AlertNotifyMenu from './AlertNotifyMenu';

export default {
  name: "TopNavBar",
  components: {
    UserContextMenu,
    MessageNotifyMenu,
    AlertNotifyMenu
  }
}
</script>