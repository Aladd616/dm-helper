// =============================================
//  API Routes
// ---------------------------------------------
// Handles serving of dynamic resources
// =============================================
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const abilityRoutes = require('./abilityRoutes');
const diceRoutes = require('./diceRoutes');
const abilityListRoutes = require('./abilityListRoutes');

router.use('/users/', userRoutes);
router.use('/abilities/', abilityRoutes);
router.use('/characters/', characterRoutes);
router.use('/dice/', diceRoutes);
router.use('/abilitylist/', abilityListRoutes);

module.exports = router;
