<template>
  <v-container fluid class="backcolor">
    <v-row justify="center">
      <v-col xl="6" lg="6" md="8" sm="12" xs="12" cols="12" class="pt-6" style="padding: 0">
        <v-slide-y-transition appear>
          <v-form id="form" ref="form" v-model="valid" lazy-validation v-on:submit.prevent="onSubmit" style="margin-top: 100px;">
            <v-card class="pa-3 pa-md-6 mx-auto">
              <p class="mr-2 text-center primary--text" style="font-family: 'Frijole', cursive; font-size: 2rem;" >
                    <center style="margin-top: -50px;">
                        <v-img src="../assets/logo-eprogramar.png" class="brand_logo" align="center"/>
                    </center>
              </p>
              <v-row justify="center">
                <v-col cols="12" md="6">
                  <div class="text-center">
                    <div class="my-2" />

                    <v-text-field
                      autocomplete="off"
                      label="E-mail"
                      prepend-icon="mdi-account"
                      v-model="user.email"
                      :rules="[ val => val && val.length > 0 || 'E-mail Obrigatorio']"
                      ref="email"
                      required
                    />

                    <v-text-field
                      label="Senha"
                      v-model="user.password"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @click:append.prevent="show = !show"
                      prepend-icon="mdi-lock-outline"
                      :rules="[ val => val && val.length > 0 || 'Senha Obrigatoria']"
                      ref="password"
                      required
                    />
                    <br />                    
                    <v-btn type="submit" large color="success" :loading="loading">Entrar</v-btn>
                    <br /><br /><br />
                    <router-link to="/nova-conta">Criar nova conta</router-link>
                    <br />
                    <router-link to="/esqueci-senha">Esqueci minha senha</router-link>                    
                    <br /><br />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-slide-y-transition>
      </v-col>
    </v-row>
    <SnackBar :color="message.color" :text="message.text" :show="message.show" />
  </v-container>
</template>

<script>
    import SnackBar from '../components/SnackBar';
    import Auth from '../services/auth';
    import storage from '../services/storage';
    import User from '../services/user';
    export default {
        components: {
          SnackBar
        },
        data() {
            return {
                message: {
                    show: false,
                    color: 'green',
                    text: 'Hi'
                },              
                valid: true,
                show: false,
                loading: false,
                user: {}
            }
        },
        methods: {
            onSubmit() {
                if(this.$refs.form.validate()) {     
                    this.user.email = this.user.email.toLowerCase();
                    this.loading = true;
                    Auth.signin(this.user.email, this.user.password)
                        .then(response => {
                            storage.saveToken(response.data.token);      					
                            User.getByEmail(this.user.email)
                                .then(response => {
                                    storage.saveCurrentUser(response.data.name, this.user.email);    
                                    this.loading = false;
                                    this.$router.push({path: `/`, query: {
                                            userName: response.data.name,
                                            userEmail: response.data.email
                                        }
                                    });
                                }).catch(error => {
                                    this.loading = false;
                                    alert(error);
                                })
                        }).catch(error => {
                            this.loading = false;
                            alert(error);
                        })

                    // localStorage.setItem('TOKEN', this.user.username);
                    // this.showMessage('success', 'Login OK');
                    // this.$router.push('/');
                    

                    // gateway.signIn(this.user, 
                    //   res => {
                    //     console.log('token', res.auth);
                    //     if(!res.auth === true) {
                    //         alert('Usuario ou Senha Invalido');
                    //         this.loading = false;
                    //         return;
                    //     }
                    //     localStorage.setItem('TOKEN', res.token);
                    //     this.loading = false;
                    //     gateway.getUserByUsername(this.user.username,
                    //       res2 => {
                    //         localStorage.setItem('user', JSON.stringify(res2));
                    //         this.$router.push('/');
                    //       }, err2 => {
                    //         this.showMessage('error', err2.message);
                    //       });
                    //   }, err => {
                    //     //this.showMessage('error', err.message);
                    //     console.log('err', err.response); 
                    //     if(err.response.status === 401) {
                    //       this.loading = false;
                    //       alert('Usuario ou Senha Invalido');
                    //     } else {
                    //       alert('Erro interno no servidor, contate o Administrador ou Tente novamente');
                    //     }
                    //   });
                } else {
                    if(!this.user.username) {
                        this.$refs.username.focus();
                    } 
                    else if(!this.user.password) {
                        this.$refs.password.focus();
                    }                    
                }
            },
            showMessage(color, text) {
                this.message.color = color;
                this.message.text = text;
                this.message.show = true;
            }                
        },
        beforeMount() {
        
        }
    }    
</script>
<style scoped>
    .brand_logo {
        height: 145px;
        width: 145px;
        border-radius: 50%;
        border: 2px solid #00ff80;
    }
    /* .backcolor {
    background-color: #6f42c1;
    } */
</style>