import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function InverterImagemPtLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-700 dark:text-purple-300 mb-6">
            Inverter Imagem Online - Ferramenta Profissional Gratuita
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
            Transforme suas imagens com nossa poderosa ferramenta para inverter imagem online. Facilmente inverta cores de imagem,
            crie efeitos negativos impressionantes e aplique inversões profissionais de cores sem baixar nenhum software. Nossa
            ferramenta gratuita para inverter imagem online suporta múltiplos modos de inversão incluindo efeitos negativos, inversão de brilho
            e manipulação personalizada de canais de cor.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Seja para inverter imagem online em projetos artísticos, inverter cores específicas para trabalho de design,
            ou simplesmente experimentar com efeitos visuais, nossa ferramenta para inverter imagem online fornece resultados de qualidade profissional
            instantaneamente no seu navegador.
          </p>
          
          {/* Language Links */}
          <div className="flex justify-center gap-4 mb-6">
            <Link href="/tools/en/invert-image" className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">English</Link>
            <Link href="/tools/es/invertir-imagen" className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">Español</Link>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md font-medium">Português</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/tools/pt/inverter-imagem/tool"
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-300/30 text-lg font-semibold"
            >
              Começar a Inverter Imagens →
            </Link>
            <Link
              href="/tools/pt/inverter-imagem/tool"
              target="_blank"
              className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg text-lg font-semibold"
            >
              Abrir em Nova Janela ↗
            </Link>
          </div>

          {/* Tool Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-purple-100 dark:border-purple-900">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
              Experimente a Ferramenta
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
              <iframe
                src="/tools/pt/inverter-imagem/tool"
                className="w-full h-full border-0"
                title="Ferramenta para Inverter Imagem"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Múltiplos Modos para Inverter Imagem Online</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nossa ferramenta para inverter imagem online oferece múltiplos modos profissionais para inverter cores de imagem: efeito negativo para inversões clássicas,
              inversão de brilho para manter relações de cores, e inversão personalizada de canais para controle preciso sobre vermelho, verde e azul.
              Perfeito para criar imagens invertidas com resultados de qualidade profissional quando você inverter imagem online.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Forma Segura de Inverter Imagem Online</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nossa plataforma segura para inverter imagem online processa tudo localmente no seu navegador. Quando você inverter imagem online usando nossa ferramenta,
              suas imagens originais nunca saem do seu dispositivo ou são enviadas para qualquer servidor. Isso garante privacidade e segurança completas
              para suas fotos pessoais e trabalho de design profissional quando você inverter imagem online.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Inversão Instantânea de Cores</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experimente processamento ultrarrápido com nossa ferramenta otimizada para inverter imagem. Inverta cores de imagem instantaneamente 
              sem tempo de espera ou atrasos de upload. Nossa ferramenta pode lidar com imagens de alta resolução e processar múltiplas inversões 
              rapidamente, perfeita para processamento em lote e fluxos de trabalho profissionais.
            </p>
          </div>
        </div>

        {/* O que é Inversão de Imagem */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            O que é Inversão de Imagem e Como Funciona?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Entendendo a Inversão de Cores de Imagem</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A inversão de imagem, também conhecida como inversão de cores ou efeito negativo, é uma técnica de processamento de imagem digital que inverte as cores em uma imagem. 
                Quando você inverte cores de imagem, o valor de cor de cada pixel é matematicamente transformado para seu oposto no espectro de cores. Por exemplo, 
                preto se torna branco, vermelho se torna ciano, e azul se torna amarelo.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nossa ferramenta para inverter imagem usa algoritmos avançados para processar canais de cor RGB individualmente, permitindo controle preciso sobre o processo de inversão. 
                Você pode escolher inverter todas as cores para um efeito negativo completo, ou seletivamente inverter canais de cor específicos para efeitos artísticos criativos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Aplicações Profissionais</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Fotografia:</strong> Crie efeitos negativos artísticos e manipulações fotográficas experimentais para trabalho de portfólio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Design Gráfico:</strong> Gere efeitos visuais únicos para logos, banners e materiais de marketing criativos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Desenvolvimento Web:</strong> Crie efeitos hover, variações de modo escuro e elementos UI interativos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Mídia Impressa:</strong> Prepare imagens para técnicas de impressão especiais e publicações artísticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Educação:</strong> Demonstre conceitos de teoria das cores e princípios de processamento de imagem digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Como Funciona */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Como Usar Nossa Ferramenta Online para Inverter Imagem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Siga estes passos simples para inverter imagem online e criar efeitos negativos profissionais com nossa ferramenta gratuita para inverter imagem online.
            Nenhuma instalação de software necessária - tudo funciona diretamente no seu navegador web quando você inverter imagem online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Carregar Sua Imagem</h3>
              <p className="text-gray-600 dark:text-gray-300">Escolha qualquer arquivo de imagem (JPG, PNG, GIF, WebP, BMP) do seu dispositivo. Nossa ferramenta suporta todos os formatos comuns e mantém a qualidade original.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Selecionar Modo de Inversão</h3>
              <p className="text-gray-600 dark:text-gray-300">Escolha entre múltiplos modos de inversão: efeito negativo, inversão de brilho, ou inversão personalizada de canais de cor. Ajuste intensidade e configurações avançadas conforme necessário.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Inverter Cores Instantaneamente</h3>
              <p className="text-gray-600 dark:text-gray-300">Clique no botão &quot;Inverter Imagem&quot; para aplicar a inversão de cores instantaneamente. Veja sua imagem se transformar com resultados de qualidade profissional em tempo real.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Baixar Imagem Invertida</h3>
              <p className="text-gray-600 dark:text-gray-300">Salve sua imagem invertida profissionalmente no seu dispositivo em alta qualidade. A imagem processada mantém a resolução original e suporta transparência.</p>
            </div>
          </div>
        </div>

        {/* Recursos Avançados */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Recursos Avançados para Inverter Imagem com Resultados Profissionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Controle Preciso de Canais de Cor</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nossa ferramenta avançada para inverter imagem permite que você inverta cores de imagem com precisão sem precedentes. Ao contrário de ferramentas básicas
                que oferecem apenas efeitos negativos simples, nosso inversor profissional de imagem fornece controle individual de canais RGB. Você pode inverter cores imagem
                seletivamente escolhendo canais de cor específicos - vermelho, verde ou azul - para criar efeitos artísticos únicos e manipulações de cor precisas
                que não são possíveis com ferramentas de inversão padrão.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Controle individual de inversão de canais vermelho, verde e azul</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Intensidade de inversão ajustável de 0% a 100%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Visualização em tempo real dos resultados da imagem invertida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Preservação de transparência para imagens PNG</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Modos de Inversão Profissionais</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Modo Efeito Negativo</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Efeito negativo fotográfico clássico que inverte todos os canais de cor simultaneamente. Perfeito para criar imagens negativas tradicionais
                    estilo filme e efeitos de fotografia artística. Este modo é ideal quando você precisa inverter cores imagem completamente para impacto visual dramático.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Modo Inversão de Brilho</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Inversão avançada de brilho que mantém as relações de cor enquanto inverte os valores de luminosidade. Esta abordagem sofisticada para inverter cores imagem
                    preserva a harmonia natural das cores enquanto cria efeitos visuais únicos perfeitos para aplicações artísticas e de design.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Inversão de Canais Personalizada</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Inversão seletiva de canais de cor de nível profissional para manipulação precisa de cores. Escolha exatamente quais canais de cor inverter - vermelho, verde, azul,
                    ou qualquer combinação. Este recurso avançado permite criar efeitos de cor complexos e alcançar visões artísticas específicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Casos de Uso e Aplicações */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Quando e Por Que Inverter Cores de Imagem: Casos de Uso Profissionais
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Aplicações Criativas e Artísticas</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Fotografia e Artes Visuais</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Fotógrafos profissionais usam nossa ferramenta inverter imagem para criar efeitos negativos marcantes, peças de arte experimental e trabalho único de portfólio.
                    Inverta cores imagem para transformar fotos comuns em declarações artísticas extraordinárias. Perfeito para criar retratos dramáticos,
                    paisagens surreais e composições visuais abstratas.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Arte Digital e Ilustração</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Artistas digitais aproveitam nosso inversor avançado de cores imagem para explorar relações de cor, criar variações de arte conceitual e desenvolver estilos visuais únicos.
                    Use inversão seletiva de canais para alcançar paletas de cores específicas e efeitos artísticos que seriam impossíveis de criar manualmente.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Criação de Conteúdo para Redes Sociais</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Criadores de conteúdo usam nosso inversor online de imagem para produzir posts chamativos em redes sociais, stories do Instagram e conteúdo viral.
                    Imagens invertidas se destacam nos feeds sociais e criam impacto visual memorável que aumenta o engajamento e compartilhamentos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Aplicações Profissionais e Técnicas</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Design Gráfico e Branding</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Designers gráficos utilizam nossa ferramenta para inverter cores imagem para variações de logo, exploração de cores de marca e criação de conceitos de design alternativos.
                    Inverta cores de imagem para testar como designs funcionam em diferentes esquemas de cor e criar versões de modo escuro de elementos visuais.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Desenvolvimento Web e Design UI</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Desenvolvedores web e designers UI usam nossa ferramenta para criar efeitos hover, variações de tema escuro e elementos visuais interativos.
                    Nosso inversor de imagem ajuda a criar experiências consistentes de modo escuro e componentes dinâmicos de interface de usuário.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Processamento de Documentos e Digitalização</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Processe documentos digitalizados, negativos e desenhos técnicos invertendo cores imagem para melhorar a legibilidade e contraste.
                    Nossa ferramenta é perfeita para converter digitalizações negativas em imagens positivas e melhorar a visibilidade de documentos.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Aplicações Educacionais e de Pesquisa</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Educadores e pesquisadores usam nosso inversor de cores imagem para demonstrar princípios de teoria das cores, criar auxílios visuais e analisar dados de imagem.
                    Perfeito para ensinar conceitos de processamento de imagem digital e fundamentos de ciência das cores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação com Outras Ferramentas */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Por Que Escolher Nossa Ferramenta para Inverter Imagem?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-purple-200 dark:border-purple-700">
                  <th className="text-left p-4 font-semibold text-gray-800 dark:text-white">Recurso</th>
                  <th className="text-center p-4 font-semibold text-purple-700 dark:text-purple-300">Nossa Ferramenta</th>
                  <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Ferramentas Básicas</th>
                  <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Software Desktop</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Controle Individual de Canais</td>
                  <td className="p-4 text-center text-green-600">✓ Avançado</td>
                  <td className="p-4 text-center text-red-600">✗ Não Disponível</td>
                  <td className="p-4 text-center text-yellow-600">~ Limitado</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Sem Instalação de Software</td>
                  <td className="p-4 text-center text-green-600">✓ Baseado no Navegador</td>
                  <td className="p-4 text-center text-green-600">✓ Online</td>
                  <td className="p-4 text-center text-red-600">✗ Requer Instalação</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Privacidade e Segurança</td>
                  <td className="p-4 text-center text-green-600">✓ Processamento Local</td>
                  <td className="p-4 text-center text-red-600">✗ Upload para Servidor</td>
                  <td className="p-4 text-center text-green-600">✓ Local</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Múltiplos Modos de Inversão</td>
                  <td className="p-4 text-center text-green-600">✓ 4+ Modos</td>
                  <td className="p-4 text-center text-red-600">✗ Apenas Básico</td>
                  <td className="p-4 text-center text-yellow-600">~ Alguns</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Visualização em Tempo Real</td>
                  <td className="p-4 text-center text-green-600">✓ Instantânea</td>
                  <td className="p-4 text-center text-yellow-600">~ Lenta</td>
                  <td className="p-4 text-center text-green-600">✓ Rápida</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-800 dark:text-white">Custo</td>
                  <td className="p-4 text-center text-green-600">✓ Grátis Para Sempre</td>
                  <td className="p-4 text-center text-yellow-600">~ Grátis Limitado</td>
                  <td className="p-4 text-center text-red-600">✗ Licença Paga</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Perguntas Frequentes sobre Inverter Cores de Imagem
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                O que significa inverter cores de uma imagem e como funciona?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Inverter cores de uma imagem significa reverter cada valor de cor dos pixels para seu oposto matemático no espectro de cores.
                Quando você inverte cores de imagem, pixels pretos se tornam brancos, vermelho se torna ciano, verde se torna magenta, e azul se torna amarelo.
                Este processo cria um efeito negativo similar aos negativos de fotografia tradicional. Nossa ferramenta para inverter imagem realiza esta
                transformação digitalmente usando algoritmos avançados que processam canais de cor RGB individualmente, permitindo criar imagens invertidas
                com controle preciso sobre o processo de inversão. A fórmula matemática envolve subtrair cada valor de cor de 255 (o valor RGB máximo),
                efetivamente invertendo o espectro de cores.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Esta ferramenta online para inverter imagem é completamente gratuita?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sim, nossa ferramenta online para inverter cores de imagem é 100% gratuita para uso pessoal e comercial. Você pode inverter imagem
                quantas vezes quiser sem taxas ocultas, marcas d&apos;água, requisitos de assinatura ou restrições de uso. Seja você um designer profissional,
                fotógrafo, estudante ou entusiasta, pode usar nossa ferramenta para inverter imagem o quanto precisar sem nenhum custo.
                Acreditamos em fornecer ferramentas de processamento de imagem acessíveis e de alta qualidade para todos, por isso nossos recursos
                avançados como controle individual de canais e múltiplos modos de inversão estão incluídos sem custo.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Quais formatos de imagem a ferramenta para inverter cores suporta?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa ferramenta online para inverter imagem suporta todos os formatos principais incluindo JPG, JPEG, PNG, GIF, WebP e BMP.
                Quando você inverte cores de imagem, a ferramenta preserva automaticamente a transparência em arquivos PNG e mantém a qualidade
                original da imagem durante todo o processo de inversão de cores. Você pode carregar imagens de até 10MB de tamanho para processamento.
                A ferramenta lida com espaços de cor RGB e RGBA, garantindo que fundos transparentes e canais alfa sejam mantidos adequadamente
                na saída da imagem invertida. Para melhores resultados, recomendamos usar formato PNG para imagens com transparência e JPG para fotografias
                sem requisitos de transparência.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Como isso é diferente de simplesmente aplicar um filtro negativo em software de edição de fotos?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enquanto filtros negativos básicos em software de edição de fotos oferecem apenas inversão simples de cor, nosso inversor avançado de cores imagem
                fornece múltiplos modos de inversão sofisticados e opções de controle precisas. Ao contrário de filtros negativos padrão, nossa ferramenta oferece
                controle individual de canais RGB, intensidade de inversão ajustável, modos de inversão que preservam brilho, e capacidades de visualização em tempo real.
                Você pode inverter cores de imagem seletivamente escolhendo canais de cor específicos, criar inversões parciais com níveis de intensidade personalizados,
                e manter relações de cor enquanto inverte a luminosidade. Este nível de controle permite efeitos criativos e resultados profissionais que não são possíveis
                com filtros negativos básicos.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Posso inverter imagem online em dispositivos móveis e tablets?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutamente! Nossa ferramenta para inverter imagem online é totalmente responsiva e otimizada para dispositivos móveis, tablets e computadores desktop.
                Você pode inverter imagem online perfeitamente em navegadores móveis incluindo Safari no iOS, Chrome no Android e outros navegadores móveis. Você pode carregar imagens
                do rolo da câmera do seu dispositivo, aplicar efeitos de inversão e baixar os resultados diretamente para seu dispositivo móvel. A interface amigável ao toque
                torna fácil ajustar configurações e visualizar resultados em telas menores quando você inverter imagem online. Como todo o processamento acontece localmente no seu navegador, você não precisa
                se preocupar com velocidades de upload lentas ou uso de dados ao inverter imagem online em redes móveis.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Meus dados de imagem são seguros ao usar este inversor online de cores imagem?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sim, seus dados de imagem são completamente seguros e privados. Nosso inversor de imagem processa tudo localmente no seu navegador web usando JavaScript do lado do cliente.
                Quando você inverte cores imagem, suas imagens originais nunca saem do seu dispositivo ou são enviadas para qualquer servidor. Isso significa que suas fotos pessoais,
                documentos confidenciais ou trabalho de design proprietário permanecem completamente privados. Todo o processo de inversão de cores acontece no seu dispositivo,
                garantindo máxima segurança e privacidade. Esta abordagem também significa tempos de processamento mais rápidos e nenhuma dependência da velocidade de conexão
                com a internet para o processamento real da imagem.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Qual é a diferença entre o modo efeito negativo e o modo inversão de brilho?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                O modo efeito negativo realiza uma inversão completa de cor revertendo todos os canais de cor RGB simultaneamente, criando uma aparência de negativo fotográfico tradicional.
                Este modo inverte cores de imagem subtraindo cada valor de cor de 255, resultando em preto se tornando branco, vermelho se tornando ciano, etc.
                O modo inversão de brilho, por outro lado, é mais sofisticado - inverte os valores de luminosidade (brilho) enquanto tenta preservar as relações naturais
                de cor e informações de matiz. Isso cria efeitos artísticos únicos onde a imagem aparece invertida mas mantém harmonia de cor mais natural.
                A inversão de brilho é particularmente útil para criar efeitos surreais enquanto mantém a imagem visualmente atraente e menos discordante que efeitos negativos tradicionais.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Posso processar múltiplas imagens em lote ou inverter cores de múltiplas imagens de uma vez?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Atualmente, nossa ferramenta para inverter cores imagem é projetada para processamento de imagem única para garantir desempenho ótimo e experiência do usuário.
                No entanto, você pode processar rapidamente múltiplas imagens usando o botão &quot;Alterar Imagem&quot; para alternar entre diferentes imagens enquanto mantém suas configurações
                de inversão preferidas. Esta abordagem permite aplicar os mesmos efeitos de inversão a múltiplas imagens eficientemente. Para usuários que frequentemente precisam
                inverter cores de imagem em grandes quantidades, recomendamos marcar a ferramenta e usar a mesma sessão do navegador para manter suas configurações personalizadas
                através de múltiplas sessões de processamento de imagem. Estamos considerando adicionar capacidades de processamento em lote em futuras atualizações baseadas em
                feedback de usuários e demanda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
