# Updating Illustrative Images

## Goal Description
Replace the placeholder role images used in `RoleOverview.js` with more illustrative, high‑quality images that better represent each career path. The new images will be generated using the AI image tool and stored in the project's `public/images` directory. The component will be updated to reference these new assets.

## Proposed Changes
### src/components/RoleOverview.js
- Update the `roleImages` mapping to point to the newly generated image files (e.g., `/images/frontend_illustration.jpg`).

### public/images/
- Add four new image files:
  - `frontend_illustration.jpg`
  - `product_design_illustration.jpg`
  - `backend_illustration.jpg`
  - `datascience_illustration.jpg`

## Verification Plan
### Automated Tests
- No existing tests cover image assets. We'll add a simple Jest snapshot test to ensure the `roleImages` object contains the expected keys and file extensions.

### Manual Verification
1. Run the development server (`npm run dev`).
2. Open the app in a browser.
3. Verify that each role button displays the new illustrative image.
4. Ensure the images load without 404 errors (check network tab).
5. Confirm the visual quality and relevance of each image.

**Instructions to run verification**:
- Start the dev server: `npm run dev`.
- Navigate to `http://localhost:3000`.
- Interact with the role selector and observe the images.
