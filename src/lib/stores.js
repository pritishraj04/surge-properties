import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const shortlist = writable(
  browser && JSON.parse(localStorage.getItem("shortlist") || "[]")
);
shortlist.subscribe(
  (val) => browser && localStorage.setItem("shortlist", JSON.stringify(val))
);

export let loading = writable(false);
