import "reflect-metadata";
import express from 'express';
import router from './routes';
import { createConnection, getConnectionOptions } from "typeorm";
import cors from 'cors';

(async() => {
    try {
        // DB設定
        const connectionOptions = await getConnectionOptions();
        const mergedOptions = {
            ...connectionOptions
        };
        await createConnection(mergedOptions);

        const app = express();
        // cors設定
        const allowedOrigins = ['http://localhost:3000'];
        const options: cors.CorsOptions = {
            origin: allowedOrigins
        }
        app.use(cors(options));

        // JSONオブジェクトの受信設定
        app.use(express.json())
        // 配列側のオブジェクトの受信設定
        app.use(express.urlencoded({ extended: true }));

        // ルーティング
        app.use('/v1', router);

        // 3000ポートで受信
        const port = process.env.PORT || 3001;
        // APIサーバ起動
        app.listen(port);

        console.log('Express WebApi listening on port ' + port);
    } catch (err) {
        console.log(err);
    }

})();