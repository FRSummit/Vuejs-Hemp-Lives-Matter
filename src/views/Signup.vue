<template>
  <div class="sign-up" id="sign-up">
    <v-app id="inspire" class="sign-up-v-app" v-if="userIsAuthenticated">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col>
              <v-card class="elevation-12" style="width: 50%; margin: 0 auto;">
                <v-toolbar color="primary" dark flat>
                  <v-spacer />
                  <v-toolbar-title>Sign up here</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="onSubmit">
                    <div class="name-field">
                      <label class="field-label" for="name">Name</label>
                      <v-text-field
                        class="field-input"
                        v-model="name"
                        id="name"
                        placeholder="F R Summit"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div class="email-field">
                      <label class="field-label" for="email">Email</label>
                      <v-text-field
                        class="field-input"
                        v-model="email"
                        id="email"
                        placeholder="frsummit1@gmail.com"
                        name="email"
                        type="text"
                      />
                    </div>
                    <div class="address-field">
                      <label class="field-label" for="address">Address</label>
                      <v-text-field
                        class="field-input"
                        v-model="address"
                        id="address"
                        placeholder="Banani, Dhaka"
                        name="address"
                        type="text"
                      />
                    </div>
                    <div class="phone-field">
                      <label class="field-label" for="phone">Phone</label>
                      <v-text-field
                        class="field-input"
                        v-model="phone"
                        id="phone"
                        placeholder="+88 016XX XXXXXX"
                        name="phone"
                        type="text"
                      />
                    </div>
                    <div class="phone-field">
                      <label class="field-label" for="phone">Role</label>
                      <v-col class="field-input" style="padding: 0px;">
                        <v-select
                          :items="items"
                          placeholder="Role"
                          dense
                          v-model="role"
                          id="role"
                          name="role"
                          type="text"
                        ></v-select>
                      </v-col>
                    </div>
                    <div class="password-field">
                      <label class="field-label" for="password">Password</label>
                      <v-text-field
                        class="field-input"
                        v-model="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn type="submit" class="signup-btn" color="primary">Create</v-btn>
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
import router from "../router";
import firebase from "firebase";

export default {
  name: "Home",
  components: {},
  props: {
    source: String
  },
  data() {
    return {
      userIsAuthenticated: false,
      name: "",
      email: "",
      address: "",
      phone: "",
      role: "",
      password: "",
      items: ["Admin", "User"],
      roleItems: [{ role: "Admin" }, { role: "user" }]
    };
  },
  created() {
    const usrAuth = localStorage.getItem("admin_info_hlm");
    if (usrAuth) {
      this.userIsAuthenticated = JSON.parse(usrAuth).auth_hlm;
    }
  },
  methods: {
    checkUserIsAuthenticated() {},
    onSubmit() {
      console.log("on submit");
      if (
        this.name == "" ||
        this.email == "" ||
        this.address == "" ||
        this.phone == "" ||
        this.role == "" ||
        this.password == ""
      ) {
        if (this.name == "") {
          document.getElementById("name").placeholder =
            "Name must not be empty";
        }
        if (this.email == "") {
          document.getElementById("email").placeholder =
            "Email must not be empty";
        }
        if (this.address == "") {
          document.getElementById("address").placeholder =
            "Address must not be empty";
        }
        if (this.phone == "") {
          document.getElementById("phone").placeholder =
            "Phone must not be empty";
        }
        if (this.role == "") {
          document.getElementById("role").placeholder =
            "Role must not be empty";
        }
        if (this.password == "") {
          document.getElementById("password").placeholder =
            "Password must not be empty";
        }
      } else {
        if (this.role == "Admin") {
          firebase
            .database()
            .ref("admin")
            .push({
              name: this.name,
              email: this.email,
              address: this.address,
              phone: this.phone,
              role: this.role,
              password: this.password
            })
            .then(data => {
              console.log(data);
              this.name = "";
              this.email = "";
              this.address = "";
              this.phone = "";
              this.role = "";
              this.password = "";
              router.replace("/login");
              window.location.reload()
            })
            .catch(error => console.log(error));
        } else {
          firebase
            .database()
            .ref("user")
            .push({
              name: this.name,
              email: this.email,
              address: this.address,
              phone: this.phone,
              role: this.role,
              password: this.password
            })
            .then(data => {
              console.log(data);
              this.name = "";
              this.email = "";
              this.address = "";
              this.phone = "";
              this.role = "";
              this.password = "";
              router.replace("/login");
              window.location.reload()
            })
            .catch(error => console.log(error));
        }
      }
    }
  }
};
</script>

<style scoped>
.headline {
  color: #ffffff;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
.sign-up .theme--dark.v-toolbar.v-sheet {
  background-color: #272727 !important;
  border-color: #272727 !important;
}
.sign-up-v-app {
  background: transparent !important;
    width: 100%;
}
.sign-up .v-application .primary {
  background-color: #272727 !important;
  border-color: #272727 !important;
}
.signup-btn {
  width: 30%;
}
.sign-up .name-field,
.sign-up .email-field,
.sign-up .address-field,
.sign-up .phone-field,
.sign-up .password-field {
  position: relative;
}
.field-label {
  display: inline-block;
  width: 20%;
  text-align: left;
  font-size: 1rem;
}
.field-input {
  display: inline-block;
  width: 78%;
}

@media screen and (max-width: 1050px) {
  #sign-up .v-sheet.v-card {
    width: 100% !important;
  }
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 491px) {
}
</style>