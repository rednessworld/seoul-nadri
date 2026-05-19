/* ============================================================
   i18n — Seoul Nadri 서울나들이
   Languages: ES (default) · CA · EN
   Always use innerHTML not textContent in applyLang()
   ============================================================ */

const LANG_KEY = 'preferred_lang';

const translations = {

  /* ── ESPAÑOL ─────────────────────────────────────────────── */
  es: {
    /* Accessibility */
    'a11y.skip':     'Saltar al contenido',
    'a11y.back_top': 'Volver al inicio',
    'a11y.whatsapp': 'Reservar por WhatsApp',

    /* Nav */
    'nav.about':   'Nosotros',
    'nav.bbq':     'Korean BBQ',
    'nav.menu':    'Carta',
    'nav.gallery': 'Galería',
    'nav.reviews': 'Reseñas',
    'nav.contact': 'Encuéntranos',
    'nav.reserve': 'Reservar',
    'nav.open':       'Abrir menú',
    'nav.close':      'Cerrar menú',
    'nav.aria.main':   'Navegación principal',
    'nav.aria.mobile': 'Menú de navegación',
    'nav.aria.lang':   'Selector de idioma',
    'nav.aria.footer': 'Navegación del pie de página',
    'nav.aria.logo':   'Seoul Nadri — página de inicio',

    /* Hero */
    'hero.eyebrow':  'Auténtica cocina coreana · Eixample, Barcelona',
    'hero.headline': 'El arte de la cocina coreana tradicional',
    'hero.tagline':  'Sabores de Seúl en el corazón de Barcelona. Parrilla de carbón, banchan artesanal y la calidez de la tradición coreana.',
    'hero.cta.menu':    'Ver Carta',
    'hero.cta.reserve': 'Reservar',

    /* About */
    'about.label':   'Nuestra Historia',
    'about.heading': '나들이 — Una excursión a Seúl',
    'about.p1':      '<strong>나들이 (nadri)</strong> es una palabra coreana que describe ese placer simple y cotidiano de salir de casa, pasear sin destino fijo y disfrutar del momento. En Seoul Nadri, recreamos ese espíritu en cada mesa: el crepitar del carbón, el banchan compartido y el ritual ancestral de cocinar juntos.',
    'about.p2':      'Abrimos nuestras puertas en el Eixample de Barcelona para acercar la gastronomía coreana auténtica a quienes buscan algo más que una cena — una experiencia que transporta.',
    'about.p3':      'Con cada visita llega una generosa selección de <strong>banchan</strong> — platos pequeños y variados que la cocina prepara a diario: kimchi casero, namul de espinacas, brotes de soja marinados... La tradición coreana del compartir, en tu mesa.',

    /* BBQ Experience */
    'bbq.label':   'La Experiencia',
    'bbq.heading': 'Parrilla de carbón en la mesa',
    'bbq.p1':      'En el centro de cada mesa, una parrilla de carbón encendida. Las carnes — panceta ibérica, Black Angus bulgogi, pollo marinado con gochujang — se cocinan despacio mientras conversáis. No hay prisa. Aquí el tiempo lo marca el fuego.',
    'bbq.p2':      'La cocina coreana BBQ no es solo comida: es la excusa para estar juntos. Cada corte se acompaña de sus salsas, lechugas frescas y banchan para crear los bocados perfectos.',
    'bbq.note':    '<strong>Consejo:</strong> Recomendamos reservar con antelación. Seoul Nadri siempre está lleno y queremos que tengáis el tiempo y el espacio que merecéis.',

    /* Menu */
    'menu.aria.tabs': 'Categorías del menú',
    'menu.label':   'La Carta',
    'menu.heading': 'Menú Seoul Nadri',
    'menu.subhead': 'Cocina coreana auténtica · Ingredientes seleccionados · Opciones sin gluten disponibles',

    'menu.tab.bbq':   'Korean BBQ',
    'menu.tab.snack': 'Korean Snack',
    'menu.tab.rice':  'Rice & Noodle',
    'menu.tab.soup':  'Korean Soup',
    'menu.tab.side':  'Side & Postre',
    'menu.tab.sul':   'Korean Sul',
    'menu.tab.wine':  'Wine',

    'menu.cat.bbq':    'Korean BBQ · 돼지고기',
    'menu.cat.snack':  'Korean Snack',
    'menu.cat.rice':   '밥과 국수 · Rice & Noodle',
    'menu.cat.soup':   '찌개 · Korean Soup',
    'menu.cat.sides':  'Side — Acompañamientos',
    'menu.cat.postre': 'Postre',
    'menu.cat.sul':    '주류 · Korean Sul',
    'menu.cat.wine':   'Wine / Vino',

    /* Korean BBQ */
    'menu.bbq.depe.name':    'Depe Samgyeopsal',
    'menu.bbq.depe.kr':      '대패삼겹살',
    'menu.bbq.depe.desc':    'Panceta corte fino a la parrilla de carbón',
    'menu.bbq.iberico.name': 'Iberico Moksal',
    'menu.bbq.iberico.kr':   '이베리코 목살',
    'menu.bbq.iberico.desc': 'Aguja ibérica a la parrilla de carbón',
    'menu.bbq.yangnum.name': 'Yangnum Kalbi',
    'menu.bbq.yangnum.kr':   '갈비양념 목살구이',
    'menu.bbq.yangnum.desc': 'Cerdo marinado en salsa kalbi',

    /* Korean Snack */
    'menu.snk.kimchi.name':     'Kimchi Casero',
    'menu.snk.kimchi.kr':       '직집담근김치',
    'menu.snk.kimchi.desc':     'Kimchi elaborado en Seoul Nadri',
    'menu.snk.mandu.name':      'Bibim Mandu',
    'menu.snk.mandu.kr':        '비빔만두',
    'menu.snk.mandu.desc':      'Empanadillas de verduras con ensalada (6 unidades)',
    'menu.snk.japchae.name':    'Japchae',
    'menu.snk.japchae.kr':      '잡채',
    'menu.snk.japchae.desc':    'Fideo de boniato salteado con ternera y verdura · opción vegetariana',
    'menu.snk.tteok.name':      'Tteokbokki',
    'menu.snk.tteok.kr':        '떡볶이',
    'menu.snk.tteok.desc':      'Pastel de arroz en salsa picante coreana',
    'menu.snk.chicken.name':    'Yangnum Chicken',
    'menu.snk.chicken.kr':      '양념치킨',
    'menu.snk.chicken.desc':    'Pollo frito coreano',
    'menu.snk.kimchijeon.name': 'Kimchijeon',
    'menu.snk.kimchijeon.kr':   '김치전',
    'menu.snk.kimchijeon.desc': 'Pancake de kimchi',
    'menu.snk.haemul.name':     'Haemul Yachejeon',
    'menu.snk.haemul.kr':       '해물 야채전',
    'menu.snk.haemul.desc':     'Pancake de marisco y verdura',

    /* Korean Rice & Noodle */
    'menu.rice.bibimbap.name':   'Tukbegi Bibimbap',
    'menu.rice.bibimbap.kr':     '뚝배기 비빔밥',
    'menu.rice.bibimbap.desc':   'Arroz con carne y verduras en olla caliente, huevo frito y gochujang',
    'menu.rice.bibimbap_v.name': 'Tukbegi Bibimbap Vegano',
    'menu.rice.bibimbap_v.kr':   '야채 뚝배기 비빔밥',
    'menu.rice.bibimbap_v.desc': 'Arroz con verduras en olla caliente, huevo frito y gochujang',
    'menu.rice.bokkumbap.name':  'Bokkumbap',
    'menu.rice.bokkumbap.kr':    '고깃집 볶음밥',
    'menu.rice.bokkumbap.desc':  'Arroz salteado con kimchi y cerdo',
    'menu.rice.chadol.name':     'Chadol Ramen',
    'menu.rice.chadol.kr':       '차돌 파채라면',
    'menu.rice.chadol.desc':     'Ramen picante coreano con ternera chadol y cebolleta',
    'menu.rice.kimchimari.name': 'Kimchimari Guksu',
    'menu.rice.kimchimari.kr':   '김치말이국수',
    'menu.rice.kimchimari.desc': 'Fideo frío en jugo de Baeckkimchi',
    'menu.rice.bibimguksu.name': 'Bibim Guksu',
    'menu.rice.bibimguksu.kr':   '비빔국수',
    'menu.rice.bibimguksu.desc': 'Fideo frío con salsa picante, ensalada y huevo cocido',
    'menu.rice.note':            'BIBIMBAP incluye banchan · 비빔밥은 반찬 포함입니다',

    /* Korean Soup */
    'menu.soup.doenjang.name':  'Doenjang Jjigae',
    'menu.soup.doenjang.kr':    '된장찌개',
    'menu.soup.doenjang.desc':  'Sopa de pasta de soja fermentada con tofu y verduras',
    'menu.soup.kimchi.name':    'Kimchi Jjigae',
    'menu.soup.kimchi.kr':      '김치찌개',
    'menu.soup.kimchi.desc':    'Sopa de kimchi con tofu y cerdo',
    'menu.soup.note':           'SOPA incluye banchan y arroz · 찌개에는 밥과 반찬 함께 드립니다',

    /* Side */
    'menu.side.anchoa.name':       'Anchoa',
    'menu.side.anchoa.kr':         '앤초비무침',
    'menu.side.anchoa.desc':       'Anchoa picada con salsa coreana muchim',
    'menu.side.jumukbap.name':     'Jumuk Bap',
    'menu.side.jumukbap.kr':       '주먹밥',
    'menu.side.jumukbap.desc':     'Arroz con alga y danmuji (nabo encurtido)',
    'menu.side.arroz.name':        'Arroz Blanco',
    'menu.side.arroz.kr':          '밥',
    'menu.side.arroz.desc':        'Arroz al vapor',
    'menu.side.bandeja.name':      'Bandeja Banchan &amp; Ssam',
    'menu.side.bandeja.kr':        '쟁반 가득 반찬',
    'menu.side.bandeja.desc':      'Gran bandeja de banchan y ssam',
    'menu.side.extrabanchan.name': 'Extra Banchan',
    'menu.side.extrabanchan.kr':   '추가 반찬(접시당)',
    'menu.side.extrabanchan.desc': 'Plato extra de banchan',
    'menu.side.lechuga.name':      'Extra Lechuga',
    'menu.side.lechuga.kr':        '추가 상추',
    'menu.side.lechuga.desc':      'Lechuga extra para ssam',
    'menu.side.allergen':          'Diríjase a nuestro personal para información sobre alérgenos',

    /* Postre */
    'menu.pos.brownie.name':  'Brownie Love',
    'menu.pos.brownie.kr':    '브라우니 러브',
    'menu.pos.matcha.name':   'Matcha Cheese Cake',
    'menu.pos.matcha.kr':     '미차 치즈케이크',
    'menu.pos.mango.name':    'Mango Fantasia',
    'menu.pos.mango.kr':      '망고 판타지아',
    'menu.pos.chocopie.name': 'Chocopie',
    'menu.pos.chocopie.kr':   '따뜻한 초코파이',

    /* Sul */
    'menu.sul.cat.somek':     '소맥 SOMEK · Soju + Cerveza',
    'menu.sul.cat.makkoli':   '막걸리 MAKKOLI · Arroz fermentado',
    'menu.sul.cat.trad':      '전통주 TRADICIONAL',
    'menu.sul.cat.cocktail':  '한국칵테일 CÓCTEL COREANO',
    'menu.sul.soju7.detail':  'Soju de fruta — pomelo, uva, yuzu, melocotón, arándano',
    'menu.sul.soju8.detail':  'Hwayo · 25% · 100% Arroz orgánico',
    'menu.sul.somek1.detail': '2 chupitos soju + 1 Cass',
    'menu.sul.somek2.detail': '1 botella soju + 2 Cass',
    'menu.sul.trad1.detail':  'Arroz fermentado y filtrado · 13% · 300ml',
    'menu.sul.trad2.detail':  'Vino de Maesil · Ciruela coreana · 14% · 300ml',
    'menu.sul.trad3.detail':  'Vino Frambuesa Negra · 13% · 375ml',
    'menu.sul.ck5.detail':    'Piña Makkoli Shake · 1l',

    /* Wine */
    'menu.wine.subtitle':       'Vinos seleccionados para maridar con la cocina coreana',
    'menu.wine.cat.blanco':     '화이트 BLANCO',
    'menu.wine.cat.tinto':      '레드 TINTO',
    'menu.wine.cat.espumoso':   '스파클링 ESPUMOSO',

    /* Gallery */
    'gallery.label':   'Galería',
    'gallery.heading': 'Una mirada a Seoul Nadri',
    'gallery.ig.cta':  'Seguir en Instagram',
    'gallery.ig.aria': 'Seguir a @nadri_barcelona en Instagram',

    /* Reviews */
    'reviews.label':   'Reseñas',
    'reviews.heading': 'Lo que dicen nuestros clientes',
    'reviews.count':   'Google Reviews',
    'reviews.link':    'Ver en Google Maps',
    'reviews.stars.aria': '5 de 5 estrellas',
    'reviews.score.aria': '4.7 de 5 estrellas',

    'review.1.text': 'El mejor Korean BBQ de Barcelona. Las carnes son increíbles y el banchan que viene con todo es generosísimo. Reservad con antelación, siempre está lleno.',
    'review.1.name': 'Ana M.',
    'review.2.text': 'Absolutely incredible. The kimchi jjigae and the marinated chicken were outstanding. Staff super helpful even in English. A must in Barcelona.',
    'review.2.name': 'Sarah K.',
    'review.3.text': 'El lloc perfecte per a una nit especial. El bulgogi i els fideus de vidre eren excepcionals. Ambient animat, com si estiguessis a Seül.',
    'review.3.name': 'Jordi P.',
    'review.4.text': 'Vinimos sin reserva y nos acomodaron igual. El pollo frito coreano y el bibimbap en piedra, espectaculares. Ya somos clientes fijos.',
    'review.4.name': 'Carlos R.',

    /* Find Us */
    'findus.aria.map':     'Mapa de Google con la ubicación de Seoul Nadri',
    'findus.label':        'Encuéntranos',
    'findus.heading':      'Visítanos en Barcelona',
    'findus.addr.label':   'Dirección',
    'findus.addr.street':  'Carrer de Roger de Llúria, 24',
    'findus.addr.city':    '08010 Barcelona, España',
    'findus.hours.label':  'Horario',
    'findus.hours.days':   'Miércoles – Domingo',
    'findus.hours.lunch':  '13:00 – 16:30',
    'findus.hours.dinner': '19:30 – 23:30',
    'findus.hours.closed': 'Lunes – Martes',
    'findus.hours.closed.val': 'Cerrado',
    'findus.wa.label':     'WhatsApp',
    'findus.wa.heading':   'Reserva por WhatsApp',
    'findus.wa.desc':      'WhatsApp es nuestra forma principal de gestionar reservas. Escríbenos y te confirmamos en menos de 2 horas durante el horario de apertura.',
    'findus.wa.cta':       'Enviar mensaje',
    'findus.maps.link':    'Abrir en Google Maps',

    /* Footer */
    'footer.tagline':   'Auténtica cocina coreana en el corazón de Barcelona',
    'footer.nav.title': 'Navegación',
    'footer.cnt.title': 'Contacto',
    'footer.privacy':   'Política de privacidad',
    'footer.copy':      '© 2026 Seoul Nadri 서울나들이. Todos los derechos reservados.',

    /* Cookie */
    'cookie.text':      'Usamos cookies analíticas para entender cómo se usa el sitio y mejorar tu experiencia. Puedes elegir qué aceptas.',
    'cookie.accept':    'Aceptar todo',
    'cookie.necessary': 'Solo necesarias',

    /* WhatsApp prefill */
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en Seoul Nadri. ¿Tenéis mesa disponible?',
  },

  /* ── CATALÀ ──────────────────────────────────────────────── */
  ca: {
    'a11y.skip':     'Saltar al contingut',
    'a11y.back_top': "Tornar a l'inici",
    'a11y.whatsapp': 'Reservar per WhatsApp',

    'nav.about':   'Nosaltres',
    'nav.bbq':     'Korean BBQ',
    'nav.menu':    'Carta',
    'nav.gallery': 'Galeria',
    'nav.reviews': 'Ressenyes',
    'nav.contact': 'Troba\'ns',
    'nav.reserve': 'Reservar',
    'nav.open':       'Obrir menú',
    'nav.close':      'Tancar menú',
    'nav.aria.main':   'Navegació principal',
    'nav.aria.mobile': 'Menú de navegació',
    'nav.aria.lang':   'Selector d\'idioma',
    'nav.aria.footer': 'Navegació del peu de pàgina',
    'nav.aria.logo':   'Seoul Nadri — pàgina d\'inici',

    'hero.eyebrow':  'Autèntica cuina coreana · Eixample, Barcelona',
    'hero.headline': 'L\'art de la cuina coreana tradicional',
    'hero.tagline':  'Sabors de Seül al cor de Barcelona. Graella de carbó, banchan artesanal i la calidesa de la tradició coreana.',
    'hero.cta.menu':    'Veure Carta',
    'hero.cta.reserve': 'Reservar',

    'about.label':   'La Nostra Història',
    'about.heading': '나들이 — Una excursió a Seül',
    'about.p1':      '<strong>나들이 (nadri)</strong> és una paraula coreana que descriu aquell plaer simple de sortir de casa, passejar sense destí fix i gaudir del moment. A Seoul Nadri, recreem aquest esperit a cada taula: el crepitar del carbó, el banchan compartit i el ritual ancestral de cuinar junts.',
    'about.p2':      'Obrim les portes a l\'Eixample de Barcelona per apropar la gastronomia coreana autèntica a qui busca quelcom més que un sopar — una experiència que transporta.',
    'about.p3':      'Amb cada visita arriba una generosa selecció de <strong>banchan</strong> — plats petits i variats que la cuina prepara diàriament: kimchi casolà, namul d\'espinacs, brots de soia marinats... La tradició coreana de compartir, a la vostra taula.',

    'bbq.label':   'L\'Experiència',
    'bbq.heading': 'Graella de carbó a taula',
    'bbq.p1':      'Al centre de cada taula, una graella de carbó encesa. Les carns — panxeta ibèrica, Black Angus bulgogi, pollastre marinat amb gochujang — es cuinen a poc a poc mentre converseu. Sense pressa. Aquí el temps el marca el foc.',
    'bbq.p2':      'La cuina coreana BBQ no és només menjar: és l\'excusa per estar junts. Cada tall s\'acompanya de les seves salses, enciam fresc i banchan per crear les mossegades perfectes.',
    'bbq.note':    '<strong>Consell:</strong> Recomanem reservar amb antelació. Seoul Nadri sempre és ple i volem que tingueu el temps i l\'espai que mereixeu.',

    'menu.aria.tabs': 'Categories del menú',
    'menu.label':   'La Carta',
    'menu.heading': 'Menú Seoul Nadri',
    'menu.subhead': 'Cuina coreana autèntica · Ingredients seleccionats · Opcions sense gluten disponibles',

    'menu.tab.bbq':   'Korean BBQ',
    'menu.tab.snack': 'Korean Snack',
    'menu.tab.rice':  'Rice & Noodle',
    'menu.tab.soup':  'Korean Soup',
    'menu.tab.side':  'Side & Postre',
    'menu.tab.sul':   'Korean Sul',
    'menu.tab.wine':  'Wine',

    'menu.cat.bbq':    'Korean BBQ · 돼지고기',
    'menu.cat.snack':  'Korean Snack',
    'menu.cat.rice':   '밥과 국수 · Rice & Noodle',
    'menu.cat.soup':   '찌개 · Korean Soup',
    'menu.cat.sides':  'Side — Acompanyaments',
    'menu.cat.postre': 'Postre',
    'menu.cat.sul':    '주류 · Korean Sul',
    'menu.cat.wine':   'Wine / Vi',

    /* Korean BBQ */
    'menu.bbq.depe.name':    'Depe Samgyeopsal',
    'menu.bbq.depe.kr':      '대패삼겹살',
    'menu.bbq.depe.desc':    'Panxeta tallada fina a la graella de carbó',
    'menu.bbq.iberico.name': 'Iberico Moksal',
    'menu.bbq.iberico.kr':   '이베리코 목살',
    'menu.bbq.iberico.desc': 'Agulla ibèrica a la graella de carbó',
    'menu.bbq.yangnum.name': 'Yangnum Kalbi',
    'menu.bbq.yangnum.kr':   '갈비양념 목살구이',
    'menu.bbq.yangnum.desc': 'Porc marinat en salsa kalbi',

    /* Korean Snack */
    'menu.snk.kimchi.name':     'Kimchi Casolà',
    'menu.snk.kimchi.kr':       '직집담근김치',
    'menu.snk.kimchi.desc':     'Kimchi elaborat a Seoul Nadri',
    'menu.snk.mandu.name':      'Bibim Mandu',
    'menu.snk.mandu.kr':        '비빔만두',
    'menu.snk.mandu.desc':      'Empanadilles de verdures amb amanida (6 unitats)',
    'menu.snk.japchae.name':    'Japchae',
    'menu.snk.japchae.kr':      '잡채',
    'menu.snk.japchae.desc':    'Fideu de moniato saltat amb vedella i verdura · opció vegetariana',
    'menu.snk.tteok.name':      'Tteokbokki',
    'menu.snk.tteok.kr':        '떡볶이',
    'menu.snk.tteok.desc':      'Pastís d\'arròs en salsa picant coreana',
    'menu.snk.chicken.name':    'Yangnum Chicken',
    'menu.snk.chicken.kr':      '양념치킨',
    'menu.snk.chicken.desc':    'Pollastre fregit coreà',
    'menu.snk.kimchijeon.name': 'Kimchijeon',
    'menu.snk.kimchijeon.kr':   '김치전',
    'menu.snk.kimchijeon.desc': 'Pancake de kimchi',
    'menu.snk.haemul.name':     'Haemul Yachejeon',
    'menu.snk.haemul.kr':       '해물 야채전',
    'menu.snk.haemul.desc':     'Pancake de marisc i verdura',

    /* Korean Rice & Noodle */
    'menu.rice.bibimbap.name':   'Tukbegi Bibimbap',
    'menu.rice.bibimbap.kr':     '뚝배기 비빔밥',
    'menu.rice.bibimbap.desc':   'Arròs amb carn i verdures en olla calenta, ou fregit i gochujang',
    'menu.rice.bibimbap_v.name': 'Tukbegi Bibimbap Vegà',
    'menu.rice.bibimbap_v.kr':   '야채 뚝배기 비빔밥',
    'menu.rice.bibimbap_v.desc': 'Arròs amb verdures en olla calenta, ou fregit i gochujang',
    'menu.rice.bokkumbap.name':  'Bokkumbap',
    'menu.rice.bokkumbap.kr':    '고깃집 볶음밥',
    'menu.rice.bokkumbap.desc':  'Arròs saltat amb kimchi i porc',
    'menu.rice.chadol.name':     'Chadol Ramen',
    'menu.rice.chadol.kr':       '차돌 파채라면',
    'menu.rice.chadol.desc':     'Ramen picant coreà amb vedella chadol i ceba tendra',
    'menu.rice.kimchimari.name': 'Kimchimari Guksu',
    'menu.rice.kimchimari.kr':   '김치말이국수',
    'menu.rice.kimchimari.desc': 'Fideu fred en suc de Baeckkimchi',
    'menu.rice.bibimguksu.name': 'Bibim Guksu',
    'menu.rice.bibimguksu.kr':   '비빔국수',
    'menu.rice.bibimguksu.desc': 'Fideu fred amb salsa picant, amanida i ou cuit',
    'menu.rice.note':            'BIBIMBAP inclou banchan · 비빔밥은 반찬 포함입니다',

    /* Korean Soup */
    'menu.soup.doenjang.name':  'Doenjang Jjigae',
    'menu.soup.doenjang.kr':    '된장찌개',
    'menu.soup.doenjang.desc':  'Sopa de pasta de soja fermentada amb tofu i verdures',
    'menu.soup.kimchi.name':    'Kimchi Jjigae',
    'menu.soup.kimchi.kr':      '김치찌개',
    'menu.soup.kimchi.desc':    'Sopa de kimchi amb tofu i porc',
    'menu.soup.note':           'SOPA inclou banchan i arròs · 찌개에는 밥과 반찬 함께 드립니다',

    /* Side */
    'menu.side.anchoa.name':       'Anxova',
    'menu.side.anchoa.kr':         '앤초비무침',
    'menu.side.anchoa.desc':       'Anxova picada amb salsa coreana muchim',
    'menu.side.jumukbap.name':     'Jumuk Bap',
    'menu.side.jumukbap.kr':       '주먹밥',
    'menu.side.jumukbap.desc':     'Arròs amb alga i danmuji (rave en vinagre)',
    'menu.side.arroz.name':        'Arròs Blanc',
    'menu.side.arroz.kr':          '밥',
    'menu.side.arroz.desc':        'Arròs al vapor',
    'menu.side.bandeja.name':      'Safata Banchan &amp; Ssam',
    'menu.side.bandeja.kr':        '쟁반 가득 반찬',
    'menu.side.bandeja.desc':      'Gran safata de banchan i ssam',
    'menu.side.extrabanchan.name': 'Extra Banchan',
    'menu.side.extrabanchan.kr':   '추가 반찬(접시당)',
    'menu.side.extrabanchan.desc': 'Plat extra de banchan',
    'menu.side.lechuga.name':      'Extra Enciam',
    'menu.side.lechuga.kr':        '추가 상추',
    'menu.side.lechuga.desc':      'Enciam extra per a ssam',
    'menu.side.allergen':          'Adreceu-vos al nostre personal per a informació sobre al·lèrgens',

    /* Postre */
    'menu.pos.brownie.name':  'Brownie Love',
    'menu.pos.brownie.kr':    '브라우니 러브',
    'menu.pos.matcha.name':   'Matcha Cheese Cake',
    'menu.pos.matcha.kr':     '미차 치즈케이크',
    'menu.pos.mango.name':    'Mango Fantasia',
    'menu.pos.mango.kr':      '망고 판타지아',
    'menu.pos.chocopie.name': 'Chocopie',
    'menu.pos.chocopie.kr':   '따뜻한 초코파이',

    /* Sul */
    'menu.sul.cat.somek':     '소맥 SOMEK · Soju + Cervesa',
    'menu.sul.cat.makkoli':   '막걸리 MAKKOLI · Arròs fermentat',
    'menu.sul.cat.trad':      '전통주 TRADICIONAL',
    'menu.sul.cat.cocktail':  '한국칵테일 CÒCTEL COREÀ',
    'menu.sul.soju7.detail':  'Soju de fruita — pomelo, raïm, yuzu, préssec, nabiu',
    'menu.sul.soju8.detail':  'Hwayo · 25% · 100% Arròs orgànic',
    'menu.sul.somek1.detail': '2 xupets soju + 1 Cass',
    'menu.sul.somek2.detail': '1 ampolla soju + 2 Cass',
    'menu.sul.trad1.detail':  'Arròs fermentat i filtrat · 13% · 300ml',
    'menu.sul.trad2.detail':  'Vi de Maesil · Pruna coreana · 14% · 300ml',
    'menu.sul.trad3.detail':  'Vi Gerd Negre · 13% · 375ml',
    'menu.sul.ck5.detail':    'Pinya Makkoli Shake · 1l',

    /* Wine */
    'menu.wine.subtitle':     'Vins seleccionats per maridar amb la cuina coreana',
    'menu.wine.cat.blanco':   '화이트 BLANC',
    'menu.wine.cat.tinto':    '레드 NEGRE',
    'menu.wine.cat.espumoso': '스파클링 ESCUMÓS',

    'gallery.label':   'Galeria',
    'gallery.heading': 'Una mirada a Seoul Nadri',
    'gallery.ig.cta':  'Seguir a Instagram',
    'gallery.ig.aria': 'Seguir @nadri_barcelona a Instagram',

    'reviews.label':   'Ressenyes',
    'reviews.heading': 'El que diuen els nostres clients',
    'reviews.count':   'Google Reviews',
    'reviews.link':    'Veure a Google Maps',
    'reviews.stars.aria': '5 de 5 estrelles',
    'reviews.score.aria': '4.7 de 5 estrelles',

    'review.1.text': 'El millor Korean BBQ de Barcelona. Les carns són increïbles i el banchan que ve amb tot és generosíssim. Reserveu amb antelació, sempre és ple.',
    'review.1.name': 'Ana M.',
    'review.2.text': 'Absolutely incredible. The kimchi jjigae and the marinated chicken were outstanding. Staff super helpful even in English. A must in Barcelona.',
    'review.2.name': 'Sarah K.',
    'review.3.text': 'El lloc perfecte per a una nit especial. El bulgogi i els fideus de vidre eren excepcionals. Ambient animat, com si estiguessis a Seül.',
    'review.3.name': 'Jordi P.',
    'review.4.text': 'Vam venir sense reserva i ens van acomodar igualment. El pollastre fregit coreà i el bibimbap en pedra, espectaculars. Ja som clients fixos.',
    'review.4.name': 'Carlos R.',

    'findus.aria.map':     'Mapa de Google amb la ubicació de Seoul Nadri',
    'findus.label':        'Troba\'ns',
    'findus.heading':      'Visita\'ns a Barcelona',
    'findus.addr.label':   'Adreça',
    'findus.addr.street':  'Carrer de Roger de Llúria, 24',
    'findus.addr.city':    '08010 Barcelona, Espanya',
    'findus.hours.label':  'Horari',
    'findus.hours.days':   'Dimecres – Diumenge',
    'findus.hours.lunch':  '13:00 – 16:30',
    'findus.hours.dinner': '19:30 – 23:30',
    'findus.hours.closed': 'Dilluns – Dimarts',
    'findus.hours.closed.val': 'Tancat',
    'findus.wa.label':     'WhatsApp',
    'findus.wa.heading':   'Reserva per WhatsApp',
    'findus.wa.desc':      'WhatsApp és la nostra forma principal de gestionar reserves. Escriu-nos i et confirmem en menys de 2 hores durant l\'horari d\'obertura.',
    'findus.wa.cta':       'Enviar missatge',
    'findus.maps.link':    'Obrir a Google Maps',

    'footer.tagline':   'Autèntica cuina coreana al cor de Barcelona',
    'footer.nav.title': 'Navegació',
    'footer.cnt.title': 'Contacte',
    'footer.privacy':   'Política de privacitat',
    'footer.copy':      '© 2026 Seoul Nadri 서울나들이. Tots els drets reservats.',

    'cookie.text':      'Fem servir cookies analítiques per entendre com s\'usa el lloc i millorar l\'experiència. Pots triar què acceptes.',
    'cookie.accept':    'Acceptar tot',
    'cookie.necessary': 'Només necessàries',

    'whatsapp.message': 'Hola, m\'agradaria fer una reserva a Seoul Nadri. Teniu taula disponible?',
  },

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {
    'a11y.skip':     'Skip to content',
    'a11y.back_top': 'Back to top',
    'a11y.whatsapp': 'Reserve via WhatsApp',

    'nav.about':   'About',
    'nav.bbq':     'Korean BBQ',
    'nav.menu':    'Menu',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Find Us',
    'nav.reserve': 'Reserve',
    'nav.open':       'Open menu',
    'nav.close':      'Close menu',
    'nav.aria.main':   'Main navigation',
    'nav.aria.mobile': 'Navigation menu',
    'nav.aria.lang':   'Language selector',
    'nav.aria.footer': 'Footer navigation',
    'nav.aria.logo':   'Seoul Nadri — home',

    'hero.eyebrow':  'Authentic Korean cuisine · Eixample, Barcelona',
    'hero.headline': 'The art of traditional Korean cuisine',
    'hero.tagline':  'Flavours of Seoul in the heart of Barcelona. Charcoal grill, artisanal banchan and the warmth of Korean tradition.',
    'hero.cta.menu':    'View Menu',
    'hero.cta.reserve': 'Reserve',

    'about.label':   'Our Story',
    'about.heading': '나들이 — An Excursion to Seoul',
    'about.p1':      '<strong>나들이 (nadri)</strong> is a Korean word that describes the simple, everyday pleasure of leaving home, wandering without a fixed destination and enjoying the moment. At Seoul Nadri, we recreate that spirit at every table: the crackling of charcoal, shared banchan and the ancestral ritual of cooking together.',
    'about.p2':      'We opened our doors in Barcelona\'s Eixample to bring authentic Korean gastronomy to those seeking something more than a dinner — an experience that transports.',
    'about.p3':      'With every visit comes a generous selection of <strong>banchan</strong> — small, varied dishes the kitchen prepares daily: homemade kimchi, spinach namul, marinated bean sprouts... The Korean tradition of sharing, at your table.',

    'bbq.label':   'The Experience',
    'bbq.heading': 'Charcoal grill at your table',
    'bbq.p1':      'At the centre of every table, a lit charcoal grill. The meats — Iberian pork belly, Black Angus bulgogi, gochujang-marinated chicken — cook slowly as you talk. No rush. Here the fire sets the pace.',
    'bbq.p2':      'Korean BBQ is not just food: it\'s the excuse to be together. Every cut is served with its own sauces, fresh lettuce wraps and banchan to create the perfect bites.',
    'bbq.note':    '<strong>Tip:</strong> We recommend booking in advance. Seoul Nadri is always full and we want you to have the time and space you deserve.',

    'menu.aria.tabs': 'Menu categories',
    'menu.label':   'Menu',
    'menu.heading': 'Seoul Nadri Menu',
    'menu.subhead': 'Authentic Korean cuisine · Selected ingredients · Gluten-free options available',

    'menu.tab.bbq':   'Korean BBQ',
    'menu.tab.snack': 'Korean Snack',
    'menu.tab.rice':  'Rice & Noodle',
    'menu.tab.soup':  'Korean Soup',
    'menu.tab.side':  'Side & Dessert',
    'menu.tab.sul':   'Korean Sul',
    'menu.tab.wine':  'Wine',

    'menu.cat.bbq':    'Korean BBQ · 돼지고기',
    'menu.cat.snack':  'Korean Snack',
    'menu.cat.rice':   '밥과 국수 · Rice & Noodle',
    'menu.cat.soup':   '찌개 · Korean Soup',
    'menu.cat.sides':  'Side — Accompaniments',
    'menu.cat.postre': 'Dessert',
    'menu.cat.sul':    '주류 · Korean Sul',
    'menu.cat.wine':   'Wine',

    /* Korean BBQ */
    'menu.bbq.depe.name':    'Depe Samgyeopsal',
    'menu.bbq.depe.kr':      '대패삼겹살',
    'menu.bbq.depe.desc':    'Finely cut pork belly grilled over charcoal',
    'menu.bbq.iberico.name': 'Iberico Moksal',
    'menu.bbq.iberico.kr':   '이베리코 목살',
    'menu.bbq.iberico.desc': 'Iberico pork neck grilled over charcoal',
    'menu.bbq.yangnum.name': 'Yangnum Kalbi',
    'menu.bbq.yangnum.kr':   '갈비양념 목살구이',
    'menu.bbq.yangnum.desc': 'Pork neck marinated in kalbi sauce',

    /* Korean Snack */
    'menu.snk.kimchi.name':     'House Kimchi',
    'menu.snk.kimchi.kr':       '직집담근김치',
    'menu.snk.kimchi.desc':     'Kimchi made in-house at Seoul Nadri',
    'menu.snk.mandu.name':      'Bibim Mandu',
    'menu.snk.mandu.kr':        '비빔만두',
    'menu.snk.mandu.desc':      'Vegetable dumplings with salad (6 pieces)',
    'menu.snk.japchae.name':    'Japchae',
    'menu.snk.japchae.kr':      '잡채',
    'menu.snk.japchae.desc':    'Stir-fried glass noodles with beef and vegetables · vegetarian option',
    'menu.snk.tteok.name':      'Tteokbokki',
    'menu.snk.tteok.kr':        '떡볶이',
    'menu.snk.tteok.desc':      'Korean spicy rice cakes',
    'menu.snk.chicken.name':    'Yangnum Chicken',
    'menu.snk.chicken.kr':      '양념치킨',
    'menu.snk.chicken.desc':    'Korean fried chicken',
    'menu.snk.kimchijeon.name': 'Kimchijeon',
    'menu.snk.kimchijeon.kr':   '김치전',
    'menu.snk.kimchijeon.desc': 'Kimchi pancake',
    'menu.snk.haemul.name':     'Haemul Yachejeon',
    'menu.snk.haemul.kr':       '해물 야채전',
    'menu.snk.haemul.desc':     'Seafood and vegetable pancake',

    /* Korean Rice & Noodle */
    'menu.rice.bibimbap.name':   'Tukbegi Bibimbap',
    'menu.rice.bibimbap.kr':     '뚝배기 비빔밥',
    'menu.rice.bibimbap.desc':   'Rice with beef and vegetables in a hot bowl, fried egg and gochujang',
    'menu.rice.bibimbap_v.name': 'Tukbegi Bibimbap Vegan',
    'menu.rice.bibimbap_v.kr':   '야채 뚝배기 비빔밥',
    'menu.rice.bibimbap_v.desc': 'Rice with vegetables in a hot bowl, fried egg and gochujang',
    'menu.rice.bokkumbap.name':  'Bokkumbap',
    'menu.rice.bokkumbap.kr':    '고깃집 볶음밥',
    'menu.rice.bokkumbap.desc':  'Stir-fried rice with kimchi and pork',
    'menu.rice.chadol.name':     'Chadol Ramen',
    'menu.rice.chadol.kr':       '차돌 파채라면',
    'menu.rice.chadol.desc':     'Korean spicy ramen with chadol beef and spring onion',
    'menu.rice.kimchimari.name': 'Kimchimari Guksu',
    'menu.rice.kimchimari.kr':   '김치말이국수',
    'menu.rice.kimchimari.desc': 'Cold noodles in Baeckkimchi juice',
    'menu.rice.bibimguksu.name': 'Bibim Guksu',
    'menu.rice.bibimguksu.kr':   '비빔국수',
    'menu.rice.bibimguksu.desc': 'Spicy cold noodles with salad and boiled egg',
    'menu.rice.note':            'BIBIMBAP includes banchan · 비빔밥은 반찬 포함입니다',

    /* Korean Soup */
    'menu.soup.doenjang.name':  'Doenjang Jjigae',
    'menu.soup.doenjang.kr':    '된장찌개',
    'menu.soup.doenjang.desc':  'Fermented soybean paste soup with tofu and vegetables',
    'menu.soup.kimchi.name':    'Kimchi Jjigae',
    'menu.soup.kimchi.kr':      '김치찌개',
    'menu.soup.kimchi.desc':    'Kimchi soup with tofu and pork',
    'menu.soup.note':           'SOUP includes banchan and rice · 찌개에는 밥과 반찬 함께 드립니다',

    /* Side */
    'menu.side.anchoa.name':       'Anchovy',
    'menu.side.anchoa.kr':         '앤초비무침',
    'menu.side.anchoa.desc':       'Minced anchovy with Korean muchim sauce',
    'menu.side.jumukbap.name':     'Jumuk Bap',
    'menu.side.jumukbap.kr':       '주먹밥',
    'menu.side.jumukbap.desc':     'Rice with seaweed and danmuji (pickled radish)',
    'menu.side.arroz.name':        'Steamed Rice',
    'menu.side.arroz.kr':          '밥',
    'menu.side.arroz.desc':        'Plain steamed rice',
    'menu.side.bandeja.name':      'Banchan &amp; Ssam Platter',
    'menu.side.bandeja.kr':        '쟁반 가득 반찬',
    'menu.side.bandeja.desc':      'Big platter of banchan and ssam',
    'menu.side.extrabanchan.name': 'Extra Banchan',
    'menu.side.extrabanchan.kr':   '추가 반찬(접시당)',
    'menu.side.extrabanchan.desc': 'Extra plate of banchan',
    'menu.side.lechuga.name':      'Extra Lettuce',
    'menu.side.lechuga.kr':        '추가 상추',
    'menu.side.lechuga.desc':      'Extra lettuce for ssam',
    'menu.side.allergen':          'Please let our staff know if you would like allergen information',

    /* Dessert */
    'menu.pos.brownie.name':  'Brownie Love',
    'menu.pos.brownie.kr':    '브라우니 러브',
    'menu.pos.matcha.name':   'Matcha Cheese Cake',
    'menu.pos.matcha.kr':     '미차 치즈케이크',
    'menu.pos.mango.name':    'Mango Fantasia',
    'menu.pos.mango.kr':      '망고 판타지아',
    'menu.pos.chocopie.name': 'Chocopie',
    'menu.pos.chocopie.kr':   '따뜻한 초코파이',

    /* Sul */
    'menu.sul.cat.somek':     '소맥 SOMEK · Soju + Beer',
    'menu.sul.cat.makkoli':   '막걸리 MAKKOLI · Fermented rice wine',
    'menu.sul.cat.trad':      '전통주 TRADITIONAL',
    'menu.sul.cat.cocktail':  '한국칵테일 KOREAN COCKTAILS',
    'menu.sul.soju7.detail':  'Fruit soju — grapefruit, grape, yuzu, peach, blueberry',
    'menu.sul.soju8.detail':  'Hwayo · 25% · 100% Organic rice',
    'menu.sul.somek1.detail': '2 soju shots + 1 Cass',
    'menu.sul.somek2.detail': '1 bottle soju + 2 Cass',
    'menu.sul.trad1.detail':  'Fermented and filtered rice wine · 13% · 300ml',
    'menu.sul.trad2.detail':  'Maesil wine · Korean plum · 14% · 300ml',
    'menu.sul.trad3.detail':  'Black Raspberry wine · 13% · 375ml',
    'menu.sul.ck5.detail':    'Pineapple Makkoli Shake · 1l',

    /* Wine */
    'menu.wine.subtitle':     'Wines selected to pair with Korean cuisine',
    'menu.wine.cat.blanco':   '화이트 WHITE',
    'menu.wine.cat.tinto':    '레드 RED',
    'menu.wine.cat.espumoso': '스파클링 SPARKLING',

    'gallery.label':   'Gallery',
    'gallery.heading': 'A look at Seoul Nadri',
    'gallery.ig.cta':  'Follow on Instagram',
    'gallery.ig.aria': 'Follow @nadri_barcelona on Instagram',

    'reviews.label':   'Reviews',
    'reviews.heading': 'What our guests say',
    'reviews.count':   'Google Reviews',
    'reviews.link':    'View on Google Maps',
    'reviews.stars.aria': '5 out of 5 stars',
    'reviews.score.aria': '4.7 out of 5 stars',

    'review.1.text': 'The best Korean BBQ in Barcelona. The meats are incredible and the banchan that comes with everything is incredibly generous. Book in advance — it\'s always full.',
    'review.1.name': 'Ana M.',
    'review.2.text': 'Absolutely incredible. The kimchi jjigae and the marinated chicken were outstanding. Staff super helpful even in English. A must in Barcelona.',
    'review.2.name': 'Sarah K.',
    'review.3.text': 'The perfect place for a special night. The bulgogi and the glass noodles were exceptional. Lively atmosphere, as if you were in Seoul.',
    'review.3.name': 'Jordi P.',
    'review.4.text': 'We came without a reservation and they found us a table anyway. The Korean fried chicken and stone-pot bibimbap were spectacular. We\'re regulars now.',
    'review.4.name': 'Carlos R.',

    'findus.aria.map':     'Google map showing the location of Seoul Nadri',
    'findus.label':        'Find Us',
    'findus.heading':      'Visit us in Barcelona',
    'findus.addr.label':   'Address',
    'findus.addr.street':  'Carrer de Roger de Llúria, 24',
    'findus.addr.city':    '08010 Barcelona, Spain',
    'findus.hours.label':  'Hours',
    'findus.hours.days':   'Wednesday – Sunday',
    'findus.hours.lunch':  '1:00 pm – 4:30 pm',
    'findus.hours.dinner': '7:30 pm – 11:30 pm',
    'findus.hours.closed': 'Monday – Tuesday',
    'findus.hours.closed.val': 'Closed',
    'findus.wa.label':     'WhatsApp',
    'findus.wa.heading':   'Reserve via WhatsApp',
    'findus.wa.desc':      'WhatsApp is our primary way to manage reservations. Message us and we\'ll confirm within 2 hours during opening hours.',
    'findus.wa.cta':       'Send a message',
    'findus.maps.link':    'Open in Google Maps',

    'footer.tagline':   'Authentic Korean cuisine in the heart of Barcelona',
    'footer.nav.title': 'Navigation',
    'footer.cnt.title': 'Contact',
    'footer.privacy':   'Privacy policy',
    'footer.copy':      '© 2026 Seoul Nadri 서울나들이. All rights reserved.',

    'cookie.text':      'We use analytics cookies to understand how you use this site and improve your experience. You can accept necessary cookies only.',
    'cookie.accept':    'Accept all',
    'cookie.necessary': 'Necessary only',

    'whatsapp.message': 'Hello, I\'d like to make a reservation at Seoul Nadri. Do you have a table available?',
  },
};

/* ── Public API ──────────────────────────────────────────── */

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'es';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Swap text — always innerHTML to preserve child HTML (links, strong, etc.) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Swap placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Swap aria-label attributes */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  /* Update both WhatsApp buttons with localised pre-fill */
  ['whatsapp-btn', 'whatsapp-find-us'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn && t['whatsapp.message']) {
      const phone = btn.dataset.phone;
      btn.href = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(t['whatsapp.message'])}`;
    }
  });

  /* Sync all lang-btn active states */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Update <html lang> */
  const langMap = { es: 'es', ca: 'ca', en: 'en' };
  document.documentElement.lang = langMap[lang] || 'es';

  localStorage.setItem(LANG_KEY, lang);
}

function initLang() {
  applyLang(getLang());
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

initLang();
