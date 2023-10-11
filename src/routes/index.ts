import { Router } from 'express'

import * as HomeController from '../controllers/homeController'

const router = Router();

router.get('/', HomeControler.home)

export default router;