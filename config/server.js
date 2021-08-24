module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2c3a30941b342eb42c221cf22de023af'),
    },
  },
});
