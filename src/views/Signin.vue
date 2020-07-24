<template>
  <div class="login" id="login">
    <v-app id="inspire" class="login-v-app">
      <v-content>
        <v-container class fluid>
          <v-row align="center" justify="center">
            <v-col>
              <v-card class="elevation-12" style="width: 50%; margin: 0 auto;">
                <v-toolbar color="primary" dark flat>
                  <v-spacer />
                  <v-toolbar-title>Login here</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="onSubmit">
                    <v-text-field
                      v-model="username"
                      id="username"
                      placeholder="Login"
                      name="login"
                      type="text"
                    />
                    <v-text-field
                      v-model="password"
                      id="password"
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                    <v-card-actions>
                      <v-spacer />
                      <v-btn type="submit" class="login-btn" color="primary">Login</v-btn>
                      <v-spacer />
                    </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  components: {},
  props: {
    source: String
  },
  data() {
    return {
      adminUser: null,
      adminPassword: null,
      adminUserList: [],
      username: "",
      password: "",
      users: []
    };
  },
  created() {},
  methods: {
    onSubmit() {
      firebase
        .database()
        .ref("admin")
        .on("value", data => {
          this.adminUserList = data.val();
          const usrLength = Object.keys(data.val());
          for (let i = 0; i < usrLength.length; i++) {
            const usrEmail = data.val()[Object.keys(data.val())[i]].email;
            const usrPassword = data.val()[Object.keys(data.val())[i]].password;
            if (this.username === usrEmail && this.password === usrPassword) {
              console.log("Access granted");
              let userAuth = { auth_hlm: "authorized" };
              localStorage.setItem("admin_info_hlm", JSON.stringify(userAuth));
              this.$router.push("/");
              window.location.reload();
            }
          }
        });
    }
  }
};
</script>

<style scoped>
.login .login-v-app {
  background: transparent !important;
  width: 100%;
}
.login .headline {
  color: #ffffff;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
.login .login-v-toolbar {
  background: #81c6d68f;
}
.login .theme--dark.v-toolbar.v-sheet {
  background-color: #272727 !important;
  border-color: #272727 !important;
}
.login .v-application .primary {
  background-color: #272727 !important;
  border-color: #272727 !important;
}
.login .login-btn {
  width: 30%;
}

@media screen and (max-width: 1050px) {
  #login .v-sheet.v-card {
    width: 100% !important;
  }
}
</style>