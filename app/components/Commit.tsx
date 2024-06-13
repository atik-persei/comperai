import { redirect } from "next/navigation";
import getInputLimit from "@/app/utils/getInputLimit";

export default async function Commit(props: { msgLanguage: string, msgType: string, msgQuery: string }) {
  const { msgLanguage, msgType, msgQuery } = props;

  async function getQuery() {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GPT_KEY}`
        },
        body: JSON.stringify({
          model: process.env.GPT_MODEL,
          messages: [
            {"role": "system", "content": process.env.GPT_SYSTEM },
            {"role": "user", "content": `language: ${msgLanguage}, type: ${msgType}, query: ${msgQuery}`},
          ],
          temperature: 0.1,
          max_tokens: 200,
          top_p: 0.5,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
      });

      if (!response.ok) {
        // throw new Error(`Failed to fetch data: ${response.statusText}`);
        return { "msg": response.statusText }
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return { "msg": error };
    }
  }

  async function Commits() {
    const inputLimit = getInputLimit();
    if (msgQuery.length > inputLimit) {
      redirect("/input-limit");
    }
    

    const result: any = await getQuery();
    return (
      <span className="whitespace-pre-line">{result.choices ? result.choices[0].message.content : result.msg}</span>
    )
  }

  return (
    <div className="relative flex flex-col items-center justify-center mx-auto bg-white h-fit min-w-22 pb-14 gap-y-5">
      <Commits />
    </div>
  );
}
