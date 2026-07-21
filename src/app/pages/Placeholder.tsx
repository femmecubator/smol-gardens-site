export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-32 md:px-10">
      <h1 className="font-['Nunito_Sans'] text-[40px] font-medium text-[#222]">{title}</h1>
      <p className="mt-4 font-['Nunito_Sans'] text-[16px] text-[#4a5565]">Coming soon.</p>
    </div>
  );
}
