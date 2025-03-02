# Docs Clone

A collaborative document editing application built with **Next.js**, **Convex**, **Tiptap**, and **Liveblocks**.

## Live Demo
Live Demo available [Here](https://ggdocs-clone.vercel.app/).

## Features
- **Real-time collaboration**: Work together on the same document with live updates.
- **Rich text editing**: Leverage Tiptap for a seamless and customizable text editor.
- **Scalable backend**: Powered by Convex for a robust database and API layer.
- **Live presence**: Visualize collaborators and their cursors with Liveblocks.

## Technologies Used
- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [Convex](https://convex.dev/) - Backend as a service for data storage and real-time sync.
- [Tiptap](https://tiptap.dev/) - Highly extensible rich-text editor.
- [Liveblocks](https://liveblocks.io/) - Live collaboration and presence management.

## Run this project Local

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TungDuongTa/ggdocs-clone.git
   ```
   ```bash
   cd docs-clone
   ```

2. **Configure environment variables:**
   Create a `.env.local` file in the root directory and add your Convex, Clerk and Liveblocks API keys.
   ```bash
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   LIVEBLOCKS_SECRET_KEY = 
   ```
3. Setup the Tiptap registry
   Once you've cloned the repository, you'll need to setup a .npmrc file to authenticate with the Tiptap registry. This is necessary to access the Tiptap Pro extensions which are included in the package.json, if this step is skipped you will not be able to install          dependencies.

   You can create a free account at [TipTap](https://tiptap.dev/).
    ```bash
    # Create a new .npmrc file in the root of the repo
   touch .npmrc
   # Add the Tiptap registry to the .npmrc file
   echo "@tiptap-pro:registry=https://registry.tiptap.dev/" >> .npmrc
   # You can retrieve your token from the Tiptap dashboard at https://cloud.tiptap.dev/pro-extensions
   # This requires a free account which can be created at https://cloud.tiptap.dev/register
   echo "//registry.tiptap.dev/:_authToken=TIPTAP_AUTH_TOKEN_HERE" >> .npmrc
   ```
4. **Install dependencies:**

   Try:
   ```bash
   npm install
   ```
   If not work try:
   ```bash
   npm install --legacy-peer-deps
   ```
5. **Run the development server:**
   
   Open 2 terminal and run
   ```bash
   npm run dev
   ```
   ```bash
   npm convex dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.


---


