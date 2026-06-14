"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface PartnerPhotoProps {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  /** Versión de mayor resolución para el lightbox (cae a `photo` si no existe). */
  photoLarge?: string;
}

export function PartnerPhoto({
  name,
  role,
  initials,
  photo,
  photoLarge,
}: PartnerPhotoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sin foto: círculo con iniciales (más grande, sin click).
  if (!photo) {
    return (
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-accent-soft">
        {initials}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar foto de ${name}`}
        className="group relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/10 transition hover:ring-2 hover:ring-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Image
          src={photo}
          alt={`${name}, ${role}`}
          fill
          sizes="112px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto de ${name}`}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-950/70 p-6 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 rounded-full bg-surface/10 p-2 text-surface transition hover:bg-surface/20"
          >
            <X className="h-6 w-6" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] flex-col items-center"
          >
            <Image
              src={photoLarge ?? photo}
              alt={`${name}, ${role}`}
              width={1000}
              height={1600}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-surface">
              <span className="block text-lg font-medium">{name}</span>
              <span className="text-sm text-surface/70">{role}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
