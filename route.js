// const logoRouter = require("./route/logoRoutes");
const loginRouter = require("./routes/loginRoutes");
const categoryRouter = require("./routes/categoryRoutes")
const productRouter = require("./routes/productRoutes")
module.exports = function(app) {
    // app.use('/api/v1/logo', logoRouter);
    app.use('/api/v1/', loginRouter);
    app.use('/api/v1/category', categoryRouter);
    app.use('/api/v1/product',productRouter);

}