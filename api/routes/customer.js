import router from 'express'
router.Router()
import customerCtrl from '../controllers/customerCtrl'

router.post('/customers', customerCtrl.postCustomer)
router.get('/customers', customerCtrl.getCustomers)

export { router }