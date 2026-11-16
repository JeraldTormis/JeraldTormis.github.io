# GOLDLINE — Personal Portfolio

A responsive, dark editorial-style personal portfolio with a champagne-gold accent. Built with plain HTML, CSS, and JavaScript for free static hosting on GitHub Pages.

## Files

- `index.html` — one-page portfolio homepage
- `about.html` — professional story, expertise, recognition
- `projects.html` — project index
- `projects/project-01.html`, `project-02.html` — project case-study pages
- `experience.html` — work and education timeline
- `contact.html` — contact page with mailto form
- `assets/css/styles.css` — shared design system and responsive styling
- `assets/js/site.js` — mobile navigation, reveal animations, current year, contact form

## Personalize before publishing

1. Search the project for `YOUR NAME` and replace it with your name.
2. Replace `[your role / profession]`, the sample biography, skills, dates, experience, and achievements.
3. Replace the sample statistics with verified figures, or remove them if you do not want to publish numbers.
4. Update `your.email@example.com` in `contact.html` (both the form's `data-recipient` and the email link).
5. Replace LinkedIn and GitHub profile URLs with your own.
6. Add your résumé PDF at `assets/Your-Name-Resume.pdf`, or update/remove the résumé link in `index.html`.
7. Add your profile photo to `assets/images/`. To use it, replace the `.portrait-placeholder` block in `index.html` with an `<img>` and add suitable alt text.
8. Edit the two project case studies. Duplicate a project page to add more projects.

## Preview locally

Open `index.html` in a browser. For a more realistic local server preview, use VS Code's Live Server extension. No build step, package manager, or framework is required.

## Publish free with GitHub Pages

1. Sign in or create an account at https://github.com/.
2. Create a **public** repository. For a personal site, name it exactly `YOUR-GITHUB-USERNAME.github.io` (replace with your GitHub username). Alternatively, use any repository name and enable Pages from its settings.
3. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for the deployment to finish. Your website will be available at `https://YOUR-GITHUB-USERNAME.github.io/` (personal repository) or `https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/` (project repository).
8. After future edits, commit and push/upload the changed files. GitHub Pages will publish the updates.

GitHub Pages is public hosting: anyone with the URL can view the site. Do not publish private information, personal phone numbers, confidential work materials, or documents you do not want public. A custom domain is optional and usually costs money.

## Notes

- The contact form uses `mailto:` and opens the visitor's email app. It does not store or send messages through a server. For a hosted form that submits without an email app, connect a form service or add a backend.
- Google Fonts is loaded from Google Fonts; if unavailable, local system fonts are used as fallbacks.
- All project images are CSS-created abstract artwork, so there are no missing external image dependencies.
- Update page titles and descriptions for your own name and profession.
- Check every link and test on a phone before sharing.
