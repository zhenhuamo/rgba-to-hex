// 图像反转工具多语言支持
// Image Inverter Tool Multilingual Support

export type Language = 'en' | 'es' | 'pt';

export interface Translations {
  toolTitle: string;
  toolDescription: string;
  toolSubDescription: string;
  uploadTitle: string;
  uploadDescription: string;
  selectImageButton: string;
  maxFileSize: string;
  inversionSettings: string;
  showAdvanced: string;
  hideAdvanced: string;
  invertImageButton: string;
  processing: string;
  originalImage: string;
  invertedImage: string;
  changeImage: string;
  reset: string;
  downloadButton: string;
  processingInfo: string;
  originalSize: string;
  processingTime: string;
  mode: string;
  intensity: string;
  advancedOptions: string;
  preserveTransparency: string;
  invertChannels: string;
  presets: {
    negative: string;
    colors: string;
    brightness: string;
    redOnly: string;
    greenOnly: string;
    blueOnly: string;
    partial: string;
  };
  channels: {
    red: string;
    green: string;
    blue: string;
  };
  errors: {
    invalidFile: string;
    fileTooLarge: string;
    processingFailed: string;
    loadingFailed: string;
    unknownError: string;
  };
  aboutTool: string;
  features: string;
  featuresList: string[];
  clickToInvert: string;
}

