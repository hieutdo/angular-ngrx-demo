import { Application } from 'express';
import * as _ from 'lodash';
import { Thread } from '../../../shared/model/thread';
import { dbThreads } from '../db-data';

export function apiUpdateThread(app: Application) {
  app.route('/api/threads/:id').patch((req, res) => {
    const participantId = req.headers['userid'];
    const threadId = req.params['id'];
    const updatedProps = req.body;
    const allThreads: Thread[] = <any> _.values(dbThreads);
    const thread = _.find(allThreads, t => t.id === threadId);

    if (updatedProps.hasOwnProperty('read')) {
      thread.participants[participantId] = 0;
    }

    res.status(200).send();
  });
}
