import { writable } from "svelte/store";

export const PeerStore = writable([]);

export const isUserListener = writable(null);
