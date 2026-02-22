import { defineApi } from '@midwayjs/core/functional';
import { z } from 'zod';

export const userApi = defineApi('/users', api => ({
  getUser: api
    .get('/:id')
    .input({
      params: z.object({
        id: z.string(),
      }),
    })
    .output(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .handle(async ({ input }) => {
      return {
        id: input.params?.id ?? 'u-1',
        name: 'harry',
      };
    }),
}));
