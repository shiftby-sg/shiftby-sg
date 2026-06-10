import { llmsTextLines } from "@/content/discoverability";

export function GET() {
  return new Response(llmsTextLines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
