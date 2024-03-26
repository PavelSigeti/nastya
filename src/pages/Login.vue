<template>
    <div class="columns-2">
        <div class="img-container">

        </div>
        <div class="form-container">
            <h1>Log in</h1>
            <form>
                <input type="text" placeholder="Login">
                <input type="password" placeholder="Password">
                <button class="btn-blue"  @click.prevent="router.push('/main')">Go to the journey</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
 h1 {
    color: #fff;
    font-size: 3em;
 }
 .form-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    input {
        width: 400px;
        height: 50px;
        border-radius: 10px;
        text-align: center;
        text-transform: uppercase;
        font-size: 1em;
        outline: none;
    }
    button {
        margin-top: 30px;
    }
 }
</style>