/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '../middlewares/success.response';
import { StatisticsService } from '@/services';
import { asyncHandler } from '@/middlewares';

let clients: any[] = [];
const facts: any[] = [];

class StatictistsController {
  getStatus = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get status success!',
      metadata: await StatisticsService.getStatus()
    }).send(res);
  };

  registerUpdates = async () => {
    // new SuccessResponse({
    //   message: 'Get status success!',
    //   metadata: await StatisticsService.getStatus()
    // }).send(res);
    const headers = {
      'Content-Type': 'text/event-stream',
      // eslint-disable-next-line prettier/prettier
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };

    asyncHandler(function eventsHandler(req: Request, res: Response, _next: NextFunction) {
      res.writeHead(200, headers);

      const data = `data: ${JSON.stringify(facts)}\n\n`;

      res.write(data);

      const clientId = Date.now();

      const newClient = {
        id: clientId,
        res
      };

      clients.push(newClient);

      req.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clients = clients.filter((client) => client.id !== clientId);
      });
    });
  };

  addFact = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'success!',
      metadata: await StatisticsService.addFact(req.body)
    }).send(res);
  };
}

export default new StatictistsController();
