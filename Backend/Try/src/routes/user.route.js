import { Router } from "express";
import { submitFeedback } from "../controllers/feedback.controller.js";

const router = Router();




// localhost:3000/api/v1/users/...

// localhost:3000/api/v1/users       /feedbacks
router.route("/feedbacks").post(submitFeedback)


// localhost:3000/api/v1/users       /customerreview
// router.route("/viewfeedbacks").get(viewfeedback)



// /api/v1/users/feedbacks
// /api/v1/users/customerreview


export default router;