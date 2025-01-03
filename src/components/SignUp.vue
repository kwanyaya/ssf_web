<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        console.log('User signed in successfully:', result.user);
    }).catch((error) => {
        console.error('Error signing in with Google:', error);
    });
}
</script>
<template>
    <div class="container-fluid ">
        <form class="mx-auto ">
            <h4 class="text-center">Sign Up</h4>
            <div class="mb-3 mt-5">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
                <div id="emailHelp" class="form-text mt-3">Forget password ?</div>
            </div>

            <button type="submit" class="btn btn-primary mt-5">Sign Up</button>
        </form>
        <div class="social-media">
            <button @click="signInWithGoogle" class="btn btn-primary mt-5">Google</button>
        </div>
    </div>
</template>

<style scoped></style>