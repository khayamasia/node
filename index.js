// index.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:3000", // آدرس فرانت‌اند
    credentials: true,
  })
);

app.use(cookieParser());

// API برای تنظیم یا به‌روزرسانی کوکی با توکن جدید
app.get("/set-cookie", (req, res) => {
  const token = req.query.token || "default-token"; // دریافت توکن از query یا مقدار پیش‌فرض

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // در حالت تولید باید فعال شود
    sameSite: "lax",
    path: "/",
  });

  res.json({ message: `Token has been set to ${token}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
