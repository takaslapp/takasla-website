'use client';

import React, { useCallback } from 'react';
import { StringInputProps, set, unset } from 'sanity';

function htmlTableToMarkdown(html: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const table = doc.querySelector('table');
    if (!table) return null;

    const rows: string[][] = [];
    table.querySelectorAll('tr').forEach((tr) => {
      const cells: string[] = [];
      tr.querySelectorAll('th, td').forEach((cell) => {
        cells.push((cell.textContent || '').trim().replace(/\|/g, '-'));
      });
      if (cells.length > 0 && cells.some(Boolean)) {
        rows.push(cells);
      }
    });

    if (rows.length === 0) return null;

    const maxCols = Math.max(...rows.map((r) => r.length));
    const normalizedRows = rows.map((r) => {
      while (r.length < maxCols) r.push('');
      return r;
    });

    const header = normalizedRows[0];
    const divider = new Array(maxCols).fill('---');
    const body = normalizedRows.slice(1);

    const mdLines = [
      `| ${header.join(' | ')} |`,
      `| ${divider.join(' | ')} |`,
      ...body.map((r) => `| ${r.join(' | ')} |`),
    ];

    return mdLines.join('\n');
  } catch {
    return null;
  }
}

export function TablePasteInput(props: StringInputProps) {
  const { value, onChange, readOnly } = props;

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      // 1. Try HTML table (pasting rendered table from ChatGPT / web)
      const html = e.clipboardData?.getData('text/html');
      if (html && (html.includes('<table') || html.includes('<tr'))) {
        const md = htmlTableToMarkdown(html);
        if (md) {
          e.preventDefault();
          onChange(set(md));
          return;
        }
      }

      // 2. Try Tab-Separated Values (copied from Excel / Google Sheets)
      const text = e.clipboardData?.getData('text/plain');
      if (text && text.includes('\t') && text.includes('\n')) {
        const lines = text.trim().split('\n').map((l) => l.trim()).filter(Boolean);
        const rows = lines.map((l) => l.split('\t').map((c) => c.trim().replace(/\|/g, '-')));
        const maxCols = Math.max(...rows.map((r) => r.length));
        if (maxCols >= 2) {
          e.preventDefault();
          const normalizedRows = rows.map((r) => {
            while (r.length < maxCols) r.push('');
            return r;
          });
          const header = normalizedRows[0];
          const divider = new Array(maxCols).fill('---');
          const body = normalizedRows.slice(1);
          const mdLines = [
            `| ${header.join(' | ')} |`,
            `| ${divider.join(' | ')} |`,
            ...body.map((r) => `| ${r.join(' | ')} |`),
          ];
          onChange(set(mdLines.join('\n')));
          return;
        }
      }
    },
    [onChange]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = e.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  const lines = (value || '').trim().split('\n').filter(Boolean);
  const isPipes = lines.some((l) => l.includes('|'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <textarea
        value={value || ''}
        onChange={handleChange}
        onPaste={handlePaste}
        readOnly={readOnly}
        rows={8}
        placeholder={`| Kriter | İkinci El Satış | Eşya Takası |\n| --- | --- | --- |\n| Karşılık | Para | Başka bir ürün |`}
        style={{
          width: '100%',
          minHeight: 180,
          padding: 12,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          fontSize: 13,
          lineHeight: 1.5,
          color: '#1a1f2c',
          backgroundColor: '#fff',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          boxSizing: 'border-box',
          resize: 'vertical',
          outline: 'none',
        }}
      />
      {value && (
        <div
          style={{
            padding: 12,
            backgroundColor: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: 6,
            fontSize: 12,
            color: '#166534',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontWeight: 600 }}>
              ✓ Tablo Hazır ({isPipes ? 'Sütunlu Tablo Biçimi' : `${lines.length} Satır (Otomatik 3 Sütun Olarak Yayınlanacak)`})
            </span>
            <span
              style={{
                fontSize: 11,
                padding: '2px 8px',
                backgroundColor: '#bbf7d0',
                color: '#14532d',
                borderRadius: 4,
                fontWeight: 600,
              }}
            >
              Aktif
            </span>
          </div>
          <p style={{ margin: 0, opacity: 0.85, fontSize: 11 }}>
            ChatGPT veya Excel tablonuz sitede otomatik olarak şık, koyu başlıklı ve mobil uyumlu bir karşılaştırma tablosu olarak yayınlanır.
          </p>
        </div>
      )}
    </div>
  );
}
