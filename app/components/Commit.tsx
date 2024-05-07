export default async function Commit(props: {msgType: string, msgQuery: string}) {
  const { msgType, msgQuery } = props;

  async function getQuery() {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GPT_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ "role": "user", "content": `깃 커밋 메시지를 작성해줘
          과거시제를 사용하면 안되고, 영어로 작성해줘야해
          이때 커밋 타입을 포함해서 영어 기준 50자를 넘어서는 안돼
          형태 : ✨ feat: Add Header component
          
          메시지 타입에 따른 이모지는 다음과 같아
          📦️ : package
          ✨ : feat
          🐛 : bug
          ♻️ : refactory
          🙈 : gitignore
          🔥 : remove
          📝 : docs
          
          ${msgQuery}` }],
          temperature: 0.7
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
    const result: any = await getQuery();
   
    return (
      <div className="bg-white">
        <span>{result.choices ? result.choices[0].message.content : result.msg }</span>
      </div>
    )
  }

  return (
    <div className="h-fit min-w-[360px] pb-[60px] bg-white relative mx-auto flex flex-col items-center justify-center gap-y-5">
      <Commits />
    </div>
  );
}
