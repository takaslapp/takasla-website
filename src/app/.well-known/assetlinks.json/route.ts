import { NextResponse } from "next/server";

/**
 * Android App Links: takaslapp.com bağlantılarının yüklü Android uygulamasında açılması için.
 * Play Console > Uygulama bütünlüğü > Uygulama imzalama bölümündeki SHA-256 parmak izi
 * ANDROID_SHA256_FINGERPRINTS ortam değişkenine (virgülle ayrılmış) eklenince devreye girer.
 */
export function GET() {
  const pkg = process.env.NEXT_PUBLIC_ANDROID_PACKAGE;
  const prints = (process.env.ANDROID_SHA256_FINGERPRINTS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!pkg || prints.length === 0) return NextResponse.json([], { status: 200 });

  return NextResponse.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: { namespace: "android_app", package_name: pkg, sha256_cert_fingerprints: prints },
      },
    ],
    { headers: { "Cache-Control": "public, max-age=3600" } }
  );
}
