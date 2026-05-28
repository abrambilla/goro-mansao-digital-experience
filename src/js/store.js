// Motor de Estado Central - E-Commerce Goró Mansão
// Gerencia a verificação de idade, carrinho de compras no localStorage e fluxo de pedidos

// Banco de Dados Estático de Produtos para consistência de dados
const PRODUTOS = {
    "rtd-classico": {
        id: "rtd-classico",
        nome: "Goró RTD Clássico",
        preco: 24.50,
        imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCig8R1jPSoDgOYINXy9kofSfIRKhBDE2S66Y4QLpAJ-sH-x0FGOikmQeLXBjAGOCiW69nltAU0M1CDTz9310tNaA2MkKGxB7DIclpxi22t-MszYaJKCZUYJWtlREpZsgJacopiPEVEoX7Vj-c7BkUzSRDSEtYNRxivu5i203WCzmczZ27pJNPfcKt73QuKQ-yTfaebafwiXkjv3RZ2gowh2-NjuxT5lEN_iuIksCiTE16UnNjfWx-GgoqDUdKcfckflxuAngstkQ",
        subtitulo: "The OG Flow - Premium Botanical"
    },
    "neon-lime": {
        id: "neon-lime",
        nome: "Energy Neon Lime",
        preco: 18.90,
        imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuDisgQKYuxdrTJFYmwbj9etS2GirfsS4hFYtEiAKqIPcQlbpkXNan_RjxknOpiKoqGQlke61PkeKU19aFm5yW5gi6POQHIjhFrSMGhcN2R1ti2YMNZDjvTBY1QTxVV8QmJCH_HZE7KQ-QHjGOCU-qPs4YD56CKCiUsqvaUH0hzRxzdC9X55c3tiUpqJhBnxrEcdcj_Tf_QrwpTpsGPviKL462yaodsgg_MvQ8nuzU1dl4gSz-G0lIC3isUJtRX3dksAsj05o7hywBU",
        subtitulo: "Zero Cafeína - High Intensity"
    },
    "toguro-edition": {
        id: "toguro-edition",
        nome: "Goró da Mansão - Toguro Edition",
        preco: 29.90,
        imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeCzhGVy8yAGhrMFWyRLR7bKM1GYdMP-cGwZYbutBaANe0GN7wjnGmxOfbe8pwQhQrRxO4gv3I68M1nRypSyplROknu94WKcblLmuuNB8dOlNOd929DbGl80UtbfWKWkK8-vLSgmwCQ8T4ILipFA-nFGSR4lOuZ2fnAU-k8rsHlpVwyj-omFZdZEibKeFZZEPCHfV1bSFphXl-uA02aZAFfhswkmlCj-WH_yqYQxMwQqjuOsaMjWHwYIXW2-4swaPCx6dJ2C28jN8",
        subtitulo: "Lote Limitado - Mansão Maromba HQ"
    },
    "essencia-toguro": {
        id: "essencia-toguro",
        nome: "Goró - Essência Toguro",
        preco: 34.90,
        imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzAJszUOfo3KkH3n2rgoKokEV4v27iUe6PcJClo2M_ICZqX3iyGs56rcyaONCZNayfWELDKALkjIZEtrKGMBB6Bx-sTEhPIijOvdWcfA6Ui7ZMI8FwO-W6qrCT4PJmEhLjNRi0kXJP1MrKfb5vTytfSzbRVEoH_8RwHeOImTtpZnJkK1tsu28-7sRryDRij3GqdPMLA5Eglks1PPmU_pkFSqByBQe60K-mVMKUJ-57pey0vIm_41LeGxgwaO6u1rIvtCeZcnwdh4",
        subtitulo: "Fórmula de Recuperação - The Lab"
    },
    "combo-extraterrestre": {
        id: "combo-extraterrestre",
        nome: "Combo Extraterrestre",
        preco: 120.00,
        imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyN18sudtc9moHJLxHhH77WXAJcEiLKL-khUxZd1nn_emODXfkMCpvTcCDGufT8TQOJjH91Xwn89DEht0mSYr04vx5uihPkYIKgIQX4g0bm7He93PDFYGGBVPWJ8uhrzfoLwiPDwcNuHzsalFAOzfcOmty-1CWtJG5bQ9ddp-PkcpQLTtI5tmcKTY_-oQbb68MQnKkFCY5ESA-KsxP25dslX5FSSSCBZaWjyFeRkOV2YLYiUk-YRqpMYXICaf_3o-9lIbmhw4p5YM",
        subtitulo: "A experiência completa da Mansão"
    },
    "pack-6-latas": {
        id: "pack-6-latas",
        nome: "Pack 6 Latas",
        preco: 99.00,
        imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAPHnOmCwCXF36KJS4e5HrraToHjZpcw1apq3vFt8Y2aR98on20LHYRm3s4okX3kfEPUuYJrRBM4vmt8B3-Hyhnee2y4STLRUd37KXzq-IYYswDYWlhHniHReCET6jdOvO0-xaRzx9CDtkBw8Ao9ru2AfaEYOs2fgCaEWYn9SsUg1p0LLQ93_7pzBlqrbfEMjWtoQe2kgDxVNZ6_J-BaKiqV_LIHRi0pmvF8jrWB457oKTq9Z2fkU0sgaU6dB2NrSncNN_9vjCiZg",
        subtitulo: "Squad Approved - Neon Series"
    }
};

