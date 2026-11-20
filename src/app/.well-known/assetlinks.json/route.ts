import { NextResponse } from "next/server";
import { ANDROID_PACKAGE, ANDROID_SHA256_FINGERPRINTS } from "@/lib/site";

/**
 * Android App Links: takaslapp.com bağlantılarının yüklü Android uygulamasında açılması için.
 * Parmak izleri Play Console > Android geliştirici doğrulaması ekranındaki imza sertifikalarıdır.
 */
export function GET() {
  return NextResponse.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: ANDROID_PACKAGE,
          sha256_cert_fingerprints: ANDROID_SHA256_FINGERPRINTS,
        },
      },
    ],
    { headers: { "Cache-Control": "public, max-age=3600" } }
  );
}
