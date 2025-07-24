import { redirect } from 'next/navigation';

// 颜色展示模块首页 - 重定向到 shades-of-blue
export default function ColorShadesPage() {
  redirect('/color-shades/shades-of-blue');
}
