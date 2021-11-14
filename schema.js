const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    userid: { type: String, require },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, require },
    isDelivered: { type: Boolean, require, default: false },
    transactionId: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("orders", ordersSchema);

const pizzaSchema = mongoose.Schema(
  {
    name: { type: String, require },
    varients: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);
const Pizza = mongoose.model("pizzas", pizzaSchema);

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = { Orders, Pizza, Users };
