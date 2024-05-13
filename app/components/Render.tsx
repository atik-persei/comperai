export default function Render(props: { text: string }) {
  return (
    <div className="h-[600px] min-w-[360px] mx-auto pb-[60px] bg-white relative flex flex-col items-center justify-center gap-y-5">
      <span>{props.text}</span>
    </div>
  );
}