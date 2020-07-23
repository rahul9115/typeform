const keys = require("../keys/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
module.exports = (app) => {
    app.post("/api/state", async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            description: "$5 for 5 credits",
            source: req.body.id
        })
    })
}