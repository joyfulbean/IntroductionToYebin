<template>
<v-app id="inspire">
<v-navigation-drawer
v-model="drawer"
fixed
app
>
<v-list dense>
<!--title 뒤에 @click="$router.push({name:'home'})"-->
<v-list-item router: to='/' exact>
<v-list-item-action>
<i class="fas fa-home"></i>
</v-list-item-action>
<v-list-item-content>
<v-list-item-title>Home</v-list-item-title>
</v-list-item-content>
</v-list-item>
<v-list-item router: to='aboutme' exact>
<v-list-item-action>
<i class="fas fa-user"></i>
</v-list-item-action>
<v-list-item-content>
<v-list-item-title>About me</v-list-item-title>
</v-list-item-content>
</v-list-item>
</v-list>
</v-navigation-drawer>

<!--v-toolbar color="#42b983" dark fixed app-->
<!--v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<v-toolbar-title>DR.PLANT</v-toolbar-title>
</v-toolbar-->
<v-toolbar color="#42b983" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Introduction to Yebin Kang</v-toolbar-title>
    </v-toolbar>


<v-content>
<router-view></router-view>
</v-content>
<v-footer color="#42b983" app>
<span class="white--text">&copy; 2017</span>
</v-footer>
</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>