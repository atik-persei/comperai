export default function getInputLimit(): number {
  const inputLimit = Number(process.env.GPT_INPUT_LIMIT);

  if (isNaN(inputLimit)) {
    throw new Error("유효하지 않은 GPT_INPUT_LIMIT 환경 변수입니다");
  }

  return inputLimit
}