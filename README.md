# Pedrinho Barbearia

Landing page da Pedrinho Barbearia (Araraquara/SP). HTML + CSS + JS puro, sem build step.

## Rodando localmente

```bash
npx serve .
```

Abra `http://localhost:3000`.

## Estrutura

- `index.html` — landing page.
- `privacidade.html` — aviso de privacidade (LGPD).
- `assets/css/` — `base/` (reset, design tokens, motion) → `components/` → `sections/`,
  importados em ordem por `main.css`.
- `assets/js/config.js` — URLs centralizadas (Booksy, Google Maps, WhatsApp, Instagram).
- `assets/js/site.js` — menu mobile, scroll reveal e o mapa (facade + iframe).
- `assets/images/` — fotos já otimizadas em WebP; `assets/images/servicos/` para os cards de
  serviço; `logo.svg` é o brasão vetorial usado no header e como favicon.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — SEO e PWA básico.
- `vercel.json` — headers de segurança e cache de assets para o deploy.

## SEO

- JSON-LD `HairSalon` completo no `<head>` do `index.html` (endereço, geo, horários, telefone,
  avaliações e catálogo de serviços).
- Open Graph / Twitter Card com imagem de compartilhamento (`og-cover.jpg`).
- `robots.txt` libera tudo e aponta para o `sitemap.xml`.
- Mapa via iframe "keyless" do Google Maps (`?q=...&output=embed`) — sem chave de API.

## Deploy

1. Importar este repositório na Vercel com framework preset **Other** (sem build).
2. Domínio gratuito `*.vercel.app`.

## Pendências

- Confirmar se preços e horários da tabela ainda batem com a agenda atual do Pedrinho.
- Decidir se entra uma seção de Produtos (revenda de pomada, óleo etc.).
