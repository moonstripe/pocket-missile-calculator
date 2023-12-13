import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, _ctx) {
        console.log("hello world hit")
        const command = new Deno.Command("python3", {
            args: [
                "hello_world.py"
            ]
        })

        const {code, stdout, stderr} = await command.output()

        const textDecoder = new TextDecoder()

        const utf8String = textDecoder.decode(stdout)

        console.log(code)
        console.log(utf8String)
        console.log(stderr)

        return new Response(JSON.stringify({stdout}))
    }
}