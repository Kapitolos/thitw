# Decap CMS Setup Instructions

## Initial Setup (One-time)

1. **Enable GitHub OAuth for your repository:**
   - Go to your GitHub repository settings
   - Navigate to "Settings" → "Developer settings" → "OAuth Apps"
   - Click "New OAuth App"
   - Fill in:
     - **Application name**: "THITW CMS" (or any name)
     - **Homepage URL**: `https://theholeinthewallto.ca`
     - **Authorization callback URL**: `https://theholeinthewallto.ca/admin/`
   - Click "Register application"
   - **Copy the Client ID** (you'll need this)

2. **Update the config.yml:**
   - The config is already set up, but verify:
     - `repo: Kapitolos/thitw` matches your repo
     - `branch: alt` matches the branch you want to edit
     - `base_url: https://theholeinthewallto.ca` matches your custom domain

3. **Access the admin panel:**
   - After deploying, visit: `https://theholeinthewallto.ca/admin/`
   - Click "Login with GitHub"
   - Authorize the app
   - You'll be able to edit the menu!

## Using the CMS

- Navigate to `/admin/` on your site
- Click "Login with GitHub"
- Select "Menu" from the collections
- Edit any menu section (Appetizers, Pizzas, Dinner, etc.)
- Click "Save" - changes will be committed to your GitHub repo
- The site will update after GitHub Pages rebuilds (usually within a minute)

## Troubleshooting

- If login doesn't work, check that the OAuth app callback URL matches exactly
- Make sure the branch name in config.yml matches your active branch
- Verify the file path in config.yml matches your menu.json location
