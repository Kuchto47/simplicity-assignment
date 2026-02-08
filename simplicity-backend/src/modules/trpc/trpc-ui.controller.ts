import { All, Controller, Inject, OnModuleInit } from '@nestjs/common';
import { renderTrpcPanel } from 'trpc-ui';
import { AnyRouter } from '@trpc/server';
import { AppRouterHost } from 'nestjs-trpc-v2';

@Controller()
export class TrpcUiController implements OnModuleInit {
  private appRouter!: AnyRouter;

  constructor(
    @Inject(AppRouterHost) private readonly appRouterHost: AppRouterHost,
  ) {}

  onModuleInit() {
    this.appRouter = this.appRouterHost.appRouter;
  }

  @All('/panel')
  panel(): string {
    return renderTrpcPanel(this.appRouter, {
      url: '/trpc',
    });
  }
}
