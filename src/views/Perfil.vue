<template>    
    <v-container>
        <AppBar :navigate="navigate"/>          
        <v-main>   

            <v-col cols="12">
                <v-row justify="center" align="center">
                    <v-avatar
                        class="profile"
                        color="grey"
                        size="120"
                    >
                        <v-img src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png"  
                        />
                    </v-avatar>
                </v-row>
            </v-col>
            <br />
            <v-col cols="12">
                <v-row 
                    justify="center" 
                    align="center"
                >
                    <v-btn 
                        type="u" 
                        dark  
                        height="46" 
                        class="v-bottom-navigation"
                    >
                        ALTERAR foto DE PERFIL
                    </v-btn>
                    <input
                        ref="uploader"
                        class="d-none"
                        type="file"
                        accept="image/jpeg, image/jpg"
                    >                      
                </v-row>
            </v-col>            
            <br />
            <v-expansion-panels accordion hover focusable>
                <v-expansion-panel>
                    <v-expansion-panel-header>Perfil</v-expansion-panel-header>
                    <v-expansion-panel-content>

                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-form 
                                v-model="valid" 
                                v-on:submit.prevent="save"
                                id="produtoForm"
                                ref="produtoForm">
                                    <v-container>
                                    <v-row>
                                        <v-col cols="12" md="6">                      
                                            <v-text-field 
                                                v-model="userLogged.username"
                                                label="Username"
                                                ref="username"
                                                filled required readonly>
                                            </v-text-field>  
                                        </v-col>
                                        <v-col cols="12" md="6">                      
                                            <v-text-field v-model="userLogged.name"
                                                        label="Nome"
                                                        ref="nome"
                                                        required
                                                        readonly
                                                        filled>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Criado"
                                                v-model="userLogged.createdAt"
                                                ref="createdAt"
                                                required filled disabled
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Alterado"
                                                v-model="userLogged.updatedAt"
                                                ref="updatedAt"
                                                required filled disabled
                                            />
                                        </v-col>                                    
                                    </v-row>
                                    <v-row>
                                        <v-btn 
                                            type="submit" 
                                            depressed 
                                            color="success"
                                            :loading="isLoading"
                                            :disabled="isLoading"
                                        >Salvar</v-btn>
                                    </v-row>
                                    </v-container>
                                </v-form>                
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Alterar Senha</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-form 
                                v-model="valid" 
                                v-on:submit.prevent="save"
                                id="produtoForm"
                                ref="produtoForm">
                                    <v-container>
                                    <v-row>
                                        <v-col cols="12" md="4">                      
                                            <v-text-field 
                                                label="Senha Atual"
                                                ref="username"
                                                filled required>
                                            </v-text-field>  
                                        </v-col>
                                        <v-col cols="12" md="4">                      
                                            <v-text-field 
                                                        label="Senha Nova"
                                                        ref="senhaNova"
                                                        required
                                                        filled>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <v-text-field
                                                label="Confirmar Senha"
                                                ref="confirmacaoSenha"
                                                required filled
                                            />
                                        </v-col>                                
                                    </v-row>
                                    <v-row>
                                        <v-btn 
                                            type="submit" 
                                            depressed 
                                            color="success"
                                            :loading="isLoading"
                                            :disabled="isLoading"
                                        >Salvar</v-btn>
                                    </v-row>
                                    </v-container>
                                </v-form>                
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>

            </v-expansion-panels>
        </v-main>
    </v-container>
</template>

<script>
  import AppBar from '../components/AppBar';
  export default {
    name: 'Perfil',
    data: () => ({
      isLoading: false,
      show: false,
      valid: true,
      userLogged: {
        type: 'none'
      }, 
      userNew: {}
    }),
    components:{
        AppBar
    },
    methods: {
      save() {

      }
    },
    beforeMount() {
      //this.userLogged = JSON.parse(localStorage.getItem('user'));
    }
  }
</script>