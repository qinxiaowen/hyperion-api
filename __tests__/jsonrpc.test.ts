import fetch from "isomorphic-fetch";
import { JsonRpc } from "../";

const endpoint = process.env.HYPERION_ENDPOINT || "https://br.eosrio.io";
const rpc = new JsonRpc(endpoint, { fetch });

// test("jsonrpc.alive", async () => {
//     const response = await rpc.alive();
//     expect(!!response).toBeTruthy();
// });

test("jsonrpc.get_abi_snapshot", async () => {
    const response = await rpc.get_abi_snapshot("eosio", 200);
    expect(!!response).toBeTruthy();
});

test("jsonrpc.get_actions", async () => {
    const response = await rpc.get_actions("eoscafeblock", {
        filter: 'eosio.token:*',
        skip: 100,
        limit: 100
    });
    expect(!!response).toBeTruthy();
});

test("jsonrpc.get_key_accounts", async () => {
    const response = await rpc.get_key_accounts("EOS5Mto3Km6BCVxowb6LkkFaT9oaUwLVgswgcxvY4Qgc4rhHry4Tv");
    expect(!!response).toBeTruthy();
});

test("jsonrpc.get_transacted_accounts", async () => {
    const response = await rpc.get_transacted_accounts("eoscafeblock", "in");
    expect(!!response).toBeTruthy();
});

test("jsonrpc.get_transaction", async () => {
    const response = await rpc.get_transaction("42dacd5722001b734be46a2140917e06cd21d42425f927f506c07b4388b07f62");
    expect(!!response).toBeTruthy();
});

test("jsonrpc.get_transfers", async () => {
    const response = await rpc.get_transfers({
        to: "eosnewyorkio"
    });
    expect(!!response).toBeTruthy();
});