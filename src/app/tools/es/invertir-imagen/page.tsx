import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function InvertirImagenEsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-700 dark:text-purple-300 mb-6">
            Invertir Imagen Online - Herramienta Profesional Gratuita
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
            Transforma tus imágenes con nuestra potente herramienta online para invertir imagen. Fácilmente invierte colores de una imagen, 
            crea impresionantes efectos negativos y aplica inversiones profesionales de colores sin descargar ningún software. Nuestro 
            inversor de colores gratuito soporta múltiples modos de inversión incluyendo efectos negativos, inversión de brillo y manipulación 
            personalizada de canales de color.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Ya sea que necesites invertir colores imagen para proyectos artísticos, crear imágenes invertidas para trabajo de diseño, 
            o simplemente experimentar con efectos visuales, nuestra herramienta online proporciona resultados de calidad profesional 
            instantáneamente en tu navegador.
          </p>
          
          {/* Language Links */}
          <div className="flex justify-center gap-4 mb-6">
            <Link href="/tools/en/invert-image" className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">English</Link>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md font-medium">Español</span>
            <Link href="/tools/pt/inverter-imagem" className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">Português</Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/tools/es/invertir-imagen/tool"
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-300/30 text-lg font-semibold"
            >
              Comenzar a Invertir Imágenes →
            </Link>
            <Link
              href="/tools/es/invertir-imagen/tool"
              target="_blank"
              className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg text-lg font-semibold"
            >
              Abrir en Nueva Ventana ↗
            </Link>
          </div>

          {/* Tool Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-purple-100 dark:border-purple-900">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
              Prueba la Herramienta
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
              <iframe
                src="/tools/es/invertir-imagen/tool"
                className="w-full h-full border-0"
                title="Herramienta para Invertir Imagen"
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
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Múltiples Modos de Inversión de Colores</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nuestra herramienta para invertir imagen ofrece múltiples modos profesionales para invertir colores imagen: efecto negativo para inversiones clásicas, 
              inversión de brillo para mantener relaciones de color, e inversión personalizada de canales para control preciso sobre rojo, verde y azul. 
              Perfecto para crear imágenes invertidas con resultados de calidad profesional.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Procesamiento Seguro Online</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nuestra herramienta online para invertir imagen procesa todo localmente en tu navegador. Cuando inviertes colores de una imagen, 
              tus imágenes originales nunca salen de tu dispositivo ni se suben a ningún servidor. Esto garantiza privacidad y seguridad completas 
              para tus fotos personales y trabajo de diseño profesional.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Inversión Instantánea de Colores</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experimenta procesamiento ultrarrápido con nuestra herramienta optimizada para invertir imagen. Invierte colores de una imagen instantáneamente 
              sin tiempo de espera o retrasos de carga. Nuestra herramienta puede manejar imágenes de alta resolución y procesar múltiples inversiones 
              rápidamente, perfecta para procesamiento por lotes y flujos de trabajo profesionales.
            </p>
          </div>
        </div>

        {/* Qué es la Inversión de Imagen */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            ¿Qué es la Inversión de Imagen y Cómo Funciona?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Entendiendo la Inversión de Colores de Imagen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                La inversión de imagen, también conocida como inversión de colores o efecto negativo, es una técnica de procesamiento de imagen digital que invierte los colores en una imagen. 
                Cuando inviertes colores de una imagen, el valor de color de cada píxel se transforma matemáticamente a su opuesto en el espectro de colores. Por ejemplo, 
                el negro se convierte en blanco, el rojo se convierte en cian, y el azul se convierte en amarillo.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nuestra herramienta para invertir imagen utiliza algoritmos avanzados para procesar canales de color RGB individualmente, permitiendo control preciso sobre el proceso de inversión. 
                Puedes elegir invertir todos los colores para un efecto negativo completo, o invertir selectivamente canales de color específicos para efectos artísticos creativos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Aplicaciones Profesionales</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Fotografía:</strong> Crea efectos negativos artísticos y manipulaciones fotográficas experimentales para trabajo de portafolio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Diseño Gráfico:</strong> Genera efectos visuales únicos para logos, banners y materiales de marketing creativos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Desarrollo Web:</strong> Crea efectos hover, variaciones de modo oscuro y elementos UI interactivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Medios Impresos:</strong> Prepara imágenes para técnicas de impresión especiales y publicaciones artísticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Educación:</strong> Demuestra conceptos de teoría del color y principios de procesamiento de imagen digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cómo Funciona */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Cómo Usar Nuestra Herramienta Online para Invertir Imagen
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Sigue estos pasos simples para invertir colores de una imagen y crear efectos negativos profesionales con nuestra herramienta gratuita online. 
            No se requiere instalación de software - todo funciona directamente en tu navegador web.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Subir Tu Imagen</h3>
              <p className="text-gray-600 dark:text-gray-300">Elige cualquier archivo de imagen (JPG, PNG, GIF, WebP, BMP) desde tu dispositivo. Nuestra herramienta soporta todos los formatos comunes y mantiene la calidad original.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Seleccionar Modo de Inversión</h3>
              <p className="text-gray-600 dark:text-gray-300">Elige entre múltiples modos de inversión: efecto negativo, inversión de brillo, o inversión personalizada de canales de color. Ajusta intensidad y configuraciones avanzadas según necesites.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Invertir Colores Instantáneamente</h3>
              <p className="text-gray-600 dark:text-gray-300">Haz clic en el botón &quot;Invertir Imagen&quot; para aplicar la inversión de colores instantáneamente. Observa cómo tu imagen se transforma con resultados de calidad profesional en tiempo real.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Descargar Imagen Invertida</h3>
              <p className="text-gray-600 dark:text-gray-300">Guarda tu imagen invertida profesionalmente en tu dispositivo en alta calidad. La imagen procesada mantiene la resolución original y soporta transparencia.</p>
            </div>
          </div>
        </div>

        {/* Características Avanzadas */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Características Avanzadas para Invertir Imagen con Resultados Profesionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Control Preciso de Canales de Color</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nuestra herramienta avanzada para invertir imagen te permite invertir colores de una imagen con precisión sin precedentes. A diferencia de herramientas básicas
                que solo ofrecen efectos negativos simples, nuestro inversor profesional de imagen proporciona control individual de canales RGB. Puedes invertir colores imagen
                selectivamente eligiendo canales de color específicos - rojo, verde o azul - para crear efectos artísticos únicos y manipulaciones de color precisas
                que no son posibles con herramientas de inversión estándar.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Control individual de inversión de canales rojo, verde y azul</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Intensidad de inversión ajustable del 0% al 100%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Vista previa en tiempo real de resultados de imagen invertida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Preservación de transparencia para imágenes PNG</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Modos de Inversión Profesionales</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Modo Efecto Negativo</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Efecto negativo fotográfico clásico que invierte todos los canales de color simultáneamente. Perfecto para crear imágenes negativas tradicionales
                    estilo película y efectos de fotografía artística. Este modo es ideal cuando necesitas invertir colores imagen completamente para un impacto visual dramático.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Modo Inversión de Brillo</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Inversión avanzada de brillo que mantiene las relaciones de color mientras invierte los valores de luminosidad. Este enfoque sofisticado para invertir colores imagen
                    preserva la armonía natural del color mientras crea efectos visuales únicos perfectos para aplicaciones artísticas y de diseño.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Inversión de Canales Personalizada</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Inversión selectiva de canales de color de grado profesional para manipulación precisa de colores. Elige exactamente qué canales de color invertir - rojo, verde, azul,
                    o cualquier combinación. Esta característica avanzada te permite crear efectos de color complejos y lograr visiones artísticas específicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Casos de Uso y Aplicaciones */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Cuándo y Por Qué Invertir Colores de una Imagen: Casos de Uso Profesionales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Aplicaciones Creativas y Artísticas</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Fotografía y Artes Visuales</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Los fotógrafos profesionales usan nuestra herramienta invertir imagen para crear efectos negativos impactantes, piezas de arte experimental y trabajo único de portafolio.
                    Invierte colores imagen para transformar fotos ordinarias en declaraciones artísticas extraordinarias. Perfecto para crear retratos dramáticos,
                    paisajes surrealistas y composiciones visuales abstractas.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Arte Digital e Ilustración</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Los artistas digitales aprovechan nuestro inversor avanzado de colores imagen para explorar relaciones de color, crear variaciones de arte conceptual y desarrollar estilos visuales únicos.
                    Usa inversión selectiva de canales para lograr paletas de colores específicas y efectos artísticos que serían imposibles de crear manualmente.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Creación de Contenido para Redes Sociales</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Los creadores de contenido usan nuestro inversor online de imagen para producir publicaciones llamativas en redes sociales, historias de Instagram y contenido viral.
                    Las imágenes invertidas destacan en los feeds sociales y crean impacto visual memorable que aumenta el engagement y las compartidas.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Aplicaciones Profesionales y Técnicas</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Diseño Gráfico y Branding</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Los diseñadores gráficos utilizan nuestra herramienta para invertir colores imagen para variaciones de logo, exploración de colores de marca y creación de conceptos de diseño alternativos.
                    Invierte colores de una imagen para probar cómo funcionan los diseños en diferentes esquemas de color y crear versiones de modo oscuro de elementos visuales.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Desarrollo Web y Diseño UI</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Los desarrolladores web y diseñadores UI usan nuestra herramienta para crear efectos hover, variaciones de tema oscuro y elementos visuales interactivos.
                    Nuestro inversor de imagen ayuda a crear experiencias consistentes de modo oscuro y componentes dinámicos de interfaz de usuario.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Procesamiento de Documentos y Escaneo</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Procesa documentos escaneados, negativos y dibujos técnicos invirtiendo colores imagen para mejorar la legibilidad y el contraste.
                    Nuestra herramienta es perfecta para convertir escaneos negativos a imágenes positivas y mejorar la visibilidad de documentos.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Aplicaciones Educativas y de Investigación</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Educadores e investigadores usan nuestro inversor de colores imagen para demostrar principios de teoría del color, crear ayudas visuales y analizar datos de imagen.
                    Perfecto para enseñar conceptos de procesamiento de imagen digital y fundamentos de ciencia del color.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparación con Otras Herramientas */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            ¿Por Qué Elegir Nuestra Herramienta para Invertir Imagen?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-purple-200 dark:border-purple-700">
                  <th className="text-left p-4 font-semibold text-gray-800 dark:text-white">Característica</th>
                  <th className="text-center p-4 font-semibold text-purple-700 dark:text-purple-300">Nuestra Herramienta</th>
                  <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Herramientas Básicas</th>
                  <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Software Desktop</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Control Individual de Canales</td>
                  <td className="p-4 text-center text-green-600">✓ Avanzado</td>
                  <td className="p-4 text-center text-red-600">✗ No Disponible</td>
                  <td className="p-4 text-center text-yellow-600">~ Limitado</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Sin Instalación de Software</td>
                  <td className="p-4 text-center text-green-600">✓ Basado en Navegador</td>
                  <td className="p-4 text-center text-green-600">✓ Online</td>
                  <td className="p-4 text-center text-red-600">✗ Requiere Instalación</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Privacidad y Seguridad</td>
                  <td className="p-4 text-center text-green-600">✓ Procesamiento Local</td>
                  <td className="p-4 text-center text-red-600">✗ Subida a Servidor</td>
                  <td className="p-4 text-center text-green-600">✓ Local</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Múltiples Modos de Inversión</td>
                  <td className="p-4 text-center text-green-600">✓ 4+ Modos</td>
                  <td className="p-4 text-center text-red-600">✗ Solo Básico</td>
                  <td className="p-4 text-center text-yellow-600">~ Algunos</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Vista Previa en Tiempo Real</td>
                  <td className="p-4 text-center text-green-600">✓ Instantánea</td>
                  <td className="p-4 text-center text-yellow-600">~ Lenta</td>
                  <td className="p-4 text-center text-green-600">✓ Rápida</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-800 dark:text-white">Costo</td>
                  <td className="p-4 text-center text-green-600">✓ Gratis Para Siempre</td>
                  <td className="p-4 text-center text-yellow-600">~ Gratis Limitado</td>
                  <td className="p-4 text-center text-red-600">✗ Licencia Pagada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Preguntas Frecuentes sobre Invertir Colores de una Imagen
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Qué significa invertir colores de una imagen y cómo funciona?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Invertir colores de una imagen significa revertir cada valor de color de los píxeles a su opuesto matemático en el espectro de colores.
                Cuando inviertes colores imagen, los píxeles negros se vuelven blancos, el rojo se convierte en cian, el verde en magenta, y el azul en amarillo.
                Este proceso crea un efecto negativo similar a los negativos de fotografía tradicional. Nuestra herramienta para invertir imagen realiza esta
                transformación digitalmente usando algoritmos avanzados que procesan canales de color RGB individualmente, permitiéndote crear imágenes invertidas
                con control preciso sobre el proceso de inversión. La fórmula matemática involucra restar cada valor de color de 255 (el valor RGB máximo),
                efectivamente volteando el espectro de color.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Es completamente gratuita esta herramienta online para invertir imagen?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sí, nuestra herramienta online para invertir colores de una imagen es 100% gratuita para uso personal y comercial. Puedes invertir imagen
                ilimitadas veces sin tarifas ocultas, marcas de agua, requisitos de suscripción o restricciones de uso. Ya seas un diseñador profesional,
                fotógrafo, estudiante o aficionado, puedes usar nuestra herramienta para invertir imagen tanto como necesites sin ningún costo.
                Creemos en proporcionar herramientas de procesamiento de imagen accesibles y de alta calidad para todos, por eso nuestras características
                avanzadas como control individual de canales y múltiples modos de inversión están incluidas sin cargo.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Qué formatos de imagen soporta la herramienta para invertir colores?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nuestra herramienta online para invertir imagen soporta todos los formatos principales incluyendo JPG, JPEG, PNG, GIF, WebP y BMP.
                Cuando inviertes colores de una imagen, la herramienta preserva automáticamente la transparencia en archivos PNG y mantiene la calidad
                original de la imagen durante todo el proceso de inversión de colores. Puedes subir imágenes de hasta 10MB de tamaño para procesamiento.
                La herramienta maneja tanto espacios de color RGB como RGBA, asegurando que fondos transparentes y canales alfa se mantengan apropiadamente
                en la salida de imagen invertida. Para mejores resultados, recomendamos usar formato PNG para imágenes con transparencia y JPG para fotografías
                sin requisitos de transparencia.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Cómo es esto diferente de simplemente aplicar un filtro negativo en software de edición de fotos?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mientras que los filtros negativos básicos en software de edición de fotos solo ofrecen inversión simple de color, nuestro inversor avanzado de colores imagen
                proporciona múltiples modos de inversión sofisticados y opciones de control precisas. A diferencia de filtros negativos estándar, nuestra herramienta ofrece
                control individual de canales RGB, intensidad de inversión ajustable, modos de inversión que preservan el brillo, y capacidades de vista previa en tiempo real.
                Puedes invertir colores de una imagen selectivamente eligiendo canales de color específicos, crear inversiones parciales con niveles de intensidad personalizados,
                y mantener relaciones de color mientras inviertes la luminosidad. Este nivel de control permite efectos creativos y resultados profesionales que no son posibles
                con filtros negativos básicos.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Puedo usar esta herramienta invertir imagen en dispositivos móviles y tablets?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ¡Absolutamente! Nuestra herramienta online para invertir imagen es completamente responsiva y optimizada para dispositivos móviles, tablets y computadoras de escritorio.
                La herramienta funciona perfectamente en navegadores móviles incluyendo Safari en iOS, Chrome en Android y otros navegadores móviles. Puedes subir imágenes desde
                el carrete de tu dispositivo, aplicar efectos de inversión y descargar los resultados directamente a tu dispositivo móvil. La interfaz táctil hace fácil ajustar
                configuraciones y previsualizar resultados en pantallas más pequeñas. Como todo el procesamiento ocurre localmente en tu navegador, no necesitas preocuparte por
                velocidades de subida lentas o uso de datos al procesar imágenes en redes móviles.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Son seguros mis datos de imagen al usar este inversor online de colores imagen?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sí, tus datos de imagen son completamente seguros y privados. Nuestro inversor de imagen procesa todo localmente en tu navegador web usando JavaScript del lado del cliente.
                Cuando inviertes colores imagen, tus imágenes originales nunca salen de tu dispositivo ni se suben a ningún servidor. Esto significa que tus fotos personales,
                documentos confidenciales o trabajo de diseño propietario permanecen completamente privados. Todo el proceso de inversión de colores ocurre en tu dispositivo,
                asegurando máxima seguridad y privacidad. Este enfoque también significa tiempos de procesamiento más rápidos y ninguna dependencia de la velocidad de conexión
                a internet para el procesamiento real de imagen.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Cuál es la diferencia entre el modo efecto negativo y el modo inversión de brillo?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                El modo efecto negativo realiza una inversión completa de color revirtiendo todos los canales de color RGB simultáneamente, creando una apariencia de negativo fotográfico tradicional.
                Este modo invierte colores de una imagen restando cada valor de color de 255, resultando en negro volviéndose blanco, rojo volviéndose cian, etc.
                El modo inversión de brillo, por otro lado, es más sofisticado - invierte los valores de luminosidad (brillo) mientras intenta preservar las relaciones naturales
                de color e información de matiz. Esto crea efectos artísticos únicos donde la imagen aparece invertida pero mantiene armonía de color más natural.
                La inversión de brillo es particularmente útil para crear efectos surrealistas mientras mantiene la imagen visualmente atractiva y menos discordante que efectos negativos tradicionales.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ¿Puedo procesar múltiples imágenes en lote o invertir colores de múltiples imágenes a la vez?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Actualmente, nuestra herramienta para invertir colores imagen está diseñada para procesamiento de imagen única para asegurar rendimiento óptimo y experiencia de usuario.
                Sin embargo, puedes procesar rápidamente múltiples imágenes usando el botón &quot;Cambiar Imagen&quot; para alternar entre diferentes imágenes mientras mantienes tus configuraciones
                de inversión preferidas. Este enfoque te permite aplicar los mismos efectos de inversión a múltiples imágenes eficientemente. Para usuarios que frecuentemente necesitan
                invertir colores de imagen en grandes cantidades, recomendamos marcar la herramienta y usar la misma sesión de navegador para mantener tus configuraciones personalizadas
                a través de múltiples sesiones de procesamiento de imagen. Estamos considerando agregar capacidades de procesamiento en lote en futuras actualizaciones basadas en
                retroalimentación de usuarios y demanda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
