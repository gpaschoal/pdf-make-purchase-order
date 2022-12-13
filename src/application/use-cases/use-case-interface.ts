import { CommandInterface } from './command-interface'

interface UseCaseInterface<T extends CommandInterface, R> {
  handle(command: T): Promise<R>
}

export { UseCaseInterface }