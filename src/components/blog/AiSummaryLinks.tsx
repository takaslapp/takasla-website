/** Yazıyı farklı yapay zekâ asistanlarında özetletme bağlantıları. */
export default function AiSummaryLinks({ url, title }: { url: string; title: string }) {
  const prompt = encodeURIComponent(`"${title}" başlıklı yazıyı Türkçe olarak özetle ve ana maddeleri çıkar: ${url}`);
  const links = [
    { name: "ChatGPT", href: `https://chatgpt.com/?q=${prompt}` },
    { name: "Claude", href: `https://claude.ai/new?q=${prompt}` },
    { name: "Perplexity", href: `https://www.perplexity.ai/search?q=${prompt}` },
    { name: "Google AI", href: `https://www.google.com/search?udm=50&q=${prompt}` },
    { name: "Grok", href: `https://grok.com/?q=${prompt}` },
  ];
  return (
    <div className="rounded-xl border border-line p-4">
      <p className="text-sm text-muted">Bu yazıyı bir yapay zekâ asistanıyla özetle:</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex h-8 items-center rounded-full border border-line px-3 text-sm hover:border-ink"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
