import { Application, Request, Response } from 'express';
import * as _ from 'lodash';
import { Message } from '../../../shared/model/message';
import { AllUserData } from '../../../shared/to/all-user-data';
import { dbMessages, dbParticipants } from '../db-data';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';

export function apiGetUserThreads(app: Application) {
  app.route('/api/threads').get((req: Request, res: Response) => {
    const participantId = parseInt(req.headers['userid'], 10);
    const threadsPerUser = findDbThreadsPerUser(participantId);
    let messages: Message[] = [],
      participantIds: string[] = [];

    threadsPerUser.forEach(thread => {
      const threadMessages: Message[] = _.filter(dbMessages, (message: any) => message.threadId === thread.id);
      messages = messages.concat(threadMessages);
      participantIds = participantIds.concat(_.keys(thread.participants));
    });

    const participants = _.uniq(participantIds.map(id => dbParticipants[id]));

    const response: AllUserData = {
      participants,
      messages,
      threads: threadsPerUser
    };

    res.status(200).json(response);
  });
}
