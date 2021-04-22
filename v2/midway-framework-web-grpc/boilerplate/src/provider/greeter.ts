import {
  MSProviderType,
  Provider,
  Provide,
  GrpcMethod,
} from '@midwayjs/decorator';
import { helloworld } from '../domain/helloworld';

/**
 * package helloworld
 * service Greeter
 */
@Provide()
@Provider(MSProviderType.GRPC, { package: 'helloworld' })
export class Greeter implements helloworld.Greeter {
  /**
   * Implements the SayHello RPC method.
   */
  @GrpcMethod()
  async sayHello(request: helloworld.HelloRequest) {
    return { message: 'Hello ' + request.name };
  }
}
