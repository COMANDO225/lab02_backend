import Express from "express";
import { refreshToken } from "../controllers/RefreshToken";
import { getUsers, loginUser, logoutUser, registerUser } from "../controllers/userController";
import { verificarToken } from "../middleware/VerificarToken";


const router = Express.Router();

router.get('/',verificarToken, getUsers)
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/token', refreshToken)
router.get('/logout', logoutUser)

export default router;