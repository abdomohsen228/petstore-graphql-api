import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
// NestJS comes with built-in support for Passport-based JWT authentication — but it's designed around REST APIs by default.

// GraphQL, however, handles things differently, especially:

// It has a single endpoint (/graphql) for everything

// It doesn't expose the req object directly to resolvers unless you explicitly extract it

// So, the standard AuthGuard('jwt') won’t work out of the box with GraphQL unless you manually adapt it.

// That’s exactly what GqlAuthGuard does.
