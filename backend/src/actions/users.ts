import express, {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Accounts } from '../domain/models/Accounts';

const router = express.Router();

// GETリクエスト
router.get('/', async (req: Request, res: Response) => {
  try {
    const accounts = getRepository(Accounts);
    const allAccounts = await accounts.find();

    console.log(allAccounts);

    res.status(200).json({ userId: "U001", userName: "Yamada Taro" });
  } catch (error) {
    //res.status(400).json({ message: error.message });
  }

});

// POSTリクエスト
router.post('/', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ message: "登録しました" });
  } catch (error) {
    //res.status(400).json({ message: error.message });
  }
});

export default router;