import { authservice } from '../supabase.js'

// ✅ OAuth token handle
const hashParams = new URLSearchParams(window.location.hash.substring(1))
console.log("hashing token checking", hashParams);

const accessToken = hashParams.get('access_token')
console.log("acctoken token checking", accessToken);

if (accessToken) {
    window.history.replaceState({}, document.title, window.location.pathname)
}

const user = await authservice.getUser()
console.log("user", user);


if (!user) {
    window.location.href = './login.html'
} else {
    document.getElementById('userEmail').textContent = user.email
    document.getElementById('userName').textContent =
        user.user_metadata?.full_name ||
        user.user_metadata?.username ||
        user.email.split('@')[0]
}

// ✅ Logout

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await authservice.logout()
    window.location.href = './login.html'
})