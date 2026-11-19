# Your Birthday Surprise ❤️

This is a ready-to-upload GitHub Pages website personalized with the two photos you supplied.

## Folder contents

```text
birthday-surprise/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   ├── our-photo.jpg
│   └── guitar-memory.jpg
└── music/
    └── birthday-song.mp3   <-- add your MP3 here
```

## Add the birthday song

Place your chosen MP3 inside the `music` folder and name it exactly:

`birthday-song.mp3`

The player is already connected. The song starts after the visitor clicks **Open your surprise**, because browsers block sound that tries to autoplay before a user interaction. The page still works without the MP3, but there will be no music until you add it.

## Publish directly from the GitHub website (no VS Code)

1. On your computer, download this ZIP and extract it. In Windows, right-click the ZIP and choose **Extract All**.
2. Sign in at https://github.com and create a new repository. Name it `birthday-surprise`. Choose **Public**, then create the repository.
3. In the new repository, choose **Add file → Upload files**.
4. Open the extracted `birthday-surprise` folder in File Explorer. Select everything inside it (`index.html`, `style.css`, `script.js`, `README.md`, `images`, and `music`) and drag it into GitHub's upload area. Do not upload only the ZIP file.
5. Wait for the upload to finish. In the commit message box, enter `Add birthday surprise website`, then click **Commit changes**.
6. In the repository, open **Settings → Pages**.
7. Under **Build and deployment**, set Source to **Deploy from a branch**.
8. Set Branch to **main** and folder to **/(root)**, then click **Save**.
9. Wait a minute or two. Refresh the Pages settings screen; GitHub will show the published website link, usually `https://YOUR-USERNAME.github.io/birthday-surprise/`.
10. Open that link on your phone. Test both photos and the music before sending it to your friend.

## Important checks

- Add your MP3 before publishing, or upload it later into `music/` using **Add file → Upload files**.
- Keep the names and folder paths exactly as shown. File names are case-sensitive on GitHub Pages.
- Use an MP3 you have permission to share.
- If you make changes later, commit them to the `main` branch. GitHub Pages republishes automatically.
