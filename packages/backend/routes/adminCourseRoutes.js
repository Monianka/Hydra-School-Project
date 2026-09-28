const express = require("express");
const Course = require("../models/Course");

const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

function formatPrice(priceAmount, currency) {
  const amountInMainUnit = priceAmount / 100;
  const hasMinorUnits = priceAmount % 100 !== 0;

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: hasMinorUnits ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amountInMainUnit);
}

router.get("/", requireAdmin, async (req, res) => {
  const status = req.query.status || "active";

  if (status !== "active") {
    return res.status(400).json({
      message: "Only active course status is supported",
    });
  }

  try {
    const courses = await Course.find({ active: true })
      .sort({ sortOrder: 1 })
      .lean();

    const courseItems = courses.map((course) => {
      return {
        id: course._id.toString(),
        slug: course.slug,
        translations: course.translations,
        price: {
          amount: course.priceAmount,
          currency: course.currency,
          formatted: formatPrice(course.priceAmount, course.currency),
        },
        iconKey: course.iconKey,
        active: course.active,
        sortOrder: course.sortOrder,
      };
    });
    return res.status(200).json({ courses: courseItems });
  } catch (error) {
    console.error("Failed to fetch active courses", error);

    return res.status(500).json({
      message: "Failed to fetch active courses",
    });
  }
});

module.exports = router;
