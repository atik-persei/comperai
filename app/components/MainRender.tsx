export default function MainRender(props: { text: string }) {
  return (
    <div className="h-150 min-w-[360px] mx-auto pb-[60px] bg-white relative flex flex-col items-center justify-center gap-y-5">
      <span>{props.text}</span>
    </div>
  );
}