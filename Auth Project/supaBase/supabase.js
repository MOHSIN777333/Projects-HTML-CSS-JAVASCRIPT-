import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { conf } from "./conf/conf.js"

export class AuthService {
    supabase;

    constructor() {
        this.supabase = createClient(conf.supabase_url, conf.publishable_key)
    }

    // ✅ Signup
    async signup({ email, password }) {
        try {
            const { data, error } = await this.supabase.auth.signUp({ email, password })
            if (error) throw error
            return data
        } catch (error) {
            console.log("signup error ::", error)
            throw error  // ✅ re-throw!
        }
    }

    // ✅ Login
    async login({ email, password }) {
        try {
            const { data, error } = await this.supabase.auth.signInWithPassword({ email, password })
            if (error) throw error
            return data
        } catch (error) {
            console.log("login error ::", error)
            throw error
        }
    }

    // ✅ Logout
    async logout() {
        try {
            const { error } = await this.supabase.auth.signOut()
            if (error) throw error
        } catch (error) {
            console.log("logout error ::", error)
            throw error
        }
    }

    // ✅ Get User 
    async getUser() {
        try {
            const { data: { user }, error } = await this.supabase.auth.getUser()
            if (error) throw error
            return user        // ✅ user return!
        } catch (error) {
            console.log("getUser error ::", error)
            return null        // ✅ null return — protected.js check 
        }
    }

    // ✅ Forgot Password 
    async forgotPassword(email) {
        try {
            const { error } = await this.supabase.auth
                .resetPasswordForEmail(email, {
                    redirectTo: 'http://localhost:5500/Auth%20Project/reset-password.html'
                })
            if (error) throw error
        } catch (error) {
            console.log("forgotPassword error ::", error)
            throw error
        }
    }

    // ✅ Reset Password 
    async resetPassword(newPassword) {
        try {
            const { data, error } = await this.supabase.auth
                .updateUser({ password: newPassword })
            if (error) throw error
            return data
        } catch (error) {
            console.log("resetPassword error ::", error)
            throw error
        }
    }

    // ✅ Google OAuth 
    async loginWithGoogle() {
        try {
            const { error } = await this.supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'http://localhost:5500/Auth%20Project/index.html'
                }
            })
            if (error) throw error
        } catch (error) {
            console.log("Google error ::", error)
            throw error
        }
    }

    // ✅ GitHub OAuth 
    async loginWithGithub() {
        try {
            const { error } = await this.supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: 'http://localhost:5500/Auth%20Project/index.html'
                }
            })
            if (error) throw error
        } catch (error) {
            console.log("Github error ::", error)
            throw error
        }
    }
}

export const authservice = new AuthService()