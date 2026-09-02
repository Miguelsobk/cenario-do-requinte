// ── TRANSLATIONS ──
const I18N = {
  pt: {
    nav: { inicio: "Início", gestao: "Gestão de Propriedade", comprar: "Comprar / Vender", alugueres: "Alugueres de Férias", sobre: "Sobre Nós", contacto: "Contacto" },
    footer: { privacidade: "Privacidade", termos: "Termos", cookies: "Cookies" },
    common: {
      venda: "Venda", arrendamento: "Arrendamento",
      pedirInfo: "Pedir Informação →", enviarEmail: "Enviar Email →",
      whatsapp: "<svg class=\"ic\"><use href=\"#ic-chat\"/></svg> WhatsApp", whatsappArrow: "<svg class=\"ic\"><use href=\"#ic-chat\"/></svg> WhatsApp →",
      voltarInicio: "Voltar ao Início →"
    },
    index: {
      hero: {
        label: "Gestão · Compra · Arrendamento",
        h1: "A sua propriedade<br>no Algarve,<br><em>gerida como se fosse sua.</em>",
        sub: "Apoio local para proprietários internacionais. Tratamos de tudo — da manutenção ao arrendamento — enquanto não está cá.",
        cta1: "Consulta Gratuita →", cta2: "Os Nossos Serviços",
        badge: "Anos no Algarve"
      },
      marquee: { w1: "Comprar", w2: "Vender", w3: "Arrendar", w4: "Gerir", w5: "Cuidar", w6: "Confiar" },
      stats: { s1: "Anos de Experiência no Algarve", s2: "Atendimento Pessoal, Não uma Plataforma", s2num: "100%" },
      services: {
        label: "Os Nossos Serviços",
        h2: "Como o<br>podemos ajudar.",
        p: "Mais de uma década a cuidar de casas alheias como se fossem nossas. Presença local, comunicação clara, relatórios mensais — para que esteja descansado onde quer que esteja.",
        btn: "Conhecer os Serviços →",
        card1: { name: "Gestão de Propriedade", desc: "Cuidamos da sua casa como se fosse nossa — manutenção, arrendamento e presença local enquanto está ausente.", cta: "Explorar →" },
        card2: { name: "Comprar &amp; Vender", desc: "A compra e venda como extensão natural da nossa relação com proprietários. Conhecemos o mercado melhor do que ninguém.", cta: "Explorar →" }
      },
      sobre: {
        label: "Sobre Nós",
        h2: "Uma equipa local<br>que conhece cada pedra.",
        p: "Fundada no Algarve, a Cenário do Requinte nasceu da necessidade real que proprietários internacionais têm de confiar a sua casa a alguém. Não somos uma plataforma — somos pessoas.",
        p2: "A nossa história começou na hotelaria e na restauração de referência do Algarve, onde a hospitalidade genuína nunca foi um detalhe — foi sempre o padrão. É essa mesma exigência que aplicamos hoje a cada casa que gerimos.",
        stat1: "Sem Intermediários Nem Call Centers", stat1num: "Direto", stat2: "Disponíveis Quando Precisar", stat2num: "Sempre",
        btn: "Falar com a Equipa →"
      },
      props: { label: "Propriedades em Destaque", h2: "Encontre a sua<br>casa no Algarve.", btn: "Ver Todas →" },
      cta: {
        h2: "Pronto para confiar<br>a sua casa a quem cuida?",
        p: "A nossa equipa no Algarve responde em menos de 24 horas. Sem compromissos, sem letras pequenas."
      }
    },
    gestao: {
      hero: {
        label: "Gestão de Propriedade",
        h1: "A sua casa,<br><em>cuidada como merece.</em>",
        p: "Para proprietários internacionais que querem ter uma casa no Algarve sem os problemas de a gerir à distância.",
        btn: "Pedir Proposta →"
      },
      inclusion: {
        label: "O que inclui",
        h2: "Tudo o que a sua casa precisa.",
        p: "Um serviço completo de gestão — da manutenção preventiva à comunicação com inquilinos — adaptado à sua situação.",
        i1: { name: "Vistorias regulares", desc: "Visitas mensais com relatório fotográfico enviado por email." },
        i2: { name: "Manutenção", desc: "Rede de profissionais de confiança para qualquer reparação." },
        i3: { name: "Limpeza", desc: "Serviço de limpeza regular e preparação para chegada de hóspedes." },
        i4: { name: "Check-in / Check-out", desc: "Receção presencial, entrega de chaves e vistoria de saída." },
        i5: { name: "Comunicação 24h", desc: "Contacto direto com a sua equipa. Resposta garantida em menos de 24h." },
        i6: { name: "Relatório mensal", desc: "Resumo claro de tudo o que aconteceu na sua propriedade." },
        i7: { name: "Gestão de arrendamento", desc: "Publicação, comunicação e coordenação com plataformas como Airbnb." },
        i8: { name: "Jardinagem &amp; piscina", desc: "Manutenção de exteriores e tratamento de piscinas ao longo do ano." }
      },
      process: {
        h2: "Como funciona,<br>na prática.",
        p: "Da primeira conversa à gestão contínua — um processo claro que foi pensado para dar tranquilidade.",
        s1: { title: "Contacto inicial", sub: "Conversa sem compromisso", detail: "Conhecemos a sua propriedade e as suas expectativas. Visitamos, avaliamos e apresentamos uma proposta à medida." },
        s2: { title: "Contrato de gestão", sub: "Transparente e flexível", detail: "Definimos o âmbito, a frequência de vistorias e as condições. Sem letras pequenas, sem surpresas." },
        s3: { title: "Gestão ativa", sub: "Presença local contínua", detail: "A nossa equipa trata de tudo — desde o aparafuso que caiu até à substituição de um eletrodoméstico. Sempre com a sua aprovação." },
        s4: { title: "Relatório mensal", sub: "Sempre a par do que acontece", detail: "Recebe um relatório com fotos, custos e estado da propriedade. Pode ver tudo no seu telemóvel, de onde estiver." }
      },
      contact: { h3: "Pronto para dar o primeiro passo?", p: "Fale connosco — a consulta inicial é gratuita e sem compromisso." }
    },
    comprar: {
      hero: {
        label: "Comprar &amp; Vender",
        h1: "O imóvel certo,<br><em>no lugar certo.</em>",
        p: "Conhecemos o Algarve propriedade a propriedade. Deixe-nos encontrar a sua — ou vender a que já tem.",
        btn: "Falar com um Consultor →"
      },
      why: {
        label: "Porque o Algarve",
        h2: "Um investimento com história.",
        p: "O Algarve é um dos mercados imobiliários mais estáveis da Europa, com procura constante por parte de compradores internacionais e retornos atrativos em arrendamento de curta duração.",
        w1: { title: "Valorização consistente", desc: "O mercado do Algarve valorizou em média 8% ao ano na última década." },
        w2: { title: "Procura turística elevada", desc: "Mais de 12 milhões de turistas por ano garantem retornos de arrendamento acima da média europeia." },
        w3: { title: "Estabilidade jurídica", desc: "Portugal oferece segurança jurídica e fiscal para compradores estrangeiros, incluindo o programa NHR." }
      },
      sell: {
        h2: "Quer vender<br>a sua propriedade?",
        p: "A nossa carteira de compradores internacionais e o nosso conhecimento do mercado local fazem a diferença na velocidade e no preço de venda.",
        btn: "Pedir Avaliação Gratuita →",
        p1: { title: "Avaliação rigorosa", desc: "Análise de mercado baseada em dados reais, não em estimativas." },
        p2: { title: "Compradores qualificados", desc: "Acesso a uma rede de compradores europeus com capacidade financeira comprovada." },
        p3: { title: "Marketing editorial", desc: "Fotografia profissional, plantas e vídeo drone incluídos em todos os imóveis." },
        p4: { title: "Acompanhamento jurídico", desc: "Parceiros de confiança para toda a parte legal e fiscal da transação." }
      },
      contact: { label: "Contacto", h2: "Fale com<br>um consultor.", p: "Resposta garantida em menos de 24 horas. Sem compromissos, sem pressão." },
      form: {
        nome: "Nome", apelido: "Apelido", email: "Email", interesse: "Interesse", zona: "Zona Preferida", mensagem: "Mensagem",
        optComprar: "Quero Comprar", optVender: "Quero Vender", optArrendar: "Quero Arrendar", optAvaliacao: "Avaliação Gratuita",
        zonaQualquer: "Qualquer zona",
        phNome: "O seu nome", phApelido: "Apelido", phEmail: "email@exemplo.com", phMensagem: "Conte-nos o que procura…",
        submit: "Enviar Pedido →"
      }
    },
    obrigado: { h1: "Pedido enviado com sucesso.", p: "Obrigado pelo seu contacto. A nossa equipa vai responder em menos de 24 horas." },
    listing23a: {
      title: "T3 amplo com piscina e jardins,<br><em>a poucos minutos da marina.</em>",
      sub: "156,17 m² distribuídos por 3 quartos, sala ampla com terraço, 4 casas de banho e lugar de garagem próprio — no empreendimento ONE Vilamoura, com piscina e jardins exuberantes.",
      negotiable: "Negociável",
      ctaVisit: "Agendar Visita →",
      factArea: "Área Total", factRooms: "Quartos", factWc: "Casas de Banho",
      floorVal: "Piso 2", factFloor: "Andar",
      includedVal: "Incluído", factParking: "Estacionamento", factPrice: "Preço",
      galleryLabel: "Galeria", galleryTitle: "Conheça cada divisão.",
      descH2: "Um T3 espaçoso no coração de Vilamoura.",
      descP1: "Esta fração, no piso 2 do empreendimento ONE Vilamoura, distingue-se pela amplitude pouco comum para uma tipologia T3 — 156,17 m² de área total, com uma sala de estar de quase 39 m² e um terraço privado de 9,27 m² virado para os jardins.",
      descP2: "Os três quartos, incluindo uma suite, distribuem-se por uma zona silenciosa da casa. A cozinha, equipada com eletrodomésticos Bosch encastrados, está próxima de uma zona de lavandaria funcional.",
      descP3: "O condomínio inclui piscina, jardins cuidados e zonas de lazer partilhadas — tudo a poucos minutos da Marina de Vilamoura e das praias do Algarve. A fração inclui ainda um lugar de garagem privativo.",
      financeTitle: "Apoio ao Crédito Habitação",
      financeText: "A nossa equipa trata também do processo de financiamento junto da banca, do início ao fim, para tornar a compra mais simples.",
      roomsTitle: "Áreas, Divisão a Divisão",
      room: {
        sala: "Sala de Estar", cozinha: "Cozinha", q1: "Quarto 1 (Suite)", q2: "Quarto 2", q3: "Quarto 3",
        wc: "Casas de Banho (4)", hall: "Hall", galeria: "Galeria", arrumos: "Arrumos", varandas: "Varandas (4)", total: "Área Total"
      },
      contactH2: "Interessado neste imóvel?",
      phMsg: "Gostaria de agendar uma visita…"
    },
    listing03c: {
      title: "Um T1 raro,<br><em>com piscina privativa e jardim.</em>",
      sub: "120 m² entre interior e terraço, no rés-do-chão do Villa Nature — com piscina privativa, jardim próprio e acesso direto à piscina comum do condomínio.",
      priceOnRequest: "Preço sob consulta",
      priceOnRequestShort: "Sob Consulta",
      ctaInfo: "Pedir Mais Informações →",
      factInterior: "Área Interior", factTerraco: "Terraço", factTipologia: "Tipologia",
      factWc: "Casa de Banho", factFloor: "Andar", factPrice: "Preço",
      descH2: "Um T1 fora do comum, no Villa Nature.",
      descP1: "Localizada no rés-do-chão do Villa Nature, em Vilamoura, esta fração distingue-se por um terraço privado de 48,90 m² com piscina própria — uma raridade para uma tipologia T1. No interior, a sala comum ocupa 29,54 m² e o quarto 18,12 m², com cozinha e casa de banho totalmente equipadas.",
      descP2: "O condomínio Villa Nature oferece piscina comum rodeada de oliveiras e bambu e jardins cuidados — tudo pensado para um estilo de vida tranquilo e ao ar livre, a poucos minutos do centro de Vilamoura.",
      room: {
        sala: "Sala Comum", cozinha: "Cozinha", quarto: "Quarto", hall: "Hall",
        is: "Instalação Sanitária", terraco: "Terraço", total: "Área Total"
      },
      contactH2: "Interessado neste imóvel?",
      phMsg: "Gostaria de saber mais sobre este imóvel…"
    },
    ferias: {
      hub: {
        label: "Alugueres de Férias",
        h1: "Estadias geridas por nós,<br><em>até ao último pormenor.</em>",
        sub: "Apartamentos no Algarve prontos para as suas férias — limpeza, check-in e comunicação tratados pela nossa equipa local. A mesma gestão de confiança que oferecemos aos proprietários que representamos.",
        listLabel: "Alojamentos Disponíveis",
        listH2: "Onde ficar no Algarve.",
        card: { price: "Preço sob consulta", cta: "Ver Detalhes →" }
      },
      label: "Villa Nature · Aluguer de Férias",
      title: "Uma estadia com piscina e jardins,<br><em>no coração de Vilamoura.</em>",
      sub: "Apartamento com vista para a piscina e jardins do condomínio. A poucos minutos do centro de Vilamoura, da marina e das praias — e a 2 minutos dos campos de golfe.",
      ctaBookDirect: "Pedir para Reservar",
      factTipologia: "Tipologia", factWc: "Casa de Banho", factGuests: "Hóspedes", factBooking: "Reservas", factBookingVal: "Direto",
      descH2: "Um T2 pronto para as suas férias.",
      descP1: "Apartamento com vista para a piscina e jardins do condomínio, numa zona tranquila do Villa Nature. A poucos minutos do centro de Vilamoura, da marina e das praias da região.",
      descP2: "A 2 minutos de carro dos campos de golfe de Vilamoura e a cerca de 20 minutos do Aeroporto de Faro. Cozinha totalmente equipada, máquina de lavar roupa, ar condicionado e varanda privativa com vista para o jardim.",
      amenitiesTitle: "Comodidades",
      amen1: "Piscina exterior comum", amen2: "Estacionamento em garagem", amen3: "Cozinha totalmente equipada",
      amen4: "Máquina de lavar roupa", amen5: "Ar condicionado", amen6: "Varanda privativa",
      contactH2: "Pronto para reservar?",
      contactP: "Fale connosco diretamente — respondemos em menos de 24 horas.",
      formDates: "Datas Pretendidas", formDatesPh: "Ex: 12–19 agosto",
      phMsg: "Diga-nos mais sobre a sua estadia…"
    },
    feriasRobert: {
      label: "ONE Vilamoura · Aluguer de Férias",
      title: "Um T2 novo e espaçoso,<br><em>no prestigiado ONE Vilamoura.</em>",
      sub: "Apartamento moderno no rés-do-chão, com acesso direto à piscina do condomínio. Muito bem equipado, com bastante espaço — um dos maiores apartamentos do condomínio.",
      descH2: "Um T2 novo e espaçoso, no ONE Vilamoura.",
      descP1: "Apartamento moderno e muito bem equipado, no rés-do-chão do ONE Vilamoura, com acesso direto à piscina do condomínio. Um dos apartamentos com mais espaço interior e exterior de todo o condomínio.",
      descP2: "A poucos minutos a pé do centro de Vilamoura, da marina e da Praia da Falésia. Garagem de fácil acesso, com elevador junto ao lugar de estacionamento — e transporte de e para o aeroporto disponível a pedido.",
      amen2: "Estacionamento em garagem, com elevador",
      amen4: "Wifi grátis",
      testimonialLabel: "O Que Dizem os Hóspedes",
      testimonialMeta: "Estadia Verificada · 17 Noites · Julho 2025",
      testimonialNote: "Avaliação original de uma hóspede real, em inglês."
    },
    feriasBelavista: {
      label: "Belavista Residence · Aluguer de Férias",
      title: "Um T2 moderno,<br><em>no coração de Quarteira.</em>",
      sub: "Apartamento moderno e totalmente equipado, com piscina comum, terraço amplo e acabamentos de alta qualidade — no Belavista Residence, em Quarteira.",
      poolVal: "Comum", factPool: "Piscina", factTerrace: "Terraço", factLocation: "Localização",
      descH2: "Um T2 moderno no Belavista Residence.",
      descP1: "Apartamento espaçoso e recentemente decorado, com sala e cozinha em open-space, dois quartos — um com cama de casal, outro com camas individuais — e duas casas de banho completas com acabamentos em mármore.",
      descP2: "O condomínio Belavista Residence oferece piscina comum, e a fração tem um terraço amplo com zona de estar e de refeições — ideal para os dias mais quentes do Algarve.",
      qualityTitle: "Acabamentos de Alta Qualidade",
      qualityText: "Mármore nas casas de banho, cozinha totalmente equipada e mobiliário de qualidade em toda a fração.",
      amenTerrace: "Terraço com zona de refeições",
      amenBath: "2 casas de banho completas",
      contactP: "Fale connosco para saber preços e disponibilidade — respondemos em menos de 24 horas."
    }
  },

  en: {
    nav: { inicio: "Home", gestao: "Property Management", comprar: "Buy / Sell", alugueres: "Holiday Rentals", sobre: "About Us", contacto: "Contact" },
    footer: { privacidade: "Privacy", termos: "Terms", cookies: "Cookies" },
    common: {
      venda: "For Sale", arrendamento: "For Rent",
      pedirInfo: "Request Information →", enviarEmail: "Send Email →",
      whatsapp: "<svg class=\"ic\"><use href=\"#ic-chat\"/></svg> WhatsApp", whatsappArrow: "<svg class=\"ic\"><use href=\"#ic-chat\"/></svg> WhatsApp →",
      voltarInicio: "Back to Home →"
    },
    index: {
      hero: {
        label: "Management · Buying · Renting",
        h1: "Your property<br>in the Algarve,<br><em>managed as if it were your own.</em>",
        sub: "Local support for international owners. We handle everything — from maintenance to renting — while you're away.",
        cta1: "Free Consultation →", cta2: "Our Services",
        badge: "Years in the Algarve"
      },
      marquee: { w1: "Buy", w2: "Sell", w3: "Rent", w4: "Manage", w5: "Care", w6: "Trust" },
      stats: { s1: "Years of Experience in the Algarve", s2: "Personal Service, Never a Platform", s2num: "100%" },
      services: {
        label: "Our Services",
        h2: "How we<br>can help.",
        p: "Over a decade taking care of other people's homes as if they were our own. Local presence, clear communication, monthly reports — so you can relax wherever you are.",
        btn: "Discover Our Services →",
        card1: { name: "Property Management", desc: "We take care of your home as if it were our own — maintenance, renting and local presence while you're away.", cta: "Explore →" },
        card2: { name: "Buy &amp; Sell", desc: "Buying and selling as a natural extension of our relationship with owners. We know the market better than anyone.", cta: "Explore →" }
      },
      sobre: {
        label: "About Us",
        h2: "A local team<br>that knows every stone.",
        p: "Founded in the Algarve, Cenário do Requinte was born from the real need international owners have to trust their home to someone. We're not a platform — we're people.",
        p2: "Our story began in reference-standard hospitality and restaurant service in the Algarve, where genuine hospitality was never a detail — it was always the standard. That same standard is what we bring to every home we manage.",
        stat1: "No Middlemen, No Call Centres", stat1num: "Direct", stat2: "Available When You Need Us", stat2num: "Always",
        btn: "Talk to Our Team →"
      },
      props: { label: "Featured Properties", h2: "Find your<br>home in the Algarve.", btn: "View All →" },
      cta: {
        h2: "Ready to trust<br>your home to someone who cares?",
        p: "Our team in the Algarve responds within 24 hours. No commitments, no fine print."
      }
    },
    gestao: {
      hero: {
        label: "Property Management",
        h1: "Your home,<br><em>cared for as it deserves.</em>",
        p: "For international owners who want a home in the Algarve without the hassle of managing it from afar.",
        btn: "Request a Proposal →"
      },
      inclusion: {
        label: "What's included",
        h2: "Everything your home needs.",
        p: "A complete management service — from preventive maintenance to tenant communication — tailored to your situation.",
        i1: { name: "Regular inspections", desc: "Monthly visits with a photo report sent by email." },
        i2: { name: "Maintenance", desc: "A network of trusted professionals for any repair." },
        i3: { name: "Cleaning", desc: "Regular cleaning service and preparation for guest arrivals." },
        i4: { name: "Check-in / Check-out", desc: "In-person reception, key handover and departure inspection." },
        i5: { name: "24h Communication", desc: "Direct contact with your team. Guaranteed response within 24h." },
        i6: { name: "Monthly report", desc: "A clear summary of everything that happened at your property." },
        i7: { name: "Rental management", desc: "Listing, communication and coordination with platforms like Airbnb." },
        i8: { name: "Gardening &amp; pool", desc: "Year-round outdoor maintenance and pool treatment." }
      },
      process: {
        h2: "How it works,<br>in practice.",
        p: "From the first conversation to ongoing management — a clear process designed to give you peace of mind.",
        s1: { title: "Initial contact", sub: "No-obligation conversation", detail: "We get to know your property and your expectations. We visit, assess, and present a tailored proposal." },
        s2: { title: "Management contract", sub: "Transparent and flexible", detail: "We define the scope, inspection frequency and terms. No fine print, no surprises." },
        s3: { title: "Active management", sub: "Ongoing local presence", detail: "Our team takes care of everything — from a loose screw to replacing an appliance. Always with your approval." },
        s4: { title: "Monthly report", sub: "Always in the loop", detail: "You receive a report with photos, costs and the property's condition. You can see everything on your phone, wherever you are." }
      },
      contact: { h3: "Ready to take the first step?", p: "Talk to us — the initial consultation is free, with no obligation." }
    },
    comprar: {
      hero: {
        label: "Buy &amp; Sell",
        h1: "The right property,<br><em>in the right place.</em>",
        p: "We know the Algarve property by property. Let us find yours — or sell the one you already have.",
        btn: "Talk to a Consultant →"
      },
      why: {
        label: "Why the Algarve",
        h2: "An investment with history.",
        p: "The Algarve is one of the most stable real estate markets in Europe, with steady demand from international buyers and attractive short-term rental returns.",
        w1: { title: "Consistent appreciation", desc: "The Algarve market has appreciated an average of 8% per year over the last decade." },
        w2: { title: "High tourist demand", desc: "Over 12 million tourists a year ensure rental returns above the European average." },
        w3: { title: "Legal stability", desc: "Portugal offers legal and tax security for foreign buyers, including the NHR programme." }
      },
      sell: {
        h2: "Want to sell<br>your property?",
        p: "Our portfolio of international buyers and our knowledge of the local market make the difference in sale speed and price.",
        btn: "Request a Free Valuation →",
        p1: { title: "Rigorous valuation", desc: "Market analysis based on real data, not estimates." },
        p2: { title: "Qualified buyers", desc: "Access to a network of European buyers with proven financial capacity." },
        p3: { title: "Editorial marketing", desc: "Professional photography, floor plans and drone video included with every property." },
        p4: { title: "Legal support", desc: "Trusted partners for the entire legal and tax side of the transaction." }
      },
      contact: { label: "Contact", h2: "Talk to<br>a consultant.", p: "Guaranteed response within 24 hours. No commitments, no pressure." },
      form: {
        nome: "First Name", apelido: "Last Name", email: "Email", interesse: "Interest", zona: "Preferred Area", mensagem: "Message",
        optComprar: "I Want to Buy", optVender: "I Want to Sell", optArrendar: "I Want to Rent", optAvaliacao: "Free Valuation",
        zonaQualquer: "Any area",
        phNome: "Your name", phApelido: "Last name", phEmail: "email@example.com", phMensagem: "Tell us what you're looking for…",
        submit: "Send Request →"
      }
    },
    obrigado: { h1: "Request sent successfully.", p: "Thank you for contacting us. Our team will respond within 24 hours." },
    listing23a: {
      title: "Spacious 3-bed with pool and gardens,<br><em>minutes from the marina.</em>",
      sub: "156.17 m² across 3 bedrooms, a large living room with terrace, 4 bathrooms and a private parking space — in the ONE Vilamoura development, with pool and lush gardens.",
      negotiable: "Negotiable",
      ctaVisit: "Schedule a Visit →",
      factArea: "Total Area", factRooms: "Bedrooms", factWc: "Bathrooms",
      floorVal: "Floor 2", factFloor: "Floor",
      includedVal: "Included", factParking: "Parking", factPrice: "Price",
      galleryLabel: "Gallery", galleryTitle: "See every room.",
      descH2: "A spacious 3-bedroom home in the heart of Vilamoura.",
      descP1: "This unit, on the 2nd floor of the ONE Vilamoura development, stands out for its unusually generous size for a 3-bedroom apartment — 156.17 m² of total area, with a living room of almost 39 m² and a private 9.27 m² terrace facing the gardens.",
      descP2: "The three bedrooms, including one en-suite, are set apart in a quiet section of the home. The kitchen, fitted with built-in Bosch appliances, sits close to a functional laundry area.",
      descP3: "The condominium includes a pool, well-kept gardens and shared leisure areas — all just minutes from Vilamoura Marina and the beaches of the Algarve. The unit also includes a private parking space.",
      financeTitle: "Mortgage Support",
      financeText: "Our team also handles the mortgage process with the bank, from start to finish, to make the purchase simpler.",
      roomsTitle: "Room-by-Room Areas",
      room: {
        sala: "Living Room", cozinha: "Kitchen", q1: "Bedroom 1 (Suite)", q2: "Bedroom 2", q3: "Bedroom 3",
        wc: "Bathrooms (4)", hall: "Hall", galeria: "Gallery", arrumos: "Storage", varandas: "Balconies (4)", total: "Total Area"
      },
      contactH2: "Interested in this property?",
      phMsg: "I would like to schedule a visit…"
    },
    listing03c: {
      title: "A rare 1-bed with<br><em>private pool and garden.</em>",
      sub: "120 m² between interior and terrace, on the ground floor of Villa Nature — with a private pool, its own garden, and direct access to the condominium's shared pool.",
      priceOnRequest: "Price on request",
      priceOnRequestShort: "On Request",
      ctaInfo: "Request More Information →",
      factInterior: "Interior Area", factTerraco: "Terrace", factTipologia: "Layout",
      factWc: "Bathroom", factFloor: "Floor", factPrice: "Price",
      descH2: "An unusual 1-bedroom home at Villa Nature.",
      descP1: "This unit, on the ground floor of Villa Nature in Vilamoura, stands out for its private 48.90 m² terrace with its own pool — a rarity for a 1-bedroom apartment. Inside, the living room spans 29.54 m² and the bedroom 18.12 m², with a fully equipped kitchen and bathroom.",
      descP2: "The Villa Nature condominium offers a shared pool surrounded by olive and bamboo trees and well-kept gardens — all designed for a calm, outdoor lifestyle, just minutes from central Vilamoura.",
      room: {
        sala: "Living Room", cozinha: "Kitchen", quarto: "Bedroom", hall: "Hall",
        is: "Bathroom", terraco: "Terrace", total: "Total Area"
      },
      contactH2: "Interested in this property?",
      phMsg: "I would like to know more about this property…"
    },
    ferias: {
      hub: {
        label: "Holiday Rentals",
        h1: "Stays managed by us,<br><em>down to the last detail.</em>",
        sub: "Apartments in the Algarve ready for your holiday — cleaning, check-in and communication handled by our local team. The same trusted management we offer the owners we represent.",
        listLabel: "Available Stays",
        listH2: "Where to stay in the Algarve.",
        card: { price: "Price on request", cta: "View Details →" }
      },
      label: "Villa Nature · Holiday Rental",
      title: "A stay with pool and gardens,<br><em>in the heart of Vilamoura.</em>",
      sub: "Apartment with views over the condominium's pool and gardens. Just minutes from central Vilamoura, the marina and the beaches — and 2 minutes from the golf courses.",
      ctaBookDirect: "Request to Book",
      factTipologia: "Layout", factWc: "Bathroom", factGuests: "Guests", factBooking: "Bookings", factBookingVal: "Direct",
      descH2: "A 2-bedroom home ready for your holiday.",
      descP1: "Apartment with views over the condominium's pool and gardens, in a quiet part of Villa Nature. Just minutes from central Vilamoura, the marina and the region's beaches.",
      descP2: "A 2-minute drive from Vilamoura's golf courses and about 20 minutes from Faro Airport. Fully equipped kitchen, washing machine, air-conditioning and a private balcony overlooking the garden.",
      amenitiesTitle: "Amenities",
      amen1: "Shared outdoor pool", amen2: "Garage parking", amen3: "Fully equipped kitchen",
      amen4: "Washing machine", amen5: "Air-conditioning", amen6: "Private balcony",
      contactH2: "Ready to book?",
      contactP: "Talk to us directly — we respond within 24 hours.",
      formDates: "Preferred Dates", formDatesPh: "e.g. 12–19 August",
      phMsg: "Tell us more about your stay…"
    },
    feriasRobert: {
      label: "ONE Vilamoura · Holiday Rental",
      title: "A brand-new, spacious 2-bed,<br><em>at prestigious ONE Vilamoura.</em>",
      sub: "Modern ground-floor apartment with direct access to the condominium's pool. Very well equipped, with plenty of space — one of the largest apartments in the condominium.",
      descH2: "A brand-new, spacious 2-bedroom home at ONE Vilamoura.",
      descP1: "Modern, very well-equipped apartment on the ground floor of ONE Vilamoura, with direct access to the condominium's pool. One of the most spacious apartments, inside and out, in the whole condominium.",
      descP2: "A short walk from central Vilamoura, the marina and Praia da Falésia. Easy-access garage, with a lift right next to the parking spot — and airport transfers available on request.",
      amen2: "Garage parking, with lift access",
      amen4: "Free Wi-Fi",
      testimonialLabel: "What Guests Say",
      testimonialMeta: "Verified Stay · 17 Nights · July 2025",
      testimonialNote: "Original review from a real guest."
    },
    feriasBelavista: {
      label: "Belavista Residence · Holiday Rental",
      title: "A modern 2-bed,<br><em>in the heart of Quarteira.</em>",
      sub: "Modern, fully equipped apartment with a shared pool, large terrace and high-quality finishes — at Belavista Residence, in Quarteira.",
      poolVal: "Shared", factPool: "Pool", factTerrace: "Terrace", factLocation: "Location",
      descH2: "A modern 2-bedroom home at Belavista Residence.",
      descP1: "Spacious, recently decorated apartment with an open-plan living room and kitchen, two bedrooms — one with a double bed, the other with single beds — and two full bathrooms with marble finishes.",
      descP2: "The Belavista Residence condominium offers a shared pool, and the unit has a large terrace with a sitting and dining area — ideal for the Algarve's warmer days.",
      qualityTitle: "High-Quality Finishes",
      qualityText: "Marble bathrooms, a fully equipped kitchen and quality furnishings throughout the unit.",
      amenTerrace: "Terrace with dining area",
      amenBath: "2 full bathrooms",
      contactP: "Talk to us for prices and availability — we respond within 24 hours."
    }
  },

  pl: {
    nav: { inicio: "Strona Główna", gestao: "Zarządzanie Nieruchomością", comprar: "Kup / Sprzedaj", alugueres: "Wynajem Wakacyjny", sobre: "O Nas", contacto: "Kontakt" },
    footer: { privacidade: "Prywatność", termos: "Warunki", cookies: "Cookies" },
    common: {
      venda: "Sprzedaż", arrendamento: "Wynajem",
      pedirInfo: "Poproś o Informacje →", enviarEmail: "Wyślij Email →",
      whatsapp: "<svg class=\"ic\"><use href=\"#ic-chat\"/></svg> WhatsApp", whatsappArrow: "<svg class=\"ic\"><use href=\"#ic-chat\"/></svg> WhatsApp →",
      voltarInicio: "Powrót do Strony Głównej →"
    },
    index: {
      hero: {
        label: "Zarządzanie · Kupno · Wynajem",
        h1: "Twoja nieruchomość<br>na Algarve,<br><em>zarządzana jak Twoja własna.</em>",
        sub: "Lokalne wsparcie dla zagranicznych właścicieli. Zajmujemy się wszystkim — od konserwacji po wynajem — kiedy Ciebie tu nie ma.",
        cta1: "Bezpłatna Konsultacja →", cta2: "Nasze Usługi",
        badge: "Lat na Algarve"
      },
      marquee: { w1: "Kupować", w2: "Sprzedawać", w3: "Wynajmować", w4: "Zarządzać", w5: "Dbać", w6: "Ufać" },
      stats: { s1: "Lat Doświadczenia na Algarve", s2: "Osobista Obsługa, Nigdy Platforma", s2num: "100%" },
      services: {
        label: "Nasze Usługi",
        h2: "Jak możemy<br>Ci pomóc.",
        p: "Ponad dekada opieki nad cudzymi domami, jakby były naszymi własnymi. Lokalna obecność, jasna komunikacja, miesięczne raporty — abyś mógł być spokojny, gdziekolwiek jesteś.",
        btn: "Poznaj Nasze Usługi →",
        card1: { name: "Zarządzanie Nieruchomością", desc: "Dbamy o Twój dom, jakby był naszym własnym — konserwacja, wynajem i lokalna obecność podczas Twojej nieobecności.", cta: "Odkryj →" },
        card2: { name: "Kup i Sprzedaj", desc: "Kupno i sprzedaż jako naturalne rozszerzenie naszej relacji z właścicielami. Znamy rynek lepiej niż ktokolwiek inny.", cta: "Odkryj →" }
      },
      sobre: {
        label: "O Nas",
        h2: "Lokalny zespół,<br>który zna każdy kamień.",
        p: "Założona na Algarve firma Cenário do Requinte powstała z realnej potrzeby zagranicznych właścicieli — potrzeby powierzenia swojego domu komuś zaufanemu. Nie jesteśmy platformą — jesteśmy ludźmi.",
        p2: "Nasza historia zaczęła się w renomowanym hotelarstwie i gastronomii na Algarve, gdzie prawdziwa gościnność nigdy nie była dodatkiem — zawsze była standardem. Ten sam standard stosujemy dziś w każdym domu, którym się zajmujemy.",
        stat1: "Bez Pośredników i Call Center", stat1num: "Bezpośrednio", stat2: "Dostępni, Gdy Potrzebujesz", stat2num: "Zawsze",
        btn: "Porozmawiaj z Zespołem →"
      },
      props: { label: "Wyróżnione Nieruchomości", h2: "Znajdź swój<br>dom na Algarve.", btn: "Zobacz Wszystkie →" },
      cta: {
        h2: "Gotowy powierzyć<br>swój dom komuś, kto się troszczy?",
        p: "Nasz zespół na Algarve odpowiada w ciągu 24 godzin. Bez zobowiązań, bez drobnego druku."
      }
    },
    gestao: {
      hero: {
        label: "Zarządzanie Nieruchomością",
        h1: "Twój dom,<br><em>zadbany tak, jak zasługuje.</em>",
        p: "Dla zagranicznych właścicieli, którzy chcą mieć dom na Algarve bez kłopotów związanych z zarządzaniem nim na odległość.",
        btn: "Poproś o Ofertę →"
      },
      inclusion: {
        label: "Co obejmuje",
        h2: "Wszystko, czego potrzebuje Twój dom.",
        p: "Kompleksowa usługa zarządzania — od konserwacji zapobiegawczej po komunikację z najemcami — dopasowana do Twojej sytuacji.",
        i1: { name: "Regularne inspekcje", desc: "Comiesięczne wizyty z raportem fotograficznym wysyłanym e-mailem." },
        i2: { name: "Konserwacja", desc: "Sieć zaufanych fachowców do każdej naprawy." },
        i3: { name: "Sprzątanie", desc: "Regularne sprzątanie i przygotowanie na przyjazd gości." },
        i4: { name: "Zameldowanie / Wymeldowanie", desc: "Osobiste powitanie, przekazanie kluczy i kontrola przy wyjeździe." },
        i5: { name: "Komunikacja 24h", desc: "Bezpośredni kontakt z Twoim zespołem. Gwarantowana odpowiedź w ciągu 24h." },
        i6: { name: "Miesięczny raport", desc: "Przejrzyste podsumowanie wszystkiego, co wydarzyło się w Twojej nieruchomości." },
        i7: { name: "Zarządzanie wynajmem", desc: "Publikacja ogłoszeń, komunikacja i koordynacja z platformami takimi jak Airbnb." },
        i8: { name: "Ogród i basen", desc: "Całoroczna pielęgnacja terenu i konserwacja basenu." }
      },
      process: {
        h2: "Jak to działa,<br>w praktyce.",
        p: "Od pierwszej rozmowy po ciągłe zarządzanie — przejrzysty proces zaprojektowany, by dać Ci spokój ducha.",
        s1: { title: "Pierwszy kontakt", sub: "Rozmowa bez zobowiązań", detail: "Poznajemy Twoją nieruchomość i Twoje oczekiwania. Odwiedzamy, oceniamy i przedstawiamy indywidualną ofertę." },
        s2: { title: "Umowa zarządzania", sub: "Przejrzysta i elastyczna", detail: "Ustalamy zakres, częstotliwość inspekcji i warunki. Bez drobnego druku, bez niespodzianek." },
        s3: { title: "Aktywne zarządzanie", sub: "Stała lokalna obecność", detail: "Nasz zespół zajmuje się wszystkim — od poluzowanej śrubki po wymianę sprzętu AGD. Zawsze za Twoją zgodą." },
        s4: { title: "Miesięczny raport", sub: "Zawsze na bieżąco", detail: "Otrzymujesz raport ze zdjęciami, kosztami i stanem nieruchomości. Wszystko widzisz na telefonie, gdziekolwiek jesteś." }
      },
      contact: { h3: "Gotowy na pierwszy krok?", p: "Porozmawiaj z nami — pierwsza konsultacja jest bezpłatna i bez zobowiązań." }
    },
    comprar: {
      hero: {
        label: "Kup i Sprzedaj",
        h1: "Odpowiednia nieruchomość,<br><em>we właściwym miejscu.</em>",
        p: "Znamy Algarve nieruchomość po nieruchomości. Pozwól nam znaleźć Twoją — albo sprzedać tę, którą już masz.",
        btn: "Porozmawiaj z Doradcą →"
      },
      why: {
        label: "Dlaczego Algarve",
        h2: "Inwestycja z historią.",
        p: "Algarve to jeden z najbardziej stabilnych rynków nieruchomości w Europie, z ciągłym popytem ze strony zagranicznych nabywców i atrakcyjnymi zwrotami z wynajmu krótkoterminowego.",
        w1: { title: "Stały wzrost wartości", desc: "Rynek Algarve zyskiwał na wartości średnio 8% rocznie w ostatniej dekadzie." },
        w2: { title: "Wysoki popyt turystyczny", desc: "Ponad 12 milionów turystów rocznie zapewnia zwroty z wynajmu powyżej średniej europejskiej." },
        w3: { title: "Stabilność prawna", desc: "Portugalia oferuje bezpieczeństwo prawne i podatkowe dla zagranicznych nabywców, w tym program NHR." }
      },
      sell: {
        h2: "Chcesz sprzedać<br>swoją nieruchomość?",
        p: "Nasza baza zagranicznych nabywców i znajomość lokalnego rynku robią różnicę w szybkości i cenie sprzedaży.",
        btn: "Poproś o Bezpłatną Wycenę →",
        p1: { title: "Rzetelna wycena", desc: "Analiza rynku oparta na rzeczywistych danych, a nie szacunkach." },
        p2: { title: "Wykwalifikowani nabywcy", desc: "Dostęp do sieci europejskich nabywców o potwierdzonej zdolności finansowej." },
        p3: { title: "Marketing edytorialny", desc: "Profesjonalne zdjęcia, rzuty i wideo z drona dołączone do każdej nieruchomości." },
        p4: { title: "Wsparcie prawne", desc: "Zaufani partnerzy dla całej prawnej i podatkowej strony transakcji." }
      },
      contact: { label: "Kontakt", h2: "Porozmawiaj<br>z doradcą.", p: "Gwarantowana odpowiedź w ciągu 24 godzin. Bez zobowiązań, bez presji." },
      form: {
        nome: "Imię", apelido: "Nazwisko", email: "Email", interesse: "Zainteresowanie", zona: "Preferowana Lokalizacja", mensagem: "Wiadomość",
        optComprar: "Chcę Kupić", optVender: "Chcę Sprzedać", optArrendar: "Chcę Wynająć", optAvaliacao: "Bezpłatna Wycena",
        zonaQualquer: "Dowolna lokalizacja",
        phNome: "Twoje imię", phApelido: "Nazwisko", phEmail: "email@przyklad.com", phMensagem: "Powiedz nam, czego szukasz…",
        submit: "Wyślij Zapytanie →"
      }
    },
    obrigado: { h1: "Zapytanie zostało wysłane.", p: "Dziękujemy za kontakt. Nasz zespół odpowie w ciągu 24 godzin." },
    listing23a: {
      title: "Przestronne 3-pokojowe mieszkanie z basenem i ogrodami,<br><em>kilka minut od mariny.</em>",
      sub: "156,17 m² — 3 sypialnie, przestronny salon z tarasem, 4 łazienki i własne miejsce parkingowe — w inwestycji ONE Vilamoura, z basenem i bujnymi ogrodami.",
      negotiable: "Cena do negocjacji",
      ctaVisit: "Umów Wizytę →",
      factArea: "Powierzchnia Całkowita", factRooms: "Sypialnie", factWc: "Łazienki",
      floorVal: "Piętro 2", factFloor: "Piętro",
      includedVal: "W cenie", factParking: "Parking", factPrice: "Cena",
      galleryLabel: "Galeria", galleryTitle: "Poznaj każde pomieszczenie.",
      descH2: "Przestronne mieszkanie 3-pokojowe w sercu Vilamoura.",
      descP1: "Ten lokal, na 2. piętrze inwestycji ONE Vilamoura, wyróżnia się nietypowo dużą powierzchnią jak na mieszkanie 3-pokojowe — 156,17 m² powierzchni całkowitej, z salonem o powierzchni niemal 39 m² i prywatnym tarasem 9,27 m² wychodzącym na ogrody.",
      descP2: "Trzy sypialnie, w tym jedna z własną łazienką, znajdują się w spokojnej części mieszkania. Kuchnia, wyposażona w zabudowany sprzęt Bosch, sąsiaduje z funkcjonalną pralnią.",
      descP3: "Kompleks oferuje basen, zadbane ogrody i wspólne strefy rekreacyjne — wszystko kilka minut od Mariny Vilamoura i plaż Algarve. Do lokalu należy również prywatne miejsce parkingowe.",
      financeTitle: "Wsparcie w Uzyskaniu Kredytu",
      financeText: "Nasz zespół zajmuje się również procesem finansowania w banku, od początku do końca, aby ułatwić zakup.",
      roomsTitle: "Powierzchnie Pomieszczeń",
      room: {
        sala: "Salon", cozinha: "Kuchnia", q1: "Sypialnia 1 (z łazienką)", q2: "Sypialnia 2", q3: "Sypialnia 3",
        wc: "Łazienki (4)", hall: "Hol", galeria: "Korytarz", arrumos: "Schowek", varandas: "Balkony (4)", total: "Powierzchnia Całkowita"
      },
      contactH2: "Zainteresowany tą nieruchomością?",
      phMsg: "Chciałbym umówić wizytę…"
    },
    listing03c: {
      title: "Rzadkie mieszkanie 1-pokojowe<br><em>z prywatnym basenem i ogrodem.</em>",
      sub: "120 m² (wnętrze i taras) na parterze Villa Nature — z prywatnym basenem, własnym ogrodem oraz bezpośrednim dostępem do wspólnego basenu.",
      priceOnRequest: "Cena na zapytanie",
      priceOnRequestShort: "Na Zapytanie",
      ctaInfo: "Poproś o Więcej Informacji →",
      factInterior: "Powierzchnia Wewnętrzna", factTerraco: "Taras", factTipologia: "Układ",
      factWc: "Łazienka", factFloor: "Piętro", factPrice: "Cena",
      descH2: "Nietypowe mieszkanie 1-pokojowe w Villa Nature.",
      descP1: "Ten lokal, na parterze Villa Nature w Vilamoura, wyróżnia się prywatnym tarasem o powierzchni 48,90 m² z własnym basenem — rzadkość w przypadku mieszkania 1-pokojowego. Wewnątrz salon zajmuje 29,54 m², a sypialnia 18,12 m², z w pełni wyposażoną kuchnią i łazienką.",
      descP2: "Kompleks Villa Nature oferuje wspólny basen otoczony drzewami oliwnymi i bambusem oraz zadbane ogrody — wszystko zaprojektowane z myślą o spokojnym, plenerowym stylu życia, kilka minut od centrum Vilamoura.",
      room: {
        sala: "Salon", cozinha: "Kuchnia", quarto: "Sypialnia", hall: "Hol",
        is: "Łazienka", terraco: "Taras", total: "Powierzchnia Całkowita"
      },
      contactH2: "Zainteresowany tą nieruchomością?",
      phMsg: "Chciałbym dowiedzieć się więcej o tej nieruchomości…"
    },
    ferias: {
      hub: {
        label: "Wynajem Wakacyjny",
        h1: "Pobyty, którymi się zajmujemy,<br><em>w każdym szczególe.</em>",
        sub: "Apartamenty na Algarve gotowe na Twój urlop — sprzątanie, zameldowanie i komunikację prowadzi nasz lokalny zespół. To samo zaufanie, które oferujemy właścicielom, których reprezentujemy.",
        listLabel: "Dostępne Noclegi",
        listH2: "Gdzie zatrzymać się na Algarve.",
        card: { price: "Cena na zapytanie", cta: "Zobacz Szczegóły →" }
      },
      label: "Villa Nature · Wynajem Wakacyjny",
      title: "Pobyt z basenem i ogrodami,<br><em>w sercu Vilamoura.</em>",
      sub: "Apartament z widokiem na basen i ogrody kompleksu. Kilka minut od centrum Vilamoura, mariny i plaż — oraz 2 minuty od pól golfowych.",
      ctaBookDirect: "Poproś o Rezerwację",
      factTipologia: "Układ", factWc: "Łazienka", factGuests: "Goście", factBooking: "Rezerwacje", factBookingVal: "Bezpośrednio",
      descH2: "Mieszkanie 2-pokojowe gotowe na Twój urlop.",
      descP1: "Apartament z widokiem na basen i ogrody kompleksu, w spokojnej części Villa Nature. Kilka minut od centrum Vilamoura, mariny i plaż regionu.",
      descP2: "2 minuty jazdy od pól golfowych Vilamoura i około 20 minut od lotniska w Faro. W pełni wyposażona kuchnia, pralka, klimatyzacja i prywatny balkon z widokiem na ogród.",
      amenitiesTitle: "Udogodnienia",
      amen1: "Wspólny basen zewnętrzny", amen2: "Miejsce parkingowe w garażu", amen3: "W pełni wyposażona kuchnia",
      amen4: "Pralka", amen5: "Klimatyzacja", amen6: "Prywatny balkon",
      contactH2: "Gotowy na rezerwację?",
      contactP: "Skontaktuj się z nami bezpośrednio — odpowiadamy w ciągu 24 godzin.",
      formDates: "Preferowane Daty", formDatesPh: "np. 12–19 sierpnia",
      phMsg: "Powiedz nam więcej o swoim pobycie…"
    },
    feriasRobert: {
      label: "ONE Vilamoura · Wynajem Wakacyjny",
      title: "Nowe, przestronne mieszkanie 2-pokojowe,<br><em>w prestiżowym ONE Vilamoura.</em>",
      sub: "Nowoczesny apartament na parterze, z bezpośrednim dostępem do basenu kompleksu. Bardzo dobrze wyposażony, z dużą ilością przestrzeni — jeden z największych apartamentów w kompleksie.",
      descH2: "Nowe, przestronne mieszkanie 2-pokojowe w ONE Vilamoura.",
      descP1: "Nowoczesny, bardzo dobrze wyposażony apartament na parterze ONE Vilamoura, z bezpośrednim dostępem do basenu kompleksu. Jeden z najbardziej przestronnych apartamentów, wewnątrz i na zewnątrz, w całym kompleksie.",
      descP2: "Kilka minut pieszo od centrum Vilamoura, mariny i Praia da Falésia. Łatwo dostępny garaż, z windą tuż przy miejscu parkingowym — a transfer z/na lotnisko dostępny na życzenie.",
      amen2: "Miejsce parkingowe w garażu, z windą",
      amen4: "Bezpłatne Wi-Fi",
      testimonialLabel: "Co Mówią Goście",
      testimonialMeta: "Zweryfikowany Pobyt · 17 Nocy · Lipiec 2025",
      testimonialNote: "Oryginalna recenzja prawdziwego gościa, w języku angielskim."
    },
    feriasBelavista: {
      label: "Belavista Residence · Wynajem Wakacyjny",
      title: "Nowoczesne mieszkanie 2-pokojowe,<br><em>w sercu Quarteiry.</em>",
      sub: "Nowoczesny, w pełni wyposażony apartament ze wspólnym basenem, dużym tarasem i wysokiej jakości wykończeniem — w Belavista Residence, w Quarteirze.",
      poolVal: "Wspólny", factPool: "Basen", factTerrace: "Taras", factLocation: "Lokalizacja",
      descH2: "Nowoczesne mieszkanie 2-pokojowe w Belavista Residence.",
      descP1: "Przestronny, niedawno urządzony apartament z otwartym salonem i kuchnią, dwiema sypialniami — jedną z podwójnym łóżkiem, drugą z pojedynczymi — oraz dwiema pełnymi łazienkami z marmurowym wykończeniem.",
      descP2: "Kompleks Belavista Residence oferuje wspólny basen, a lokal ma duży taras ze strefą wypoczynkową i jadalną — idealny na cieplejsze dni na Algarve.",
      qualityTitle: "Wysokiej Jakości Wykończenie",
      qualityText: "Marmurowe łazienki, w pełni wyposażona kuchnia i wysokiej jakości meble w całym lokalu.",
      amenTerrace: "Taras ze strefą jadalną",
      amenBath: "2 pełne łazienki",
      contactP: "Skontaktuj się z nami, aby poznać ceny i dostępność — odpowiadamy w ciągu 24 godzin."
    }
  }
};

function i18nGet(dict, key) {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict);
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.pt;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18nGet(dict, el.getAttribute('data-i18n'));
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = i18nGet(dict, el.getAttribute('data-i18n-placeholder'));
    if (val !== undefined) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  try { localStorage.setItem('cr_lang', lang); } catch (e) {}
}

function initI18n() {
  let saved = 'pt';
  try { saved = localStorage.getItem('cr_lang') || 'pt'; } catch (e) {}
  applyLang(saved);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyLang(b.dataset.lang));
  });
}
