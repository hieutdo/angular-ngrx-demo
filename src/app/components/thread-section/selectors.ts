import * as _ from 'lodash';

import { Thread } from '../../../../shared/model/thread';
import { ApplicationState } from '../../store/application-state';
import { ThreadSummaryVM } from './thread-summary-vm';

export function selectUsername(state: ApplicationState): string {
  const { userId } = state.uiState;
  const participant = state.storeData.participants[userId];

  return participant ? participant.name : '<Unknown>';
}

export function selectUnreadMessagesCount(state: ApplicationState): number {
  const { userId } = state.uiState;
  const { threads } = state.storeData;

  return _.values<Thread>(threads).reduce(
    (acc, thread) => acc + thread.participants[userId],
    0
  );
}

export function selectThreadSummaries(
  state: ApplicationState
): ThreadSummaryVM[] {
  return _.values(state.storeData.threads).map(
    _.partial(mapThreadToSummary, state)
  );
}

function mapThreadToSummary(
  state: ApplicationState,
  thread: Thread
): ThreadSummaryVM {
  const names = _.keys(thread.participants).map(
    id => state.storeData.participants[id].name
  );
  const lastMessageId = _.last(thread.messageIds);
  const lastMessage = state.storeData.messages[lastMessageId];
  return {
    id: thread.id,
    participantNames: _.join(names, ','),
    lastMessageText: lastMessage.text,
    timestamp: lastMessage.timestamp,
    read: false,
  };
}
