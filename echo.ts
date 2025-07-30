import { ModaiTool } from "modai-protocol/dist/tools/base.js";
import type { ToolMetadata } from "modai-protocol/dist/tools/base.js";
export default class EchoTool extends ModaiTool {
  metadata: ToolMetadata = {
    name: "echo",
    description: "A simple echo tool.",
    example: "echo message 'hello'",
    parameters: {
      type: "object",
      properties: {
        message: { type: "string", description: "The message to echo." },
      },
      required: ["message"],
    },
  };

  protected async _execute(args: Record<string, any>): Promise<any> {
    this.validateArgs(args, this.metadata.parameters.required);
    return { echoedMessage: args.message };
  }
}
