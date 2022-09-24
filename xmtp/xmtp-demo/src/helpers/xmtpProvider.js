import { Client } from '@xmtp/xmtp-js'

import { Buffer } from "buffer";

Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;

export async function GetClient(wallet) {
    const xmtpClient = await Client.create(wallet);
    return xmtpClient;
}

export async function GetConversationList(client) {
    const convos = await client.conversations.list();
    for (const convo of convos) {
        const messages = await convo.messages().then(resp => {
            console.log("==== messages of conversation is: ", convo, resp);
        });
    }
}