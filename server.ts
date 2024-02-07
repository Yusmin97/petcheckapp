import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signupRT from './route/signupRoute/signupRT'

const app: Express = express();
const port: number = 3001;

// Middleware 설정
app.use(bodyParser.json());
app.use(cors());

// 회원가입 API 엔드포인트
app.use('/', signupRT)

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});