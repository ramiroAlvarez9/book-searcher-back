module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c410097c8952e2582fdb5c1afa70a84'),
  },
});
