<template>
  <div>
    <vs-navbar v-model="activePage" shadow square center-collapsed fixed>
      <template #left>
        <vs-button flat icon @click="isShowSidebar">
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <vs-navbar-item
        id="guide"
        :active="activePage == 'guide'"
        @click="changePage('guide')"
      >
        Home
      </vs-navbar-item>
      <vs-navbar-item
        id="docs"
        :active="activePage == 'docs'"
        @click="changePage('docs')"
      >
        Blog
      </vs-navbar-item>
      <vs-navbar-item
        id="components"
        :active="activePage == 'components'"
        @click="changePage('components')"
      >
        Docs
      </vs-navbar-item>
      <vs-navbar-item
        id="license"
        :active="activePage == 'license'"
        @click="changePage('license')"
      >
        Video
      </vs-navbar-item>
      <template #right>
        <vs-button flat @click="login">Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-dialog v-model="activeDialog" not-close>
      <template #header>
        <h4 class="not-margin">欢迎来到 <b>萌二社</b></h4>
      </template>
      <div class="con-form">
        <vs-input v-model="input1" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input v-model="input2" type="password" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="checkbox1">记得我</vs-checkbox>
          <a href="#">忘记密码?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Sign In </vs-button>
          <div class="new">新来的? <a href="#">建立新帐户</a></div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDialog: false,
      input1: '',
      input2: '',
      checkbox1: false,
    }
  },
  computed: {
    // ,
    showSidebar: {
      set(val) {
        this.$store.commit('app/setShowSidebar', val)
      },
      get() {
        return this.$store.state.app.showSidebar
      },
    },
    activePage: {
      set(val) {
        this.$store.commit('app/setActivePage', val)
      },
      get() {
        return this.$store.state.app.activePage
      },
    },
  },
  methods: {
    login() {
      this.activeDialog = true
    },
    isShowSidebar() {
      this.$store.commit('app/setShowSidebar', !this.showSidebar)
    },
    changePage(value) {
      this.$store.commit('app/setActivePage', value)
    },
  },
}
</script>
<style lang="scss">
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: #2c3e50;
      text-decoration: none;
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }

  .vs-checkbox-label {
    font-size: 0.8rem;
  }
  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
    .vs-input {
      width: 100%;
    }
  }
}
</style>
<style lang="scss" scoped>
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
  .new {
    margin: 0px auto;
    margin-top: 10px;
    padding: 0px;
    font-size: 12px;
    text-align: center;
    a {
      color: #1a5cff;
      margin-left: 6px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
