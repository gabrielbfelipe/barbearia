// Configuração central do site — único lugar a editar quando um valor mudar.

const BOOKSY_URL =
  "https://booksy.com/pt-br/387510_pedrinho-barbearia_barbearias_874135_araraquara";

const WHATSAPP_URL = "https://wa.me/5516997160485";
const INSTAGRAM_URL = "https://www.instagram.com/pedrinhorodrigues_barbearia";

// Mapa via iframe "keyless" do Google Maps (formato ?q=...&output=embed) —
// mesma recomendação do plano (§3): funciona sem chave de API, sem projeto
// no Google Cloud e sem custo, ao contrário da Maps JavaScript API.
// Se um dia quiserem trocar pela Maps Embed API oficial (com chave e
// restrição por referenciador HTTP), o formato é:
// https://www.google.com/maps/embed/v1/place?key=CHAVE&q=ENDERECO&zoom=16
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Rua+Amabille+Fattori,+117+-+Vila+Melhado,+Araraquara+-+SP,+14807-027&output=embed";

// TODO (Fase 2): preencher com a URL e a anon key do projeto Supabase.
// A anon key é pública por design — quem garante a segurança é a Row Level
// Security no banco (ver supabase/02_rls.sql), nunca a service_role key aqui.
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";
