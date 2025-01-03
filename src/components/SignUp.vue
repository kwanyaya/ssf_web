<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db } from '@/main';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import { useRouter } from 'vue-router';
const router = useRouter();
async function addUserData(userData: any) {
    try {
        // Check if a user with the same email already exists
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', userData.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log('User with this email already exists.');
            return;
        }

        // Add new user if email does not exist
        const docRef = await addDoc(usersRef, userData);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        const user = result.user;
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            createTime: new Date(),
        };
        addUserData(userData);
        console.log('User signed in successfully:', user);
        router.push('/member');
    }).catch((error) => {
        console.error('Error signing in with Google:', error);
    });
}
</script>

<template>
    <div class="container-fluid">
        <form class="mx-auto">
            <img class="img-fluid img-thumbnail brand-logo" src="../assets/images/brand_logo.jpg" alt="Logo">
            <h4 class="text-center">Sign Up</h4>
            <div class="mb-3 mt-5">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
                <div id="emailHelp" class="form-text mt-3">Forget password ?</div>
            </div>

            <button type="submit" class="btn mt-5">Sign Up</button>
        </form>
        <div class="social-media">
            <button @click="signInWithGoogle" class="btn mt-5">Google</button>
        </div>
    </div>
</template>

<style scoped>
.brand-logo {
    border-radius: 50%;
    width: 30%;
}

.btn {
    background-color: var(--theme-color);
    color: white;
}
</style>