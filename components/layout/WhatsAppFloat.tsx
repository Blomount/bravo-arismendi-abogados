import { whatsappUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden text-sm font-semibold sm:block">
        Escríbenos
      </span>
    </a>
  );
}
