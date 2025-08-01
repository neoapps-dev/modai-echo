import { ModaiTool } from "modai-protocol/tools/base.js";
import type { ToolMetadata } from "modai-protocol/tools/base.js";
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

  protected async _execute(args: { message: string }): Promise<any> {
    return { echoedMessage: args.message };
  }
}
