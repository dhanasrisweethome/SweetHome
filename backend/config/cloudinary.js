/**
 * ============================================================
 * Cloudinary Configuration
 * ------------------------------------------------------------
 * Initializes the Cloudinary SDK once, using credentials from
 * environment variables. This configured instance is imported
 * wherever image uploads/deletions happen — primarily in
 * product and gallery controllers.
 *
 * Design notes:
 * - secure: true forces HTTPS URLs for all delivered images,
 *   which is required for a production site (mixed content
 *   warnings, SEO, and basic security hygiene).
 * - We validate that required env vars exist at startup rather
 *   than letting an upload fail later with a vague SDK error.
 * ============================================================
 */

const cloudinary = require('cloudinary').v2;

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  // Not fatal like the DB connection — the site can still run without
  // image uploads working (e.g. during early local development before
  // Cloudinary credentials are obtained) — but we surface a clear warning.
  console.warn(
    'Warning: Cloudinary credentials are missing or incomplete. ' +
    'Image upload features (products, gallery) will not function until ' +
    'CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set in .env'
  );
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = cloudinary;
