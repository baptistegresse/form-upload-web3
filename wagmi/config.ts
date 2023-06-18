import { defineConfig } from "@wagmi/cli";
import abi from "./abi.json";
import { react } from "@wagmi/cli/plugins";
import { Abi } from "abitype";

export default defineConfig({
  out: "contract/generated.ts",
  contracts: [
    {
      name: "Only file",
      abi: abi as Abi,
    },
  ],
  plugins: [react()],
});