import {fontSans, lusitana} from '@/app/ui/fonts';

export default function BoundaryLogo() {
  return (
    <div
      className={`${fontSans.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Boundary</p>
    </div>
  );
}
