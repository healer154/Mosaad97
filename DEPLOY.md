# Deploying Your Portfolio Website

There are two main ways to upload your website and make it live. Choose the one that suits you best!

## 🚀 Option 1: GitHub + Vercel (Recommended - Updates Automatically)
This is the professional standard. When you push changes to GitHub, your site updates instantly.

### Step 1: Push to GitHub
If you haven't already, push your code to a GitHub repository:

1.  Create a new repository on [GitHub.com](https://github.com/new).
2.  Run these commands in your project folder (terminal):
    ```bash
    git init
    git add .
    git commit -m "First portfolio deploy"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

### Step 2: Connect to Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign up/login (use GitHub login).
2.  Click **"Add New..."** -> **"Project"**.
3.  Find your `mosaad-main` repository and click **Import**.
4.  Leave the settings as default (Framework Preset: **Vite**).
5.  Click **Deploy**.

Your site will be live at `https://your-portfolio.vercel.app`!

---

## 📦 Option 2: Netlify Drop (Fastest - Manual Updates)
If you don't want to use Git/GitHub right now, you can just drag and drop your build folder.

### Step 1: Build the Project
Run this command in your terminal to generate the production files:
```bash
npm run build
```
This will verify and bundle everything into a folder named **`dist`**.

### Step 2: Drag & Drop
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Open your project folder in File Explorer (`c:\Users\MS\.gemini\antigravity\scratch\mosaad-main`).
3.  Drag the **`dist`** folder onto the Netlify page.
4.  Your site will be live instantly!

**Note:** If you use Option 2, you must repeat these steps every time you change something. That's why Option 1 is better for long-term projects.
