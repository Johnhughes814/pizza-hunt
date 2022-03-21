const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

router.use('/pizzas', pizzaRoutes);
router.route("/:pizzaId").post(addComment);
router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