export const translations: Record<Language, Translations> = {
  // English translations
  en: {
    toolTitle: 'Image Inverter Tool',
    toolDescription: 'Professional image color inversion tool with advanced features. Upload your image and choose from various inversion modes including negative effects, color inversion, brightness inversion, and custom channel inversion. Create stunning inverted images with precise control over the color transformation process.',
    toolSubDescription: 'Transform your photos with our powerful online image inverter. Whether you need to create negative effects for artistic projects, invert specific color channels for design work, or experiment with visual effects, our tool provides professional-grade results instantly in your browser.',
    uploadTitle: 'Upload Image to Invert Colors',
    uploadDescription: 'Select an image file to apply color inversion effects. Supports JPG, PNG, GIF, and other common image formats.',
    selectImageButton: 'Select Image File',
    maxFileSize: 'Maximum file size: 10MB',
    inversionSettings: 'Inversion Settings',
    showAdvanced: 'Show Advanced',
    hideAdvanced: 'Hide Advanced',
    invertImageButton: 'Invert Image',
    processing: 'Processing...',
    originalImage: 'Original Image',
    invertedImage: 'Inverted Image',
    changeImage: 'Change Image',
    reset: 'Reset',
    downloadButton: 'Download Inverted Image',
    processingInfo: 'Processing Information',
    originalSize: 'Original Size',
    processingTime: 'Processing Time',
    mode: 'Mode',
    intensity: 'Intensity',
    advancedOptions: 'Advanced Options',
    preserveTransparency: 'Preserve Transparency',
    invertChannels: 'Invert Channels',
    presets: {
      negative: 'Negative',
      colors: 'Colors',
      brightness: 'Brightness',
      redOnly: 'Red Only',
      greenOnly: 'Green Only',
      blueOnly: 'Blue Only',
      partial: 'Partial',
    },
    channels: {
      red: 'Red',
      green: 'Green',
      blue: 'Blue',
    },
    errors: {
      invalidFile: 'Please select a valid image file',
      fileTooLarge: 'File size must be less than 10MB',
      processingFailed: 'Processing failed',
      loadingFailed: 'Failed to load image',
      unknownError: 'Unknown error occurred',
    },
    aboutTool: 'About the Image Inverter Tool',
    features: 'Features',
    featuresList: [
      'Multiple inversion modes (negative, colors, brightness)',
      'Custom channel inversion (red, green, blue)',
      'Adjustable intensity control',
      'Transparency preservation',
      'Fast client-side processing',
      'No data uploaded to servers',
      'High-quality output',
    ],
    clickToInvert: 'Click "Invert Image" to see the result',
  },

  // Spanish translations
  es: {
    toolTitle: 'Herramienta de Inversión de Imágenes',
    toolDescription: 'Herramienta profesional para invertir imagen con funciones avanzadas. Sube tu imagen y elige entre varios modos de inversión incluyendo efectos negativos, inversión de colores, inversión de brillo e inversión de canales personalizados. Crea imágenes invertidas impresionantes con control preciso sobre el proceso de transformación de colores.',
    toolSubDescription: 'Transforma tus fotos con nuestro potente inversor de imagen online. Ya sea que necesites crear efectos negativos para proyectos artísticos, invertir canales de color específicos para trabajo de diseño, o experimentar con efectos visuales, nuestra herramienta proporciona resultados de calidad profesional instantáneamente en tu navegador.',
    uploadTitle: 'Subir Imagen para Invertir Colores',
    uploadDescription: 'Selecciona un archivo de imagen para aplicar efectos de inversión de colores. Compatible con JPG, PNG, GIF y otros formatos comunes de imagen.',
    selectImageButton: 'Seleccionar Archivo de Imagen',
    maxFileSize: 'Tamaño máximo de archivo: 10MB',
    inversionSettings: 'Configuración de Inversión',
    showAdvanced: 'Mostrar Avanzado',
    hideAdvanced: 'Ocultar Avanzado',
    invertImageButton: 'Invertir Imagen',
    processing: 'Procesando...',
    originalImage: 'Imagen Original',
    invertedImage: 'Imagen Invertida',
    changeImage: 'Cambiar Imagen',
    reset: 'Reiniciar',
    downloadButton: 'Descargar Imagen Invertida',
    processingInfo: 'Información de Procesamiento',
    originalSize: 'Tamaño Original',
    processingTime: 'Tiempo de Procesamiento',
    mode: 'Modo',
    intensity: 'Intensidad',
    advancedOptions: 'Opciones Avanzadas',
    preserveTransparency: 'Preservar Transparencia',
    invertChannels: 'Invertir Canales',
    presets: {
      negative: 'Negativo',
      colors: 'Colores',
      brightness: 'Brillo',
      redOnly: 'Solo Rojo',
      greenOnly: 'Solo Verde',
      blueOnly: 'Solo Azul',
      partial: 'Parcial',
    },
    channels: {
      red: 'Rojo',
      green: 'Verde',
      blue: 'Azul',
    },
    errors: {
      invalidFile: 'Por favor selecciona un archivo de imagen válido',
      fileTooLarge: 'El tamaño del archivo debe ser menor a 10MB',
      processingFailed: 'Falló el procesamiento',
      loadingFailed: 'Error al cargar la imagen',
      unknownError: 'Ocurrió un error desconocido',
    },
    aboutTool: 'Acerca de la Herramienta de Inversión de Imágenes',
    features: 'Características',
    featuresList: [
      'Múltiples modos de inversión (negativo, colores, brillo)',
      'Inversión de canales personalizados (rojo, verde, azul)',
      'Control de intensidad ajustable',
      'Preservación de transparencia',
      'Procesamiento rápido del lado del cliente',
      'Sin carga de datos a servidores',
      'Salida de alta calidad',
    ],
    clickToInvert: 'Haz clic en "Invertir Imagen" para ver el resultado',
  },

  // Portuguese translations
  pt: {
    toolTitle: 'Ferramenta de Inversão de Imagem',
    toolDescription: 'Ferramenta profissional para inverter imagem com recursos avançados. Carregue sua imagem e escolha entre vários modos de inversão incluindo efeitos negativos, inversão de cores, inversão de brilho e inversão de canais personalizados. Crie imagens invertidas impressionantes com controle preciso sobre o processo de transformação de cores.',
    toolSubDescription: 'Transforme suas fotos com nosso poderoso inversor de imagem online. Seja para criar efeitos negativos para projetos artísticos, inverter canais de cores específicos para trabalho de design, ou experimentar com efeitos visuais, nossa ferramenta fornece resultados de qualidade profissional instantaneamente no seu navegador.',
    uploadTitle: 'Carregar Imagem para Inverter Cores',
    uploadDescription: 'Selecione um arquivo de imagem para aplicar efeitos de inversão de cores. Suporta JPG, PNG, GIF e outros formatos comuns de imagem.',
    selectImageButton: 'Selecionar Arquivo de Imagem',
    maxFileSize: 'Tamanho máximo do arquivo: 10MB',
    inversionSettings: 'Configurações de Inversão',
    showAdvanced: 'Mostrar Avançado',
    hideAdvanced: 'Ocultar Avançado',
    invertImageButton: 'Inverter Imagem',
    processing: 'Processando...',
    originalImage: 'Imagem Original',
    invertedImage: 'Imagem Invertida',
    changeImage: 'Mudar Imagem',
    reset: 'Reiniciar',
    downloadButton: 'Baixar Imagem Invertida',
    processingInfo: 'Informações de Processamento',
    originalSize: 'Tamanho Original',
    processingTime: 'Tempo de Processamento',
    mode: 'Modo',
    intensity: 'Intensidade',
    advancedOptions: 'Opções Avançadas',
    preserveTransparency: 'Preservar Transparência',
    invertChannels: 'Inverter Canais',
    presets: {
      negative: 'Negativo',
      colors: 'Cores',
      brightness: 'Brilho',
      redOnly: 'Apenas Vermelho',
      greenOnly: 'Apenas Verde',
      blueOnly: 'Apenas Azul',
      partial: 'Parcial',
    },
    channels: {
      red: 'Vermelho',
      green: 'Verde',
      blue: 'Azul',
    },
    errors: {
      invalidFile: 'Por favor selecione um arquivo de imagem válido',
      fileTooLarge: 'O tamanho do arquivo deve ser menor que 10MB',
      processingFailed: 'Falha no processamento',
      loadingFailed: 'Falha ao carregar imagem',
      unknownError: 'Ocorreu um erro desconhecido',
    },
    aboutTool: 'Sobre a Ferramenta de Inversão de Imagem',
    features: 'Recursos',
    featuresList: [
      'Múltiplos modos de inversão (negativo, cores, brilho)',
      'Inversão de canais personalizados (vermelho, verde, azul)',
      'Controle de intensidade ajustável',
      'Preservação de transparência',
      'Processamento rápido no lado do cliente',
      'Nenhum dado enviado para servidores',
      'Saída de alta qualidade',
    ],
    clickToInvert: 'Clique em "Inverter Imagem" para ver o resultado',
  },
};

/**
 * 获取翻译
 * Get translations for a specific language
 */
export const getTranslations = (language: Language = 'en'): Translations => {
  return translations[language] || translations.en;
};

/**
 * 检测浏览器语言
 * Detect browser language
 */
export const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase().split('-')[0];
  
  if (browserLang === 'es') return 'es';
  if (browserLang === 'pt') return 'pt';
  
  return 'en';
};
