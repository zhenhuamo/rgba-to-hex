// 1. 增强型Emoji库和智能匹配算法

// 丰富的Emoji数据库 - 按分类组织以便于扩展和维护
const emojiDatabase = {
    // 感情和情绪
    emotions: {
      positive: {
        'happy': ['😊', '😃', '😄', '🙂', '😁', '😀', '😆', '😋', '😇'],
        'excited': ['🤩', '🥳', '😝', '🎉', '🔥', '⚡', '✨', '💯'],
        'love': ['❤️', '💕', '😍', '🥰', '💖', '💘', '💓', '💗', '💞', '💝'],
        'relax': ['😌', '😎', '🧘', '💆', '🛌', '☮️', '🍃'],
        'laugh': ['😂', '🤣', '😆', '😅', '😹', '💀', '🙃', '😏'],
        'cool': ['😎', '🆒', '👍', '🤙', '🔥', '👏', '💪', '👑'],
        'agree': ['👍', '✅', '👌', '🙏', '💯', '🤝', '✔️']
      },
      negative: {
        'sad': ['😢', '😭', '😔', '😞', '😥', '😓', '😪', '🥲', '💔'],
        'angry': ['😠', '😡', '🤬', '💢', '👿', '🔥', '😤', '😒'],
        'scared': ['😨', '😱', '😰', '😖', '😬', '🙀', '💀', '😵'],
        'confused': ['😕', '🤔', '😮', '❓', '🤷', '😵‍💫', '🧐'],
        'sick': ['🤒', '🤢', '🤮', '😷', '🤧', '🥴', '🤕']
      }
    },
    
    // 常见物品和概念
    objects: {
      technology: {
        'phone': ['📱', '📞', '☎️', '💻', '📲'],
        'computer': ['💻', '🖥️', '⌨️', '🖱️', '🖨️', '🔌'],
        'internet': ['🌐', '📶', '📡', '🔍', '📲', '💻'],
        'photo': ['📸', '📷', '🖼️', '📱', '👁️', '📹'],
        'video': ['🎥', '📹', '📽️', '📺', '🎞️', '🎬'],
        'social': ['👥', '🗣️', '💬', '🔄', '📱', '📲', '💻'],
        'code': ['💻', '👨‍💻', '👩‍💻', '🔍', '⚙️', '🔧', '📊'],
        'app': ['📱', '📲', '🔍', '⚙️', '🎮', '💬'],
        'website': ['🌐', '🔍', '📱', '💻', '📄', '📰'],
        'data': ['📊', '📈', '📉', '📋', '📝', '💾', '💽', '📑'],
        'smart': ['🧠', '💡', '🔍', '🤖', '👁️', '📱'],
        'digital': ['📱', '💻', '💾', '🔌', '📲', '⚙️'],
        'tech': ['💻', '📱', '⚙️', '🔌', '🔧', '🤖', '🌐'],
        'system': ['⚙️', '🔧', '🤖', '🖥️', '📱', '📡']
      },
      
      communication: {
        'message': ['💬', '📱', '📨', '📩', '📤', '📥', '🗨️'],
        'email': ['📧', '✉️', '📨', '📤', '📥', '📩', '💻'],
        'chat': ['💬', '🗯️', '🗨️', '📱', '👥', '🤝'],
        'call': ['📞', '📲', '☎️', '🗣️', '👂', '📱'],
        'text': ['📝', '✍️', '📄', '📃', '📜', '📋', '🖊️'],
        'write': ['✍️', '📝', '🖊️', '🖋️', '✏️', '📄', '📔'],
        'read': ['📖', '📚', '👀', '📰', '📄', '👓'],
        'speech': ['🗣️', '💬', '🎤', '👄', '🔊', '📢', '🎙️'],
        'talk': ['🗣️', '👄', '💬', '👂', '🎙️', '🔊', '📢'],
        'share': ['🔄', '📲', '📱', '📤', '📩', '💬', '👥']
      },
      
      multimedia: {
        'audio': ['🔊', '🔈', '🎵', '🎧', '🎤', '🎙️', '🎼'],
        'music': ['🎵', '🎶', '🎸', '🎹', '🎷', '🎺', '🎼', '🎧'],
        'movie': ['🎬', '🎥', '🍿', '🎞️', '📽️', '🎭', '🎦'],
        'game': ['🎮', '🎯', '🎲', '🎪', '🎨', '⚽', '🎧'],
        'art': ['🎨', '🖼️', '🎭', '✨', '🧩', '🎹', '🎬'],
        'design': ['🎨', '✏️', '📐', '📏', '🖌️', '🧵', '✂️'],
        'creative': ['🎨', '💡', '✨', '🌈', '🧠', '🔍', '✏️'],
        'image': ['🖼️', '📷', '📸', '🌄', '🌉', '👁️', '📊'],
        'picture': ['🖼️', '📷', '📸', '🌄', '🌅', '📱', '👨‍👩‍👧'],
        'photo': ['📸', '📷', '🤳', '👨‍👩‍👧', '🏞️', '🎆', '💒'],
        'camera': ['📷', '📸', '📹', '🎥', '👁️', '📽️', '🤳']
      },
      
      // 更多类别...
      daily: {
        'food': ['🍔', '🍕', '🍰', '🍪', '🍩', '🍗', '🍖', '🥗', '🍱'],
        'drink': ['🍺', '🍷', '🥤', '☕', '🍹', '🧃', '🥛', '🍶', '🧉'],
        'travel': ['✈️', '🏖️', '🗺️', '🧳', '🏞️', '🚗', '🚄', '🏨', '🛣️'],
        'work': ['💼', '👩‍💻', '👨‍💻', '📊', '📈', '📋', '⏰', '🏢', '📅'],
        'home': ['🏠', '🛋️', '🛌', '🧹', '🪴', '🧺', '🧸', '🚪', '🪟'],
        'shop': ['🛒', '🛍️', '💵', '🏪', '👜', '👚', '👕', '🧦', '👠'],
        'sleep': ['😴', '🛌', '💤', '🌙', '🌜', '🧸', '💭'],
        'time': ['⏰', '⌚', '⏱️', '📅', '🗓️', '🕰️', '🕙'],
        'weather': ['☀️', '🌤️', '⛅', '🌧️', '❄️', '🌈', '⚡', '🌪️', '☂️']
      },
      
      actions: {
        'search': ['🔍', '🔎', '👀', '🧐', '📊', '🤔', '⌨️'],
        'buy': ['💰', '💳', '🛒', '🛍️', '💵', '🏷️', '🧾'],
        'sell': ['💰', '🏷️', '📈', '🤝', '💵', '🛒', '🏪'],
        'save': ['💾', '💿', '💰', '🔒', '📂', '📁', '🏦'],
        'edit': ['✏️', '📝', '✂️', '🖌️', '🖍️', '✍️', '⚒️'],
        'create': ['✨', '🔨', '🎨', '💡', '✏️', '🧠', '🆕'],
        'delete': ['❌', '🗑️', '✂️', '💥', '⛔', '🚮', '🧹'],
        'start': ['🚀', '▶️', '🏁', '✅', '👍', '💪', '🎬'],
        'stop': ['🛑', '⏹️', '⚠️', '🚫', '⛔', '🙅', '🤚'],
        'build': ['🔨', '🏗️', '🧱', '🏢', '👷', '🔧', '⚙️'],
        'help': ['🆘', '❓', '🤝', '👍', '💪', '🛟', '🚑'],
        'learn': ['📚', '🧠', '👨‍🎓', '👩‍🎓', '✍️', '📝', '💡'],
        'think': ['🧠', '💭', '🤔', '💡', '🔍', '👁️', '📚'],
        'pay': ['💰', '💳', '💵', '💸', '🏦', '🧾', '🤑'],
        'win': ['🏆', '🥇', '🎖️', '👑', '⭐', '🙌', '👏'],
        'lose': ['😢', '😭', '🥺', '💔', '👎', '😔', '😞']
      }
    },
    
    // 地点和场所
    places: {
      'home': ['🏠', '🏡', '🛋️', '🛌', '🪑', '🪴', '🧺'],
      'office': ['🏢', '💼', '👔', '💻', '📊', '📋', '👩‍💼'],
      'school': ['🏫', '🎒', '📚', '👨‍🏫', '👩‍🎓', '🧑‍🎓', '📝'],
      'store': ['🏪', '🛒', '🛍️', '💵', '👜', '🧾', '👕'],
      'restaurant': ['🍽️', '🍴', '🥂', '🍕', '🍝', '👨‍🍳', '🍷'],
      'beach': ['🏖️', '🌊', '🏄‍♂️', '🏊‍♀️', '🐚', '🌴', '⛱️'],
      'mountain': ['⛰️', '🏔️', '🥾', '🧗‍♀️', '🌲', '🏞️', '🌄'],
      'city': ['🏙️', '🌆', '🚕', '🚶', '🚆', '🚦', '🏢']
    },
    
    // 抽象概念
    concepts: {
      'idea': ['💡', '🧠', '✨', '💭', '🔍', '👁️', '🤔'],
      'success': ['🏆', '🎯', '💯', '👑', '🌟', '🚀', '📈'],
      'failure': ['👎', '❌', '💔', '📉', '😔', '🤕', '💥'],
      'growth': ['📈', '🌱', '🚀', '📊', '⬆️', '💪', '➕'],
      'decrease': ['📉', '⬇️', '🔽', '➖', '📊', '🔻', '↘️'],
      'security': ['🔒', '🔐', '🛡️', '🔏', '👮', '🚨', '✅'],
      'freedom': ['🕊️', '🦅', '🔓', '🆓', '🌈', '💨', '🌊'],
      'money': ['💰', '💵', '💸', '💲', '💴', '💶', '💷'],
      'time': ['⏰', '⌚', '⏱️', '📅', '🕰️', '⌛', '⏳'],
      'quality': ['✨', '💎', '🏆', '🌟', '💯', '👌', '🔍'],
      'problem': ['❓', '⚠️', '🆘', '🤔', '🛠️', '🔧', '❌'],
      'solution': ['💡', '✅', '🔧', '🛠️', '🔍', '🔐', '🧩']
    },
    
    // 特定领域
    domains: {
      technology: {
        'cloud': ['☁️', '💻', '📊', '📡', '📲', '🔒', '💾'],
        'mobile': ['📱', '📲', '💬', '📶', '🔋', '📡', '📳'],
        'software': ['💻', '⌨️', '🖱️', '💿', '📊', '🔧', '⚙️'],
        'hardware': ['💻', '⌨️', '🖱️', '🖨️', '🔌', '🔋', '📱'],
        'network': ['🌐', '📡', '📶', '📊', '🔄', '📲', '🖥️'],
        'security': ['🔒', '🔐', '🛡️', '👮', '🔑', '👁️', '⚠️'],
        'data': ['📊', '📈', '📉', '💽', '📁', '🧮', '🔢'],
        'ai': ['🤖', '🧠', '💻', '🔍', '📊', '💡', '⚙️']
      },
      
      business: {
        'startup': ['🚀', '💡', '📈', '💰', '👥', '💼', '🌱'],
        'marketing': ['📢', '📣', '📱', '🎯', '💹', '👥', '📊'],
        'finance': ['💰', '💵', '📊', '📈', '🏦', '💹', '📉'],
        'hr': ['👥', '🤝', '👔', '📋', '📝', '🏢', '👨‍💼'],
        'sales': ['💰', '🤝', '📈', '💼', '📊', '🎯', '💯'],
        'customer': ['👥', '🤝', '💬', '👂', '📞', '🛒', '😊']
      },
      
      health: {
        'fitness': ['💪', '🏃‍♀️', '🏋️', '🧘', '🥗', '❤️', '🥤'],
        'wellness': ['🧘', '❤️', '🥗', '💆', '🛌', '🍃', '🌿'],
        'medical': ['🏥', '👨‍⚕️', '👩‍⚕️', '💊', '💉', '🩺', '🧬'],
        'mental': ['🧠', '💭', '🧘', '❤️', '😌', '🛌', '☮️']
      },
      
      // 可以继续添加更多领域...
    }
  };
  
  // 扩展的词语形式分析
  function analyzeMorphology(word: string) {
    // 简单形态分析：提取词根
    if (word.length > 3) {
      // 处理常见后缀
      const stems: string[] = [];
      
      // 名词后缀
      if (word.endsWith('s') && word.length > 2) stems.push(word.slice(0, -1)); // 复数
      if (word.endsWith('es') && word.length > 3) stems.push(word.slice(0, -2)); // 复数
      if (word.endsWith('ing') && word.length > 5) {
        stems.push(word.slice(0, -3)); // 动词ing形式
        // 处理双写辅音情况
        if (word.length > 6 && /[bcdfghjklmnpqrstvwxz]{2}ing$/.test(word)) {
          stems.push(word.slice(0, -4));
        }
      }
      if (word.endsWith('ed') && word.length > 4) stems.push(word.slice(0, -2)); // 过去式
      if (word.endsWith('er') && word.length > 4) stems.push(word.slice(0, -2)); // 比较级或名称
      if (word.endsWith('est') && word.length > 5) stems.push(word.slice(0, -3)); // 最高级
      if (word.endsWith('ly') && word.length > 4) stems.push(word.slice(0, -2)); // 副词
      if (word.endsWith('ity') && word.length > 5) stems.push(word.slice(0, -3)); // 名词
      if (word.endsWith('ment') && word.length > 6) stems.push(word.slice(0, -4)); // 名词
      if (word.endsWith('ness') && word.length > 6) stems.push(word.slice(0, -4)); // 名词
      
      return [word, ...stems];
    }
    
    return [word];
  }
  
  // 智能Emoji匹配算法
  function smartEmojiMatcher(word: string): string[] {
    // 小写并去除标点
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
    if (!cleanWord) return [];
    
    const possibleEmojis: string[] = [];
    
    // 检查直接匹配
    for (const category of Object.values(emojiDatabase)) {
      for (const subCategory of Object.values(category)) {
        if (typeof subCategory === 'object') {
          for (const [key, emojis] of Object.entries(subCategory)) {
            if (key === cleanWord && Array.isArray(emojis)) {
              possibleEmojis.push(...emojis);
            }
          }
        }
      }
    }
    
    // 如果没有直接匹配，尝试词形变化
    if (possibleEmojis.length === 0) {
      const wordForms = analyzeMorphology(cleanWord);
      
      for (const form of wordForms) {
        if (form === cleanWord) continue; // 跳过原词以避免重复搜索
        
        for (const category of Object.values(emojiDatabase)) {
          for (const subCategory of Object.values(category)) {
            if (typeof subCategory === 'object') {
              for (const [key, emojis] of Object.entries(subCategory)) {
                if (key === form && Array.isArray(emojis)) {
                  possibleEmojis.push(...emojis);
                }
              }
            }
          }
        }
        
        if (possibleEmojis.length > 0) break; // 找到匹配就停止
      }
    }
    
    // 如果仍没有匹配，尝试部分匹配
    if (possibleEmojis.length === 0 && cleanWord.length > 3) {
      for (const category of Object.values(emojiDatabase)) {
        for (const subCategory of Object.values(category)) {
          if (typeof subCategory === 'object') {
            for (const [key, emojis] of Object.entries(subCategory)) {
              // 寻找部分匹配或包含关系
              if ((key.includes(cleanWord) || cleanWord.includes(key)) && key.length > 3 && Array.isArray(emojis)) {
                possibleEmojis.push(...emojis);
              }
            }
          }
        }
      }
    }
    
    return possibleEmojis;
  }
  
  // 增强型Emojify函数
  function enhancedEmojify(text: string, density: number = 2): string {
    if (!text) return text;
    
    // 分词，保留分隔符
    const tokens = text.split(/(\s+|[,\.!?;:]+)/);
    
    let emojified = '';
    let lastEmoji = ''; // 避免重复使用相同的emoji
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      emojified += token;
      
      // 跳过空白和标点
      if (/^\s+$/.test(token) || /^[,\.!?;:]+$/.test(token)) continue;
      
      // 获取可能的emoji列表
      const possibleEmojis = smartEmojiMatcher(token);
      
      // 基于密度决定是否添加emoji
      if (possibleEmojis.length > 0 && Math.random() * 5 < density) {
        // 过滤掉上一个使用的emoji以增加多样性
        const filteredEmojis = possibleEmojis.filter(emoji => emoji !== lastEmoji);
        const selectedEmojis = filteredEmojis.length > 0 ? filteredEmojis : possibleEmojis;
        
        // 随机选择一个emoji
        const emoji = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
        lastEmoji = emoji;
        
        // 在单词后添加emoji
        emojified += emoji;
      }
    }
    
    return emojified;
  }
  
  // ====================================================================
  // 2. 增强型文本装饰功能
  
  // 边框样式库
  const borderStyles = {
    // 基础边框
    none: {
      prefix: '',
      suffix: '',
      top: '',
      bottom: '',
      description: 'No border'
    },
    stars: {
      prefix: '★ ',
      suffix: ' ★',
      top: '',
      bottom: '',
      description: 'Star decoration'
    },
    hearts: {
      prefix: '❤️ ',
      suffix: ' ❤️',
      top: '',
      bottom: '',
      description: 'Heart decoration'
    },
    dashes: {
      prefix: '-- ',
      suffix: ' --',
      top: '',
      bottom: '',
      description: 'Dash decoration'
    },
    underscores: {
      prefix: '__ ',
      suffix: ' __',
      top: '',
      bottom: '',
      description: 'Underscore decoration'
    },
    
    // 高级边框
    doubleLine: {
      prefix: '║ ',
      suffix: ' ║',
      top: '╔════════════════════════════════════╗',
      bottom: '╚════════════════════════════════════╝',
      description: 'Double line box'
    },
    singleLine: {
      prefix: '│ ',
      suffix: ' │',
      top: '┌────────────────────────────────────┐',
      bottom: '└────────────────────────────────────┘',
      description: 'Single line box'
    },
    rounded: {
      prefix: '│ ',
      suffix: ' │',
      top: '╭────────────────────────────────────╮',
      bottom: '╰────────────────────────────────────╯',
      description: 'Rounded box'
    },
    dotted: {
      prefix: '┊ ',
      suffix: ' ┊',
      top: '┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐',
      bottom: '└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘',
      description: 'Dotted box'
    },
    bold: {
      prefix: '┃ ',
      suffix: ' ┃',
      top: '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
      bottom: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛',
      description: 'Bold box'
    },
    ascii: {
      prefix: '| ',
      suffix: ' |',
      top: '+----------------------------------+',
      bottom: '+----------------------------------+',
      description: 'ASCII box'
    },
    
    // 特殊边框
    flowers: {
      prefix: '✿ ',
      suffix: ' ✿',
      top: '✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿',
      bottom: '✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿❀✿',
      description: 'Flower decoration'
    },
    waves: {
      prefix: '〰️ ',
      suffix: ' 〰️',
      top: '〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️',
      bottom: '〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️',
      description: 'Wave decoration'
    },
    arrows: {
      prefix: '→ ',
      suffix: ' ←',
      top: '↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘↘',
      bottom: '↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖',
      description: 'Arrow decoration'
    },
    fire: {
      prefix: '🔥 ',
      suffix: ' 🔥',
      top: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
      bottom: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
      description: 'Fire decoration'
    },
    sparkles: {
      prefix: '✨ ',
      suffix: ' ✨',
      top: '✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨',
      bottom: '✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨',
      description: 'Sparkle decoration'
    }
  };
  
  // 背景样式库
  const backgroundStyles = {
    none: {
      apply: (text: string) => text,
      description: 'No background'
    },
    hearts: {
      apply: (text: string) => `❤️❤️❤️ ${text} ❤️❤️❤️`,
      description: 'Heart background'
    },
    stars: {
      apply: (text: string) => `✨✨✨ ${text} ✨✨✨`,
      description: 'Star background'
    },
    waves: {
      apply: (text: string) => `〰️〰️〰️ ${text} 〰️〰️〰️`,
      description: 'Wave background'
    },
    dots: {
      apply: (text: string) => `••• ${text} •••`,
      description: 'Dot background'
    },
    
    // 新增背景效果
    clouds: {
      apply: (text: string) => `☁️☁️☁️ ${text} ☁️☁️☁️`,
      description: 'Cloud background'
    },
    flowers: {
      apply: (text: string) => `🌸🌼🌸 ${text} 🌸🌼🌸`,
      description: 'Flower background'
    },
    music: {
      apply: (text: string) => `🎵🎶🎵 ${text} 🎵🎶🎵`,
      description: 'Music background'
    },
    sparkles: {
      apply: (text: string) => `✨💫✨ ${text} ✨💫✨`,
      description: 'Sparkle background'
    },
    fire: {
      apply: (text: string) => `🔥🔥🔥 ${text} 🔥🔥🔥`,
      description: 'Fire background'
    },
    rainbow: {
      apply: (text: string) => `🌈🌈🌈 ${text} 🌈🌈🌈`,
      description: 'Rainbow background'
    },
    space: {
      apply: (text: string) => `🌠🌌🌠 ${text} 🌠🌌🌠`,
      description: 'Space background'
    },
    nature: {
      apply: (text: string) => `🌿🍃🌿 ${text} 🌿🍃🌿`,
      description: 'Nature background'
    },
    ocean: {
      apply: (text: string) => `🌊🐋🌊 ${text} 🌊🐋🌊`,
      description: 'Ocean background'
    },
    tech: {
      apply: (text: string) => `💻⚙️💻 ${text} 💻⚙️💻`,
      description: 'Tech background'
    }
  };
  
  // 文本效果库
  const textEffects = {
    normal: {
      apply: (text: string) => text,
      description: 'Normal text'
    },
    spaced: {
      apply: (text: string) => Array.from(text).join(' '),
      description: 'Spaced out text'
    },
    reversed: {
      apply: (text: string) => Array.from(text).reverse().join(''),
      description: 'Reversed text'
    },
    alternatingCase: {
      apply: (text: string) => Array.from(text).map((char, i) => 
        i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      ).join(''),
      description: 'Alternating case'
    },
    staggered: {
      apply: (text: string) => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
          result += text[i] + (i < text.length - 1 ? (i % 2 === 0 ? '̷' : '̲') : '');
        }
        return result;
      },
      description: 'Staggered text'
    },
    glitched: {
      apply: (text: string) => {
        const glitchChars = ['̷', '̸', '̹', '̺', '̼', '̤', '̦', '̩', '̮', '͇', '͌', '̨'];
        let result = '';
        for (let i = 0; i < text.length; i++) {
          result += text[i];
          if (Math.random() > 0.7) {
            result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
        }
        return result;
      },
      description: 'Glitched text'
    },
    waveform: {
      apply: (text: string) => {
        const wavePatterns = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟'];
        let result = '';
        for (let i = 0; i < text.length; i++) {
          result += text[i] + wavePatterns[i % wavePatterns.length];
        }
        return result;
      },
      description: 'Waveform text'
    },
    expanded: {
      apply: (text: string) => Array.from(text).join('  '),
      description: 'Expanded text'
    },
    narrow: {
      apply: (text: string) => {
        const narrowChars: Record<string, string> = {
          'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ',
          'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᑫ', 'r': 'ʳ',
          's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
          'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ',
          'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ',
          'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
          ' ': ' '
        };
        return Array.from(text).map(char => narrowChars[char] || char).join('');
      },
      description: 'Narrow text'
    },
    bold: {
      apply: (text: string) => {
        const boldChars: Record<string, string> = {
          'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶',
          'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿',
          's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
          'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜',
          'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥',
          'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
          '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵',
          ' ': ' '
        };
        return Array.from(text).map(char => boldChars[char] || char).join('');
      },
      description: 'Bold text'
    },
    italic: {
      apply: (text: string) => {
        const italicChars: Record<string, string> = {
          'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪',
          'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳',
          's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
          'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐',
          'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙',
          'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
          ' ': ' '
        };
        return Array.from(text).map(char => italicChars[char] || char).join('');
      },
      description: 'Italic text'
    }
  };
  
  // 创建高级文本装饰函数
  function decorateText(
    text: string, 
    borderStyleName: string = 'none', 
    backgroundStyleName: string = 'none',
    textEffectName: string = 'normal'
  ): string {
    if (!text) return text;
    
    // 获取选定的样式
    const borderStyle = borderStyles[borderStyleName as keyof typeof borderStyles] || borderStyles.none;
    const backgroundStyle = backgroundStyles[backgroundStyleName as keyof typeof backgroundStyles] || backgroundStyles.none;
    const textEffect = textEffects[textEffectName as keyof typeof textEffects] || textEffects.normal;
    
    // 应用文本效果
    let result = textEffect.apply(text);
    
    // 应用背景样式
    result = backgroundStyle.apply(result);
    
    // 应用边框
    let decorated = '';
    
    if (borderStyle.top) {
      decorated += borderStyle.top + '\n';
    }
    
    // 如果文本有多行，为每行应用前缀和后缀
    const lines = result.split('\n');
    decorated += lines.map(line => borderStyle.prefix + line + borderStyle.suffix).join('\n');
    
    if (borderStyle.bottom) {
      decorated += '\n' + borderStyle.bottom;
    }
    
    return decorated;
  }
  
  // 导出的函数
  export const enhancedTextTools = {
    // 增强型Emoji功能
    emojify: enhancedEmojify,
    // 高级文本装饰
    decorate: decorateText,
    // 样式列表 - 用于UI显示
    styles: {
      borders: Object.entries(borderStyles).map(([key, value]) => ({
        id: key,
        name: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
        description: value.description
      })),
      backgrounds: Object.entries(backgroundStyles).map(([key, value]) => ({
        id: key,
        name: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
        description: value.description
      })),
      textEffects: Object.entries(textEffects).map(([key, value]) => ({
        id: key,
        name: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
        description: value.description
      }))
    }
  };
  
  // 使用示例
  /* 
  // Emoji示例
  enhancedTextTools.emojify("I love coding and creating new apps on my computer", 3);
  // 可能输出: "I love coding 💻 and creating 🆕 new apps 📱 on my computer 💻"
  
  // 文本装饰示例
  enhancedTextTools.decorate("Welcome to my website", "doubleLine", "sparkles", "bold");
  // 可能输出:
  // ╔════════════════════════════════════╗
  // ║ ✨💫✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗺𝘆 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 ✨💫✨ ║
  // ╚════════════════════════════════════╝
  */