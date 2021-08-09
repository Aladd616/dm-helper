// =============================================
//  API Routes
// ---------------------------------------------
// Handles serving of dynamic resources
// =============================================
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const abilityRoutes = require('./abilityRoutes');

router.use('/users/', userRoutes);
router.use('/abilities/', abilityRoutes);
router.use('/characters/', characterRoutes);

module.exports = router;
