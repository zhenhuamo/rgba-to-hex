// 简单的紫色颜色功能测试脚本
// 在浏览器控制台中运行此脚本来测试紫色页面功能

console.log('🟣 Testing Purple Colors Page Functionality...');

// 测试1: 检查页面标题
function testPageTitle() {
  const title = document.title;
  const expectedKeywords = ['purple', 'shades', 'color'];
  const hasKeywords = expectedKeywords.some(keyword => 
    title.toLowerCase().includes(keyword)
  );
  
  console.log('✅ Page Title Test:', hasKeywords ? 'PASS' : 'FAIL');
  console.log('   Title:', title);
  return hasKeywords;
}

// 测试2: 检查主标题是否包含紫色关键词
function testMainHeading() {
  const h1 = document.querySelector('h1');
  if (!h1) {
    console.log('❌ Main Heading Test: FAIL - No H1 found');
    return false;
  }
  
  const text = h1.textContent.toLowerCase();
  const hasPurple = text.includes('purple');
  const hasShades = text.includes('shades');
  
  console.log('✅ Main Heading Test:', (hasPurple && hasShades) ? 'PASS' : 'FAIL');
  console.log('   H1 Text:', h1.textContent);
  return hasPurple && hasShades;
}

// 测试3: 检查搜索栏是否存在
function testSearchBar() {
  const searchInput = document.querySelector('input[placeholder*="purple" i]');
  const hasSearchBar = !!searchInput;
  
  console.log('✅ Search Bar Test:', hasSearchBar ? 'PASS' : 'FAIL');
  if (searchInput) {
    console.log('   Placeholder:', searchInput.placeholder);
  }
  return hasSearchBar;
}

// 测试4: 检查分类按钮
function testCategoryButtons() {
  const buttons = document.querySelectorAll('button');
  const categoryButtons = Array.from(buttons).filter(btn => 
    btn.textContent.toLowerCase().includes('purple') ||
    btn.textContent.toLowerCase().includes('lavender') ||
    btn.textContent.toLowerCase().includes('violet') ||
    btn.textContent.toLowerCase().includes('royal') ||
    btn.textContent.toLowerCase().includes('deep')
  );
  
  const hasCategories = categoryButtons.length > 0;
  console.log('✅ Category Buttons Test:', hasCategories ? 'PASS' : 'FAIL');
  console.log('   Found categories:', categoryButtons.length);
  categoryButtons.forEach(btn => console.log('   -', btn.textContent.trim()));
  return hasCategories;
}

// 测试5: 检查颜色卡片
function testColorCards() {
  // 等待颜色加载
  setTimeout(() => {
    const colorCards = document.querySelectorAll('[style*="background"]');
    const hasColorCards = colorCards.length > 0;
    
    console.log('✅ Color Cards Test:', hasColorCards ? 'PASS' : 'FAIL');
    console.log('   Found color cards:', colorCards.length);
    
    if (hasColorCards) {
      // 检查前几个颜色是否看起来像紫色
      const firstFewCards = Array.from(colorCards).slice(0, 5);
      firstFewCards.forEach((card, index) => {
        const style = card.getAttribute('style');
        console.log(`   Card ${index + 1} style:`, style);
      });
    }
  }, 3000); // 等待3秒让颜色加载
}

// 测试6: 检查SEO内容
function testSEOContent() {
  const seoKeywords = [
    'different types of purple',
    'purple hex codes',
    'light purple',
    'deep purple',
    'lavender purple',
    'royal purple'
  ];
  
  const pageText = document.body.textContent.toLowerCase();
  const foundKeywords = seoKeywords.filter(keyword => 
    pageText.includes(keyword.toLowerCase())
  );
  
  const hasSEOContent = foundKeywords.length >= 3;
  console.log('✅ SEO Content Test:', hasSEOContent ? 'PASS' : 'FAIL');
  console.log('   Found keywords:', foundKeywords.length, '/', seoKeywords.length);
  foundKeywords.forEach(keyword => console.log('   ✓', keyword));
  return hasSEOContent;
}

// 运行所有测试
function runAllTests() {
  console.log('🚀 Starting Purple Colors Page Tests...\n');
  
  const results = {
    pageTitle: testPageTitle(),
    mainHeading: testMainHeading(),
    searchBar: testSearchBar(),
    categoryButtons: testCategoryButtons(),
    seoContent: testSEOContent()
  };
  
  // 延迟测试颜色卡片
  testColorCards();
  
  const passedTests = Object.values(results).filter(Boolean).length;
  const totalTests = Object.keys(results).length;
  
  console.log('\n📊 Test Results Summary:');
  console.log(`   Passed: ${passedTests}/${totalTests} tests`);
  console.log(`   Success Rate: ${Math.round(passedTests/totalTests*100)}%`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! Purple colors page is working correctly.');
  } else {
    console.log('⚠️  Some tests failed. Please check the implementation.');
  }
  
  return results;
}

// 自动运行测试
if (typeof window !== 'undefined') {
  // 等待页面加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllTests);
  } else {
    runAllTests();
  }
}

// 导出测试函数以便手动调用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runAllTests, testPageTitle, testMainHeading, testSearchBar, testCategoryButtons, testSEOContent };
}