// ==========================================
// 🛡️ AGE GATE (Verificação de Maioridade)
// ==========================================

function initAgeGate() {
    const isOfAge = localStorage.getItem('goro_is_of_age');
    
    if (isOfAge === 'true') {
        return; // Acesso liberado
    }

    // Criar o Modal de Age Gate elegante com Glassmorphism e Neons
    const overlay = document.createElement('div');
    overlay.id = 'goro-age-gate';
    overlay.className = 'fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 text-white overflow-hidden';
    
    // Gradientes de fundo para simular a iluminação neon do tema
    overlay.innerHTML = `
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-[#abd600]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-[#ffabf3]/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div class="glass-card max-w-md w-full p-10 text-center border-l-4 border-l-[#abd600] relative z-10 flex flex-col justify-center items-center shadow-[0_0_50px_rgba(171,214,0,0.15)] bg-neutral-900/50" style="border: 1px solid rgba(255,255,255,0.05); border-left: 4px solid #abd600; border-radius: 8px; backdrop-filter: blur(20px);">
            <span class="font-mono text-xs text-[#abd600] tracking-[0.3em] uppercase mb-4 block">Controle de Acesso Elite</span>
            <h2 class="font-black uppercase text-4xl mb-6 tracking-tighter leading-none" style="font-family: 'Anton', sans-serif;">
                VOCÊ TEM <span class="text-[#abd600] drop-shadow-[0_0_8px_rgba(171,214,0,0.6)]">18 ANOS</span> OU MAIS?
            </h2>
            <p class="font-sans text-sm text-gray-400 mb-8 max-w-xs leading-relaxed">
                Este site comercializa bebidas alcoólicas e suplementos exclusivos da Mansão Maromba. Confirme sua maioridade para entrar.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 w-full">
                <button id="age-btn-yes" class="w-full bg-[#abd600] text-black font-bold uppercase py-4 text-sm active:scale-95 transition-all shadow-[0_0_15px_rgba(171,214,0,0.4)] hover:opacity-90" style="font-family: 'Anton', sans-serif;">
                    Sim, sou maior
                </button>
                <button id="age-btn-no" class="w-full bg-white/5 border border-white/10 text-white font-bold uppercase py-4 text-sm active:scale-95 transition-all hover:bg-white/10" style="font-family: 'Anton', sans-serif;">
                    Não
                </button>
            </div>
            <div id="age-error-msg" class="mt-6 text-red-400 text-xs hidden uppercase tracking-wider font-mono">
                Acesso restrito para menores de 18 anos.
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Bloquear rolagem do site

    // Lógicas de eventos
    document.getElementById('age-btn-yes').addEventListener('click', () => {
        localStorage.setItem('goro_is_of_age', 'true');
        // Efeito de fade-out suave
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = ''; // Restaurar rolagem
        }, 500);
    });

    document.getElementById('age-btn-no').addEventListener('click', () => {
        const errorMsg = document.getElementById('age-error-msg');
        errorMsg.classList.remove('hidden');
        document.getElementById('age-btn-yes').disabled = true;
        document.getElementById('age-btn-no').disabled = true;
        
        setTimeout(() => {
            window.location.href = "https://www.google.com"; // Redireciona para local seguro
        }, 2000);
    });
}

// ==========================================
// 🛒 MOTOR DE CARRINHO E TOASTS
// ==========================================

// Inicializa o carrinho se não existir
function getCart() {
    try {
        const cart = localStorage.getItem('goro_cart');
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('goro_cart', JSON.stringify(cart));
    atualizarBadgesHeader();
}

// Lógica de Toast de sucesso extremamente estilizada
function showToast(mensagem, cor = '#abd600') {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 right-6 z-[90] flex items-center gap-3 p-4 bg-neutral-900 border-l-4 rounded shadow-2xl transition-all duration-500 transform translate-y-10 opacity-0';
    toast.style.borderLeftColor = cor;
    toast.style.border = '1px solid rgba(255,255,255,0.05)';
    toast.style.borderLeft = `4px solid ${cor}`;
    toast.style.boxShadow = `0 0 20px rgba(0, 0, 0, 0.5), 0 0 10px ${cor}20`;
    
    toast.innerHTML = `
        <span class="material-symbols-outlined" style="color: ${cor}">verified</span>
        <span class="font-mono text-xs uppercase tracking-wider text-white font-bold">${mensagem}</span>
    `;

    document.body.appendChild(toast);
    
    // Forçar reflow para ativar transição
    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 50);

    // Remover após 3 segundos
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}

function adicionarAoCarrinho(productId) {
    const produto = PRODUTOS[productId];
    if (!produto) return;

    let cart = getCart();
    const itemExistente = cart.find(item => item.id === productId);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        cart.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            subtitulo: produto.subtitulo,
            quantidade: 1
        });
    }

    saveCart(cart);
    showToast(`${produto.nome} Adicionado!`, '#abd600');
}

function atualizarQuantidade(productId, delta) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantidade += delta;
        if (item.quantidade < 1) {
            cart = cart.filter(item => item.id !== productId);
        }
        saveCart(cart);
        // Desparar evento personalizado para re-renderizar a página de carrinho se estiver nela
        window.dispatchEvent(new Event('goro_cart_updated'));
    }
}

function removerDoCarrinho(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    window.dispatchEvent(new Event('goro_cart_updated'));
    showToast("Produto Removido!", "#ffabf3");
}

function clearCart() {
    saveCart([]);
}

function getCartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const frete = subtotal > 100 || subtotal === 0 ? 0 : 15.00; // Frete grátis acima de R$100
    const total = subtotal + frete;

    return {
        subtotal,
        frete,
        total
    };
}

// ==========================================
// 💡 ATUALIZAÇÃO DOS BADGES DO HEADER E NAVEGAÇÃO DINÂMICA
// ==========================================

function atualizarBadgesHeader() {
    const cart = getCart();
    const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);

    // Encontrar todos os elementos de carrinho/sacola
    const cartContainers = document.querySelectorAll('header a, header button, nav a, nav button, footer a');

    cartContainers.forEach(container => {
        const text = container.textContent.toLowerCase();
        const hasCartIcon = container.querySelector('.material-symbols-outlined') && 
                            (container.querySelector('.material-symbols-outlined').textContent === 'shopping_cart' || 
                             container.querySelector('.material-symbols-outlined').textContent === 'shopping_bag');
        
        if (hasCartIcon || text.includes('carrinho') || container.getAttribute('href') === '/carrinho.html') {
            // Remover badge antigo se houver
            let badge = container.querySelector('.goro-cart-badge');
            
            if (totalItens > 0) {
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'goro-cart-badge absolute -top-1 -right-1 bg-[#ffabf3] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center font-mono';
                    container.style.position = 'relative';
                    container.appendChild(badge);
                }
                badge.innerText = totalItens;
            } else if (badge) {
                badge.remove();
            }
        }
    });
}

// Fia a navegação de forma totalmente resiliente baseada no conteúdo dos botões e links
function fiarNavegacaoEDrawers() {
    // 1. Configurar cliques nos botões de menu lateral (Drawers)
    const menuButtons = document.querySelectorAll('header button, header span.material-symbols-outlined, [data-icon="menu"]');
    menuButtons.forEach(btn => {
        if (btn.textContent.includes('menu') || btn.getAttribute('data-icon') === 'menu') {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Tenta abrir o drawer nas diferentes páginas
                const drawer = document.getElementById('drawer') || document.getElementById('mobile-drawer') || document.getElementById('nav-drawer');
                if (drawer) {
                    drawer.classList.remove('pointer-events-none', 'opacity-0', 'hidden');
                    drawer.style.display = '';
                    
                    const aside = drawer.querySelector('aside') || drawer.querySelector('#drawer-content') || drawer;
                    if (aside) {
                        aside.classList.remove('translate-x-[-100%]', '-translate-x-full');
                        aside.style.transform = 'translateX(0)';
                    }
                }
            });
        }
    });

    // Fechar drawer ao clicar fora ou em botões de fechar
    document.addEventListener('click', (e) => {
        const drawer = document.getElementById('drawer') || document.getElementById('mobile-drawer') || document.getElementById('nav-drawer');
        if (drawer && !drawer.classList.contains('pointer-events-none') && !drawer.classList.contains('hidden')) {
            const aside = drawer.querySelector('aside') || drawer.querySelector('#drawer-content') || drawer;
            const menuBtn = document.querySelector('[data-icon="menu"]') || document.querySelector('header button');
            
            if (aside && !aside.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
                drawer.classList.add('pointer-events-none', 'opacity-0');
                if (aside.classList.contains('transition-all') || aside.id === 'nav-drawer') {
                    aside.classList.add('-translate-x-full');
                } else {
                    aside.classList.add('translate-x-[-100%]');
                }
            }
        }
    });

    // 2. Fiar links de navegação para todas as páginas com base em palavras-chave
    const allLinksAndButtons = document.querySelectorAll('a, button, nav a, footer a');
    allLinksAndButtons.forEach(el => {
        const text = el.textContent.toLowerCase().trim();
        const html = el.innerHTML.toLowerCase();
        
        // Evita interceptar se já tem um onclick ou se já é uma ação do carrinho
        if (el.getAttribute('onclick') || el.id === 'checkout-submit-btn' || el.id === 'age-btn-yes' || el.id === 'age-btn-no') {
            return;
        }

        // Título/Logo do cabeçalho
        if (text.includes('goró da mansão') && el.tagName === 'A') {
            el.setAttribute('href', '/index.html');
            return;
        }

        // Mapeamentos de links por palavras-chave
        let dest = null;
        if (text.includes('manifesto') || text.includes('safety') || text.includes('redução de danos') || text.includes('club') || text.includes('harm reduction')) {
            dest = '/manifesto.html';
        } else if (text.includes('lab') || text.includes('laboratório') || text.includes('glow') || text.includes('science')) {
            dest = '/lab.html';
        } else if (text.includes('store') || text.includes('shop') || text.includes('loja') || text.includes('arsenal') || text.includes('drops') || text.includes('produtos')) {
            dest = '/loja.html';
        } else if (html.includes('shopping_bag') || html.includes('shopping_cart') || text.includes('carrinho') || text.includes('seu pack')) {
            dest = '/carrinho.html';
        } else if (text.includes('checkout') || text.includes('finalizar') || text.includes('pagar') || text.includes('comprar agora') || text.includes('abastecer agora') || text.includes('garanta o seu') || text.includes('assinar agora') || text.includes('virar lenda') || text.includes('iniciar jornada')) {
            // Se for botão de compra direta, além de ir pro checkout, vamos fiar a adição no manipulador de compras
            if (el.tagName === 'A') {
                dest = '/checkout.html';
            }
        } else if (text.includes('voltar para a home') || text.includes('voltar para a mansão') || text.includes('voltar para o lab')) {
            dest = '/index.html';
        }

        if (dest) {
            if (el.tagName === 'A') {
                el.setAttribute('href', dest);
            } else if (el.tagName === 'BUTTON') {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = dest;
                });
            }
        }
    });
}

// Procura por botões de adicionar ao carrinho e compra direta, associando ao produto correto via DOM
function fiarBotoesAdicionarECompra() {
    const buttons = document.querySelectorAll('button, a.bg-primary, a.bg-primary-fixed-dim');
    
    buttons.forEach(btn => {
        const text = btn.textContent.toLowerCase().trim();
        const html = btn.innerHTML.toLowerCase();
        
        const isAdd = text.includes('adicionar') || text.includes('add') || text.includes('comprar') || 
                      text.includes('pack') || text.includes('garanta') || text.includes('abastecer') ||
                      html.includes('add_shopping_cart') || html.includes('shopping_cart') || 
                      btn.querySelector('.material-symbols-outlined')?.textContent === 'add';

        if (!isAdd || btn.id === 'age-btn-yes' || btn.id === 'age-btn-no' || btn.id === 'checkout-submit-btn') {
            return;
        }

        // Subir no DOM para encontrar o container do card do produto
        let container = btn.parentElement;
        let productTitle = '';
        
        // Sobe até 5 níveis no DOM para achar títulos do card
        for (let i = 0; i < 5; i++) {
            if (!container) break;
            
            // Procura por h3, h4, h5 ou spans que possam ser o título do produto
            const titles = container.querySelectorAll('h3, h4, h5, p.font-headline-lg-mobile, span.font-bold');
            for (const t of titles) {
                const val = t.textContent.toLowerCase().trim();
                if (val.includes('classico') || val.includes('clássico') || val.includes('lime') || val.includes('toguro') || val.includes('essência') || val.includes('extraterrestre') || val.includes('6 latas')) {
                    productTitle = val;
                    break;
                }
            }
            if (productTitle) break;
            container = container.parentElement;
        }

        // Descobrir qual produto associar
        let productId = null;
        if (productTitle.includes('classico') || productTitle.includes('clássico') || productTitle.includes('original flow')) {
            productId = 'rtd-classico';
        } else if (productTitle.includes('lime') || productTitle.includes('neon') || productTitle.includes('boost')) {
            productId = 'neon-lime';
        } else if (productTitle.includes('toguro edition') || (productTitle.includes('toguro') && !productTitle.includes('essência') && !productTitle.includes('essencia'))) {
            productId = 'toguro-edition';
        } else if (productTitle.includes('essência') || productTitle.includes('essencia') || productTitle.includes('recuperação')) {
            productId = 'essencia-toguro';
        } else if (productTitle.includes('extraterrestre') || productTitle.includes('combo')) {
            productId = 'combo-extraterrestre';
        } else if (productTitle.includes('6 latas') || productTitle.includes('pack')) {
            productId = 'pack-6-latas';
        }

        // Fallback baseado na URL atual da página
        if (!productId) {
            const path = window.location.pathname;
            if (path.includes('loja-toguro')) {
                productId = 'toguro-edition';
            } else if (path.includes('loja-essencia')) {
                productId = 'essencia-toguro';
            }
        }

        if (productId) {
            // Remove handlers de cliques anteriores para evitar duplicações
            const clone = btn.cloneNode(true);
            btn.parentNode.replaceChild(clone, btn);

            clone.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                adicionarAoCarrinho(productId);
                
                // Se for botão de compra direta/hero cta, leva o usuário direto para o carrinho
                if (text.includes('comprar agora') || text.includes('garanta') || text.includes('abastecer')) {
                    setTimeout(() => {
                        window.location.href = '/carrinho.html';
                    }, 500);
                }
            });
        }
    });
}

// Expõe as funções reativas no objeto global window para serem acessadas nos cliques do HTML
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.atualizarQuantidade = atualizarQuantidade;
window.removerDoCarrinho = removerDoCarrinho;
window.getCart = getCart;
window.getCartTotals = getCartTotals;
window.clearCart = clearCart;

// Inicializações automáticas na abertura do documento
document.addEventListener('DOMContentLoaded', () => {
    initAgeGate();
    fiarNavegacaoEDrawers();
    fiarBotoesAdicionarECompra();
    atualizarBadgesHeader();
    
    // Injetar suporte a Material Symbols no head para garantir que os ícones funcionem em qualquer tela
    if (!document.querySelector('link[href*="Material+Symbols"]')) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
        document.head.appendChild(fontLink);
    }
});
