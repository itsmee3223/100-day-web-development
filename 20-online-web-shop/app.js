// built in modules
const path = require("path");

// node modules
const express = require("express");
const csrf = require("csurf");
const expressSession = require("express-session");

// middlewares
const createSessionConfig = require("./config/session");

const database = require("./data/database"); // database connect
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const cartMiddleware = require("./middlewares/cart");
const checkAuthStatusMiddleware = require("./middlewares/check-auth");
const protectAuthMiddleware = require("./middlewares/protect-routes");
const updateCartPricesMiddleware = require("./middlewares/update-cart-prices");
const notFoundMiddleware = require("./middlewares/not-found");

// routes
const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes");
const baseRoutes = require("./routes/base.routes");
const adminRoutes = require("./routes/admin.routes");
const cartRoutes = require("./routes/cart.routes");
const ordersRoutes = require("./routes/orders.routes");

// express use module
const app = express();

app.set("view engine", "ejs"); // set view engin
app.set("views", path.join(__dirname, "views"));

// set static file to expose for client
app.use(express.static("public"));
app.use("/products/assets", express.static("product-data"));
// html body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// config session
const sessionConfig = createSessionConfig();
app.use(expressSession(sessionConfig));
// csrf token for defending csrf attack
app.use(csrf());

// middlewares use
app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);
app.use(cartMiddleware);
app.use(updateCartPricesMiddleware);

// routes handler
app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", protectAuthMiddleware, ordersRoutes); // protecting admin routes
app.use("/admin", protectAuthMiddleware, adminRoutes);

app.use(notFoundMiddleware);

// error handler
app.use(errorHandlerMiddleware);

let PORT = 3000
if(process.env.PORT){
  PORT = process.env.PORT
}

database
  .connectToDatabase()
  .then(function () {
    app.listen(PORT);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
