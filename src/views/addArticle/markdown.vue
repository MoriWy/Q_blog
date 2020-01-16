<template>
  <div class="mk">
    <mavon-editor></mavon-editor>
  </div>
</template>

<script>
    export default {
        name: "markdown",
        data(){
            return{
                height: document.documentElement.clientHeight-200+'px'
            }
        }
    }
</script>

<style scoped>
.mk{
  max-height: 400px;
}
</style>
