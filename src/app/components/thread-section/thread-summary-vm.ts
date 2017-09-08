export interface ThreadSummaryVM {
  id: number;
  participantNames: string; // TODO: change to string[]
  lastMessageText: string;
  timestamp: number;
  read: boolean;
}
