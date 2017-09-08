import * as express from 'express';
import { Application } from 'express';
import { apiGetUserThreads } from './api/apiGetUserThreads';
import { apiUpdateThread } from './api/apiMarkThreadAsReadByUser';
import { apiMessageNotificationsPerUser } from './api/apiMessageNotificationsPerUser';
import { apiSaveNewMessage } from './api/apiSaveNewMessage';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

apiGetUserThreads(app);
apiSaveNewMessage(app);
apiMessageNotificationsPerUser(app);
apiUpdateThread(app);

app.listen(8090, () => {
  console.log('Server is now running on port 8090 ...');
});
