const router = require('express').Router();
const STRIPE_KEY = "sk_test_51MnoviSEl7SnT0q5lSYlqSmwqq5G1THuZgHjoXyrOQZRndrYPl2StGZMKwpF7OfeYwUTV4Py5KrvCa26JrSSd3kQ004DaqcA8B"
const stripe = require('stripe')(STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        }, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes)
            }
        }
    )
})

module.exports = router;