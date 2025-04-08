/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';
import { Request } from 'express';

const clients: any[] = [];
const facts = [];

export class StatisticsService {
  static async getStatus() {
    return { clients: clients.length };
  }

  static async sendEventsToAll(newFact: any) {
    clients.forEach((client) => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`));
  }

  static async addFact(req: Request) {
    const newFact = req.body;
    facts.push(newFact);

    return {
      newFact: newFact,
      res: this.sendEventsToAll(newFact)
    };
  }
}
