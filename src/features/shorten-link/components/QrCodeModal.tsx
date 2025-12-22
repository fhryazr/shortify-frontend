"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Copy, DownloadIcon, Link2Icon, QrCodeIcon } from "lucide-react";
import { useRef } from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";

type QrCodeProps = {
  shortCode: string;
};

const QrCodeModal = ({ shortCode }: QrCodeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    const url = `https://kb1s0qf2-3000.asse.devtunnels.ms/${shortCode}`;
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const downloadPNG = () => {
    if (!ref.current) return;

    const svg = ref.current.querySelector("svg");
    if (!svg) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();

    const padding = 40;
    const qrSize = 256;
    const totalSize = qrSize + padding * 2;

    img.onload = () => {
      canvas.width = totalSize;
      canvas.height = totalSize;

      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, totalSize, totalSize);
        ctx.drawImage(img, padding, padding, qrSize, qrSize);
      }

      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = `qr-${shortCode}.png`;
      link.click();
    };

    const base64 = btoa(
      String.fromCharCode(...new TextEncoder().encode(svgData))
    );
    img.src = "data:image/svg+xml;base64," + base64;
  };

  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          // onClick={() => setOpen(true)}
          className={isMobile ? "w-full justify-start" : ""}
          variant={"ghost"}
          size={isMobile ? "default" : "icon"}>
          <QrCodeIcon /> {isMobile ? "QR Code" : ""}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px] w-[400px] bg-white space-y-4">
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
          <DialogDescription>
            Scan this QR code to visit the link.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div
            className="relative w-60 border rounded-2xl p-6 mx-auto bg-white shadow-md"
            ref={ref}>
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />

            <QRCode
              size={300}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={`https://kb1s0qf2-3000.asse.devtunnels.ms/${shortCode}`}
              viewBox={`0 0 300 300`}
            />
          </div>
          <div
            className="flex justify-between items-center py-2 px-2 rounded-2xl bg-gray-50 border hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={copyToClipboard}>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-gray-200 rounded-xl">
                <Link2Icon className="size-4" />
              </span>
              <p className="text-center text-sm font-medium">{`shortify/${shortCode}`}</p>
            </div>
            <span className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <Copy className="size-4" />
            </span>
          </div>
        </div>
        <DialogFooter className="gap-2 sm:justify-center">
          <Button className="flex-1" onClick={downloadPNG}>
            <DownloadIcon /> Download PNG
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QrCodeModal;
