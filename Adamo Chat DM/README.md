
# Adamo Chat – DM-Only Version

## ✅ Features
- Google Login (placeholder on landing)
- Private real-time DMs via /dm/[uid]
- Clean, dark UI with Tailwind CSS
- Ready to connect to Firebase

---

## 🛠 Setup

1. Create a Firebase project
2. Enable:
   - Google Auth
   - Realtime Database
3. Fill out .env.local using .env.example
4. Deploy on Vercel or locally with:
   ```
   npm install
   npm run dev
   ```

---

## 🚀 Usage

- Visit `/` to "log in"
- Go to `/dm/[uid]` to start chatting
- DM chat sync and full auth integration can be wired in `/dm/[uid].tsx`

