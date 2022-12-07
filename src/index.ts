import type { Command, Plugin } from "@launch-deck/common";

module.exports = {

    async handleCommand(command: Command): Promise<void> {

        const value = command.data?.value;

        if (value) {
            try {
                const delay = parseInt(value);
                await new Promise(resolve => setTimeout(resolve, delay));
            } catch { }
        }
    },

    getCommands(): Promise<Command[]> {

        const commands: Command[] = [
            {
                name: 'Delay',
                type: 0,
                commandInputs: {
                    value: { name: "Milliseconds", type: "number" }
                }
            }
        ];

        return Promise.resolve(commands);
    }

} as Plugin;
